import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import CategoryCard from "./CategoryCard";

const DATA = [
  {
    title: "Fastfood",
    id: 1,
    img: require("../../assets/fastfood.jpg"),
  },
  {
    title: "Lunch",
    id: 2,
    img: require("../../assets/lunch.jpg"),
  },
  {
    title: "Dinner",
    id: 3,
    img: require("../../assets/dinner.jpg"),
  },
  {
    title: "Snacks",
    id: 4,
    img: require("../../assets/snacks.jpg"),
  },
  {
    title: "Dessert",
    id: 5,
    img: require("../../assets/dessert.jpg"),
  },
  {
    title: "Drinks",
    id: 6,
    img: require("../../assets/drinks.jpg"),
  },
];

const Categories = () => {
  return (
    <View className="mt-4">
      {/* <View className="flex flex-row gap-4 justify-between">
        <Text className="mb-2 text-lg">Get some amazing food!</Text>
        <TouchableOpacity>
          <Feather name="arrow-right-circle" size={26} color="black" />
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={DATA}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        keyExtractor={(item) => item.id}
        horizontal
        renderItem={({ item }) => (
          <CategoryCard title={item.title} img={item.img} />
        )}
      />
    </View>
  );
};

export default Categories;
