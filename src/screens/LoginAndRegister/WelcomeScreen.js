import React from "react";
import {
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import logo from "../../../assets/logo.png";
import foodBg from "../../../assets/food-bg.jpg";
import style, { colors } from "../../global/style";

const WelcomeScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={foodBg} style={styles.bgImage} blurRadius={10}>
        <View>
          <Image style={styles.logo} source={logo} />
        </View>

        <Text style={styles.text}>Welcome to Foody</Text>

        <Text style={styles.subtext}>Find the best food around you!</Text>

        <View style={styles.btns}>
          <TouchableOpacity>
            <Text style={styles.btn}>Sign Up</Text >
          </TouchableOpacity>
          <TouchableOpacity> 
            <Text style={styles.btn}>Log In</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bgImage: {
    flex: 1,
    padding: 20,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
},
text: {
    color: colors.col1,
    fontWeight: 900,
    fontSize: 38,
},
subtext: {
    color: colors.col1,
    marginBottom: 40,
    fontSize: 18,
    textAlign: "center",
},
logo: {
    // backgroundColor: "white",
    marginBottom: 80,
    height: 200,
    width: 200,
  },
  btns: {
    flexDirection: "row",
    gap: 10,
  },
  btn: {
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 22,
    color: colors.text1,
    fontWeight: 700,
    borderRadius: 10
  },
});

export default WelcomeScreen;
