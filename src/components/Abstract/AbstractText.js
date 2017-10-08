import React, { Component } from 'react';
import './Abstract.css';

class AbstractText extends Component {
  // getHeadersTop() {
  //   const { addHeader, items } = this.props;
  //   const headers = items.map( (item) => {
  //     const coord = document.getElementById(item.number);
  //     return {
  //       name: item.name,
  //       top: coord.getBoundingClientRect().top
  //     }
  //   })
  //   addHeader(headers);
  // }

  render() {
    const { items } = this.props;
    // this.getHeadersTop.bind(this)

    return (
      <article className="abstract__text">
        { items.map( (item, key) =>
            <div className="abstract__text-part" key={key}>
              { isNaN(+item.number[0]) ? '' : <span>{item.number}</span> }
              <h3 id={item.number}>{item.name}</h3>
              { item.text.map( (item, key) => <p key={key}>{item}</p>) }
              { item.subname ? <AbstractText items={item.subname} /> : '' }
            </div>
        )}
      </article>
    );
  }
}

export default AbstractText;
