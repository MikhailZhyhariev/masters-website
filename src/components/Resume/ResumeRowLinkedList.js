import React, { Component } from 'react';
import './Resume.css';


class ResumeRowLinkedList extends Component {
  handleLinkOpen(link) {
    window.open(link, "_blank");
  }

  render() {
    const { item } = this.props;
    const { handleLinkOpen } = this;

    return (
      <div className="resume__table-row">
        <div className="resume__table-cell header">
          {item.header}
          {item.extend ? <div className="extend">*({item.extend})</div>: ''}
        </div>
        <div className="resume__table-cell content">
          { item.content.map( (subitem, key) =>
            <div className="content-cell-part" key={key}>
              <strong className="table__link"
                      onClick={handleLinkOpen.bind(this, subitem.link)}>
                      {subitem.name}
              </strong>
              <ul className="subcell">
                { subitem.text.map( (listItem, key) =>
                  <li key={key}
                      className="table__link"
                      onClick={handleLinkOpen.bind(this, listItem.link)}>
                    <span>{key + 1}.</span>
                    {listItem.text}
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

export default ResumeRowLinkedList;
