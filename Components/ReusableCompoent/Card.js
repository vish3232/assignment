import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'

const Card = (props) => {
    return (
        <TouchableOpacity onPress={()=>props.onClickCircle()} style={styles.cardContainer} >
            <Text  style={{width:50,fontSize:10,color:'white'}} >{props.name}</Text>
            <Text style={{width:50,fontSize:10,color:'white'}} >{props.designation}</Text>
            <Text style={{width:50,fontSize:10,color:'white'}} >{props.department}</Text>
        </TouchableOpacity>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer:{
        marginTop:10,
        width:80,
        height:80,
        borderRadius:45,
        backgroundColor:'green',
        marginRight:5,
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    }
})
