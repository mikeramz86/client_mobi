
import React from 'react';
import ReactDOM from 'react-dom';
import Info from './info';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Info", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Info />
    </Provider>
    )
  })
})
