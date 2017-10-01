import React, { Component } from 'react';
import './Abstract.css';


class AbstractText extends Component {
  // onScroll(item) {
  //   // const top = ReactDOM.findDOMNode(item).getBoundingClientRect().top;
  //   const h = document.getElementsByTagName('h3');
  //   // alert(h);
  //   for (let i = 0; i < h.length; i++) {
  //     // alert(h[i]);
  //     let top = h[i].getBoundingClientRect().top;
  //     alert(h[i].innerText);
  //   }
  // }

  // componentDidMount() {
  //     const { addHeader } = this.props;
  //     const headers = document.getElementsByTagName('h3');
  //
  //     for (let i = 0; i < headers.length; i++) {
  //       let header = {
  //         name: headers[i].innerText,
  //         coord: headers[i].getBoundingClientRect().top
  //       };
  //       addHeader(header.coord);
  //     }
  // }

  render() {
    const { items } = this.props;
    return (
      <article className="abstract__text">
        { items.map( (item, key) =>
            <div className="abstract__text-part" key={key}>
              { isNaN(+item.number[0]) ? '' : <span>{item.number}</span> }
              <h3>{item.name}</h3>
              { item.text.map( (item, key) => <p key={key}>{item}</p>) }
              { item.subname ? <AbstractText items={item.subname} /> : '' }
            </div>
        )}
      </article>
    );
  }
}

export default AbstractText;
