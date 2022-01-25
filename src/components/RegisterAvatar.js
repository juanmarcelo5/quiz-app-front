import React, { useState } from 'react';

const url = 'https://quiz-appmb.herokuapp.com/api/auth'

export const RegisterAvatar = ({isAuth}) => {
  const [avatar,setAvatar] = useState('');
  


  const addAvatar = async()=>{
    if(avatar.length === 0 ){
     alert('El avatar no puede estar vacio!!')
   } 
   const data = {
     avatar
   }
   try {
     const res = await fetch(url,{
       method: 'POST',
       headers:{
         'Content-type':'application/json'
       },
       body:JSON.stringify(data) 
     })
     const json = await res.json();
     isAuth(true)

    } catch (error) {
      console.log(error);   
      
    }
     
     
  }

  return (
    <div className='col-lg-6 col-md-12  text-center'>
      <h3 className='text-center'> Registrate y juega! </h3>
      <input 
      className="form-control" 
      type="text" 
      value={avatar}
      onChange={(e)=>setAvatar(e.target.value)}
      
      />
        <button
        className='btn btn-primary text-center mt-3'
        onClick={addAvatar}>Registrar</button>
    </div>


  );
};
