import * as React from "react"
import { BrowserRouter, Route } from "react-router-dom";

// markup
const IndexPage = () => {
  return (
    <BrowserRouter>
      <Route path='/' component={() => {
        window.location.href = 'https://olivebaptist.org/funeral';
        return null;
      }} />
    </BrowserRouter>
  )
}

export default IndexPage
