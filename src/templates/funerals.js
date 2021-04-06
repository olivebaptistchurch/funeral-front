import React from "react"

import Layout from "../components/layout"

export default ({ data, pageContext }) => (
  <Layout title={pageContext.title}>
    { console.log(pageContext) }
      <h1 style={{ 
        textAlign: `center`, 
        fontFamily: `great vibes`,
        fontSize: `3rem`, 
      }}>
        In Memory of <br />
        <span style={{ fontSize: `1.25em` }}>{pageContext.title}</span>
      </h1>
      
      <video controls style={{ width: `100%`, marginBottom: `2rem` }} poster={pageContext.thumbnailUrl} >
        <source src={pageContext.funeralUrl} />
      </video>
      
      <a
        href={"https://cors-anywhere.herokuapp.com/" + pageContext.funeralUrl}
        onClick={ console.log(`testing`) }
        style={{
          textDecoration: `none`,
          fontFamily: `helvetica`,
          padding: `.75rem 1rem`,
          fontSize: `1.3rem`,
          fontWeight: `700`,
          borderRadius: `5px`,
          background: `#173A64`,
          color: `white`,
          border: `none`,
          cursor: `pointer`,
        }}
        target="_blank"
        download
      >Download</a>
  </Layout>
)