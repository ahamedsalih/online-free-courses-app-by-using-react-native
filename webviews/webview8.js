import React from "react";

import {WebView} from "react-native-webview";
import {Ad4} from "../ads/ad4";



export const WebView8=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/reactjs/index.htm"
        }}
        startInLoadingState
      />
      <Ad4/>
      </>
    )
}