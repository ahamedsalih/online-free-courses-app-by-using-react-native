import React from "react";

import {WebView} from "react-native-webview";
import {Ad3} from "../ads/ad3";



export const WebView5=()=>{
    return(

      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/html/index.htm"
        }}
        startInLoadingState
      />
      
      <Ad3/>

      </>
    )
}