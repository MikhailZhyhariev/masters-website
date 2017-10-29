import React, { Component } from 'react';
import './FlashMessage.css'

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.handleItem = this.handleItem.bind(this);
  }

  handleClick(item) {
    const { height } = this.props;
    const element = document.getElementById('item-' + item.id);
    const step = element.getBoundingClientRect().top / 100;

    const scrollHeight = Math.max(
      document.body.scrollHeight, document.documentElement.scrollHeight,
      document.body.offsetHeight, document.documentElement.offsetHeight,
      document.body.clientHeight, document.documentElement.clientHeight
    );
    const pageTopMax = scrollHeight - document.documentElement.clientHeight;

    const timerId = setInterval( () => {
      const top = element.getBoundingClientRect().top;
      if (top > 20 + height & window.pageYOffset < pageTopMax) {
        window.scrollBy(0, step);
      } else {
        clearInterval(timerId);
      }
    }, 5)
  }

  handleItem(item, key) {
    const { handleClick } = this;
    const { bibliography } = this.props;
    const content = bibliography[item - 1];
    const text = content.shortText;
    if (!content.link) {
      return <div className="item-part" key={key}>
        <p className="item item-empty"  onClick={handleClick.bind(this, content)}>
          <span>{item}.</span>
          {text}
        </p>
      </div>
    } else {
      return <div className="item-part" key={key}>
        <p className="item item-noempty" onClick={handleClick.bind(this, content)}>
          <span>{item}</span>
          {text}
        </p>
        <a className="link" href={content.link} target="_blank">1</a>
      </div>
    }
  }

  render() {
    const { handleItem } = this;
    const { coord, item, bibliography, display } = this.props;

    const limits = item.split('-');
    let items = [];
    let symbolCount = 0;
    if (limits.length !== 1) {
      for (let i = parseInt(limits[0], 10); i <= parseInt(limits[1], 10); i++) {
        items.push(i);
        const count = bibliography[i - 1].shortText.length;
        if (symbolCount < count) {
          symbolCount = count
        }
      }
    } else {
      items = limits;
      symbolCount = bibliography[item - 1].shortText.length;
    }

    const leftTriangle = coord.left + coord.width / 2 - 5; // triangle width / 2
    let topTriangle;
    let transform = null;

    let leftMessage, topMessage;
    let heightMessage = 30 * items.length;
    let widthMessage = 8.3 * symbolCount + 10;
    if (symbolCount < 40) widthMessage = 10 * symbolCount + 10;

    if (coord.top > (heightMessage + 60)) { // 10px + menu-height
      topTriangle = coord.top - 11; // triangle height + 1px
      topMessage = topTriangle - heightMessage + 4;
    } else {
      topTriangle = coord.bottom;
      topMessage = topTriangle + 5;
      transform = 'rotate(225deg)';
    }

    if (coord.left < widthMessage) {
      leftMessage = leftTriangle * 0.8;
    } else {
      leftMessage = leftTriangle - widthMessage * 0.8;
    }

    const styleTriangle = {
      left: leftTriangle,
      top: topTriangle,
      transform: transform
    };

    const styleMessage = {
      left: leftMessage,
      top: topMessage,
      height: heightMessage,
      width: widthMessage,
      display: display
    };

    return (
      <span className="flash-message" style={styleMessage} ref="message" >
        <div>
          {items.map( (item, key) => handleItem(item, key))}
        </div>
        <span className="triangle" style={styleTriangle} />
      </span>
    );
  }
}

export default FlashMessage
