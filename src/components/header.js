import PropTypes from "prop-types"
import React from "react"
import OliveLogo from "../images/olive-logo-white.png"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#173A64`,
      marginBottom: `3rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        textAlign: 'center',
        padding: `0 1.0875rem`,
      }}
    >
      <a href="https://olivebaptist.org">
        <img src={OliveLogo} alt="Olive Baptist Church Logo" height="300px" />
      </a>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
