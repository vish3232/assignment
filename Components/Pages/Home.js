import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,Modal,Pressable,TextInput,ActivityIndicator } from 'react-native';
import Card from '../ReusableCompoent/Card'
import {Picker} from '@react-native-picker/picker';
import {fetchEmployee} from '../../Redux/Actions'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Axios from 'axios'

const Home = () => {
    const dispatch=useDispatch()
    const employee = useSelector(state => state.emplyeeReducer.emp_details)
  useEffect(() => {
    fetchEmployeeDetails()
  }, [])

  const fetchEmployeeDetails = async ()=>{
      setLoading(true)
    const res = await Axios.get('http://192.168.206.254:3000/posts')
    
    if(res.status==200){
      setLoading(false)
      dispatch(fetchEmployee(res.data))
  
    }

  }

  const updateEmployeeDetailsAsperId= async (id)=>{
    const res = await Axios.put(`http://192.168.206.254:3000/posts/${id}`,{
        "name":name,
        "designation":designation,
        "department":department,
        "id":empId
      
    })
    console.log(res.data);
    if(res.status==200){
      alert('update successfully...')
      setModalVisible(!modalVisible);
    fetchEmployeeDetails()
    }
    

  }
  
  const [modalVisible, setModalVisible] = useState(false);
  
  const [name,setName]=useState(null)
  const [designation,setdesignation]=useState(null)
  const [department,setdepartment]=useState(null)
  const [empId,setempId]=useState(null)
  const [loading,setLoading]=useState(false)

  
    return (
    <View style={styles.container}>
      {
        loading?<ActivityIndicator size="small" color="#0000ff" />:<>
    <FlatList 
        numColumns={5}                   
        columnWrapperStyle={styles.row}  
        
        data={employee}
        keyExtractor={(item, index) => item.id }
        renderItem={(item) => <Card onClickCircle={()=>{ setModalVisible(!modalVisible);setempId(item.item.id);setName(item.item.name);setdesignation(item.item.designation);setdepartment(item.item.department)}}  name={item.item.name} designation={item.item.designation} department={item.item.department} /> }
    />   
    <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
      <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Employee information</Text>
            <TextInput onChangeText={(text)=>setName(text)} value={name} maxLength={10} style={styles.input} placeholder="name" />
            <TextInput onChangeText={(text)=>setdesignation(text)} value={designation} maxLength={30} style={styles.input} placeholder="Designation" />
            
            <View style={styles.pickerContainer}>
      <Picker
        selectedValue={department}
        style={{ height: 50, width: '100%' }}
        onValueChange={(itemValue, itemIndex) => setdepartment(itemValue)}
      >
        <Picker.Item label="Development" value="Development" />
        <Picker.Item label="Marketing" value="Marketing" />
        <Picker.Item label="Administration" value="Administration" />
        
      </Picker>
    </View>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={{fontSize:24,fontWeight:'bold'}}>x</Text>
            </Pressable>
            <View style={{position:'absolute',bottom:10,flexDirection:'row',alignItems:'center',justifyContent:'space-evenly',width:'100%'}} >
            <Pressable onPress={()=>updateEmployeeDetailsAsperId(empId)} style={styles.updateBtnContainer} >
              <Text style={{color:'white'}} >Update</Text>
            </Pressable>
            <Pressable onPress={() => setModalVisible(!modalVisible)} style={styles.cancelBtnContainer} >
              <Text style={{color:'white'}} >Cancel</Text>
            </Pressable>
            </View>
            
          </View>
        </View>
      </Modal> 
      </>
      }
    </View>
    
        )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center'
  },
  row: {
    flex: 1,
    flexDirection:'row',
    justifyContent: "space-around"
},
modalView: {
  margin: 20,
  backgroundColor: "white",
  borderRadius: 20,
  padding: 35,
  alignItems: "center",
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2
  },
  shadowOpacity: 0.25,
  shadowRadius: 4,
  elevation: 5,
  height:'90%'
},
button: {
  borderRadius: 20,
  padding: 10,
},
buttonOpen: {
  backgroundColor: "#F194FF",
},
buttonClose: {
  
  position:'absolute',
  right:10,
  top:10
},
input:{
  marginTop:15,
  width:'90%',
  borderRadius:15,
  backgroundColor:'#f5f5f5',
  height:50,
  paddingLeft:10
},
pickerContainer:{
  marginTop:15,

  width:'90%',
  borderRadius:15,
  backgroundColor:'#f5f5f5',
  height:50,
  
},
updateBtnContainer:{
width:100,
height:40,
backgroundColor:'green',
borderRadius:15,
alignItems:'center',
justifyContent:'center'
},
cancelBtnContainer:{
  width:100,
  height:40,
  backgroundColor:'red',
  borderRadius:15,
  alignItems:'center',
  justifyContent:'center'
  },
  
});

