import React, { useState } from 'react';

const Form = (props) => {
    const [emailValidate,setEmailValidate] = useState(false)
    
    const [form,setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]:event.target.value})
    }

    function ValidateEmail(event) {
        setForm({...form,[event.target.name]:event.target.value})
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            setEmailValidate(true)
        }else{
            setEmailValidate(false)
        }
    }

    const onLengthValidator = (event,num) =>{
        if(event.target.length > num){
            console.log("yes")
        }else{
            console.log("no")
        }
    }

    const allValid = (inputs) => {
        console.log(emailValidate)
        console.log(emailValidate(form.email))
        return emailValidate(form.email);
    }

    return(
        <div>
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" name="firstName" onChange={()=>{onLengthValidator(5)}}/>

                </div>

                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" onChange={onChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" onChange={ValidateEmail}/>
                    <span>
                    {
                        emailValidate ? "looks good!" : "You have entered an invalid email address!"
                    }
                    </span>
                </div>

                <div>
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" onChange={onChangeHandler}/>
                </div>

                <div>
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" onChange={onChangeHandler}/>
                </div>
                {
                    allValid ? "I'm a valid form" : "I'm not vaild"
                }   
                <input type="submit" value="Submit" /> 
            </form>
        </div>
    );
}

export default Form;