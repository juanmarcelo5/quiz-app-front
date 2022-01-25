import React, { useState } from 'react';
import { RegisterAvatar } from './RegisterAvatar';
import { ShowAvatar } from './ShowAvatar';
import { ShowQuestion } from './ShowQuestion';

export const Quiz = () => {
  const [isRegister,setIsRegister]=useState(false);
  return (
    <div className='container'>
      <h1 className='text-title text-center mt-5'>Quiz App</h1>
      <div className='row'>
        <hr/>
        {
          isRegister ? (
            <ShowQuestion/>
          ):(
            <>
            <RegisterAvatar isAuth={setIsRegister}/>
            <ShowAvatar/>
            </>
          
          )
            
          
            

        }
      </div>
    </div>
  );
};
