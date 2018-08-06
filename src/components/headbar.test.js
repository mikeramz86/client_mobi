

import React from 'react';
import ReactDOM from 'react-dom';
import HeadBar from './headbar';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("HeadBar", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <HeadBar />
    </Provider>
    )
  })
})
