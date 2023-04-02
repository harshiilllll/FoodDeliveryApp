import { Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'

const CategoryCard = ({img, title}) => {
  return (
    <TouchableOpacity className="rounded overflow-hidden relative">
      <Text className="absolute bottom-1 left-1 z-20 font-bold text-white">{title}</Text>
      <Image className="h-24 w-24" source={img} />
    </TouchableOpacity>
  )
}

export default CategoryCard