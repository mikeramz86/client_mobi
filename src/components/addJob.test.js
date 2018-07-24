
import React from 'react';
import ReactDOM from 'react-dom';
import AddJob from './addJob';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("AddMember", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <AddJob />
    </Provider>
    )
  })
})