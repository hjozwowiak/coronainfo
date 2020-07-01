import React from 'react'
import { Button, Text, View } from 'react-native'

const Question = ({ answers, numberOfQuestions, onRestartQuizButtonPress }) => {
  const sickPercentage = Math.round((answers.sick / numberOfQuestions) * 100)

  let notification = ''

  if (sickPercentage >= 75) {
    notification = 'Powinieneś/powinnaś jak najszybciej udać się do lekarza!'
  } else if (sickPercentage >= 50) {
    notification = 'Jest duża szansa, ze jesteś chory/a. Udaj się do lekarza.'
  } else if (sickPercentage >= 25) {
    notification =
      'Monitoruj swój stan zdrowia i codziennie mierz temperaturę. Jeśli objawy nie będą ustępować - udaj się do lekarza.'
  } else {
    notification =
      'Noś maseczkę, używaj płynu antybakteryjnego, ale nie panikuj.'
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 10 }}>
      <Text style={{ textAlign: 'center', fontSize: 15 }}>
        Odpowiedziałeś/aś na {numberOfQuestions} pytań. Zgodnie z wynikami testu
        chorujesz na COVID-19 na:
      </Text>
      <View
        style={{
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: 'yellow',
          alignItems: 'center',
          justifyContent: 'center',
          margin: 40,
        }}
      >
        <Text style={{ fontSize: 30 }}>{sickPercentage}%</Text>
      </View>
      <View
        style={{
          backgroundColor: '#144099',
          padding: 15,
          borderRadius: 6,
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 17 }}>
          {notification}
        </Text>
      </View>
      <View
        style={{
          padding: 15,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          alignItems: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: '#222',
            marginVertical: 15,
            borderRadius: 6,
            padding: 5,
            marginBottom: 40,
            alignSelf: 'stretch',
          }}
        >
          <Button title="Powtórz test" onPress={onRestartQuizButtonPress} />
        </View>
      </View>
    </View>
  )
}

export default Question
