import React, { Component } from 'react';
import './Articles.css'

import { InlineMath } from 'react-katex';

import image1 from '../../img/article/article1/article1.jpg';

class Article1 extends Component {
  render() {
    const { width, height, scale } = this.props;
    const style = {
      width: width * scale,
      height: height * scale,
      fontSize: 28 * scale,
      padding: 170 * scale,
      textIndent: 28 * scale / 2 * 5,
      fontFamily: "Times new Roman, serif"
    }

    return (
      <div className="document">
        <div className="page" style={style}>
          <p className="udk">УДК 621.313.17:621.3.07</p>
          <h1 className="title">Аналитический расчет системы стабилизации квадрокоптера</h1>
          <br />
          <h1 className="name">М.Ю. Жигарев, В.В. Паслен</h1>
          <h2 className="university">ГВУЗ «Донецкий национальный технический университет», Донецк</h2>
          <br />
          <p className="annotation">В работе представлен аналитический расчет системы стабилизации квадрокоптера, осуществляемый путем изменения длительности импульсов управляющих ШИМ-сигналов, генерируемых МК AtMega64.</p>
          <br />
          <p className="paragraph">Профессиональные квадрокоптеры благодаря своим характеристикам обладают широким спектром применения. Однако недостатком профессиональных БПЛА является высокая стоимость. Проектирование квадрокоптеров с помощью составных частей существенно снижает стоимость летательного аппарата, а также позволяет подобрать необходимые технические характеристики и функционал. Система стабилизации является одной из основных систем квадрокоптера. Система стабилизации производит вычисление углов отклонения квадрокоптера. Компенсацию углов отклонения осуществляется путем изменения длительности импульсов управляющих ШИМ-сигналов управляющих электронными регуляторами хода. Электронные регуляторы хода управляют частотой вращения бесколлекторных двигателей [1].</p>
          <p className="paragraph">Управление электронными регуляторами хода квадрокоптера осуществляется прямоугольными импульсами длительностью от <InlineMath>{"\\tau_{min}=1"}</InlineMath>&nbsp;мс до <InlineMath>{"\\tau_{max}=2"}</InlineMath>&nbsp;мс. При значении длительности импульсов равной <InlineMath>{"\\tau_{min}=1"}</InlineMath>&nbsp;мс бесколлекторные двигатели выключены, а при значении <InlineMath>{"\\tau_{max}=2"}</InlineMath>&nbsp;мс двигатели работают на максимальной мощности (частота вращения максимальная). Найдем длительность импульсов необходимую для увеличения частоты вращения двигателей на&nbsp;1&nbsp;%:</p>
          <p className="formula">
            <br />
            <InlineMath>{"\\triangle\\tau=\\dfrac{\\tau_{max}-\\tau_{min}}{100}=\\dfrac{(2-1)*10^{-3}}{100}=0,01"}</InlineMath>
            <span>(мс)</span>
          </p>
          <br />
          <p className="paragraph">Для формирования прямоугольных импульсов необходимой длительности используется 16-битные таймеры/счетчики (Timer1 и Timer3) МК AtMega64 в режиме ШИМ. В данном режиме таймер/счетчик представляет собой широтно-импульсный модулятор</p>
        </div>
        <div className="page" style={style}>
          <p className="paragraph-extension">и используется для генерирования сигнала с программируемыми частотой и скважностью. Для формирования ШИМ-сигнала используются прерывания по переполнению таймера и по совпадению. Для управления частотой вращения бесколлекторных двигателей квадрокоптера, проектируемый полетный контроллер использует четыре ШИМ-сигнала. Проведём аналитический расчёт значений регистров МК, задающих параметры управляющих ШИМ-сигналов.</p>
          <p className="paragraph">Значения регистров захвата-сравнения  определяются по формуле:</p>
          <p className="formula">
            <br />
            <InlineMath>{"ICR1=ICR3=\\dfrac{f_{clk I/O}*T}{N}=\\dfrac{16*10^6*4*10^{-3}}{64}=1000,"}</InlineMath>
          </p>
          <br />
          <ul className="formula-description">
            <li>
              где <InlineMath>{"f_{clk I/O}=16"}</InlineMath>&nbsp;МГц — тактовая частота микроконтроллера AtMega64;
            </li>
            <li>
              <InlineMath>{"T"}</InlineMath> — период генерируемого ШИМ-сигнала;
            </li>
            <li>
              <InlineMath>{"N=64"}</InlineMath> — предделитель таймера/счетчика.
            </li>
          </ul>
          <p className="paragraph">Рассчитаем значение регистров захвата-сравнения для <InlineMath>{"\\tau_{min}=1"}</InlineMath>&nbsp;мс
          (бесколлекторные двигатели выключены):</p>
          <p className="formula">
            <br />
            <InlineMath>{"OCR1A_{min}=OCR1B_{min}=\\dfrac{f_{clk I/O}*\\tau_{min}}{N},"}</InlineMath>
          </p>
          <p className="formula">
            <br />
            <InlineMath>{"OCR1A_{min}=OCR1B_{min}=\\dfrac{16*10^6*1*10^{-3}}{64}=250,"}</InlineMath>
          </p>
          <p className="formula">
            <br />
            <InlineMath>{"OCR3A_{min}=OCR3B_{min}=\\dfrac{1*10^6*1*10^{-3}}{8}=250"}</InlineMath>
          </p>
          <br />
          <p className="paragraph">Рассчитаем значение регистров захвата-сравнения для  <InlineMath>{"\\tau_{min}=2"}</InlineMath>&nbsp;мс (бесколлекторные двигатели работают на максимальной мощности):</p>
          <p className="formula">
            <br />
            <InlineMath>{"OCR1A_{max}=OCR1B_{max}=\\dfrac{16*10^6*2*10^{-3}}{64}=500,"}</InlineMath>
          </p>
          <p className="formula">
            <br />
            <InlineMath>{"OCR3A_{max}=OCR3B_{max}=\\dfrac{16*10^6*2*10^{-3}}{64}=500."}</InlineMath>
          </p>
          <br />
        </div>
        <div className="page" style={style}>
          <p className="paragraph">Таким образом, были рассчитаны пределы, в которых изменяется значения регистров захвата-сравнения и сформированы управляющие ШИМ-сигналы [2].</p>
          <p className="paragraph">Во время полета квадрокоптера, на него влияют внешние факторы (порывы ветра, плохие погодные условия), а также вибрация корпуса, связанная с работой двигателей. По этой причине квадрокоптер во время полета не способен сохранять горизонтальное положение. Для компенсации отклонений квадрокоптера от горизонтального положения используется система стабилизации, основанная на применении модуля MPU6050, совмещающего в себе функции гироскопа и акселерометра. Принцип работы системы стабилизации:</p>
          <ul className="list">
            <li><span className="number">1)</span>Считывание микроконтроллером показаний трехосевого акселерометра модуля MPU6050;</li>
            <li><span className="number">2)</span>На основании считанных показаний происходит вычисление углов отклонения квадрокоптера по трем осям <InlineMath>{"(X,Y,Z)"}</InlineMath>;</li>
            <li><span className="number">3)</span>Компенсация углов отклонения по осям  путем увеличения частоты вращения соответствующего бесколлекторного двигателя. Для увеличения частоты вращения необходимо увеличить длительность импульса ШИМ-сигнала соответствующего данному двигателю [3].</li>
          </ul>
          <p className="paragraph">На рисунке 1 показано расположение четырех двигателей относительно координатных осей <InlineMath>{"X,Y"}</InlineMath>.</p>
          <br />
          <p className="image-container"><img src={image1} width={350 * scale} alt="Расположение бесколлекторных двигателей относительно координатных осей"/></p>
          <p className="image-description">Рисунок 1 – Расположение бесколлекторных двигателей относительно координатных осей</p>
          <br />
          <p className="paragraph">В ходе анализа рисунка 1 составлена таблица 1, показывающая необходимость увеличения частоты вращения двигателей при изменении углов отклонения <InlineMath>{"(X_{angle}, Y_{angle})"}</InlineMath>.</p>
        </div>
        <div className="page" style={style}>
          <table className="table">
            <caption>Таблица 1 – Зависимость частоты вращения двигателей от отклонения</caption>
            <thead>
              <tr>
                <td colSpan="2">Значения углов смещения</td>
                <td className="cell">Увеличение частоты вращения двигателя(ей)</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><InlineMath>{"X_{angle}=0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}>0"}</InlineMath></td>
                <td>Двигатель-1, двигатель-2</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}=0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}<0"}</InlineMath></td>
                <td>Двигатель-3, двигатель-4</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}>0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}=0"}</InlineMath></td>
                <td>Двигатель-2, двигатель-4</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}<0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}=0"}</InlineMath></td>
                <td>Двигатель-1, двигатель-3</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}>0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}>0"}</InlineMath></td>
                <td>Двигатель-2</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}>0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}<0"}</InlineMath></td>
                <td>Двигатель-4</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}<0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}>0"}</InlineMath></td>
                <td>Двигатель-1</td>
              </tr>
              <tr>
                <td><InlineMath>{"X_{angle}<0"}</InlineMath></td>
                <td><InlineMath>{"Y_{angle}<0"}</InlineMath></td>
                <td>Двигатель-3</td>
              </tr>
            </tbody>
          </table>
          <br />
          <p className="paragraph">В таблице 1 показан номер бесколлекторного двигателя, увеличение частоты вращения которого компенсирует отклонения по осям <InlineMath>{"X,Y"}</InlineMath>. Под <InlineMath>{"X_{angle}=0"}</InlineMath> и <InlineMath>{"Y_{angle}=0"}</InlineMath> понимается отсутствие отклонения в данной плоскости. Рассмотрим пример, <InlineMath>{"X_{angle}=0,Y_{angle}<0"}</InlineMath> . В данной плоскости находятся 2 двигателя: третий и четвертый. Значит для того, что компенсировать смещение по оси <InlineMath>Y</InlineMath> необходимо увеличить частоту вращения третьего и четвертого бесколлекторных двигателей. При этом значение первого и второго двигателей не изменяется.</p>
          <p className="paragraph">Введем параметр <InlineMath>{"\\varphi_{max}=25^{\\circ}"}</InlineMath>  — максимальное значение смещения. Присвоим каждому бесколлекторному двигателю соответствующий ШИМ-сигнал:</p>
          <br />
          <p className="formula"><InlineMath>BLDC_1=OCR1A</InlineMath>,</p>
          <p className="formula"><InlineMath>BLDC_2=OCR1B</InlineMath>,</p>
          <p className="formula"><InlineMath>BLDC_3=OCR3A</InlineMath>,</p>
          <p className="formula"><InlineMath>BLDC_4=OCR3B</InlineMath>,</p>
          <br />
          <p className="formula-description">где <InlineMath>{"BLDC_{1...4}"}</InlineMath> бесколлекторный двигатель 1-4 соответственно.</p>
          <p className="paragraph">Зависимость частоты вращения двигателей от углов отклонения <InlineMath>{"(X_{angle},Y_{angle})"}</InlineMath></p>
          <br />
          <p className="formula"><InlineMath>{"BLDC_i=BLDC_{i \\:min}+\\varphi*n"}</InlineMath></p>
          <br />
          <ul className="formula-description">
            <li>где <InlineMath>{"BLDC_{i \\:min}"}</InlineMath> — минимальное значение регистра захвата-сравнения;</li>
          </ul>
        </div>
        <div className="page" style={style}>
          <ul className="formula-description">
            <li></li>
            <li><InlineMath>{"\\varphi=X_{angle}+Y_{angle}"}</InlineMath> — угол отклонения по осям <InlineMath>X,Y</InlineMath>. В случае, когда значение одного из углов отрицательное необходимо его инвертировать;</li>
            <li><InlineMath>n</InlineMath> — значение регистра захвата-совпадения, вычисленное при смещении <InlineMath>\varphi=1^\circ</InlineMath>, которое равно:</li>
          </ul>
          <br />
          <p className="formula"><InlineMath>{"n=\\dfrac{BLDC_{i\\:max}-BLDC_{i\\:min}}{\\varphi_{max}}=\\dfrac{500-250}{25}=10."}</InlineMath></p>
          <br />
          <p className="paragraph">Введем параметр <InlineMath>throttle</InlineMath> «газ» квадрокоптера. «Газ» квадрокоптера – это среднее арифметическое между скоростями вращения четырех двигателей. С увеличением параметра значения «газ» растет скорость движения квадрокоптера вверх. Предыдущие выражения с учетом параметра <InlineMath>throttle</InlineMath> примут вид:</p>
          <br />
          <p className="formula"><InlineMath>{"n=\\dfrac{BLDC_{i\\:max}-BLDC_{i\\:min}-throttle}{\\varphi_{max}},"}</InlineMath></p>
          <br />
          <p className="formula"><InlineMath>{"BLDC_i=BLDC_{i \\:min}+throttle+\\varphi*n"}</InlineMath>.</p>
          <br />
          <p className="paragraph">В данном случае, использование при расчете <InlineMath>BLDC_i</InlineMath> слагаемого <InlineMath>(\varphi*n)</InlineMath> повышает скорость компенсации отклонения.</p>
          <br />
          <p className="conclusions-title">Выводы</p>
          <p className="conclusions">Cистема стабилизации, является одной из основных систем квадрокоптера, а реализация с помощью управляющих ШИМ-сигналов, генерируемых МК AtMega64 является оптимальной. Необходимо точно рассчитать и откалибровать систему стабилизации, так как это положительно сказывается на времени работы квадрокоптера. В настоящее время на кафедре радиотехники и защиты информации ведутся разработки в области систем стабилизации беспилотных летательных аппаратов.</p>
          <br />
          <p className="list-of-sources-title">Библиографический список</p>
          <ul className="list-of-sources">
            <li>
              <span>1.</span>
              Жигарев М.Ю. Управление бесколлекторными системами на базе AVR систем / Жигарев М.Ю. / Инновационные перспективы Донбасса – 2016.
            </li>
            <li>
              <span>2.</span>
              Евстифеев, А.В. Микроконтроллеры AVR семейств Tiny и Mega фирмы Atmel [Текст] / Евстифеев А.В. – М.: Додэка-XXI, 2005. – 560 с.
            </li>
            <li>
              <span>3.</span>
              Лебедев, А.А. Динамика полета беспилотных летательных аппаратов [Текст] / Лебедев А.А., Чернобровкин Л.С. – Москва: Машиностроение, 1973. – 616 с.
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Article1;
