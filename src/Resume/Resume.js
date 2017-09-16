import React, { Component } from 'react';
import './Resume.css';

import ResumeTable from '../Resume/ResumeTable.js';

const tableContent = [
  {header: 'ФИО', content: ['Жигарев Михаил Юрьевич']},
  {header: 'Дата рождения', content: ['11.02.1994']},
  {header: 'Место Рождения', content: ['г. Доброполье']},
  {header: 'Школа', content: ['Школа №19 г. Доброполье (2001-2012)']},
  {header: 'ВУЗ', content: ['Бакавриат: Донецкий национальный технический университет (2012-2016)', 'Магистратура:']},
  {header: 'Средний балл', content: ['']},
  {header: 'Владение языками', content: ['']},
  {header: 'Личные достижения', content: ['']},
  {header: 'Увлечения', content: ['']},
  {header: 'Личные качества', content: ['']},
  {header: 'Профессиональная специализация и владение компьютером', content: ['']},
  {header: 'Дополнительные курсы, стажировки, гаранты', content: ['']},
  {header: 'Опыт работы', content: ['']},
  {header: 'Планы на будущее', content: ['']},
  {header: 'Контактная информация', content: ['']}
];


class Resume extends Component {
  render() {
    return (
      <div className="resume">
        <div className="container">
          <h1 className="resume__title">Краткое резюме магистра</h1>
          <ResumeTable items={ tableContent }/>
        </div>
      </div>
    );
  }
}

export default Resume;
