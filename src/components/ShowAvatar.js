import React from 'react';
import { useAjax } from '../hook/useAjax';
const url = 'https://quiz-appmb.herokuapp.com/api/auth'
export const ShowAvatar = () => {
  const {data:avatars,loading,error} = useAjax(url)
  return (
    <div className='col-lg-6 col-md-12  list-group-flush '>
    <h3 className='title text-center'>Avatars</h3>
      {
        loading ?(
          'Cargando...'
          ):(
            <ol>
              
              {avatars.data.map(el => {
                return<li className='list-group-item-primary list-group-item ' key={el._id}>{el.avatar}</li>
              })}

            </ol>
          ) 
        
      }    
  
    </div>
      
  );
};
