import React, { useState, useEffect } from "react";
import axios from "axios";
import Data from "./Data";
import "./Home.css"


const Home = () => {
    const [url,setUrl]  = useState([]);
    const set = ['https://static.tvmaze.com/uploads/images/medium_portrait/31/78286.jpg',
    'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/406/1015813.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/402/1007479.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/4/11308.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/297/744253.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/191/478539.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/138/347202.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/22/55709.jpg',
  'https://static.tvmaze.com/uploads/images/medium_portrait/18/47024.jpg',
  
  
  ]
  
    useEffect(() => {
      axios
      .get(
       'https://api.tvmaze.com/search/shows?q=girls')
      .then(res =>{
        setUrl(res.data)
        console.log(res.data)
      }).catch(error => console.log(error));
    },[]);

    let i=-1;
    const sets = () => {
    i++;
      while(i<10)
      {
        return set[i];
      }
      
    }
    return (
      <div className="text">
      {/* {url.length > 0 && (
        <ul>
          {url.map(user => (
            <li key={user.id}>{user.score}</li>
          ))}
        </ul>
      )} */}
      
    

      {url.map( user=>{
        return(
          <Data key = {user.id}
          rating= {user.show.rating.average}
          name= {user.show.name}
          ended={user.show.ended}
          summary={user.show.summary}
          language={user.show.language}
          genres={user.show.genres}
          url={user.show.url}

          image={sets()}

          />
          
        )

      })}
      
     

{/* 
      var PlusOne= array.map((e)=>{
   return (e+1);
 }); */}



      </div>
    );
};

export default Home;
