interface IformData{
    firstName? : string;
    lastName? : string ;
    email? : string ;
    password1? : string ;
    password2? : string ;
    phone? : string;
  }

  type IaddError= { addError:string[]|undefined}


  interface IformErrorData{
    firstName?: IaddError;
    lastName? : IaddError
    email? : IaddError
    password1? : IaddError
    password2? :IaddError
    phone? : IaddError
  }


export default function validate(formData : IformData, errors : IformErrorData  | any) {
    if(!formData.firstName || !formData.lastName){
        
        errors.firstName.addError('Please enter a valid first name');
        errors.lastName.addError('Please enter a valid last name');
    }
    if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone as string)){
        errors.phone.addError('Please enter a valid phone number');
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email as string)) {
        errors.email.addError('Please enter a valid email')
    }
    return errors;
  }
  