import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './DocumentPreview.css';

import Article1 from '../Articles/Article1.js';

class DocumentPreview extends Component {
  constructor(props) {
    super(props);

    this.closeDocument = this.closeDocument.bind(this);
    this.changeScale = this.changeScale.bind(this);
    this.clickScale = this.clickScale.bind(this);
    this.scaleList = this.scaleList.bind(this);

    this.state = {
      scale: 1,
      popup: 'none'
    }
  }

  componentWillMount() {
    const original_width = 1190;
    const width = document.documentElement.clientWidth - 140;
    let scale = 1;
    while (original_width * scale > width) {
      scale -= 0.1;
    }

    this.setState({
      scale: scale
    })
  }

  closeDocument() {
    ReactDOM.unmountComponentAtNode(
      document.getElementById('document')
    )

    const page = document.getElementById('root');
    page.style.position = 'static';
    page.style.filter = 'none';

    window.scrollTo(0, this.props.top);
  }

  changeScale(value) {
    this.setState({
      scale: value,
      popup: 'none'
    })
  }

  clickScale(value) {
     this.setState({
      popup: this.state.popup === 'none' ? 'block' : 'none'
    })
  }

  scaleList() {
    const { changeScale } = this;
    const { scale } = this.state;
    const original_width = 1190;
    const width = document.documentElement.clientWidth;

    let edge;
    if (width < 768) {
      edge = 50
    } else {
      edge = 140
    }

    let scaleLocal = this.state.scale < 0.5 ? this.state.scale : 0.5;
    let scaleListArray = [];
    while (original_width * scaleLocal < width - edge) {
      scaleListArray.push(scaleLocal);
      scaleLocal += 0.1
    }

    return <ul>
      {scaleListArray.map( (item, key) =>
        <li key={key}
            className={scale === Math.round(item * 10) / 10 ? 'active' : null } onClick={changeScale.bind(this, item)}>
            {Math.round(item * 100) + '%'}
        </li>
      )}
    </ul>
  }

  render() {
    const { closeDocument, clickScale, scaleList } = this;
    const { scale, popup } = this.state;

    const original_width = 1190;
    const original_height = 1685;

    const buttonStyle = {
      left: (document.documentElement.clientWidth - original_width * scale) / 2 + original_width * scale + 5
    }

    const scaleStyle = {
      display: popup
    }

    return (
      <div className="document-preview">
        <div className="buttons" style={buttonStyle} >
          <button className="close" onClick={closeDocument} />
          <button className="scale" onClick={clickScale}/>
          <div className="popup" style={scaleStyle}>
            {scaleList()}
            <div className={scale === 0.5 ? "triangle triangle-red" : "triangle"} />
          </div>
        </div>
        <Article1 width={original_width} height={original_height} scale={scale} />
      </div>
    );
  }
}


export default DocumentPreview;
