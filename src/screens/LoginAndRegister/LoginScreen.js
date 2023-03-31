import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import style, { colors, hr } from "../../global/style";

const LoginScreen = () => {
  const [showpassword, setShowpassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign In</Text>
      <View style={styles.inputout}>
        <FontAwesome5 name="user" size={22} color="#555" />
        <TextInput style={styles.input} placeholder="Email" />
      </View>
      <View style={styles.inputout}>
        <Feather name="lock" size={22} color="#555" />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={showpassword === false ? true : false}
        />
        <Ionicons
          name={showpassword === true ? "eye" : "md-eye-off"}
          size={22}
          color="#555"
          onPress={() => setShowpassword(!showpassword)}
        />
      </View>
      <TouchableOpacity style={styles.buttonout}>
        <Text style={styles.button}>Log In</Text>
      </TouchableOpacity>

      <View style={styles.forgotsection}>
        <Text>Forget password?</Text>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.textlg}>Sign In With</Text>
      </View>
      <View style={hr}></View>

      <View style={{ flexDirection: "row", gap: 40 }}>
        <TouchableOpacity>
          <AntDesign name="google" size={32} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="facebook-square" size={32} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="instagram" size={32} color="#222" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AntDesign name="twitter" size={32} color="#222" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 80,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    color: "red",
    marginBottom: 10,
  },
  inputout: {
    backgroundColor: "white",
    width: "90%",
    marginVertical: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 5,
    elevation: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    fontSize: 18,
    paddingLeft: 10,
    width: "85%",
  },
  buttonout: {
    backgroundColor: "black",
    width: "90%",
    marginVertical: 10,
    padding: 15,
    justifyContent: "center",
    borderRadius: 5,
    elevation: 20,
  },
  button: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    color: "white",
  },
  forgotsection: {
    marginTop: 10,
    rowGap: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  or: {
    fontSize: 20,
    color: "#333",
  },
  textlg: {
    fontSize: 22,
    color: "#333",
  },
});

export default LoginScreen;
