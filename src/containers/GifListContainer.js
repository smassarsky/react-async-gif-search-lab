import React, { Component } from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {

  constructor() {
    super()
    this.state = {
      gifs: []
    }
  }

  searchGifs = (str) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${str}&api_key=dc6zaTOxFJmzC&rating=g`)
    .then(resp => resp.json())
    .then(json => {
      console.log(json)
      this.setState({gifs: json.data.slice(0, 3)})
    })
    console.log(this.state.gifs)
  }

  render() {
    return (
    <div>
      <GifSearch searchGifs={this.searchGifs} />
      <GifList gifs={this.state.gifs} />
    </div>)
  }

}

export default GifListContainer