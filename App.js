import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View,FlatList,Modal,Pressable,TextInput } from 'react-native';
import Card from './Components/ReusableCompoent/Card'
import {Picker} from '@react-native-picker/picker';
import { Provider } from "react-redux"
import store from './Redux/store'
import fetchEmployeeDetails from './Redux/Actions'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import Home from './Components/Pages/Home';
export default function App() {
  return (
    <Provider store={store}>
      <Home/>
    </Provider>
  );
}

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
