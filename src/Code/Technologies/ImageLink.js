import React, { Component } from 'react';

class ImageLink extends Component {
    render() {
    
      return (
          <a target='_blank' href={this.props.url} alt={this.props.name}><img src={this.props.image_url} alt={this.props.name} /></a>
      );
    }
  }
  
  export default ImageLink;