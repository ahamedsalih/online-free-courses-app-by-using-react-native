
import React from 'react';
import { StyleSheet,StatusBar, Text, View ,Image,TouchableOpacity,Dimensions} from 'react-native';
import {Ionicons}  from "@expo/vector-icons";
import {Ad1} from "../ads/ad1";


//const windowHeight = Dimensions.get('window').height;
const {height,width} = Dimensions.get('window');


const Card2=({navigation})=>{
    return(
       

        <View style={{flex:1,height:height,width:width}}>
        <StatusBar hidden/>
       
    

     <View style={{backgroundColor:"#db2b3d",width:"100%",height:50,elevation:10,justifyContent:"center",opacity:0.95}}>
     <Ionicons name="ios-menu" size={32} color="white" style={{marginLeft:10}} onPress={()=>navigation.openDrawer()} />
     <Text style={{color:"white",marginLeft:95,position:"absolute",fontWeight:"bold",fontSize:16,textTransform:"uppercase"}}>
         Free Online Courses
     </Text>
     </View>

      <View style={{alignItems:"center",marginTop:10}}>
     <Text style={{fontWeight:"bold",fontSize:21}}>App  Development</Text>
       </View>
     <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-around",marginTop:50}}>

     <View
      style={{width:170,height:200,backgroundColor:"white",
      borderRadius:10,elevation:10,overflow:"hidden",justifyContent:"flex-start"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Web1")}>
             <View style={{backgroundColor:"#83cb15",width:"100%",height:"75%",borderBottomEndRadius:40
             ,alignItems:"center",justifyContent:"center"}}>
       <Image source={require("../assets/pic1.png")}
        style={{width:"50%",height:100,opacity:0.66}}/>
              </View>

              <Text style={{fontWeight:"bold",marginLeft:40,marginTop:10,fontSize:20}}>
            Android
            </Text>

            </TouchableOpacity>
   
     
     </View>

     <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
     ,overflow:"hidden",justifyContent:"flex-start"}}>
     <TouchableOpacity onPress={()=>navigation.navigate("Web2")}>
       <View style={{backgroundColor:"#e2361f",width:"100%",height:"75%",borderBottomEndRadius:40
       ,alignItems:"center",justifyContent:"center",opacity:0.95}}>
       <Image source={require("../assets/pic2.png")}
        style={{width:"100%",height:200}}/>

</View>
<Text style={{fontWeight:"bold",marginLeft:50,marginTop:10,fontSize:20}}>
            Swift
            </Text>

            </TouchableOpacity>
     </View>
    

      </View>


      <View style={{alignItems:"center",flexDirection:"row",justifyContent:"space-around",marginTop:150,height:80}}>

     <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
     ,overflow:"hidden",justifyContent:"flex-start"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Web3")}>
     <View style={{backgroundColor:"#00d4ff",width:"100%",height:"75%",borderBottomEndRadius:40
     ,alignItems:"center",justifyContent:"center",opacity:0.9}}>

     <Image source={require("../assets/pic3.png")}
        style={{width:"60%",height:100}}/>

      </View>
      <Text style={{fontWeight:"bold",marginLeft:16,marginTop:10,fontSize:20}}>
            React Native
            </Text>
            </TouchableOpacity>
      </View>

     <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
     ,overflow:"hidden",justifyContent:"flex-start"}}>
      <TouchableOpacity onPress={()=>navigation.navigate("Web4")}>
            <View style={{backgroundColor:"#e80da1",width:"100%",height:"75%",borderBottomEndRadius:40
            ,alignItems:"center",justifyContent:"center",opacity:0.95}}>


<Image source={require("../assets/pic4.png")}
        style={{width:"60%",height:100}}/>

          

       </View>

            <Text style={{fontWeight:"bold",marginLeft:50,marginTop:10,fontSize:20}}>
            Kotlin
            </Text>
            </TouchableOpacity>
   
     
    </View>

    
    </View>

      
    <View style={{marginTop:70,alignItems:"center"}}>
    <Ad1/>
    <Ad1/>
    </View>
  

      </View>

       
    )
}


export default Card2;
//