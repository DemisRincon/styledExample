import React from 'react'
import { Text, View } from 'react-native'
import { Layout,TextCustom } from './src/components'
import { CustomText } from './src/components/Layout/styledComponents'
CustomText
const App = () => {
  return (
    <View>
      <Layout/> 
      <TextCustom/>
    </View>
  )
}

export default App
