import React from "react";
import { StyleSheet, Text, View,Image,TouchableOpacity } from 'react-native';
import { DrawerContentScrollView,DrawerItem } from '@react-navigation/drawer';
import {Ionicons}  from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

//#d64717
//#00d4ff

export function DrawerContent({navigation}){
    return(
         <View style={{flex:1}}>
        <View  style={{backgroundColor:"#121111",width:"100%",height:200,alignItems:"center",justifyContent:"center"}}>

        <Image style={{width:"30%",height:100}} 
                     source={require("../assets/pic7.png")}/>
         <Text style={{fontWeight:"bold",color:"white",marginTop:5}}>
            Free Online Courses 
         </Text>            
       

        </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15,
         alignItems:"center",flexWrap:"wrap",width:"100%"}}>
         
         <AntDesign name="home" size={22} color="#db2b3d" style={{marginLeft:10,opacity:0.9}} />
         <TouchableOpacity onPress={()=>navigation.navigate("Appdev")}>
         <Text style={{marginRight:170}}>
         Home
         </Text>

         </TouchableOpacity>
         
          <View style={{flexDirection:"row",alignItems:"center",marginTop:80}}>
       
           <MaterialCommunityIcons name="web" size={24} color="#16b2d6" style={{marginLeft:10}}/>
           <TouchableOpacity  onPress={()=>navigation.navigate("Webdev")}>
         <Text style={{marginLeft:30}}>
         Web Development
         </Text>

         </TouchableOpacity>
         </View>




         <View style={{flexDirection:"row",alignItems:"center",marginTop:0}}>


          
          <Ionicons name="logo-android" size={32} color="#83cb15" style={{marginLeft:10}}/>
           <TouchableOpacity onPress={()=>navigation.navigate("Appdev")}>
           <Text style={{marginLeft:30}}>
           App Development
         </Text>

         </TouchableOpacity>
        </View>
           
         </View>





        </View>
    )
}