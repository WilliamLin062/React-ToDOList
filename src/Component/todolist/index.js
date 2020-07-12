import React from 'react'
import './index.css'

export default class Todolist extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: [],
      value: '',
      isPush: false,
    }

    this.handleChange = this.handleChange.bind(this)
    this.handaleSubmit = this.handaleSubmit.bind(this)
    this.close = this.close.bind(this)
  }
  save() {
    const { text, value } = this.state

    this.setState(
      {
        text: text.concat(value),
      },
      () => {
        console.log(this.state.text)
      }
    )

    console.log(JSON.stringify(this.state.text))
  }
  handaleSubmit(event) {
    if (this.state.value === '') {
      alert('請輸入東西')
    } else {
      this.setState(
        {
          text: this.state.text.concat(this.state.value),
        },
        () => {
          console.log(this.state.text)
        }
      )
    }
    event.preventDefault()
  }
  handleChange(event) {
    this.setState(
      {
        value: event.target.value,
      },
      () => {
        console.log(this.state.text)
      }
    )
  }
  close(index) {
    const { text } = this.state
    text.splice(index, 1)
    this.setState({
      text: text,
    })
    console.log(index)
  }

  render() {
    const { text, value } = this.state
    const place = '輸入代辦........'
    if (text.length === 0) {
      return (
        <div>
          <div>
            <form onSubmit={this.handaleSubmit}>
              <x-lable>
                <input
                  type="text"
                  value={value}
                  onChange={this.handleChange}
                  placeholder={place}
                ></input>
              </x-lable>
              <input className={'myInput'} type="submit" value="Submit"></input>
            </form>
          </div>
          <div>沒 有 任 何 東 西 喔 !</div>
        </div>
      )
    } else {
      return (
        <div>
          <div>
            <form onSubmit={this.handaleSubmit}>
              <x-lable>
                <input
                  type="text"
                  value={value}
                  onChange={this.handleChange}
                  placeholder={place}
                ></input>
              </x-lable>
              <input className={'myInput'} type="submit" value="Submit"></input>
            </form>
          </div>
          <ul className={'todo2'}>
            {text.map((item) => (
              <div className={'todo'}>
                <input type="checkbox" className="checkBox" name="cc" />
                <div className="content">{item}</div>
                <div
                  className="close"
                  onClickCapture={() => this.close(text.indexOf(item))}
                >
                  X
                </div>
              </div>
            ))}
          </ul>
        </div>
      )
    }
  }
}
