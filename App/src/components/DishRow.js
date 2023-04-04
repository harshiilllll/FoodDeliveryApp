import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { urlFor } from "../../sanity";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  selectBasketItems,
  selectBasketItemsWithId,
} from "../../slices/basketSlice";

const DishRow = ({ id, name, price, description, image, dishtype }) => {
  const [pressed, setPressed] = useState(false);
  const items = useSelector((state) => selectBasketItemsWithId(state, id));
  const dispatch = useDispatch();

  const addItemsToBasket = () => {
    dispatch(addToBasket({ id, name, price, description, image, dishtype }));
  };

  console.log(items);
  return (
    <View>
      <TouchableOpacity
        onPress={() => setPressed(!pressed)}
        className={`bg-white px-4 py-3 flex-row justify-between border-gray-100 ${
          !pressed && "border"
        }`}
      >
        <View className="justify-start w-[75%]">
          <Text className="font-semibold text-base">{name}</Text>
          <Text className="text-sm text-gray-800">{description}</Text>
          <Text className="text-sm text-gray-800">Rs. {price}</Text>
        </View>
        <Image source={{ uri: urlFor(image).url() }} className="h-20 w-20" />
      </TouchableOpacity>

      {pressed && (
        <View className="bg-white px-4 py-2 flex-row justify-start space-x-2 items-center">
          <TouchableOpacity>
            <AntDesign name="minuscircle" size={32} color="#00CCBB" />
          </TouchableOpacity>
          <Text className="text-lg">{items.length}</Text>
          <TouchableOpacity onPress={addItemsToBasket}>
            <AntDesign name="pluscircle" size={32} color="#00CCBB" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default DishRow;
