import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

class Global extends Component {
  state = { globalStats: {}, statsTime: false }

  httpGet = (url, callback) => {
    const xmlHttp = new XMLHttpRequest()
    xmlHttp.onreadystatechange = function () {
      if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
        callback(xmlHttp.responseText)
    }
    xmlHttp.open('GET', url, true)
    xmlHttp.send(null)
  }

  getGlobalStats = () => {
    const date = new Date()
    const timestamp = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`

    this.httpGet('https://coronavirus-19-api.herokuapp.com/all', (response) => {
      this.setState({
        globalStats: JSON.parse(response),
        statsTime: timestamp,
      })
    })
  }

  componentDidMount = () => {
    this.getGlobalStats()
  }

  render() {
    const { globalStats, statsTime } = this.state

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
        <Text style={{marginBottom: 10}}>Dane globalne:</Text>
        <View style={{ marginBottom: 10 }}>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 20 }}>Zachorowania:</Text>
            <Text style={{ fontSize: 20 }}>{globalStats.cases}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 20 }}>Śmierci:</Text>
            <Text style={{ fontSize: 20 }}>{globalStats.deaths}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 20 }}>Wyleczeni:</Text>
            <Text style={{ fontSize: 20 }}>{globalStats.recovered}</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ color: '#777', fontSize: 13 }}>
            Dane z: {statsTime || 'brak danych'}
          </Text>
          <Button onPress={this.getGlobalStats} title="Odśwież" />
        </View>
      </View>
    )
  }
}

export default Global
