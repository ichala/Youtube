import { Controller } from "@hotwired/stimulus"
import React from "react"
import ReactDom from "react-dom"
import hello from "../components/hello"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    ReactDom.render(React.createElement(hello, {msg:'hello from component'}), this.element)
  }
}
