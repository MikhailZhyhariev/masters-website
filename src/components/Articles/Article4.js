import React, { Component } from 'react';
import './Articles.css'

import { InlineMath } from 'react-katex';

import image1 from '../../img/article/article4/1.jpg';
import image2 from '../../img/article/article4/2.jpg';
import image3 from '../../img/article/article4/3.jpg';
import image4 from '../../img/article/article4/4.png';
import image5 from '../../img/article/article4/5.png';

import './Article4.css'

class Header extends Component {
  render() {
    const { page } = this.props;

    return (
      <table className="header">
        <tr className="header-row">
          <td className="header-cell header-cell-logo" />
          <td className="header-cell main-cell">Техническая спецификация <br /> <strong>BPM180</strong></td>
          <td className="header-cell right-cell">Страница {page}</td>
        </tr>
      </table>
    )
  }
}

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="left">BST-BPM180-DS000-09 | Ревизия 2.5 | Апрель 2013</div>
          <div className="right">Bosch Sensortec</div>
        </div>
        <div className="footer-bottom">
          <div className="copyright">&copy;</div>
          <div className="right">Bosch Sensortec GmbH зарезервировала все права, в том числе надлежащие права на производство. Мы оставляем за собой права на иземенения документа, такие как копирование и передача третьим лицам. BOSCH и символ являются зарегистрированными товарными знаками Robert Bosch GmbH, Германия.
          <br />
          Примечание: Спецификации в этом документе могут быть изменены без предварительного уведомления.
          </div>
        </div>
      </footer>
    )
  }
}

class Article1 extends Component {
  render() {
    const { width, height, scale } = this.props;
    const style = {
      width: width * scale,
      height: height * scale,
      fontSize: 22 * scale,
      padding: 113 * scale,
      textIndent: 0,
      fontFamily: 'Helvetica Neue'
    }

    return (
      <div className="document">
        <div className="page" style={style}>
          <Header page="1" />
          <main className="text">
            <h1 className="title">BPM180</h1>
            <br />
            <h1 className="title">Датчик цифрового давления</h1>
            <br />
            <p className="paragraph bold">BPM180 общее описание</p>
            <br />
            <p className="paragraph">BMP180 является совместимым с функциональностью преемником BMP085, нового поколения высокоточных цифровых датчиков давления для потребительских применений.</p>
            <br />
            <p className="paragraph">Ультранизкая мощность, низковольтная электроника BMP180 оптимизирована для использования в мобильных телефонах, КПК, GPS-навигационных устройствах и наружном оборудовании. При низком уровне шума всего 0,25м при быстром времени преобразования BMP180 обеспечивает превосходную производительность. Интерфейс I2C позволяет легко интегрировать систему с микроконтроллером.</p>
            <br />
            <p className="paragraph">BMP180 основан на пьезорезистивной технологии для устойчивости к электромагнитной совместимости, высокой точности и линейности, а также долговременной стабильности.</p>
            <br />
            <p className="paragraph">Robert Bosch является лидером мирового рынка датчиков давления в автомобильных приложениях. Основываясь на опыте более 400 миллионов датчиков давления в полевых условиях, BMP180 продолжает новое поколение датчиков механической обработки.</p>
            <br />
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="2" />
          <main className="text">
            <p className="paragraph bold big-font">1. Электрические характеристики</p>
            <br />
            <p className="paragraph">Если не указано иное, данные значения равны ±3-Sigma значениям в диапазоне температуры/напряжения в данном режиме работы. Все значения представляют собой спецификацию новых деталей; дополнительный дрейф припоя показан отдельно.</p>
            <br />
            <p className="paragraph center">Таблица 1: Рабочее состояние, выходной сигнал и механические характеристики</p>
            <br />
            <table className="table-sheet">
              <thead className="head">
                <tr>
                  <td className="cell gray" width="30%">Параметр</td>
                  <td className="cell gray">Символ</td>
                  <td className="cell gray">Состояние</td>
                  <td className="cell gray">Мин.</td>
                  <td className="cell gray">Станд.</td>
                  <td className="cell gray">Макс.</td>
                  <td className="cell gray">Ед. Изм.</td>
                </tr>
              </thead>
              <tbody class="body">
                <tr>
                  <td className="cell lightgray" rowSpan="2">Рабочая температура</td>
                  <td className="cell lightgray" rowSpan="2"><InlineMath>T_A</InlineMath></td>
                  <td className="cell lightgray">эксплуатационный</td>
                  <td className="cell lightgray">-40</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">+85</td>
                  <td className="cell lightgray" rowSpan="2"><InlineMath>{"^{\\circ}C"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray">полная точность</td>
                  <td className="cell gray">0</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">+65</td>
                </tr>
                <tr>
                  <td className="cell lightgray" rowSpan="2">Напряжение питания</td>
                  <td className="cell lightgray" rowSpan="2"><InlineMath>{"V_{DD}"}</InlineMath></td>
                  <td className="cell lightgray">пульсация макс.</td>
                  <td className="cell lightgray">1.8</td>
                  <td className="cell lightgray">2.5</td>
                  <td className="cell lightgray">3.6</td>
                  <td className="cell lightgray" rowSpan="2">V</td>
                </tr>
                <tr>
                  <td className="cell gray"></td>
                  <td className="cell gray">1.62</td>
                  <td className="cell gray">2.5</td>
                  <td className="cell gray">3.6</td>
                </tr>
                <tr>
                  <td className="cell lightgray" rowSpan="5">Ток питания <br /> @ 1 измерение / с. <br /> 25<InlineMath>{"^{\\circ}C"}</InlineMath></td>
                  <td className="cell lightgray"><InlineMath>{"I_{DDLOW}"}</InlineMath></td>
                  <td className="cell lightgray">режим сверхнизкой мощности</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">3</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray"><InlineMath>{"I_{DDSTD}"}</InlineMath></td>
                  <td className="cell gray">стандартный режим</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">5</td>
                  <td className="cell gray"></td>
                  <td className="cell gray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell lightgray"><InlineMath>{"I_{DDHR}"}</InlineMath></td>
                  <td className="cell lightgray">режим высокого разрешения</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">7</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray"><InlineMath>{"I_{DDUHR}"}</InlineMath></td>
                  <td className="cell gray">режим сверхвысокого разрешения</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">12</td>
                  <td className="cell gray"></td>
                  <td className="cell gray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell lightgray"><InlineMath>{"I_{DDAR}"}</InlineMath></td>
                  <td className="cell lightgray">режим расширенного разрешения</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">32</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray">Пиковый ток</td>
                  <td className="cell gray"><InlineMath>{"I_{peak}"}</InlineMath></td>
                  <td className="cell gray">во время конверсии</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">650</td>
                  <td className="cell gray">1000</td>
                  <td className="cell gray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell lightgray">Резервный ток</td>
                  <td className="cell lightgray"><InlineMath>{"I_{DDSBM}"}</InlineMath></td>
                  <td className="cell lightgray">@ 25 <InlineMath>{"^{\\circ} C"}</InlineMath></td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">0.1</td>
                  <td className="cell lightgray">4<InlineMath>^1</InlineMath></td>
                  <td className="cell lightgray"><InlineMath>{"\\mu A"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray" rowSpan="4">Относительная точность при измерении давления <br /> <InlineMath>{"V_{DD}=3.3V"}</InlineMath></td>
                  <td className="cell gray" rowSpan="2"></td>
                  <td className="cell gray" rowSpan="2">950...1050 гПа <br /> @ 25 <InlineMath>{"^{\\circ} C"}</InlineMath></td>
                  <td className="cell gray"></td>
                  <td className="cell gray"><InlineMath>\pm</InlineMath>0.12</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>1.0</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">м</td>
                </tr>
                <tr>
                  <td className="cell gray" rowSpan="2"></td>
                  <td className="cell gray" rowSpan="2">700...900 гПа <br /> 25...40 <InlineMath>{"^{\\circ} C"}</InlineMath></td>
                  <td className="cell gray"></td>
                  <td className="cell gray"><InlineMath>\pm</InlineMath>0.12</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>1.0</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">м</td>
                </tr>
                <tr>
                  <td className="cell gray" rowSpan="4">Абсолютная точность при изменении давления <br /> <InlineMath>{"V_{DD}=3.3V"}</InlineMath></td>
                  <td className="cell gray" rowSpan="2"></td>
                  <td className="cell gray" rowSpan="2">300...1100 гПа <br /> 0...+65 <InlineMath>{"^{\\circ} C"}</InlineMath></td>
                  <td className="cell gray">-4.0</td>
                  <td className="cell gray">-1.0<InlineMath>^*</InlineMath></td>
                  <td className="cell gray">+2.0</td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray">-6.0</td>
                  <td className="cell lightgray">-1.0<InlineMath>^*</InlineMath></td>
                  <td className="cell lightgray">+4.5</td>
                  <td className="cell lightgray">м</td>
                </tr>
                <tr>
                  <td className="cell gray" rowSpan="2"></td>
                  <td className="cell gray" rowSpan="2">300...1100 гПа <br /> -20...0 <InlineMath>{"^{\\circ} C"}</InlineMath></td>
                  <td className="cell gray"></td>
                  <td className="cell gray"><InlineMath>\pm</InlineMath>0.12</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>1.0</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">м</td>
                </tr>
                <tr>
                  <td className="cell gray" rowSpan="2">Разрешение выходных данных</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">давление</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">0.01</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">температура</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">0.1</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>{"^{\\circ}C"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray">Шум при измерении давления</td>
                  <td className="cell gray"></td>
                  <td className="cell gray" colSpan="5">см. таблицу на странице 12-13</td>
                </tr>
                <tr>
                  <td className="cell lightgray" rowSpan="2">Абсолютная точность при измерении температуры <br /> <InlineMath>{"V_{DD}=3.3V"}</InlineMath></td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">@ 25 <InlineMath>{"^{\\circ}C"}</InlineMath></td>
                  <td className="cell lightgray">-1.5</td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>0.5</td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>1.5</td>
                  <td className="cell lightgray"><InlineMath>{"^{\\circ}C"}</InlineMath></td>
                </tr>
                <tr>
                  <td className="cell gray"></td>
                  <td className="cell gray">0...65 <InlineMath>{"^{\\circ}C"}</InlineMath></td>
                  <td className="cell gray">-2.0</td>
                  <td className="cell gray"><InlineMath>\pm</InlineMath>1.0</td>
                  <td className="cell gray"><InlineMath>\pm</InlineMath>2.0</td>
                  <td className="cell gray"><InlineMath>{"^{\\circ}C"}</InlineMath></td>
                </tr>
              </tbody>
            </table>
            <div className="note"><InlineMath>^1</InlineMath> при 85<InlineMath>{"{^\\circ}C"}</InlineMath></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="3" />
          <main className="text">
            <table className="table-sheet">
              <thead className="head">
                <tr>
                  <td className="cell gray" width="30%">Параметр</td>
                  <td className="cell gray">Символ</td>
                  <td className="cell gray">Состояние</td>
                  <td className="cell gray">Мин.</td>
                  <td className="cell gray">Станд.</td>
                  <td className="cell gray">Макс.</td>
                  <td className="cell gray">Ед. Изм.</td>
                </tr>
              </thead>
              <tbody className="body">
                <tr>
                  <td className="cell lightgray" rowSpan="5">Время преобразования давления</td>
                  <td className="cell lightgray"><InlineMath>{"t_{c\\_p\\_low}"}</InlineMath></td>
                  <td className="cell lightgray">режим сверхнизкой мощности</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">3</td>
                  <td className="cell lightgray">4.5</td>
                  <td className="cell lightgray">мс</td>
                </tr>
                <tr>
                  <td className="cell gray"><InlineMath>{"t_{c\\_p\\_std}"}</InlineMath></td>
                  <td className="cell gray">стандартный режим</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">5</td>
                  <td className="cell gray">7.5</td>
                  <td className="cell gray">мс</td>
                </tr>
                <tr>
                  <td className="cell lightgray"><InlineMath>{"t_{c\\_p\\_hr}"}</InlineMath></td>
                  <td className="cell lightgray">режим высокого разрешения</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">9</td>
                  <td className="cell lightgray">13.5</td>
                  <td className="cell lightgray">мс</td>
                </tr>
                <tr>
                  <td className="cell gray"><InlineMath>{"t_{c\\_p\\_luhr}"}</InlineMath></td>
                  <td className="cell gray">режим сверхвысокого разрешения</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">17</td>
                  <td className="cell gray">25.5</td>
                  <td className="cell gray">мс</td>
                </tr>
                <tr>
                  <td className="cell lightgray"><InlineMath>{"t_{c\\_p\\_ar}"}</InlineMath></td>
                  <td className="cell lightgray">режим расширенного разрешения</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">51</td>
                  <td className="cell lightgray">76.5</td>
                  <td className="cell lightgray">мс</td>
                </tr>
                <tr>
                  <td className="cell gray">Время преобразования температуры</td>
                  <td className="cell gray"><InlineMath>{"t_{C\\_temp}"}</InlineMath></td>
                  <td className="cell gray">стандартный режим</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">3</td>
                  <td className="cell gray">4.5</td>
                  <td className="cell gray">мс</td>
                </tr>
                <tr>
                  <td className="cell lightgray">Последовательный тактовый сигнал данных</td>
                  <td className="cell lightgray"><InlineMath>{"F_{SCL}"}</InlineMath></td>
                  <td className="cell lightgray">стандартный режим</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">3.4</td>
                  <td className="cell lightgray">МГц</td>
                </tr>
                <tr>
                  <td className="cell gray">Дрейф припоя</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">минимальный дрейф припоя 50 мм</td>
                  <td className="cell gray">-0.5</td>
                  <td className="cell gray"></td>
                  <td className="cell gray">+2</td>
                  <td className="cell gray">гПа</td>
                </tr>
                <tr>
                  <td className="cell lightgray">Долгосрочная стабильность<sup>**</sup></td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">12 месяцев</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray"><InlineMath>\pm</InlineMath>1.0</td>
                  <td className="cell lightgray"></td>
                  <td className="cell lightgray">гПа</td>
                </tr>
              </tbody>
            </table>
            <div className="paragraph"><sup>*</sup>Cтандартное значение: -1<InlineMath>\pm</InlineMath>1</div>
            <div className="paragraph"><sup>**</sup>Долгосрочная стабильность задается в диапазоне полного рабочего диапазона 0...65 <InlineMath>{"^{\\circ}C"}</InlineMath></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="4" />
          <main className="text">
            <p className="paragraph big-font bold">3. Эксплуатация</p>
            <br />
            <p className="paragraph big-font bold">3.1 Общее описание</p>
            <br />
            <p className="paragraph">BMP180 предназначен для непосредственного подключения к микроконтроллеру мобильного устройства через шину I2C. Данные давления и температуры должны быть компенсированы данными калибровки EEPROM BMP180.</p>
            <br />
            <p className="paragraph big-font bold">3.2. Общая схема функций и приложений</p>
            <br />
            <p className="paragraph">BMP180 состоит из пьезорезистивного датчика, аналого-цифрового преобразователя и блока управления с EEPROM и последовательного интерфейса I2C. BMP180 обеспечивает нескомпенсированное значение давления и температуры. EEPROM сохранил 176 бит отдельных данных калибровки. Эти данные используются для компенсации смещения, температурной зависимости и других параметров датчика.</p>
            <br />
            <ul className="list-sheet">
              <li>UP = данные давления (от 16 до 19 бит)</li>
              <li>UT = данные о температуре (16 бит)</li>
            </ul>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="5" />
          <main className="text">
            <div className="image-container"><img src={image1} alt="Типичная схема применения" width={900 * scale} /></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="6" />
          <main className="text">
            <p className="paragraph big-font bold">3.3 Измерение давления и температуры</p>
            <br />
            <p className="paragraph">Для всех вычислений здесь доступен код ANSI Cи от Bosch Sensortec («BPM180_API»).</p>
            <br />
            <p className="paragraph">Микроконтроллер отправляет начальную последовательность, чтобы начать измерение давления или температуры. После преобразования времени значение результата (UP или UT, соответственно) может быть прочитано через интерфейс I2C. Для расчета температуры в градусах Цельсия или гПа необходимо использовать данные калибровки. Эти константы могут быть считаны из EEPROM BPM180 через I2C интерфейс при инициализации программного обеспечения.</p>
            <br />
            <p className="paragraph">Частота дискретизации может быть увеличена до 128 выборок в секунду (стандартный режим) для динамического измерения. В этом случае достаточно измерить температуру только один раз в секунду и это значение для всех измерений давления за тот же период.</p>
            <br />
            <div className="image-container"><img src={image2} alt="Порядок измерения BPM180" width={400 * scale} /></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="7" />
          <main className="text">
            <p className="paragraph big-font bold">3.3.1 Режимы точности выборки аппаратного давления</p>
            <br />
            <p className="paragraph">При использовании разных режимов можно выбрать оптимальный компромисс между потребляемой мощностью, скоростью и разрешением, см. таблицу ниже.</p>
            <br />
            <p className="paragraph center">Таблица 3: Обзор режимов аппаратной точности BMP180, выбранных программным обеспечением драйвера через переменную oversampling_setting (настройка передискретизации).</p>
            <br />
            <table className="table-sheet">
              <thead>
                <tr>
                  <td className="cell gray">Режим</td>
                  <td className="cell gray">Параметр <span>oversampling_setting</span></td>
                  <td className="cell gray">Внутреннее число выборок</td>
                  <td className="cell gray">Макс. время конвертирования давления [мс]</td>
                  <td className="cell gray">Ср. ток @ 1 выборка/с [мА]</td>
                  <td className="cell gray">СКО шума [гПа]</td>
                  <td className="cell gray">СКО шума [м]</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cell lightgray">режим сверхнизкой мощности</td>
                  <td className="cell lightgray">0</td>
                  <td className="cell lightgray">1</td>
                  <td className="cell lightgray">4.5</td>
                  <td className="cell lightgray">3</td>
                  <td className="cell lightgray">0.06</td>
                  <td className="cell lightgray">0.5</td>
                </tr>
                <tr>
                  <td className="cell gray">стандартный режим</td>
                  <td className="cell gray">1</td>
                  <td className="cell gray">2</td>
                  <td className="cell gray">7.5</td>
                  <td className="cell gray">5</td>
                  <td className="cell gray">0.05</td>
                  <td className="cell gray">0.4</td>
                </tr>
                <tr>
                  <td className="cell lightgray">режим высокого разрешения</td>
                  <td className="cell lightgray">2</td>
                  <td className="cell lightgray">4</td>
                  <td className="cell lightgray">13.5</td>
                  <td className="cell lightgray">7</td>
                  <td className="cell lightgray">0.04</td>
                  <td className="cell lightgray">0.3</td>
                </tr>
                <tr>
                  <td className="cell gray">режим сверхвысокого разрешения</td>
                  <td className="cell gray">3</td>
                  <td className="cell gray">8</td>
                  <td className="cell gray">25.5</td>
                  <td className="cell gray">12</td>
                  <td className="cell gray">0.03</td>
                  <td className="cell gray">0.25</td>
                </tr>
              </tbody>
            </table>
            <p className>Дополнительную информацию о характеристиках шума см. в соответствующей заметке по применению «Шум в приложениях датчика давления».</p>
            <br />
            <p className>Все режимы могут выполняться на более высоких скоростях, например. до 128 раз в секунду для стандартного режима, при этом потребление тока увеличивается пропорционально частоте дискретизации.</p>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="8" />
          <main className="text">
            <p className="paragraph big-font bold">3.3.2 Режимы точности выборки программного давления</p>
            <br />
            <p className="paragraph">Для приложений, где низкий уровень шума является критическим, рекомендуется усреднение, если допустима более низкая пропускная способность. Передискретизацию можно включить с помощью драйвера API программного обеспечения (с OSR = 3).</p>
            <br />
            <p className="paragraph center">Таблица 4: Обзор режима точности программного обеспечения BMP180, выбранного программным обеспечением драйвера через переменную software_oversampling_setting</p>
            <br />
            <table className="table-sheet">
              <thead>
                <tr>
                  <td className="cell gray">Режим</td>
                  <td className="cell gray">Параметр <span>oversampling_setting</span></td>
                  <td className="cell gray">Внутреннее число выборок</td>
                  <td className="cell gray">Макс. время конвертирования давления [мс]</td>
                  <td className="cell gray">Ср. ток @ 1 выборка/с [мА]</td>
                  <td className="cell gray">СКО шума [гПа]</td>
                  <td className="cell gray">СКО шума [м]</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="cell lightgray">режим расширенного разрешения</td>
                  <td className="cell lightgray">3</td>
                  <td className="cell lightgray">1</td>
                  <td className="cell lightgray">76.5</td>
                  <td className="cell lightgray">32</td>
                  <td className="cell lightgray">0.0</td>
                  <td className="cell lightgray">0.17</td>
                </tr>
              </tbody>
            </table>
            <p className="paragraph big-font bold">3.4. Калибровочные коэффициенты</p>
            <br />
            <p className="paragraph">176-битный EEPROM разделен на 11 слов по 16 бит каждый. Они содержат 11 калибровочных коэффициентов. Каждый сенсорный модуль имеет индивидуальные коэффициенты. Перед первым вычислением температуры и давления мастер считывает данные E2PROM. Обмен данными можно проверить, установив, что ни одно из слов не имеет значения 0 или 0xFFFF.</p>
            <br />
            <p className="paragraph center">Таблица 5: Калибровочные коэффициенты</p>
            <br />
            <div className="table-container">
              <table className="table-sheet no-full-width">
                <thead className="head">
                  <tr>
                    <td className="cell gray"></td>
                    <td className="cell gray" colSpan="2">BPM180 адрес регистра</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">Параметр</td>
                    <td className="cell lightgray">Старший бит</td>
                    <td className="cell lightgray">Младший бит</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="cell gray">AC1</td>
                    <td className="cell gray">0xAA</td>
                    <td className="cell gray">0xAB</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">AC2</td>
                    <td className="cell lightgray">0xAC</td>
                    <td className="cell lightgray">0xAD</td>
                  </tr>
                  <tr>
                    <td className="cell gray">AC3</td>
                    <td className="cell gray">0xAE</td>
                    <td className="cell gray">0xAF</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">AC4</td>
                    <td className="cell lightgray">0xB0</td>
                    <td className="cell lightgray">0xB1</td>
                  </tr>
                  <tr>
                    <td className="cell gray">AC5</td>
                    <td className="cell gray">0xB2</td>
                    <td className="cell gray">0xB3</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">AC6</td>
                    <td className="cell lightgray">0xB4</td>
                    <td className="cell lightgray">0xB5</td>
                  </tr>
                  <tr>
                    <td className="cell gray">B1</td>
                    <td className="cell gray">0xB6</td>
                    <td className="cell gray">0xB7</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">B2</td>
                    <td className="cell lightgray">0xB8</td>
                    <td className="cell lightgray">0xB9</td>
                  </tr>
                  <tr>
                    <td className="cell gray">MB</td>
                    <td className="cell gray">0xBA</td>
                    <td className="cell gray">0xBB</td>
                  </tr>
                  <tr>
                    <td className="cell lightgray">MC</td>
                    <td className="cell lightgray">0xBC</td>
                    <td className="cell lightgray">0xBD</td>
                  </tr>
                  <tr>
                    <td className="cell gray">MD</td>
                    <td className="cell gray">0xBE</td>
                    <td className="cell gray">0xBF</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="9" />
          <main className="text">
            <p className="paragraph bold big-font">3.5 Расчет давления и температуры</p>
            <br />
            <p className="paragraph">Режим (сверхнизкое энергопотребление, стандартное, высокое, сверхвысокое разрешение) можно выбрать с помощью переменной oversampling_setting (0, 1, 2, 3) в коде&nbsp;C.</p>
            <br />
            <p className="paragraph">Расчет истинной температуры и давления с шагом 1Па (= 0,01гПа = 0,01 мбар) и температурой с шагом 0,1°C.</p>
            <br />
            <p className="paragraph">На следующем рисунке показан подробный алгоритм измерения давления и температуры.</p>
            <br />
            <p className="paragraph">Этот алгоритм доступен для пользователей как исходный код Cи («BMP180_ API») от Bosch Sensortec и через партнеров по продажам и распространению. <strong>Пожалуйста, свяжитесь с представителем Bosch Sensortec.</strong></p>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="10" />
          <main className="text">
            <div className="image-container"><img src={image3} alt="Алгоритм измерения давления и температуры" width={750 * scale} /></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="11" />
          <main className="text">
            <p className="paragraph big-font bold">3.6 Расчет абсолютной высоты (altitude)</p>
            <br />
            <p className="paragraph">При измеренном давлении <InlineMath>p</InlineMath> и давлении на уровне моря <InlineMath>p_0</InlineMath>, например, 1013.25 гПа, высота в метрах может быть рассчитана с помощью международной барометрической формулы:</p>
            <br />
            <p className="formula">
              <InlineMath>{"altitude=44330*\\left (1-\\left ( \\dfrac{p}{p_0}\\right )^{\\dfrac{1}{5.255}}\\right )"}</InlineMath>
            </p>
            <br />
            <p className="paragraph">Таким образом, изменение давления <InlineMath>\triangle p=1</InlineMath> гПа соответствует уровню 8,43 м на уровне моря.</p>
            <div className="image-container"><img src={image4} alt="Функция передачи: Высота над уровнем моря - Барометрическое давление" width={500 * scale}/></div>
          </main>
          <Footer />
        </div>
        <div className="page" style={style}>
          <Header page="12" />
          <main className="text">
            <p className="paragraph big-font bold">4. Карта глобальной памяти</p>
            <br />
            <p className="paragraph">На приведенной ниже карте памяти показаны все доступные регистры данных, которые необходимы для управления BMP180. В левых столбцах отображаются адреса памяти. Столбцы в середине отображают содержимое каждого бита регистра. Цвета бит указывают, являются ли они доступными только для чтения, только для записи или для чтения и записи. Память нестабильна, поэтому перезаписываемый контент должен быть переписан после каждого включения питания. Отображаются не все адреса регистров. Эти регистры зарезервированы для дальнейшего заводского тестирования и обрезки Bosch.</p>
            <br />
            <div className="image-container"><img src={image5} alt="Карта памяти" width={900 * scale}/></div>
            <div className="image-description">Рисунок 6: Карта памяти</div>
            <br />
            <p className="paragraph"><strong>Measurement conrtol (Контроль измерения) (регистр F4h {"<4:0>"})</strong>: контролирует измерения. Подробнее об использовании см. На рисунке 6.</p>
            <br />
            <p className="paragraph"><strong>Sco (регистр F4h {"<5>"})</strong>: начало преобразования. Значение этого бита остается «1» во время преобразования и сбрасывается на «0» после завершения преобразования (регистры данных заполняются).</p>
            <br />
            <p className="paragraph"><strong>Oss (регистр F4h {"<7:6>"})</strong>: контролирует коэффициент избыточной выборки измерения давления (00b: один, 01b: 2 раза, 10b: 4 раза, 11b: 8 раз). Мягкий сброс (регистр E0h): записать только регистр. Если установлено значение 0xB6, будет выполняться такая же последовательность, как сброс питания.</p>
            <br />
            <p className="paragraph"><strong>Chip-id (идентификатор микросхемы) (регистр D0h)</strong>: это значение фиксировано до 0x55 и может использоваться для проверки функционирования связи.</p>
            <br />
            <p className="paragraph">После преобразования регистры данных могут быть считаны в любой последовательности (то есть сначала MSB или LSB). Использование прошивки не является обязательным.</p>
          </main>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Article1;
