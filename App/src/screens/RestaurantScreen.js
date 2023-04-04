import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React, { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { AntDesign, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import DishRow from "../components/DishRow";
const RestaurantScreen = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  const {
    params: {
      _id,
      title,
      imgUrl,
      short_description,
      dishes,
      rating,
      address,
      latitude,
      longtitude,
      genre,
    },
  } = useRoute();

  return (
    <ScrollView>
      <StatusBar style="light" />

      <View className="relative">
        <Image
          source={{ uri: imgUrl }}
          className="h-56 w-full bg-gray-300 p-4"
        />
        <TouchableOpacity
          onPress={navigation.goBack}
          className="bg-gray-100 rounded-full p-2 absolute left-4 top-14"
        >
          <AntDesign name="arrowleft" size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      <View className="p-4 bg-white">
        <Text className="text-3xl font-bold">{title}</Text>

        <View className="flex-row gap-1 items-center mt-px">
          <View className="opacity-50">
            <FontAwesome name="star" size={20} color="green" />
          </View>
          <Text>
            <Text className="text-green-500">{rating}</Text> · {genre}
          </Text>
          <View className="opacity-50">
            <Ionicons name="location-outline" size={20} color="black" />
          </View>
          <Text>
            <Text className="text-gray-500">{address}</Text>
          </Text>
        </View>

        <Text className="mt-2 text-gray-800">{short_description}</Text>
      </View>

      <TouchableOpacity className="flex-row items-center justify-between px-4 py-3 bg-white border-y border-[0.5px] border-gray-300">
        <View className="flex-row items-center space-x-2">
          <AntDesign name="questioncircleo" size={22} color="#00CCBB" />
          <Text>Have a food allergy?</Text>
        </View>
        <Feather name="chevron-right" size={26} color="#00CCBB" />
      </TouchableOpacity>

      <View>
        <Text className="px-4 pt-6 mb-3 text-xl font-bold">Menu</Text>
      </View>

      {dishes.map((dish) => {
        return (
          <DishRow
            key={dish._id}
            id={dish._id}
            name={dish.name}
            description={dish.short_description}
            price={dish.price}
            image={dish.image}
          />
        );
      })}

    </ScrollView>
  );
};

export default RestaurantScreen;
