import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Menu.css';

class MenuButton extends Component {
  handleOpenClose() {
    const { handleOpen, updateClass, open, setClassNameButton } = this.props;

    let className = '';

    if (!open) {
      className = 'menu__button-down';
      updateClass('menu-open');
    } else {
      className = 'menu__button-up';
      updateClass('menu-close');
    }

    handleOpen(!open);
    setClassNameButton(className);
  }

  handleTopPossition() {
    const button = ReactDOM.findDOMNode(this.refs.button);
    let top = 0;
    if (window.pageYOffset <= 50) {
      top = 60 - window.pageYOffset + 'px';
    } else {
      top = 10 + 'px';
    }
    button.style.top = top;
  }

  componentDidMount() {
    window.addEventListener('button-top', this.handleTopPossition());
  }

  componentWillUpdate() {
    this.handleTopPossition();
  }

  componentWillUnmount() {
    window.removeEventListener('button-top', this.handleTopPossition());
  }

  render() {
    const { classNameButton } = this.props;

    return (
      <button className={'menu__button ' + classNameButton}
              onClick={this.handleOpenClose.bind(this)}
              ref="button" />
    );
  }
}

export default MenuButton;
