import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import content from '../../content/Abstract.json';

class Abstract extends Component {
  constructor(props) {
    super(props);

    this.addHeaderCoord = this.addHeaderCoord.bind(this);
    this.addHeaderName = this.addHeaderName.bind(this);

    this.state = {
      name: "",
      top: 0
    }
  }

  addHeaderCoord(coord) {
    this.setState({
      top: coord
    })
  }

  addHeaderName(name) {
    this.setState({
      name: name
    })
  }

  render() {
    const { addHeaderCoord, addHeaderName } = this;
    const { padding, className, headersTop } = this.props;
    const paddingFixed = padding + 20
    const style = {
      paddingTop: paddingFixed,
    }

    return (
      <div className="abstract" style={className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="abstract__title">Реферат по теме выпускной работы</h1>
          <div className="abstract__content">
            <h2 className="abstract__content-title">Содержание</h2>
            <AbstractMenu items={content} OnClick={addHeaderName} />
          </div>
          <AbstractText items={content} className={''} onClick={addHeaderCoord} />
        </div>
      </div>
    );
  }
}

export default Abstract;
