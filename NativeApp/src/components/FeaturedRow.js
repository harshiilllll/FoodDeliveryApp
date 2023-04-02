import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import RestaurantCard from "./RestaurantCard";
import { FlatList } from "react-native";

const restos = [
  {
    id: "1234",
    imgUrl:
      "https://burst.shopifycdn.com/photos/flatlay-iron-skillet-with-meat-and-other-food.jpg?width=1200&format=pjpg&exif=1&iptc=1",
    title: "The Bistro",
    rating: 4.5,
    genre: "English",
    short_description: "Cozy neighborhood spot serving comfort food favorites.",
    address: "123 Main St, Anytown USA",
    dishes: ["Mac and cheese", "Pot roast", "Grilled cheese"],
    longitude: -122.123456,
    latitude: 37.123456,
  },
  {
    id: "5678",
    imgUrl:
      "https://images.unsplash.com/photo-1563245738-9169ff58eccf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGl6emElMjByZXN0YXVyYW50fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    title: "Sushi Garden",
    rating: 4.8,
    genre: "Japanese",
    short_description: "Wide selection of sushi rolls and Japanese favorites.",
    address: "456 Oak St, Anytown USA",
    dishes: ["Spicy tuna roll", "Tempura shrimp", "Udon noodles"],
    longitude: -122.234567,
    latitude: 37.234567,
  },
  {
    id: "9101",
    imgUrl:
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80",
    title: "La Pizzeria",
    rating: 4.2,
    genre: "French",
    short_description: "Authentic Italian pizza and pasta dishes.",
    address: "789 Elm St, Anytown USA",
    dishes: ["Margherita pizza", "Lasagna", "Tiramisu"],
    longitude: -122.345678,
    latitude: 37.345678,
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

      {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RestaurantCard />
        <RestaurantCard />
      </ScrollView> */}

      <FlatList
        data={restos}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        horizontal
        renderItem={({ item }) => (
          <RestaurantCard
            title={item.title}
            short_description={item.short_description}
            rating={item.rating}
            genre={item.genre}
            address={item.address}
            imgUrl={item.imgUrl}
            latitude={item.latitude}
            longitude={item.longitude}
          />
        )}
        keyExtractor={(item) => item.id}
        className="mt-4"
      />
    </View>
  );
};

export default FeaturedRow;
