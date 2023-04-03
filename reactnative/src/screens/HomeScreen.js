import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import Slider from "../components/Slider";
import { FontAwesome } from "@expo/vector-icons";
import Categories from "../components/Categories";
import { Feather } from "@expo/vector-icons";
import Search from "../components/Search";
import { FontAwesome5 } from "@expo/vector-icons";
import FeaturedRow from "../components/FeaturedRow";
import { useNavigation } from "@react-navigation/native";
import sanityClient from "../../sanity";

const HomeScreen = () => {
  const user = true;
  const navigation = useNavigation();

  const [featuredCategories, setFeaturedCategories] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  // useEffect(() => {
  //   sanityClient.fetch(`*[_type=="restaurant"]`).then((data) => {
  //     setFeaturedCategories(data);
  //   });
  // }, []);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="dark" />

      {/* HEADER  */}
      <View className="flex flex-row items-center justify-between pt-16 px-4 pb-4">
        <View className="flex flex-row gap-2 items-center">
          {user === true ? (
            <TouchableOpacity>
              <Image
                className="h-10 w-10 rounded-full"
                source={{
                  uri: "https://randomuser.me/api/portraits/men/81.jpg",
                }}
              />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity>
              <FontAwesome name="user-circle-o" size={28} color="#3F3F44" />
            </TouchableOpacity>
          )}
          <View>
            <Text className="text-gray-400 font-bold">Deliver Now!</Text>
            <TouchableOpacity className="flex flex-row items-center">
              <Text className="font-semibold text-xl">Current Location</Text>
              <Feather name="chevron-down" size={24} color="#00CCBB" />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity>
          <FontAwesome5 name="user" size={24} color="#00CCBB" />
        </TouchableOpacity>
      </View>

      {/* MIDDLE SECTION */}
      <View className="px-4" style={{ flex: 1 }}>
        <Search />

        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1 }}>
          <Categories />
          <FeaturedRow
            title="Featured"
            description="Paid placements from our partners"
          />
          <Slider />
          <FeaturedRow
            title="Tasty Discounts"
            description="Everyone's been enjoying these juicy discounts!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
          <FeaturedRow
            title="Offers Near You"
            description="Why not support your local restaurant tonight!"
          />
        </ScrollView>
      </View>

      {/* FOOTER */}
      {/* <View
          style={{ elevation: 1 }}
          className="flex flex-row items-center justify-between bg-[#126c6b] absolute bottom-10 left-0 right-0 -mb-10 py-6 px-6"
        >
          <TouchableOpacity>
            <Feather name="home" size={28} color="#F7F7F7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Ionicons name="newspaper-outline" size={28} color="#F7F7F7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialIcons name="payment" size={28} color="#F7F7F7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="message-square" size={28} color="#F7F7F7" />
          </TouchableOpacity>
          <TouchableOpacity>
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="#F7F7F7"
            />
          </TouchableOpacity>
        </View> */}
    </View>
  );
};

export default HomeScreen;
