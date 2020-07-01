import React from 'react'
import { Text, View } from 'react-native'

const Details = ({ countryDetails }) => {
  if (countryDetails === '') {
    return (
      <Text>
        W celu uzyskania szczegółowych statystyk z dowolnego kraju - wpisz
        powyżej jego nazwę po angielsku i naciśnij "Pokaż".
      </Text>
    )
  } else if (countryDetails === 'invalid') {
    return (
      <View>
        <Text>Niewłaściwa nazwa państwa.</Text>
        <Text>
          W celu uzyskania szczegółowych statystyk z dowolnego kraju - wpisz
          powyżej jego nazwę po angielsku i naciśnij "Pokaż".
        </Text>
      </View>
    )
  } else {
    return (
      <View>
        <View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>Państwo:</Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
              {countryDetails.country}
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Zachorowania dzisiaj:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.todayCases}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Śmierci dzisiaj:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.todayDeaths}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Przypadki krytyczne:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.critical}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Aktywne przypadki:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.active}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Łącznie przypadków:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.cases}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>
              Przypadków na milion mieszkańców:
            </Text>
            <Text style={{ fontSize: 16 }}>
              {countryDetails.casesPerOneMillion}
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Śmierci:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.deaths}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Śmierci na milion mieszkańców:</Text>
            <Text style={{ fontSize: 16 }}>
              {countryDetails.deathsPerOneMillion}
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Wyleczeni:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.recovered}</Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Testów na milion mieszkańców:</Text>
            <Text style={{ fontSize: 16 }}>
              {countryDetails.testsPerOneMillion}
            </Text>
          </View>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}
          >
            <Text style={{ fontSize: 16 }}>Łącznie testów:</Text>
            <Text style={{ fontSize: 16 }}>{countryDetails.totalTests}</Text>
          </View>
        </View>
      </View>
    )
  }
}

export default Details
