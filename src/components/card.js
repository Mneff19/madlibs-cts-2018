import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

  constructor() {
    super()

    this.state = {
      color: 'RED',
      pluralNoun: ''
    }

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event, attribute) {
    {/* console.log('Changed!', event.target.value);*/}
    this.setState({ [attribute]:event.target.value})
  }

  render() {
    return(
      <div className='card'>
        <h1>{this.state.color}</h1>
        {Input('Color', this.state.color, (event) => this.handleInputChange(event, 'color'))}
        {Input('Plural Noun', this.state.pluralNoun, (event) => this.handleInputChange(event, 'pluralNoun'))}
      </div>
    )
  }
}
export default Card ;
