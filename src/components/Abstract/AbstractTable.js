import React, { Component } from 'react';
import './Abstract.css';

class AbstractTable extends Component {
  constructor(props) {
    super(props);

    this.handleRow = this.handleRow.bind(this);
  }

  handleRow(item, key) {
    if (!item.union) {
      const content = item.content.map( (item, key) =>
        <div className="abstract__table-cell-part" key={key}>{item}</div>
      )

      return <div className="abstract__table-row" key={key}>
        <div className="abstract__table-cell header">{item.header}</div>
        <div className="abstract__table-cell content">{content}</div>
      </div>
    } else {
      return <div className="abstract__table-row" key={key}>
        <div className="abstract__table-cell header center">{item.header}</div>
      </div>
    }
  }

  render() {
    const { content } = this.props;
    const { handleRow } = this;

    return (
      <div className="abstract__table">
        { content.map( (item, key) => handleRow(item, key)) }
      </div>
    );
  }
}

export default AbstractTable;
