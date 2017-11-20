import React, { Component } from 'react';
import { connect } from 'react-redux';
import './IndividualSection.css';


class IndividualSection extends Component {
  render() {
    const { menu, button } = this.props;
    const style = {
      paddingTop: menu.height + 20,
    }

    return (
      <div className="individual-section" style={menu.className === 'fixed' ? style : null}>
        <div className="container">
          <h1 className="individual-section__title">Проектирование и разработка современных веб-приложений</h1>
          <nav className="individual-section__content">
            <h2 className="individual-section__content-title">Содержание</h2>
            <ul className="individual-section__content-list">
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">1</span>
                <span className="individual-section__content-list-item-text">Структура современных веб-приложений</span>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">2</span>
                <span className="individual-section__content-list-item-text">Обзор бесплатных сервисов для хостинга веб-приложений</span>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">3</span>
                <span className="individual-section__content-list-item-text">Создание веб-приложений для распознавания рукописных символов</span>
                <ul className="individual-section__content-sublist">
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.1</span>
                    Распознавание рукописных символов с помощью нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.2</span>
                    Обзор популярных библиотек для построения нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.3</span>
                    Создание нейросетей с помощью популярных библиотек и сравнение классификации построенных нейросетей
                  </li>
                  <li className="individual-section__content-sublist-item">
                    <span className="individual-section__content-sublist-item-number">3.4</span>
                    Создание веб-приложения с помощью Python Django Framework
                  </li>
                </ul>
              </li>
              <li className="individual-section__content-list-item">
                <span className="individual-section__content-list-item-number">4</span>
                <span className="individual-section__content-list-item-text">Размещение веб-приложения на платформе Heroku</span>
              </li>
            </ul>
          </nav>
          <article className="abstract__text">
            <div className="abstract__text-part">
              <span>1</span>
              <h3>Структура современных веб-приложений</h3>
              <div className="abstract__text-block">
                <p>Веб-приложение — клиент-серверное приложение, в котором клиент взаимодействует с сервером при помощи браузера, а за сервер отвечает&nbsp;—&nbsp;веб-сервер. Логика веб-приложения распределена между сервером и клиентом, хранение данных осуществляется, преимущественно, на сервере, обмен информацией происходит по сети. Одним из преимуществ такого подхода является тот факт, что клиенты не зависят от конкретной операционной системы пользователя, поэтому веб-приложения являются межплатформенными службами.</p>
                <p>Давайте для простоты будем пока считать, что веб-приложение и веб-сайт - одно и то же. Не всегда веб-приложение является сайтом, и наоборот, но  поскольку мы будем рассматривать самый простой вариант, то можно не вдаваться в подробности.</p>
                <p>Чаще всего веб-приложения состоят как минимум из трёх основных компонентов:</p>
                <p><span className="individual-section__content-list-item-number">1.</span>Клиентская часть веб приложения — это графический интерфейс. Это то, что вы видите на странице. Графический интерфейс отображается в браузере. Пользователь взаимодействует с веб-приложением именно через браузер, кликая по ссылкам и кнопкам.</p>
                <p><span className="individual-section__content-list-item-number">2.</span>Серверная часть веб-приложения — это программа или скрипт на сервере, обрабатывающая запросы пользователя (точнее, запросы браузера). Чаще всего серверная часть веб-приложения программируется на PHP. При каждом переходе пользователя по ссылке браузер отправляет запрос к серверу. Сервер обрабатывает этот запрос, вызывая некоторый скрипт, который формирует веб-страничку, описанную языком HTML, и отсылает клиенту по сети. Браузер тут же отображает полученный результат в виде очередной веб-страницы.</p>
                <p><span className="individual-section__content-list-item-number">1.</span>База данных (БД, или система управления баазми данных, СУБД) — программное обеспечение на сервере, занимающееся хранением данных и их выдачей в нужный момент. В случае форума или блога, хранимые в БД данные — это посты, комментарии, новости, и так далее. База данных располагается на сервере. Серверная часть веб-приложения обращается к базе данных, извлекая данные, которые необходимы для формирования страницы, запрошенной пользователем.</p>
                <p>Для разработки веб-приложений можно использовать практически любые современные языки программирования:</p>
                <p><span className="individual-section__content-list-item-number">1.</span>PHP</p>
                <p><span className="individual-section__content-list-item-number">2.</span>Python</p>
                <p><span className="individual-section__content-list-item-number">3.</span>Ruby</p>
                <p><span className="individual-section__content-list-item-number">4.</span>платформа .NET (языки VB.NET, C# и другие, поддерживаемые .NET)</p>
                <p><span className="individual-section__content-list-item-number">5.</span>Java</p>
                <p><span className="individual-section__content-list-item-number">6.</span>Go</p>
                <p><span className="individual-section__content-list-item-number">7.</span>C/C++</p>
                <p>Независимо от языка, на котором написана серверная часть веб-приложения, способы обработки запросов и взаимодействия с пользователем остаются те же.</p>
                <p>В дальнейшем в ходе освоения веб-технологий будем опираться на язык Python, поскольку разрабатывать веб-приложения на “Питоне” с помощью Django Framework легко и приятно.</p>
                <p>Основной язык, которым описывается графический интерфейс веб-приложения — это HTML. Этот язык описывает структуру веб-страницы. Художественное оформление веб страниц описывается таблицами стилей — CSS.</p>
                <p>Чтобы “оживить” графический интерфейс используют JavaScript — интерпретируемый язык программирования, который позволяет легко взаимодействовать с элементами на графического интерфейса</p>
                <p>В последнее время появляется множество инструментов, которые позволяют существенно облегчить и ускорить разработку графических интерфейсов веб-приложений. Так, например, можно использовать различные шаблонизаторы, которые добавляют создавать переменные, функции и значительно сократить "простыню" HTML разметки. Наиболее известные примеры HTML шаблонизаторов: <a href="https://www.npmjs.com/package/jade" target="_blank">Jade</a> и <a href="https://reactjs.org/docs/introducing-jsx.html" target="_blank">JSX</a> (используемый в библиотеке React.js)</p>
                <p>Для написания CSS стили, можно использовать препроцессоры (<a href="https://less-lang.info/" target="_blank">LESS</a>, <a href="https://sass-scss.ru/" target="_blank">Sass</a>), которые также позволяют создавать переменные, функции.</p>
                <p>Также стоит отметить популярные JavaScript библиотеки, которые упрощают разработку больших проектов со сложными интерфейсами. Наиболее популярными JS библиотеками сейчас являются <a href="https://github.com/facebook/react" target="_blank">React.js</a>, поддерживаемая компанией Facebook, <a href="https://angular.io/" target="_blank">Angular.js</a>, поддерживаемая Google и <a href="https://vuejs.org/" target="_blank">Vue.js</a>.</p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>2</span>
              <h3>Обзор бесплатных сервисов для хостинга веб-приложений</h3>
              <div className="abstract__text-block">
                <p>Рассмотрим два наиболее популярных сервиса для хранения и хостинга своих веб-приложений: <a href="https://github.com/" target="_blank">Github</a> и <a href="https://www.heroku.com/" target="_blank">Heroku</a>.</p>
                <p>Github — крупнейший веб-сервис для хостинга IT-проектов и их совместной разработки. Создатели сайта называют GitHub “социальной сетью для разработчиков”. Кроме размещения кода, участники могут общаться, комментировать правки друг друга, а также следить за новостями знакомых. С помощью широких возможностей Git программисты могут объединять свои репозитории — GitHub предлагает удобный интерфейс для этого и может отображать вклад каждого участника в виде дерева. Для проектов есть личные страницы, небольшие Вики и система отслеживания ошибок. Прямо на сайте можно просмотреть файлы проектов с подсветкой синтаксиса для большинства языков программирования.</p>
                <p>Heroku — облачная PaaS-платформа, поддерживающая ряд языков программирования. С 2010 года является дочерней компанией Salesforce.com. Heroku, одна из первых облачных платформ, появилась в июне 2007 года и изначально поддерживала только язык программирования Ruby, но на данный момент список поддерживаемых языков также включает в себя Java, Node.js, Scala, Clojure, Python, Go и PHP. На серверах Heroku используются операционные системы Debian или Ubuntu. Приложения, работающие на Heroku, используют также DNS-сервер Heroku (обычно приложения имеют доменное имя вида “имя_приложения.herokuapp.com”). Для каждого приложения выделяется несколько независимых виртуальных процессов, которые называются “dynos”. Они распределены по специальной виртуальной сетке (“dynos grid”), которая состоит из нескольких серверов. Heroku также имеет систему контроля версий Git.</p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>3</span>
              <h3>Создание веб-приложений для распознавания рукописных символов</h3>
              <div className="abstract__text-block">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>3.1</span>
              <h3>Распознавание рукописных символов с помощью нейросетей</h3>
              <div className="abstract__text-block">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>3.2</span>
              <h3>Обзор популярных библиотек для построения нейросетей</h3>
              <div className="abstract__text-block">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>3.3</span>
              <h3>Создание нейросетей с помощью популярных библиотек и сравнение классификации построенных нейросетей</h3>
              <div className="abstract__text-block">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>3.4</span>
              <h3>Создание веб-приложения с помощью Python Django Framework</h3>
              <div className="abstract__text-block">
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
                <p></p>
              </div>
            </div>
            <div className="abstract__text-part">
              <span>4</span>
              <h3>Размещение веб-приложения на платформе Heroku</h3>
              <div className="abstract__text-block">
                <p>Пришло время рассказать о том, как разместить сайт на Heroku. Heroku — облачная платформа, поддерживающая несколько языков, и позволяющая быстро и удобно разворачивать веб-приложения. Есть возможность использовать Postgres и много чего интересного. Вообще говоря, я мог бы хранить изображения, используя ресурсы Heroku, но мне нужно хранить разные типы данных, поэтому проще было использовать отдельное облако.</p>
                <p>Heroku предлагает несколько ценовых планов, но для моего приложения (в том числе полноценного, а не этого маленького) вполне хватает бесплатного. Единственный минус — приложение «засыпает» через полчаса активности и при следующем запуске оно может потратить секунд 30 на «просыпание».</p>
                <p>В сети можно найти много гайдов по разворачиванию приложений на Heroku (вот ссылка на <a href="https://devcenter.heroku.com/articles/getting-started-with-python#introduction" target="_blank">официальный</a>), но большинство из них использует консоль, а я предпочитаю пользоваться интерфейсами. К тому же это кажется мне значительно проще и удобнее.</p>
                <p>Итак, к сути. Для подготовки приложения нужно создать несколько файлов:</p>
                <p><span>1.</span>необходима система контроля версий .git. Обычно она создаётся автоматически при создании репозитория github, но нужно проверить, что она действительно есть;</p>
                <p><span>2.</span>runtime.txt — в этом файле должна быть указана необходимая версия используемого языка программирования, в моём случае — python-3.6.1;</p>
                <p><span>3.</span>Procfile — это файл без расширения. В нём указывается, какие команды должны запускаться на heroku. Здесь определяется тип процесса web, что запускается и адрес (например: “web: python manage.py runserver 0.0.0.0:5000”)</p>
                <p><span>4.</span>requirements.txt — список библиотек, которые будут установлены на Heroku. Лучше указывать нужные версии;</p>
              </div>
            </div>
          </article>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    menu: state.menu,
    button: state.button
  }
}
export default connect(mapStateToProps)(IndividualSection)
