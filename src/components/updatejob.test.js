

import React from 'react';
import ReactDOM from 'react-dom';
import UpdateJob from './updatejob';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("UpdateJob", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <UpdateJob />
    </Provider>
    )
  })
})
