import React, { useEffect, useState } from 'react';
import { useAjax } from '../hook/useAjax';
import { Questions } from './Questions';


const url = 'https://quiz-appmb.herokuapp.com/api/question';
export const ShowQuestion = () => {
  const {data:question,loading,error} = useAjax(url)
  return (
    <div className='row' >
      {
        loading?(
          'Cargando preguntas...'
        ):(
         
          <Questions questions={question.data} />
        )

      }


    </div>
  );
};
