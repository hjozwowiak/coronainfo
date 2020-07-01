import React from 'react'
import { Button, Text, View } from 'react-native'

const Question = ({
  quizQuestion,
  questionCount,
  onChooseQuestionButtonPress,
  onNextButtonPress,
  numberOfQuestions,
  activeButton,
}) => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          padding: 15,
          backgroundColor: '#144099',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: 15,
        }}
      >
        <Text style={{ color: 'white', fontSize: 17 }}>
          {questionCount}. {quizQuestion.question}
        </Text>
      </View>
      <View style={{ marginHorizontal: 10, marginHorizontal: 20 }}>
        {quizQuestion.answers.map((answer) => {
          return (
            <View
              style={[activeButton === `${quizQuestion.question}-${answer.content}` ? {
                shadowColor: 'red',
                shadowOpacity: 0.5,
                shadowRadius: 5,
                margin: 10,
              } : {}, {
                borderWidth: 1,
                borderColor: '#ddd',
                borderRadius: 3,
                backgroundColor: '#eee',
                marginVertical: 5,
              }]}
            >
              <Button
                onPress={() => {
                  onChooseQuestionButtonPress(
                    answer.sick,
                    `${quizQuestion.question}-${answer.content}`
                  )
                }}
                key={`${quizQuestion.question}-${answer.content}`}
                title={answer.content}
              />
            </View>
          )
        })}
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
          <Button onPress={onNextButtonPress} title="Dalej" />
        </View>
        <Text>
          Pytanie {questionCount} z {numberOfQuestions}
        </Text>
      </View>
    </View>
  )
}

export default Question
