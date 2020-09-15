import React from "react";

import {WebView} from "react-native-webview";
import { Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native';
import {Ad3} from "../ads/ad3";



export const WebView1=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/android/index.htm"
        }}
        startInLoadingState
      />
      <Ad3/>
      </>
    )
}