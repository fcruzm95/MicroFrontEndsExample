import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { ReactPropInterface } from "./model/ReactPropInterface";
import { BehaviorSubject } from "rxjs";
import { EventEmitter } from "./events/eventEmitter";
import { EventEmitterFactory } from "./events/EventEmitterFactory";

const defaultProps = {
  message: "default",
  onClickEvent: () => console.log("default"),
  onChildEvent: new BehaviorSubject<string>("default")
}

const clickedEvent = () => {
  const eventEmitter = EventEmitterFactory.getInstance();
  eventEmitter.sendEvent("click", {message: "clicked"})
}

const App = (props: ReactPropInterface) => {
  props.onChildEvent.next("test from child");

  return (
    <div className={`container ${props.className}`} onClick={clickedEvent}>
      <div>Message from shell: {props.message}</div>
      <div>Name: mfe</div>
      <div>Framework: react</div>
      <div>Language: TypeScript</div>
      <div>CSS: Empty CSS</div>
    </div>
  );
}

class reactMFE extends HTMLElement {
  connectedCallback() {
    const props = (this["props"]) ? this["props"] : defaultProps;
    ReactDOM.render(<App {...props} />, this);
  }
}

customElements.define('react-1-element', reactMFE);