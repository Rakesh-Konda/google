// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionsList, place1} = props

  const matter = sugg => {
    place1(sugg)
  }

  return (
    <ul>
      {suggestionsList.map(each => (
        <div className="ch" key={each.id}>
          <li className="li" onClick={() => matter(each.suggestion)}>
            {each.suggestion}
          </li>
          <img
            className="arr"
            onClick={() => matter(each.suggestion)}
            src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png "
            alt="arrow"
          />
        </div>
      ))}
    </ul>
  )
}

export default SuggestionItem
