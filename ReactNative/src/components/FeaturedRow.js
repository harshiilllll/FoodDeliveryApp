import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import { FlatList } from "react-native";

const restos = [
  {
    id: "1234",
    imgUrl: "https://example.com/images/restaurant-1234.jpg",
    title: "The Bistro",
    rating: 4.5,
    description:
      "The Bistro is a cozy neighborhood spot serving up delicious comfort food favorites like mac and cheese, pot roast, and grilled cheese sandwiches. Our menu changes frequently to highlight seasonal ingredients, so there's always something new to try. Come join us for a relaxing meal and a glass of wine!",
  },
  {
    id: "5678",
    imgUrl: "https://example.com/images/restaurant-5678.jpg",
    title: "Sushi Garden",
    rating: 4.8,
    description:
      "Sushi Garden offers a wide selection of sushi rolls, sashimi, and other Japanese favorites. Our chefs use only the freshest ingredients to create beautiful and delicious dishes that will leave you feeling satisfied and happy. Come visit us for lunch or dinner and experience the flavors of Japan!",
  },
];

const FeaturedRow = ({ title, description }) => {
  return (
    <View className="mt-3">
      <View className="flex-row justify-between">
        <Text className="text-lg font-bold">{title}</Text>
        <Feather name="arrow-right" size={24} color="#00CCBB" />
      </View>

      <Text className="text-xs text-gray-500">{description}</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView>

      {/* <FlatList
        data={restos}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        horizontal
        renderItem={({ item }) => <RestaurantCard imgUrl={item.imgUrl} />}
        keyExtractor={(item) => item.id}
        className="mt-4"
      /> */}
    </View>
  );
};

export default FeaturedRow;
