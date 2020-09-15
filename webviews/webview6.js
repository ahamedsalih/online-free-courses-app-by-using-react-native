import React from "react";
import {WebView} from "react-native-webview";
import {Ad3} from "../ads/ad3";
import { Ad1 } from "../ads/ad1";



export const WebView6=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/css/index.htm"
        }}
        startInLoadingState
      />
      <Ad1/>
      </>
    )
}