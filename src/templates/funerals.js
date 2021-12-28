// import download from "downloadjs";
import React, { useState } from "react"
import Layout from "../components/layout"
import Loader from "react-spinners/PulseLoader";
import { css } from "@emotion/react";

// require("downloadjs");

const loader = css`
  position: absolute;
  top: calc(50% - 50px);
`

function download(url, title, setLoading) {
  setLoading(1)
  fetch(url, {
            method: 'GET',
        })
        .then(response => response.blob())
        .then(blob => {
            var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = `${title.replace(/\s/g , "-")}.mp4`;
            document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
            a.click();    
            a.remove();  //afterwards we remove the element again         
            setLoading(0);
        });
}

export default ({ pageContext }) => {
  const [loading, setLoading] = useState(0);
  return (<Layout title={pageContext.title}>
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

      <div className="overlay" style={ loading ? { display: 'block' } : { display: 'none' } }>
        <h3 style={{position: 'relative', top: 'calc(50% - 100px)', left: '15px', zIndex: '20000', color: 'white' }}>Downloading Video</h3>
        <Loader loading={loading} css={loader} color="white" speedMultiplier={.75} />
      </div>
      
      <a onClick={ () => download(pageContext.funeralUrl, pageContext.title, setLoading) }
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
  </Layout>)
}