import React, { useLayoutEffect } from "react";
import { Feather } from "@expo/vector-icons";
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
import { colors } from "../../global/style";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  
  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <ImageBackground source={foodBg} style={styles.bgImage} blurRadius={20}>
        <View>
          <Image style={styles.logo} className="rounded-2xl" source={logo} />
        </View>

        <Text style={styles.text} className="text-green-400">
          Welcome to UberEats
        </Text>

        <Text style={styles.subtext}>Find the best food around you!</Text>

        <View style={styles.btns} className="">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            className="bg-white py-4 px-4 rounded-xl items-center flex flex-row gap-x-2 justify-center"
          >
            <Text className="font-semibold text-lg">Home</Text>
            <Feather name="arrow-right-circle" size={18} color="black" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            className="bg-black py-4 px-4 rounded-xl items-center flex flex-row gap-x-2 justify-center"
          >
            <Text className=" text-white font-semibold text-lg">Log In</Text>
            <Feather name="arrow-right-circle" size={18} color="white" />
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
    fontSize: 34,
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
});

export default WelcomeScreen;
