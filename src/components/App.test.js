import "@babel/polyfill";
import { configure, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import store from "../store";
import { TODO } from "../constants/actionTypes";

import React from "react";
import App from "./App";

configure({ adapter: new Adapter() });

store.dispatch({
  type: TODO.REDUCER_SET_TODOS,
  payload: [{ _id: "123", text: "Koa" }, { _id: "1234", text: "Koa2" }],
});

function render() {
  return mount(
    <Provider store={store}>
      <App />
    </Provider>
  );
}

it("should render Todo App", () => {
  const wrapper = render();
  expect(wrapper.length).toBe(1);
});

it("should render tag h1 equal Todo App", () => {
  const wrapper = render();
  const h1 = wrapper.find("h1");
  expect(h1.text()).toEqual("Todo App");
});

it("should render Todos component", () => {
  const wrapper = render();
  const todosTitle = wrapper.find('[data-test="todos-title"]');
  expect(todosTitle.length).toBe(1);
  expect(todosTitle.text()).toEqual("Todo List");
});

it("should render Todos component show text list", () => {
  const wrapper = render();
  const todosUl = wrapper.find("ul");
  const todosLi = wrapper.find("li");
  expect(todosUl.length).toBe(1);
  expect(todosLi.length).toBe(2);
  expect(todosUl.html()).toEqual(
    '<ul class="list-group"><li class="list-group-item">Koa</li><li class="list-group-item">Koa2</li></ul>'
  );
});
