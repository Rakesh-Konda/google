// Write your code here
import {Component} from 'react'

import SuggestionItem from '../SuggestionItem'

import './index.css'

class GoogleSuggestions extends Component {
  constructor(props) {
    super(props)
    this.state = {
      suggestionsList: props.suggestionsList,
      hlo: '',
      place: 'search value',
    }
  }

  change = event => {
    console.log(event.target.value)
    const {suggestionsList} = this.state

    this.setState({hlo: event.target.value.toLowerCase()})
    const {hlo} = this.state
    const filter = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(hlo),
    )
    this.setState({suggestionsList: filter})
  }

  good = sugg => {
    this.setState({hlo: sugg})
  }

  render() {
    const {suggestionsList, place, hlo} = this.state
    return (
      <div>
        <div>
          <img
            className="img"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
        </div>
        <div className="bg">
          <img
            className="sear"
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
            alt="search icon"
          />
          <input
            type="search"
            onChange={this.change}
            value={hlo}
            placeholder={place}
          />

          <SuggestionItem
            suggestionsList={suggestionsList}
            place1={this.good}
          />
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
