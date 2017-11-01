import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import './FlashMessage.css'

class FlashMessage extends Component {
  constructor(props) {
    super(props);

    this.handleItem = this.handleItem.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
  }

  handleClick(item) {
    const { height } = this.props;
    const element = document.getElementById('item-' + item.id);
    const step = element.getBoundingClientRect().top / 40;

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

  handleMouseEnter(e) {
    const { language } = this.props;
    const help = ReactDOM.findDOMNode(this.refs.help);

    const messages = {
      "ru": {
        "paragraph": "Кликните, чтобы перейти к списку литературы",
        "link": "Кликните, чтобы открыть в новой вкладке"
      },
      "ua": {
        "paragraph": "Натисніть, щоб перейти до списку літератури",
        "link": "Натисніть, щоб відкрити в новій вкладці"
      },
      "en": {
        "paragraph": "Click to go to the list of sources",
        "link": "Click to open in a new tab"
      }
    }

    let message;
    if (language.active === 'ru') {
      message = messages.ru;
    } else if (language.active === 'ua') {
      message = messages.ua;
    } else {
      message = messages.en;
    }

    if (e.target.tagName === 'P') {
      help.innerHTML = message.paragraph
    } else if (e.target.tagName === 'A') {
      help.innerHTML = message.link
    }

    help.style.display = 'block';
  }

  handleMouseLeave(e) {
    const paragraphHelp = ReactDOM.findDOMNode(this.refs.help);
    paragraphHelp.style.display = 'none';
  }

  handleItem(item, key) {
    const { handleClick, handleMouseEnter, handleMouseLeave } = this;
    const { bibliography } = this.props;
    const content = bibliography[item - 1];
    const text = content.shortText;

    if (!content.link) {
      return <div className="item-part" key={key}>
        <p className="item-help" ref="help" />
        <p className="item item-empty"
           onClick={handleClick.bind(this, content)}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
          <span>{item}.</span>
          {text}
        </p>
      </div>
    } else {
      return <div className="item-part" key={key}>
        <p className="item-help" ref="help" />
        <p className="item item-noempty"
           onClick={handleClick.bind(this, content)}
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>
          <span>{item}.</span>
          {text}
        </p>
        <a className="link"
           href={content.link}
           target="_blank"
           onMouseEnter={handleMouseEnter}
           onMouseLeave={handleMouseLeave}>1</a>
      </div>
    }
  }

  render() {
    const { handleItem } = this;
    const { coord, item, bibliography, display, menu } = this.props;

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

    if (coord.top > (heightMessage + menu.height + 10)) {
      topTriangle = coord.top - 11; // triangle height + 1px
      topMessage = topTriangle - heightMessage + 4;
    } else {
      topTriangle = coord.bottom;
      topMessage = topTriangle + 5;
      transform = 'rotate(225deg)';
    }

    const screenWidth = document.documentElement.clientWidth
    if ((coord.left < widthMessage) && (screenWidth - coord.right > widthMessage)) {
      leftMessage = leftTriangle * 0.8;
    } else if ((coord.left < widthMessage) && (screenWidth - coord.right < widthMessage)) {
      leftMessage = leftTriangle - widthMessage / 2
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

    const styleEmptyBlock = {
      width: widthMessage
    }

    return (
      <span className="flash-message" style={styleMessage} ref="message" >
        <div className="empty-block top" style={styleEmptyBlock} />
        <div>
          {items.map( (item, key) => handleItem(item, key))}
        </div>
        <span className="triangle" style={styleTriangle} />
        <div className="empty-block" style={styleEmptyBlock} />
      </span>
    );
  }
}

function mapStateToProps(state) {
  return {
    language: state.language,
    menu: state.menu
  }
}

export default connect(mapStateToProps)(FlashMessage)
