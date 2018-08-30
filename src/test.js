// Suggest one simple way for removing duplicates from an array
const uniq = a => [...new Set(a)];

// Write some examples of Destructuring in JS
const COMMENT = {
  author: 'Alex',
  text: 'Some text',
  utils: {
    date: '17.05'
  }
};
const { author, text } = COMMENT;

const { author, ...rest } = COMMENT;

const { author: commentAuthor } = COMMENT;
const getComment = ({ author, text }) => {
  console.log(author, text);
}
getComment(COMMENT);

// Show the example of copy and deep copy of Object in JS
const copy = Object.assign({}, COMMENT);
const deepCopy = JSON.parse(JSON.stringify(COMMENT));
console.log(deepCopy);

// Explain the Virtual DOM concept and how it works in React.js
// Существует браузерный DOM и Virtual DOM в React. Суть Virtual DOM в том, 
// что React сравнивает его с браузерным DOM и если между ними есть разница 
// в каком-то компоненте, то этот компонент будет перерисован React-ом.

// Compare the various React Component lifecycle methods
// constructor() - вызвается для создания экземляра класса (компонента).
// shouldComponentUpdate() - вызывается всякий раз, когда было изменено состояние приложения. 
// Происходит перерисовка компонента.
// getSnapshotBeforeUpdate() - передает данные в componentDidUpdate(), может брать необходимую 
// информацию из DOM.
// static getDerivedStateFromProps() - вызыввется перед методом render(), возвращает объект для 
// обновления состояния, чтоб компонент перерисовался, либо ничего не возвращает и обновление
// компонента не происходит.
// render() - отрисовывает компонент
// componentDidUpdate() - вызывается после того, как компонент был обновлен.
// componentDidMount() - вызывается сразу как компонент отрисовался. В этом
// методе можно делать запросы к базе.
// componentWillUnmount() - вызывается перед тем как компонент окончательно разбилживается.
// В этом методе нужно отменять запросы и отписываться от событий.
// componentDidCatch() - данный метод отлавливает JS ошибки в дереве дочерних компонентов,
// фиксирует эти ошибки и показывает шаблон с ошибкой.