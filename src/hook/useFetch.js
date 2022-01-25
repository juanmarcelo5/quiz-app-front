import React from 'react';

export const getAllQuestion = (url) => {
  
  return fetch(url)
  .then((res)=>res.json())
  .then((json)=>{
    return json
    
  })
};
