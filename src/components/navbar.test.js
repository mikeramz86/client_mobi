

import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './navbar';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("NavBar", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <NavBar />
    </Provider>
    )
  })
})
