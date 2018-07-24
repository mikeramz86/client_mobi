import React from 'react';
import ReactDOM from 'react-dom';
import MainSection from './mainSection';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("MainSection", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <MainSection />
    </Provider>
    )
  })
})