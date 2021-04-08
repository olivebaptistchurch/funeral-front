import download from "downloadjs";
import React from "react"
import Layout from "../components/layout"

require("downloadjs");

export default ({ pageContext }) => (
  <Layout title={pageContext.title}>
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
      
      <button
        onClick={ () => {
          download(pageContext.funeralUrl);
        } }
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
      >Download</button>
  </Layout>
)