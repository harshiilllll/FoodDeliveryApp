import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

const DATA = [
  { id: 1, title: "Item 1", img: require("../../assets/banner1.png") },
  { id: 2, title: "Item 2", img: require("../../assets/banner2.png") },
];

const Slider = () => {
  return (
    <View className="mt-4 rounded overflow-hidden" style={{elevation: 5}}>
      <FlatList
        data={DATA}
        renderItem={({ item }) => (
          <Image className="w-96 h-40" source={item.img} />
        )}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        horizontal
      />
    </View>
  );
};

export default Slider;
