import React, { Component } from 'react';
import './Resume.css';

import vk from '../../img/vk-logo.svg';
import telegram from '../../img/telegram-logo.svg';
import e_mail from '../../img/e-mail-logo.svg';
import github from '../../img/github-logo.svg';

class ResumeRowAbout extends Component {

  render() {
    return (
      <div className="resume__table-row">
        <div className="resume__table-cell header">Контактная информация</div>
        <div className="resume__table-cell about">
          <a href="https://vk.com/id24368402" target="_blank" rel="noopener noreferrer"><img src={vk} alt="vk" /></a>
          <a href="https://t.me/ZhigarievMikhail" target="_blank" rel="noopener noreferrer"><img src={telegram} alt="telegram" /></a>
          <a href="https://github.com/MikhailZhyhariev" target="_blank" rel="noopener noreferrer"><img src={github} alt="github" /></a>
          <a href="mailto:zhigarev_mikhail@mail.ru"><img src={e_mail} alt="email" /></a>
        </div>
      </div>
    );
  }
}

export default ResumeRowAbout;
