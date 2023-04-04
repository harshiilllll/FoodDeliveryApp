import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Feather } from "@expo/vector-icons";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../../sanity";

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
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "category"]{
        title,
        description,
        image,
        _id,
      }
    `
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  // console.log(categories);

  return (
    <View className="mt-4">
      {/* <View className="flex flex-row gap-4 justify-between">
        <Text className="mb-2 text-lg">Get some amazing food!</Text>
        <TouchableOpacity>
          <Feather name="arrow-right-circle" size={26} color="black" />
        </TouchableOpacity>
      </View> */}
      <FlatList
        data={categories}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 5 }} />}
        keyExtractor={(item) => item._id}
        horizontal
        renderItem={({ item }) => (
          <CategoryCard title={item.title} img={urlFor(item.image).size(200).url()} />
        )}
      />
    </View>
  );
};

export default Categories;
