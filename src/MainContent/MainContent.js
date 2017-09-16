import React, { Component } from 'react';


class MainContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedItem: null
    };
  }

  componentDidMount (selectedItem) {
    this.setState({ selectedItem });
  }

  render() {
    const { items } = this.props;

    return (
      <main>
        { items[0].element }
      </main>
    );
  }
}

export default MainContent;
