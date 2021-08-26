const uiSchema = {
    firstName: {
      'ui:autofocus': true,
      'ui:placeholder': 'First Name',
      'ui:title': 'First Name'
    },
    lastName: {
        'ui:autofocus': true,
        'ui:placeholder': 'Last Name',
        'ui:title': 'Last Name'
      },
    email: { 'ui:widget': 'email', 'ui:placeholder': 'Email', },
    password1 : {'ui:widget': 'password'  },
    password2 : {'ui:widget': 'password'  },
    phone : { "ui:options": {
        "inputType": "tel"
      }}

  }
  export default uiSchema;