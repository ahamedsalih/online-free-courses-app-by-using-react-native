import React from "react";

import {WebView} from "react-native-webview";
import { Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native';
import Ad5 from "../ads/ad5";



export const WebView4=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/kotlin/index.htm"
        }}
        startInLoadingState
      />
      <Ad5/>
      </>
    )
}