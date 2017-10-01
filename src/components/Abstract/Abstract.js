import React, { Component } from 'react';
import './Abstract.css';

import AbstractMenu from './AbstractMenu.js';
import AbstractText from './AbstractText.js';
import content from '../../content/Abstract.json';

class Abstract extends Component {
  constructor(props) {
    super(props);

    // this.addHeaderCoord = this.addHeaderCoord.bind(this);

    this.state = {
      topCoord: []
    }
  }

  addHeaderCoord(item) {
    // let array = this.state.topCoord;
    // array.push(item);

    this.setState({
      topCoord: item
    });
  }

  scrollPage(refs) {
    // let top = ReactDOM.findDOMNode(this.refs.a).getBoundingClientRect().top;
    // let timer;
    //
    // timer = setInterval( () => {
    //   if (window.pageYOffset < top) {
    //     window.scrollBy(0, 10);
    //   } else {
    //     clearTimeout(timer);
    //   }
    // }, 5);
  }

  render() {
    const { addHeaderCoord } = this;
    const { padding, className } = this.props;
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
            <AbstractMenu items={content} onScroll={this.scrollPage.bind(this, this.refs.a)} onClick={addHeaderCoord} />
          </div>
          <AbstractText items={content} className={''} addHeader={addHeaderCoord.bind(this)} />
        </div>
      </div>
    );
  }
}

export default Abstract;
