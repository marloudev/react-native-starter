import React from 'react'
import { Text, View } from 'react-native'
import LoginFormSection from './sections/login-form-section'

export default function LoginPage({navigation}) {

  return (
    <View>
      <LoginFormSection navigation={navigation}/>
    </View>
  )
}
