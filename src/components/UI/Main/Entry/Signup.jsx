import React, { useState } from "react";
import { Link} from "react-router-dom";
import { signup } from "../../../../services/API/user";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
   
    const onSubmitHandler = async (e) => {
        e.preventDefault();
        
        if(!email.length || !password.length){
            return (<p> The email is not associated with the password</p>);
        }
        const userData = {
            email: email,
            password: password,
        }
       
    }
          
}

export default SignIn