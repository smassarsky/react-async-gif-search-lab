import React, { Component } from 'react'

class GifSearch extends Component {

  constructor() {
    super()
    this.state = {
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    this.setState({ searchTerm: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.searchGifs(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Enter a search term:</label>
        <input onChange={this.handleChange} type="text" name="searchTerm" value={this.state.searchTerm} />
        <button type="submit">Find Gifs</button>
      </form>
    )    
  }
}

export default GifSearch