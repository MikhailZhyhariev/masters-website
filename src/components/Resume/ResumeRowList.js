import React, { Component } from 'react';
import './Resume.css';


class ResumeRowList extends Component {

  render() {
    const { item } = this.props;

    return (
      <div className="resume__table-row">
        <div className="resume__table-cell header">
          {item.header}
          {item.extend ? <div className="extend">*({item.extend})</div>: ''}
        </div>
        <div className="resume__table-cell content">
          { item.content.map( (subitem, key) =>
            <div className="content-cell-part" key={key}>
              <strong>{subitem.name}</strong>
              <ul className="subcell">
                { subitem.text.map( (listItem, key) =>
                  <li key={key}>
                    <span>{key + 1}.</span>
                    {listItem}
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ResumeRowList;
