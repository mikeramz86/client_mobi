

import React from 'react';
import ReactDOM from 'react-dom';
import Job from './job';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Job", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Job />
    </Provider>
    )
  })
})
