import React from "react";

import {WebView} from "react-native-webview";
import Ad5 from "../ads/ad5";




export const WebView7=()=>{
    return(
      <>
        <WebView
        source={{
          uri:"https://www.tutorialspoint.com/javascript/index.htm"
        }}
        startInLoadingState
      />
      <Ad5/>

      </>
    )
}