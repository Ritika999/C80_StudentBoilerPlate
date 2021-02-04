import React, { Component} from 'react';
import {StyleSheet, View, Text,TouchableOpacity} from 'react-native';


export default class CustomSideBarMenu extends Component{
  render(){
    return(
      <View style={{flex:1}}>
       
      </View>
    )
  }
}

var styles = StyleSheet.create({
  container : {
    flex:1
  },
  drawerItemsContainer:{
    flex:0.8
  },
  logOutContainer : {
    flex:0.2,
    justifyContent:'flex-end',
    paddingBottom:30
  },
  logOutButton : {
    height:30,
    width:'100%',
    justifyContent:'center',
    padding:10
  },
  logOutText:{
    fontSize: 30,
    fontWeight:'bold'
  }
})
