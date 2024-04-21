import React, { useEffect } from 'react'

export default function Form() {
    const [formData,setFormdata]= React.useState({
        UserName : "",
        email : "",
        password : ""
    })
    console.log(formData)
    const [formErrors,setFormerrors] = React.useState({})
    const [isSubmit, setIssubmit] =React.useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setFormerrors(validate(formData))
        setIssubmit(true)

    }
    useEffect(()=>{
        console.log(formErrors);
        if(Object.keys(formErrors).length===0 && isSubmit){
            console.log(formData)
        }

    },[formErrors])

    const validate = (values)=>{
        const errors = {}
        console.log("errors are",errors)
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!values.UserName){
            errors.UserName = "userName is required"
        }
        if (! values.email){
            errors.email = "email is required"
        }else if(! regex.test(values.email)){
            errors.email = "please enter valid email"
        }
        if (! values.password){
            errors.password = "password is required"
        }else if(values.password.length < 4){
            errors.password = "password must be more than 4 characters"
        }else if(values.password.length > 10){
            errors.password = "password must be less than 10 characters"
        }
        return errors
    }
  return (
    <div>
        {Object.keys(formErrors).length ===0 && isSubmit? "signed in successful":
        <div className='mt-8 p-4 font-bold ml-24 border-solid border-2 rounded-lg border-black-900 ... w-50 bg-gray-200'>
            <h1>Login Form</h1>
            <form>
               <div className='mt-4 mb-4'>
                  <label>User Name</label><br/>
                  <input type='text' name='UserName' placeholder='Enter name'
                  className='p-0.8 font-normal' value={formData.UserName}
                  onChange={(e)=>{setFormdata({...formData,UserName : e.target.value})}} ></input>
                  <p className='text-xs text-red-400 mt-1'>{formErrors.UserName}</p>
               </div>
               <div className='mt-4 mb-4'>
                  <label>Email</label><br/>
                  <input type='email' name='email' placeholder='Enter email'className='p-0.8 font-normal'  value={formData.email}
                   onChange={(e)=>{setFormdata({...formData,email : e.target.value})}}></input>
                     <p className='text-xs text-red-400 mt-1'>{formErrors.email}</p>
               </div>
               <div className='mt-4 mb-4'>
                  <label>Password</label><br/>
                  <input type='password' name='password' placeholder='Enter password'
                  className='p-0.8 font-normal'  value={formData.password}
                   onChange={(e)=>{setFormdata({...formData,password : e.target.value})}}></input>
                     <p className='text-xs text-red-400 mt-1'>{formErrors.password}</p>
               </div>
               <button className='btn btn-primary'onClick={handleSubmit}>Submit</button>
            </form>
        </div>}
    </div>
  )
}
