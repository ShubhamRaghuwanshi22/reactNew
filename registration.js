import { useState } from "react"
import { useNavigate } from "react-router-dom"

const Registration = ({submitForm,data,onTextFieldChange}) =>{
    const navigate = useNavigate()
    
    // const onTextFieldChange = (e)=>{
    //     console.log(data,e.target.name,e.target.value);
    //     data[e.target.name] = e.target.value
    // }
    const handleForm = (e) =>{
        e.preventDefault();
        let isValid = true;
        let formObject = {}
        for (let i = 0; i <= e.target.length - 1; i++) {
            const field = e.target[i];
            console.log(e.target[i]);
            if (field.name) {
                if (field.value.trim() === "") {
                    alert(`Please fill in the "${field.name}" field.`);
                    isValid = false;
                    break; // stop at the first empty field
                } else {
                    formObject[field.name] = field.value
                }
            }
                    
          }
        if(isValid == true){
            navigate('/about')
            submitForm(isValid,formObject)
        }
    }
   
    console.log("000000000",data);
return(
    <div className="container">
        <h1>Registration</h1>
        <form onSubmit={e=>handleForm(e)} >
            <div className="form-container">
                <label>First Name </label>
                <input 
                    type="text"
                    name="FirstName"
                    value={data?.FirstName}
                    onChange={e=>onTextFieldChange(e)}
                />

                <label>Last Name </label>
                <input 
                    type="text"
                    name="LastName"
                    value={data?.LastName}
                    onChange={e=>onTextFieldChange(e)}
                />
   
                <label>Email </label>
                <input 
                    type="email"
                    name="Email"
                    value={data?.Email}
                    onChange={e=>onTextFieldChange(e)}
                />
 
                <label>Password </label>
                <input 
                    type="password"
                    name="Password"
                     value={data?.Password}
                    onChange={e=>onTextFieldChange(e)}
                />
                <button type="submit">Submit</button>
            </div>

        </form>
        
    </div>
)
}
export default Registration
