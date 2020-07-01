import React, { Component } from 'react'
import { Button, Text, View, TextInput } from 'react-native'

import Details from './Details/Details'

class Local extends Component {
  state = { localStats: {}, country: '', countryStats: '', statsTime: false }

  httpGet = (url, callback) => {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText)
    }
    xmlHttp.open('GET', url, true)
    xmlHttp.send(null)
  }

  getCountryStats = () => {
    const date = new Date()
    const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`

    if (this.state.country === '') {
      this.setState({ countryStats: 'invalid' })
    } else {
      const country = this.state.country.toLowerCase()

      this.httpGet(
        `https://coronavirus-19-api.herokuapp.com/countries/${country}`,
        (response) => {
          if (response === 'Country not found') {
            this.setState({ countryStats: 'invalid' })
          } else {
            this.setState({
              countryStats: JSON.parse(response),
              statsTime: timestamp,
            })
          }
        }
      )
    }
  }

  componentDidMount = () => {}

  render() {
    const { country, countryStats, statsTime } = this.state

    return (
      <View
        style={{
          backgroundColor: '#ddd',
          paddingVertical: 5,
          paddingHorizontal: 10,
          borderRadius: 6,
          marginBottom: 15,
        }}
      >
        <Text style={{ marginBottom: 10 }}>Dane lokalne:</Text>

        <View style={{ marginBottom: 10 }}>
          <TextInput
            value={this.state.country}
            onChangeText={(text) => {
              this.setState({ country: text })
            }}
            style={{ height: 40, backgroundColor: 'white', borderRadius: 6, paddingHorizontal: 15 }}
          ></TextInput>
          <Button onPress={this.getCountryStats} title="Pokaż" />
        </View>

        <Details countryDetails={this.state.countryStats} />

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text style={{ color: '#777', fontSize: 13 }}>
            <Text>Dane z: {statsTime || 'brak danych'}</Text>
          </Text>
          <Button onPress={this.getCountryStats} title="Odśwież" />
        </View>
      </View>
    )
  }
}

export default Local
