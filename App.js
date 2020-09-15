import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Card1 from "./components/card1";
import Card2 from "./components/card2";
import {DrawerContent} from "./components/drawercontent";
import { WebView1 } from './webviews/webview1';
import { WebView2 } from './webviews/webview2';
import { WebView3 } from './webviews/webview3';
import { WebView4 } from './webviews/webview4';
import { WebView5 } from "./webviews/webview5";
import { WebView6 } from "./webviews/webview6";
import { WebView7 } from "./webviews/webview7";
import { WebView8 } from "./webviews/webview8";

//import VideoSplash from "./videosplash";
//import { View } from 'react-native';




const HomeStack = createStackNavigator();

const Drawer = createDrawerNavigator();



  const HomeStackScreen=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#83cb15",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview1" component={WebView1}  options={{
        title:"Android",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}


 const WebStackScreen=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#e2361f",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview2" component={WebView2}  options={{
        title:"Swift",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}

 const WebStackScreen1=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#16b2d6",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview3" component={WebView3}  options={{
        title:"React Native",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}
 const WebStackScreen2=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#e80da1",
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview4" component={WebView4}  options={{
        title:"Kotlin",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}
export  const WebStackScreen3=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#48c325",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview5" component={WebView5}  options={{
        title:"HTML",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}
export  const WebStackScreen4=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#b43a65",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview6" component={WebView6}  options={{
        title:"CSS",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}
export  const WebStackScreen5=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#f2b007",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview7" component={WebView7}  options={{
        title:"Javascript",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}
export  const WebStackScreen6=({navigation})=> {
  return (
    
    <HomeStack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:"#10bee7",
      
        
      },
     
      headerTintColor:"#fff",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <HomeStack.Screen name="Webview8" component={WebView8}  options={{
        title:"React JS",
        headerTitleAlign:"center",
      }}/>

  
      
    </HomeStack.Navigator>
  
    
  );
}












export default function App() {
      return (
  
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><DrawerContent {...props}/>} initialRouteName="Appdev">
      
        <Drawer.Screen name="Webdev" component={Card1} />
       
        <Drawer.Screen name="Appdev" component={Card2} />
        <Drawer.Screen name="Web1" component={HomeStackScreen}  />
        <Drawer.Screen name="Web2" component={WebStackScreen}  />
        <Drawer.Screen name="Web3" component={WebStackScreen1}  />
        <Drawer.Screen name="Web4" component={WebStackScreen2} />
        <Drawer.Screen name="Web5" component={WebStackScreen3} />
        <Drawer.Screen name="Web6" component={WebStackScreen4} />
        <Drawer.Screen name="Web7" component={WebStackScreen5} />
        <Drawer.Screen name="Web8" component={WebStackScreen6} />
       
        </Drawer.Navigator>
         </NavigationContainer>
);
  
}



