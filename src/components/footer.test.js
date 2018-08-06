

import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './footer';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("Footer", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <Footer />
    </Provider>
    )
  })
})
