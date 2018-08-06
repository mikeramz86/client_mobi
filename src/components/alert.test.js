

import React from 'react';
import ReactDOM from 'react-dom';
import Alert from './alert';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Alert", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Alert />
    </Provider>
    )
  })
})
