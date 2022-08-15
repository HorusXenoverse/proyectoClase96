import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar, TouchableOpacity, ImageBackground } from 'react-native';

const bgImage = require("../assets/news.jpg")


export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
            <ImageBackground source={bgImage} style={styles.bgImage}>

                <Text style={styles.titleText}>Sobre que aspectos quisiera informarse:</Text>

              <TouchableOpacity onPress={()=>this.props.navigation.navigate("Contamination")} style={styles.button}>
              <Text style={styles.buttonText}>Contaminación</Text>
              </TouchableOpacity>


           <TouchableOpacity onPress={()=>this.props.navigation.navigate("AmbientalProblems")} style={styles.button}>
           <Text style={styles.buttonText}>Problemas Ambientales</Text>
           </TouchableOpacity>  

            <TouchableOpacity onPress={()=>this.props.navigation.navigate("News")} style={styles.button}>
           <Text style={styles.buttonText}>Noticias recientes</Text>
           </TouchableOpacity> 

             </ImageBackground>
            </View>
        )
    }
}

const styles=StyleSheet.create({
  container:{flex:1},
  droidSafeArea:{marginTop:Platform.OS=="android"?StatusBar.currentHeight:0},
  titleText:{fontSize:30,
    fontWeight: "bold",
    color: "black",
    marginTop: 40},
  button:{flex: 0.25,
    marginTop:60,
    borderRadius:80,
    backgroundColor: "red",
    marginLeft: 50,
    marginRight:50,},
  buttonText:{fontSize:25,
     fontWeight: "bold",
     color:"black",
     marginLeft: 35,
     marginTop:20},
  bgImage:{
    flex:3,
    resizeMode: "cover",
    justifyContent: "center",
    marginTop: 20}

});