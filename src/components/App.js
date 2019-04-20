import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchTodos } from "../actions/todo";

import Todos from "./Todos";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchTodos();
  }

  render() {
    return (
      <section>
        <h1 className="text-center">Todo App</h1>
        {this.props.todos.length > 0 && <Todos todos={this.props.todos} />}
      </section>
    );
  }
}

App.propTypes = {
  todos: PropTypes.array,
  fetchTodos: PropTypes.func,
};

const mapStateToProps = ({ todos }) => ({ todos });

export default connect(
  mapStateToProps,
  { fetchTodos }
)(App);
