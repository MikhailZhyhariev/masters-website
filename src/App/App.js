import React, { Component } from 'react';
import './App.css';
import '../font.css';

import Header from '../Header/Header.js';
import Menu from '../Menu/Menu.js';
import Resume from '../Resume/Resume.js';
import Biography from '../Biography/Biography.js';
import Abstract from '../Abstract/Abstract.js';
import Library from '../Library/Library.js';
import Links from '../Links/Links.js';


const menuItems = [
  {name: 'Резюме', element: <Resume />, index: 0},
  {name: 'Биография', element: <Biography />, index: 1},
  {name: 'Реферат', element: <Abstract />, index: 2},
  {name: 'Библиотека', element: <Library />, index: 3},
  {name: 'Ссылки', element: <Links />, index: 4},
  {name: 'Отчет о поиске', element: "", index: 5},
  {name: 'Индивидуальный раздел', element: "", index: 6}
]


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      elements: menuItems,
    };
  }

  render() {
    const { elements } = this.state;

    return (
      <div className="app">
        <Header />
        <Menu items={ elements } />
      </div>
    );
  }
}

export default App;
