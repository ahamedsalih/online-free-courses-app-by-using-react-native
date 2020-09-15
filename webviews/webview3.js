import React from "react";

import {WebView} from "react-native-webview";
import { Text, View ,ScrollView,Image,TouchableOpacity} from 'react-native';
import {Ad4} from "../ads/ad4";



export const WebView3=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/react_native/index.htm"
        }}
        startInLoadingState
      />
      <Ad4/>
      </>
    )
}