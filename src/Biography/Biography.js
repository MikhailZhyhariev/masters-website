import React, { Component } from 'react';
import './Biography.css';

const content = [
  {
    header: 'Личностное становление',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt purus. Etiam efficitur risus eu tellus gravida porta. Nunc urna mauris, viverra ut dolor ac, luctus pellentesque felis. Pellentesque ipsum neque, vulputate non erat sed, pharetra eleifend lectus. Sed porta orci vel dui semper facilisis. Morbi imperdiet sed dolor ac tincidunt. Duis tortor lorem, fringilla non suscipit et, sagittis porttitor risus. Aenean ut nisl ut eros posuere ultrices.',
      'Nam imperdiet volutpat eros, non vulputate tortor vestibulum id. Suspendisse varius erat et posuere scelerisque. Donec pulvinar eget odio sed luctus. Morbi eget nisi convallis ex tincidunt porttitor. Duis ut vestibulum odio. Duis efficitur massa eget porta posuere. Fusce commodo molestie tempor. Nam auctor ac tellus eu condimentum.'
    ]
  },
  {
    header: 'Профессиональное становление',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt purus. Etiam efficitur risus eu tellus gravida porta. Nunc urna mauris, viverra ut dolor ac, luctus pellentesque felis. Pellentesque ipsum neque, vulputate non erat sed, pharetra eleifend lectus. Sed porta orci vel dui semper facilisis. Morbi imperdiet sed dolor ac tincidunt. Duis tortor lorem, fringilla non suscipit et, sagittis porttitor risus. Aenean ut nisl ut eros posuere ultrices.',
      'Nam imperdiet volutpat eros, non vulputate tortor vestibulum id. Suspendisse varius erat et posuere scelerisque. Donec pulvinar eget odio sed luctus. Morbi eget nisi convallis ex tincidunt porttitor. Duis ut vestibulum odio. Duis efficitur massa eget porta posuere. Fusce commodo molestie tempor. Nam auctor ac tellus eu condimentum.'
    ]
  },
  {
    header: 'Цели, планы и видение будущего',
    text: [
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt purus. Etiam efficitur risus eu tellus gravida porta. Nunc urna mauris, viverra ut dolor ac, luctus pellentesque felis. Pellentesque ipsum neque, vulputate non erat sed, pharetra eleifend lectus. Sed porta orci vel dui semper facilisis. Morbi imperdiet sed dolor ac tincidunt. Duis tortor lorem, fringilla non suscipit et, sagittis porttitor risus. Aenean ut nisl ut eros posuere ultrices.',
      'Nam imperdiet volutpat eros, non vulputate tortor vestibulum id. Suspendisse varius erat et posuere scelerisque. Donec pulvinar eget odio sed luctus. Morbi eget nisi convallis ex tincidunt porttitor. Duis ut vestibulum odio. Duis efficitur massa eget porta posuere. Fusce commodo molestie tempor. Nam auctor ac tellus eu condimentum.',
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis tincidunt purus. Etiam efficitur risus eu tellus gravida porta. Nunc urna mauris, viverra ut dolor ac, luctus pellentesque felis. Pellentesque ipsum neque, vulputate non erat sed, pharetra eleifend lectus. Sed porta orci vel dui semper facilisis. Morbi imperdiet sed dolor ac tincidunt. Duis tortor lorem, fringilla non suscipit et, sagittis porttitor risus. Aenean ut nisl ut eros posuere ultrices.',
      'Nam imperdiet volutpat eros, non vulputate tortor vestibulum id. Suspendisse varius erat et posuere scelerisque. Donec pulvinar eget odio sed luctus. Morbi eget nisi convallis ex tincidunt porttitor. Duis ut vestibulum odio. Duis efficitur massa eget porta posuere. Fusce commodo molestie tempor. Nam auctor ac tellus eu condimentum.'
    ]
  }
]

class Biography extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: content
    }
  }

  render() {
    return (
      <div className="biography">
        <div className="container">
          <h1 className="biography__title">Биография</h1>
          { content.map( (item, key) =>
            <div key={key}>
              <h3 className="biography__paragraph__title">{item.header}</h3>
              { item.text.map( (item, key) =>
                <p className="biography__text" key={key}>{item}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Biography;
