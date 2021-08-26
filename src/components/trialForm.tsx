import Form from '@rjsf/core';
import type { ReactElement } from 'react';
import schema from '../schema/schema'
import uiSchema from '../schema/uiSchema'
import formValidation from '../formValidation/formValidation'
import { JSONSchema7 } from "json-schema";




 interface IformData{
  firstName? : string ;
  lastName? : string ;
  email? : string ;
  password1? : string ;
  password2? : string ;
  phone? : string
}

const onSubmit =(formData : IformData )=>{
  console.log('Helooo the form data is for data' , formData);
  fetch(`https://jsonplaceholder.typicode.com/todos/`, {
    method : 'POST' , 
    headers : {
      'Content-Type': 'application/json',
    },
    body : JSON.stringify({formData
    })
  }
  ).then(res => {
    console.log(`Hello the response is` , res)
    return res.json;
  }).catch(error=>{
    console.log(`caught the error instead` , error)
  })

}


export const  TrialForm = () : JSX.Element =>{
  return <div>
    <Form
      noHtml5Validate
      schema={schema as JSONSchema7}
      uiSchema={uiSchema}
      validate={formValidation}
      onSubmit={(e)=>{onSubmit(e.formData as IformData)}}
    />
    </div>
    ;


}
export default TrialForm
