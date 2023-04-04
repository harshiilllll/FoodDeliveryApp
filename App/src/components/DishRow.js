import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { urlFor } from "../../sanity";

const DishRow = ({ id, name, price, description, image, dishtype }) => {
  return (
    <TouchableOpacity className="bg-white p-4 flex-row justify-between border-b-[0.5px] border-gray-400">
      <View className="justify-center">
        <Text>{name}</Text>
        <Text>{description}</Text>
      </View>
      <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20" />
    </TouchableOpacity>
  );
};

export default DishRow;
