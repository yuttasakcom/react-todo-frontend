import React from "react";
import PropTypes from "prop-types";

const Todos = ({ todos }) => {
  return (
    <section className="container">
      <p data-test="todos-title">Todo List</p>
      {todos && (
        <ul className="list-group">
          {todos.map(todo => (
            <li key={todo._id} className="list-group-item">
              {todo.text}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array,
};

export default Todos;
