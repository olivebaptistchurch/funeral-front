// import download from "downloadjs";
import React from "react"
import Layout from "../components/layout"

// require("downloadjs");

function download(url) {
  console.log("In download function")
  fetch(url, {
            method: 'GET',
        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "test.mp4";
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
        });
}

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
      
      <a 
        // href={
        //   pageContext.funeralUrl
        // }
        onClick={ () => download(pageContext.funeralUrl) }
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
        // download="test.mp4"
      >Download</a>
  </Layout>
)