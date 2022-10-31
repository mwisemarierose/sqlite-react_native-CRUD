import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";



const Home = () => {
    var navigation = useNavigation();
    return(
       
        <View style={styles.container}>
          <ImageBackground source={require('../assets/pencil.jpg')} resizeMode='cover'style={styles.image}>
            <Text style={styles.text} onPress={() => navigation.navigate("add")}> CONTINUE TO THE SYSTEM ✔ </Text>
          </ImageBackground>
        </View>
    )
}
   

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    blur:100
  },
  text: {
    color: "white",
    fontSize: 30,
    lineHeight: 550,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
 
  }
});

export default Home;