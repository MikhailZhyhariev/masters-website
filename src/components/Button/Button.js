import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  btnClick() {
    const { className, onClick, classChange, coord } = this.props;
    const top = window.pageYOffset;

    if (className === 'button-up') {
      onClick(top)
      const step = top / 100

      const timerUp = setInterval( () => {
        if (window.pageYOffset !== 0) {
          window.scrollBy(0, -step)
        } else {
          clearInterval(timerUp)
          classChange('button-down');

          // const arrow = document.getElementById('button');
          // arrow.style.transform = 'rotate({%s}deg)' % 90;
        }
      }, 5)
    } else {
      const step = coord / 100;
      
      let timerDown = setInterval( () => {
        if (window.pageYOffset < coord) {
          window.scrollBy(0, step)
        } else {
          clearInterval(timerDown);
          classChange('button-up');
          onClick(0);
        }
      }, 5)
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.props.updateClass)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.updateClass)
  }

  render() {
    const { btnClick } = this;
    const { coord, className } = this.props;
    let style = null
    if (window.pageYOffset <= document.documentElement.clientHeight & coord === 0) {
      style = {
        display: 'none'
      }
    } else {
      style = null
    }

    return (
      <div className={ 'button ' + className }
           onClick={btnClick.bind(this)}
           style={style}
           id="button"
      />
    )
  }
}

export default Button;
