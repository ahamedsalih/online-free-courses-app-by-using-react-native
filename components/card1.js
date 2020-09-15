
import React from 'react';
import {StatusBar, Text, View ,ScrollView,Image,TouchableOpacity,Dimensions} from 'react-native';
import {Ionicons}  from "@expo/vector-icons";
import Ad2 from "../ads/ad2";


const {height,width} = Dimensions.get('window');

const Card1=({navigation})=>{
    return(
       <View style={{flex:1}}>
         <StatusBar hidden/>
        
      

      <View style={{backgroundColor:"#16b2d6",width:"100%",height:50,elevation:5,justifyContent:"center"}}>
      <Ionicons name="ios-menu" size={32} color="white" style={{marginLeft:10}} onPress={()=>navigation.openDrawer()} />
      <Text style={{color:"white",marginLeft:95,position:"absolute",fontWeight:"bold",fontSize:16,textTransform:"uppercase"}}>
          Free Online Courses
      </Text>
      </View>

       <View style={{alignItems:"center",marginTop:10}}>
      <Text style={{fontWeight:"bold",fontSize:21}}>Web  Development</Text>
        </View>
        
      <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:60}}>
      
      <View
       style={{width:170,height:200,backgroundColor:"white",
       borderRadius:10,elevation:10,overflow:"hidden",justifyContent:"flex-start"}}>

        <TouchableOpacity onPress={()=>navigation.navigate("Web5")}>
                     <View style={{backgroundColor:"#48c325",width:"100%",height:"75%"
                     ,borderBottomEndRadius:40,alignItems:"center",justifyContent:"center"}}>

                     <Image style={{width:"50%",height:100}} 
                     source={require("../assets/pic5.png")}/>

               </View>
               
               <Text style={{fontWeight:"bold",marginLeft:50,marginTop:10,fontSize:20}}>
               HTML
             </Text>
    
             </TouchableOpacity>
      </View>
      
      
      
      
      <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
      ,overflow:"hidden",justifyContent:"flex-start"}}>

       <TouchableOpacity onPress={()=>navigation.navigate("Web6")}>
        <View style={{backgroundColor:"#b43a65",width:"100%",height:"75%",borderBottomEndRadius:40,alignItems:"center",justifyContent:"center"}}>
        <Image style={{width:"64%",height:100}} 
                     source={{uri:
                     "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png"}}/>


               </View>
          <Text style={{fontWeight:"bold",marginLeft:60,marginTop:10,fontSize:20}}>
             CSS
             </Text>
             </TouchableOpacity>
      </View>
     

       </View>
    

       


       <View style={{flexDirection:"row",justifyContent:"space-around",marginTop:60,height:230}}>

      <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
      ,overflow:"hidden",justifyContent:"flex-start"}}>

      <TouchableOpacity onPress={()=>navigation.navigate("Web7")}>
      
      <View style={{backgroundColor:"#f2b007",width:"100%",height:"75%",borderBottomEndRadius:40,alignItems:"center",justifyContent:"center"}}>
      <Image style={{width:"64%",height:100,}} 
                     source={require("../assets/pic7.png")}/>



       </View>
       <Text style={{fontWeight:"bold",marginLeft:30,marginTop:10,fontSize:20}}>
             Javascript
             </Text>
             </TouchableOpacity>
       </View>
    

      <View style={{width:170,height:200,backgroundColor:"white",borderRadius:10,elevation:10
      ,overflow:"hidden",justifyContent:"flex-start"}}>

          <TouchableOpacity onPress={()=>navigation.navigate("Web8")}>
             <View style={{backgroundColor:"#16b2d6",width:"100%",height:"75%",borderBottomEndRadius:40,alignItems:"center",justifyContent:"center"}}>

             <Image style={{width:"64%",height:100,}} 
                     source={require("../assets/pic3.png")}/>



        </View>

             <Text style={{fontWeight:"bold",marginLeft:30,marginTop:10,fontSize:20}}>
             React JS
             </Text>

             </TouchableOpacity>
    
      
     </View>
     </View>

    

       <View style={{marginTop:0,alignItems:"center"}}>
       <Ad2/>
       <Ad2/>

       </View>

       </View>
    )
}


export default Card1;



