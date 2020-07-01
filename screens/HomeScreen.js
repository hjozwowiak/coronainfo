import * as WebBrowser from 'expo-web-browser'
import * as React from 'react'
import { Image, Platform, StyleSheet, Text, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

import { MonoText } from '../components/StyledText'

const HomeScreen = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: '#fff',
          marginTop: 30
        }}
      >
        <View
          style={{
            alignItems: 'center',
            marginTop: 10,
            marginBottom: 20,
          }}
        >
          <Image
            source={require('../assets/images/logo.jpg')}
            style={{
              width: 100,
              height: 80,
              resizeMode: 'contain',
              marginTop: 3,
              marginLeft: -10,
            }}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            marginHorizontal: 50,
          }}
        >
          <Text
            style={{
              fontSize: 17,
              color: 'rgba(96,100,109, 1)',
              lineHeight: 24,
              textAlign: 'center',
              marginVertical: 10
            }}
          >
            Znajdziesz tu najświezsze dane dot. zachorowań na COVID-19 prosto od
            Światowej Organizacji Zdrowia.
          </Text>

          <Text
            style={{
              fontSize: 17,
              color: 'rgba(96,100,109, 1)',
              lineHeight: 24,
              textAlign: 'center',
              marginVertical: 10
            }}
          >
            Jeśli wydaje Ci się, że możesz chorować na COVID-19 - wypełnij test
            i przekonaj się czy są ku temu przesłanki!
          </Text>
        </View>
      </ScrollView>

      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          ...Platform.select({
            ios: {
              shadowColor: 'black',
              shadowOffset: { width: 0, height: -3 },
              shadowOpacity: 0.1,
              shadowRadius: 3,
            },
            android: {
              elevation: 20,
            },
          }),
          alignItems: 'center',
          backgroundColor: '#fbfbfb',
          paddingVertical: 20,
          paddingHorizontal: 10,
        }}
      >
        <Text style={{ fontSize: 16, textAlign: 'center' }}>
          Aby odnaleźć więcej rzetelnych informacji odwiedź stronę{' '}
        </Text>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            color: '#2e78b7',
            textDecorationLine: 'underline',
          }}
          onPress={() => {
            WebBrowser.openBrowserAsync('https://www.who.int/')
          }}
        >
          Światowej Organizacji Zdrowia.
        </Text>
      </View>
    </View>
  )
}

HomeScreen.navigationOptions = {
  header: null,
}

export default HomeScreen
