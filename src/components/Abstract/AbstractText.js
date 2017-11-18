import React, { Component } from 'react';

import './Abstract.css';
import AbstractTable from './AbstractTable.js';
import AbstractLink from './AbstractLink.js';

import image1 from '../../img/abstract/1.gif';
import image2 from '../../img/abstract/2.jpg';
import image3 from '../../img/abstract/3.jpg';
import image4 from '../../img/abstract/4.jpg';
import image5 from '../../img/abstract/5.jpg';
import image6 from '../../img/abstract/6.jpg';
import image7 from '../../img/abstract/7.jpg';
import image8 from '../../img/abstract/8.jpg';
import image9 from '../../img/abstract/9.jpg';
import formula1 from '../../img/abstract/10.svg';
import formula2 from '../../img/abstract/11.svg';
import formula3 from '../../img/abstract/12.svg';
import formula4 from '../../img/abstract/13.svg';

class AbstractText extends Component {

  render() {
    const { items } = this.props;
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];
    const formulas = [formula1, formula2, formula3, formula4];

    return (
      <article className="abstract__text">
        { items.map( (item, key) =>
            <div className="abstract__text-part" key={key}>
              { isNaN(+item.number[0]) ? '' : <span>{item.number}</span> }
              <h3 id={item.number}>{item.name}</h3>
              { item.text.map( (item, key) =>
                 <div className="abstract__text-block" key={key}>
                  { item.image ? <img src={images[item.number]} alt={item.paragraph} /> : null}
                  { item.formula ? <img src={formulas[item.number]} alt="formula" className="formula" /> : null }
                  <p className={item.image ? 'image-description': ''}>
                    {item.paragraph}
                    {item.link ? <AbstractLink item={item.link} /> : null}
                    {item.productLink ? <a href={item.productLink.link}
                                           target="_blank">
                                           {item.productLink.name}
                                         </a> : null }
                  </p>
                  { item.table ? <AbstractTable content={item.table} /> : null }
                 </div>
              )}
              { item.subname ? <AbstractText items={item.subname} /> : '' }
            </div>
        )}
      </article>
    );
  }
}

export default AbstractText;
