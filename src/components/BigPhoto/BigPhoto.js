import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './BigPhoto.css';
import photo from '../../img/photo360x480.jpg';

class BigPhoto extends Component {
  closePhoto() {
    ReactDOM.unmountComponentAtNode(
      document.getElementById('big-photo')
    )

    const page = document.getElementById('root');
    page.style.filter = 'none';
  }

  render() {
    const style = {
      left: document.documentElement.clientWidth / 2 - 180,
      top: document.documentElement.clientHeight / 2 - 240
    }

    return (
      <div className="big-photo" style={style}>
        <img src={photo} alt="Zhyhariev Mikhail" />
        <button onClick={this.closePhoto.bind(this)} />
      </div>
    );
  }
}

export default BigPhoto
