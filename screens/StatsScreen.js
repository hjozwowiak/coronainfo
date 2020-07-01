import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'

import Stats from '../components/Stats/Stats'
import { ScrollView } from 'react-native-gesture-handler'

const StatsScreen = () => {
  return (
    <ScrollView style={{padding: 10}}>
        <Stats />
    </ScrollView>
  )
}

export default StatsScreen
