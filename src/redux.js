import * as React from 'react';

const Context = React.createContext();

class Wrapper extends React.Component {
  constructor(props) {
    super(props);
    const actions = this.getActions();
    this.state = {
      props: props.mapStateToProps(props.store.state),
      actions
    };
  }

  getActions() {
    const actions = {};
    for (const k in this.props.mapDispatchToProps) {
      actions[k] = (...args) => this.props.store.dispatch(this.props.mapDispatchToProps[k](...args))
    }
    return actions;
  }

  componentDidMount() {
    this.unsubscribe = this.props.store.subscribe(state => {
      const props = this.props.mapStateToProps(state);
      const actions = this.getActions();
      this.setState({
        props,
        actions
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    const Component = this.props.component;

    return (
      <Component {...this.state.props} {...this.state.actions} />
    )
  }
}

export const connect = (mapStateToProps, mapDispatchToProps) => {
  return (Component) => () =>
    <Context.Consumer>{
      store => {
        return (
          <Wrapper
            store={store}
            component={Component}
            mapStateToProps={mapStateToProps}
            mapDispatchToProps={mapDispatchToProps}
          />
        )
      }
    }</Context.Consumer>;
}

export class Provider extends React.Component {
  render() {
    return (
      <Context.Provider value={this.props.store}>
        {this.props.children}
      </Context.Provider>
    )
  }
}

export class Store {
  constructor(reducer, state) {
    this.reducer = reducer;
    this.state = reducer(state, { type: null })
    this.subscribers = [];
  }

  dispatch(action) {
    this.state = this.reducer(this.state, action);
    this.subscribers.forEach(fn => fn(this.state));
  }

  subscribe(fn) {
    this.subscribers = [...this.subscribers, fn];
    return () => {
      this.subscribers = this.subscribers.filter(sub => sub !== fn);
    };
  }
}
