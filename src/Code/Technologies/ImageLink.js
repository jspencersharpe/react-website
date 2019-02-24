import React, { Component } from 'react';

class ImageLink extends Component {
    render() {

      return (
          <a target='_blank' rel="noopener noreferrer" href={this.props.url} alt={this.props.name}>
            <img src={this.props.image_url} alt={this.props.name} width="100" height="100" />
          </a>
      );
    }
  }

  export default ImageLink;