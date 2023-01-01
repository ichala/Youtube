import { Controller } from "@hotwired/stimulus"
import React from 'react'
import ReactDom from 'react-dom'
import Hello from "../components/Hello"

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    ReactDom.render(<Hello />, this.element)
  }
}
