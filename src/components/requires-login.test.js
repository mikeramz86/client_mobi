

import React from 'react';
import ReactDOM from 'react-dom';
import RequiresLogIn from './requires-login';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("RequiresLogIn", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <RequiresLogIn />
    </Provider>
    )
  })
})
