

import React from 'react';
import ReactDOM from 'react-dom';
import JobList from './joblist';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("JobList", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <JobList />
    </Provider>
    )
  })
})
