import React from "react";

import {WebView} from "react-native-webview";
import { Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native';
import {Ad1} from "../ads/ad1";



export const WebView2=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/swift/index.htm"
        }}
        startInLoadingState
      />
      <Ad1/>
      </>
    )
}