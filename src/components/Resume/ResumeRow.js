import React, { Component } from 'react';
import './Resume.css';


class ResumeRow extends Component {
  handleLinkOpen(link) {
    window.open(link, "_blank");
  }

  render() {
    const { item } = this.props;
    const { handleLinkOpen } = this;

    return (
      <tr className="resume__table-row">
        <td className="resume__table-cell header">
          {item.header}
          {item.extend ? <div className="extend">*({item.extend})</div>: ''}
        </td>
        <td className="resume__table-cell content">
          { item.content.map( (cell, key) =>
            <div key={key} className="content-cell-part">
              { cell.name ?
                <strong>
                  {cell.link ?
                    <span className="table__link"
                         onClick={handleLinkOpen.bind(this, cell.link)}>
                       {cell.name}
                    </span> : cell.name}
                </strong> : ''}
              { cell.break ?
                <ul className="subcell">
                  { cell.text.map( (item, key) =>
                    <li key={key}>
                      <span>{key + 1}.</span>
                      { cell.link ?
                        <a href={item.link}
                          target="_blank"
                          className="table__link">
                          {item.text}
                        </a> : item }
                    </li>
                  )}
                </ul> : cell.text }
            </div>
          )}
        </td>
      </tr>
    );
  }
}

export default ResumeRow;
