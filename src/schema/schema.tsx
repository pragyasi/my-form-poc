
 const schema = {
    type: "object",
    required: ["firstName", "phone", "lastName", "email", "password1" , "password2"],
    properties: {
      firstName: {
        type: "string",
        title: "First Name",
      },
      lastName: {
        type: "string",
        title: "Last Name",
      },
      email: {
        type: "string",
        title: "Email/User Name",
        format: "email"
      },
      password1: {
        "title": "Password",
        "type": "string",
        "minLength": 3
      },
      password2: {
        "title": "Repeat password",
        "type": "string",
        "minLength": 3
      },
      phone: {
        type: "string",
        title: "Phone"
      }
    }
  };
  export default schema;
