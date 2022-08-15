import React, { Component } from "react";
import { View,Text,StyleSheet} from "react-native";

import {RFValue} from "react-native-responsive-fontsize"

export default class NewsStory extends Component {
  constructor(props) {
    super(props);
  }

  render() {
      return (
        <View style={styles.container}>

          <View style={styles.cardContainer}>
    
           <View style={styles.titleContainer}>

            <Text style={styles.titleText}> {this.props.story.title} </Text>
            <Text style={styles.authorText}> {this.props.story.author} </Text>
            <Text style={styles.descriptionText}> {this.props.story.description} </Text>
           </View>
            

            </View>

          </View>

      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "black",
    borderRadius: RFValue(20)
  },
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  titleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "gray"
  },
  authorText: {
    fontSize: RFValue(10),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  descriptionText: {
    fontSize: 20,
    fontFamily: "Bubblegum-Sans",
    color: "white",
    paddingTop: RFValue(10)
  },

});