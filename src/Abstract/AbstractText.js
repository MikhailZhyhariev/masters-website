import React, { Component } from 'react';
import './Abstract.css';


class AbstractText extends Component {
  render() {
    const { items } = this.props;

    return (
      <article className="abstract__text">
        { items.map( (item, key) =>
            <div className="abstract__text-part" key={key}>
              <h3><a name={item.number}>{item.name}</a></h3>
              { item.text.map( (item, key) => <p key={key}>{item}</p>) }
              { item.subname ? <AbstractText items={item.subname} /> : '' }
            </div>
        )}
      </article>
    );
  }
}

export default AbstractText;
