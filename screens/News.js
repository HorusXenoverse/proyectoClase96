import React, { Component } from 'react';
import { Text, View, SafeAreaView, StyleSheet, Platform, StatusBar, TouchableOpacity, ImageBackground, FlatList } from 'react-native';
import NewStory from "./NewsStory";

const bgImage = require("../assets/news3.jpg");
var newStory = require("./temp_new.json")

export default class AmbientalProblems extends Component {

  constructor(){
    super();
    this.state={
    problems:""
    }
  }


 renderItem = ({ item: story }) => {
    return <NewStory story={story} />;
  };

  keyExtractor = (item, index) => index.toString();

    render() {
        return (
            <View style={styles.container}>
            <SafeAreaView style={styles.droidSafeArea} />
             <ImageBackground source={bgImage} style={styles.bgImage}>

                <Text style={styles.titleText}>Noticias Recientes:</Text>

                    <View>
                 <FlatList
                 keyExtractor={this.keyExtractor}
                 data={newStory}
                 renderItem={this.renderItem}/>
                  </View>

                <View style={styles.problemContainer}>
                <Text style={styles.problemText}>
             
                </Text>
              </View>

           <TouchableOpacity onPress={()=>this.props.navigation.navigate("Inicio")} style={styles.button}>
           <Text style={styles.buttonText}>Regresar</Text>
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
    color: "black"},
  button:{flex: 0.15,
    marginTop:80,
    borderRadius:80,
    backgroundColor: "red",
    marginLeft: 50,
    marginRight:50,},
  buttonText:{fontSize:25,
     fontWeight: "bold",
     color:"black",
     marginLeft: 60,
     marginTop:15},
  problemContainer:{
   flex:0.7,
   alignItems: "center",
   justifyContent: "center",
   alignSelf: "center"
  },
  problemText:{
    fontSize:30,
    fontWeight: "bold",
    color: "black",
  },
  bgImage:{
    flex:3,
    resizeMode: 50,
    justifyContent: 60,
    marginTop: 20,}

});