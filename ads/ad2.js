import React,{Component} from "react";


import {AdMobBanner} from "expo-ads-admob";




  class Ad2 extends Component{

    
  
    
      render(){


       
      return(
        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3689443750072931/7560054610"
        servePersonalizedAds
        
         />
      )
  }
}

export default Ad2;
  //ca-app-pub-3689443750072931/5448896593