
import React from "react";
import "./Data.css"



    const Data = ({rating,name,ended,language,summary,genres,url,image}) => {
      //  const url = image;
    //    console.log(url);
    

        return (
            <div className="fix">
            <div className="main">
           
          <div classname="blog">
    
     
            <h1>{name}</h1>
            <h3>{rating}</h3>
            <h3>{ended}</h3>
            <h3>{language}</h3>
        
            <h3>{genres}</h3>
            <p><h3>Summary</h3>{summary}</p>
            <a href={url}>{url}</a>
            <p></p>
            <div className="img"> <img src={image} alt='crypto' /></div>
           <button className="button-48" >Summary</button>
            <div className="line"></div>
            
            </div>
          </div>
          </div>
        );
      };


export default Data;
