//import getUser from '../../script/userInfo/index'
import React from 'react'
import './index.css'
function getUser(resource) {
  fetch(resource)
    .then(function (response) {
      return response.json()
    })
    .then(function (myJson) {
      console.log(myJson)
    })
}

export default class Directory extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    }
  }
  componentDidMount() {
    const resource = 'https://reqres.in/api/unknown'
    getUser(resource)
    fetch(resource)
      .then((res) => res.json())
      .then((result) => {
        this.setState({
          isLoaded: true,
          items: result.data,
        })
      })
  }

  render() {
    console.log('22' + JSON.stringify(this.state.items))
    const { error, isLoaded, items } = this.state
    if (error) {
      return <div>Error: {error.message}</div>
    } else if (!isLoaded) {
      return <div>Loading...</div>
    } else {
      return (
        <div className="Container">
          <div>
            <form action="https://reqres.in/api/users" method="post">
              <label>First name:</label>
              <input type="text" id="name" name="name" />
              <br />
              <br />
              <label>Job:</label>
              <input type="text" id="job" name="job" />
              <br />
              <br />
              <input type="submit" value="確認" />
            </form>
          </div>

          <ul>
            {items.map((item) => (
              <li
                className="user-data"
                style={{ color: item.color }}
                key={item.id}
              >
                {item.name}
                <br />
                {item.year}
              </li>
            ))}
          </ul>
        </div>
      )
    }
  }
}
