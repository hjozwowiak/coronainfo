import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { View } from 'react-native'

import Global from './Global/Global'
import Local from './Local/Local'

const StatsScreen = () => {
  return (
    <View>
        <Global />
        <Local />
    </View>
  )
}

export default StatsScreen
