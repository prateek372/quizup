import React, { Component } from 'react'

class Answers extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isAnswered: false,
      classNames: this.props.classNames
    }

    this.checkAnswer = this.checkAnswer.bind(this)
  }

  // called when answer element is clicked
  checkAnswer(e) {
    let { isAnswered } = this.props

    if (!isAnswered) {
      let elem = e.currentTarget
      let { correct, increaseScore } = this.props
      let answer = Number(elem.dataset.id)
      let updatedClassNames = this.props.classNames

      if (answer === correct) {
        updatedClassNames[answer - 1] = 'right'
        increaseScore()
      } else {
        updatedClassNames[answer - 1] = 'wrong'
      }

      this.setState({
        classNames: updatedClassNames
      })

      // this.props.classNames = updatedClassNames

      this.props.showButton()
    }
  }

  render() {
    let { answers } = this.props
    let { classNames } = this.state
    let { isAnswered } = this.props

    // clear classNames when questions are loaded first time
    if (!isAnswered) {
      classNames = this.props.classNames
    }
    console.log(isAnswered)

    let transition = {
      transitionName: 'example',
      transitionEnterTimeout: 500,
      transitionLeaveTimeout: 300
    }

    return (
      <div id="answers">
        <ul>
          <li onClick={this.checkAnswer} className={classNames[0]} data-id="1">
            <span>A</span> <p>{answers[0]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[1]} data-id="2">
            <span>B</span> <p>{answers[1]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[2]} data-id="3">
            <span>C</span> <p>{answers[2]}</p>
          </li>
          <li onClick={this.checkAnswer} className={classNames[3]} data-id="4">
            <span>D</span> <p>{answers[3]}</p>
          </li>
        </ul>
      </div>
    )
  }
}

export default Answers
