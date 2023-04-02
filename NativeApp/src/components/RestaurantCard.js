import { Image, Text, TouchableOpacity } from "react-native";
import React from "react";

const RestaurantCard = () => {
  return (
    <TouchableOpacity>
      <Image className="h-36 w-64 rounded" source={require("../../assets/food-bg.jpg")} />
      <Text>RestaurantCard</Text>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
