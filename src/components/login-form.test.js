import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './login-form';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("LoginForm", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <LoginForm />
    </Provider>
    )
  })
})