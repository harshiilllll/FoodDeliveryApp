import { Image, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const RestaurantCard = ({
  imgUrl,
  title,
  short_description,
  rating,
  address,
  latitude,
  longtitude,
  genre,
}) => {
  return (
    <TouchableOpacity className="rounded overflow-hidden w-64">
      <Image className="h-36 w-full" source={{ uri: imgUrl }} />
      <View className="p-2 bg-[#fff] ">
        <Text className="text-base font-bold">{title}</Text>
        <View className="flex-row items-center gap-1">
          <View className="opacity-50">
            <FontAwesome name="star" size={20} color="green" />
          </View>
          <Text className="text-xs text-gray-500">
            <Text className="text-green-500">{rating}</Text> - {genre}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
