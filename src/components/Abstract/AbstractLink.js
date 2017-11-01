import React, { Component } from 'react';
import { connect } from 'react-redux';

import './Abstract.css';

import FlashMessage from '../FlashMessage/FlashMessage.js';
import bibliography from './AbstractBibliography.json';


class AbstractLink extends Component {
  constructor(props) {
    super(props);

    this.handleShowMessage = this.handleShowMessage.bind(this);
    this.handleHideMessage = this.handleHideMessage.bind(this);

    this.state = {
      display: 'none',
      coord: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        width: 0,
        height: 0
      }
    }
  }

  handleShowMessage(e) {
    const coord = e.target.getBoundingClientRect();
    this.setState({
      display: 'block',
      coord: coord
    })
  }

  handleHideMessage() {
    this.setState({
      display: 'none'
    })
  }

  render() {
    const { handleShowMessage, handleHideMessage } = this;
    const { coord, display } = this.state;
    const { item, menu } = this.props;

    return (
      <span onMouseEnter={handleShowMessage}
            onMouseLeave={handleHideMessage}
            ref="link" >
            [{item}].
            <FlashMessage coord={coord}
                          item={item}
                          bibliography={bibliography}
                          display={display}
                          height={menu.height} />
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
  }
}

export default connect(mapStateToProps)(AbstractLink)
