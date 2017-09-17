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
            { item.text.map( (par, key) => {
              return <p key={key}>{par}</p>
            })}
            { item.subname.map( (subitem, key) => {
              return <div className="abstract__text-part" key={key}>
                <h3 key={key}><a name={subitem.number}>{subitem.name}</a></h3>
                { item.text.map( (par, key) => {
                  return <p key={key}>{par}</p>
                })}
              </div>
            })}
          </div>
        )}
      </article>
    );
  }
}

export default AbstractText;
