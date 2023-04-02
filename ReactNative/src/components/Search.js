import { View, Text, TextInput } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const Search = () => {
  return (
    <View
      className="rounded flex flex-row items-center w-full relative"
      style={{elevation:1}}
    >
      <TextInput
        placeholder="Find the best food around you"
        keyboardType="default"
        className="bg-gray-200 rounded pl-11 pr-4 py-3 text-lg w-full"
      />
      <View className="absolute left-3">
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Search;
