import React, { useState } from 'react';

const Form = (props) => {
    const [form,setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const onChangeHandler = (event) => {
        setForm({...form,[event.target.name]:event.target.value})
        console.log(event.target.value);
    }

    function ValidateEmail(event) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)){
            return true
        }
        return false
    }

    const onLengthValidator = (event,num) =>{
        if(event.target.length > num){
            console.log("yes")
        }else{
            console.log("no")
        }
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
                        ValidateEmail ? "True" : "You have entered an invalid email address!"
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

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}

export default Form;