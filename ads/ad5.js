import React,{Component} from "react";


import {AdMobBanner,AdMobInterstitial} from "expo-ads-admob";




  class Ad5 extends Component{

      render(){


       
      return(
        <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3689443750072931/8243522848"
        servePersonalizedAds
        
         />
      )
  }
}

export default Ad5;
  //ca-app-pub-3689443750072931/5448896593
  //ca-app-pub-3689443750072931/3430179864