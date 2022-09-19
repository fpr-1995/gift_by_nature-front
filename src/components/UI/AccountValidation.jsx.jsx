import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validateAccount } from "../../../../services/api/user";

function ValidateAccount() {
    
    const navigate = useNavigate();
    const [msg, setMsg] = useState(null)


    const accountValidationHandler = async (e) => {
        e.preventDefault();
        
        const data = {
            uuid : req.params.uuid,
        }
        const res = await validateAccount(data);
        
        }
    };

  
}

export default AccountValidation;