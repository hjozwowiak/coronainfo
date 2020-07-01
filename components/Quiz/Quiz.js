import React, { Component } from 'react'
import { Button, Text, View } from 'react-native'

import Question from './Question/Question'
import Summary from './Summary/Summary'

import quizQuestions from '../../constants/QuizQuestions'

class Quiz extends Component {
  state = {
    answers: { sick: 0, notSick: 0 },
    quizQuestions: quizQuestions,
    questionCount: 1,
    numberOfQuestions: quizQuestions.length,
    currentAnswer: null,
    activeButton: false,
  }

  onChooseQuestionButtonPress = (sick, buttonId) => {
    this.setState({ currentAnswer: sick, activeButton: buttonId })
  }

  onNextButtonPress = () => {
    if (this.state.currentAnswer === null) {
      return false
    }

    if (this.state.currentAnswer === true) {
      this.setState({
        answers: { ...this.state.answers, sick: this.state.answers.sick + 1 },
      })
    } else if (this.state.currentAnswer === false) {
      this.setState({
        answers: {
          ...this.state.answers,
          notSick: this.state.answers.notSick + 1,
        },
      })
    }

    this.setState({ currentAnswer: null })
    this.setState({ questionCount: this.state.questionCount + 1 })
    this.fetchQuestion()
  }

  fetchQuestion = () => {
    if (this.state.quizQuestions.length === 0) {
      this.setState({ quizQuestions: quizQuestions })
      return false
    }
    this.setState({
      quizQuestions: this.state.quizQuestions.slice(1),
    })
  }

  onRestartQuizButtonPress = () => {
    this.restartQuiz()
  }

  restartQuiz = () => {
    this.setState({
      answers: { sick: 0, notSick: 0 },
      quizQuestions: quizQuestions,
      questionCount: 1,
    })
  }

  render() {
    const { quizQuestions, numberOfQuestions } = this.state

    if (quizQuestions.length > 0) {
      return (
        <Question
          quizQuestion={quizQuestions[0]}
          questionCount={this.state.questionCount}
          onChooseQuestionButtonPress={(sick, buttonId) => {
            this.onChooseQuestionButtonPress(sick, buttonId)
          }}
          onNextButtonPress={this.onNextButtonPress}
          numberOfQuestions={numberOfQuestions}
          activeButton={this.state.activeButton}
        />
      )
    } else {
      return (
        <Summary
          answers={this.state.answers}
          numberOfQuestions={this.state.numberOfQuestions}
          onRestartQuizButtonPress={this.onRestartQuizButtonPress}
        />
      )
    }
  }
}

export default Quiz
