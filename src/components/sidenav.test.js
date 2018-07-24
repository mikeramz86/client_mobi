

import React from 'react';
import ReactDOM from 'react-dom';
import SideNav from './sidenav';
import {shallow} from "enzyme";
import configure from "../setupTests"
import store from "../store";
import {Provider} from "react-redux";

describe("SideNav", () => {
  it("Renders without crashing", () => {
    shallow(
    <Provider store={store}>
      <SideNav />
    </Provider>
    )
  })
})
