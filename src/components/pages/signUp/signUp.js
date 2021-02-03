import React from 'react'
import {useFormik} from 'formik'
import './signUp.css'

const validForm=data=>{
    const errors={}

    if(!data.firstName){
        errors.firstName='Please Enter First Name'
    }else if(!data.lastName){
        errors.lastName='Please Enter Last Name'
    }else if(!data.number){
        errors.number='Please Enter Phone Number'
    }else if(!/^[7-9]\d{9}$/i.test(data.number)){
        errors.number='Invalid Mobile Number'
    }else if(!data.mail){
        errors.mail='Please Enter Mail ID'
    }else if(!/^([a-z0-9\.]+)@([a-z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/i.test(data.mail)){
        errors.mail='Invalid Mail '
    }else if(!data.password){
        errors.password='Please Enter Password'
    }else if(data.password.length < 6){
        errors.password='Password is too short'
    }else if(!data.confirmPassword){
        errors.confirmPassword='Please confirm the password'
    }else if(data.confirmPassword !== data.password){
        errors.confirmPassword='Password doesnt match'
    }

    return errors;
}

function SignUp() {
    const formik= useFormik({
        initialValues:{
            firstName:'',
            lastName:'',
            number:'',
            mail:'',
            password:'',
            confirmPassword:''
        },
        validate: validForm,
        onSubmit: values=>{
            alert('Submitted Successfully')
        }
    })
    return (
        <div className='form'>
            <form onSubmit={formik.handleSubmit} className='form-main'>
                <div className='form-fn'>
                    <label htmlFor='firstName'>
                        First Name
                    </label>
                    <input 
                        type='text' 
                        name='firstName' 
                        value={formik.values.firstName} 
                        onChange={formik.handleChange} 
                        className={formik.errors.firstName ? 'invalid-input':'valid-input'}
                    /><br/>
                </div>
                <div className='form-ln'>
                    <label htmlFor='lastName'>
                        Last Name
                    </label>
                    <input 
                        type='text' 
                        name='lastName' 
                        value={formik.values.lastName} 
                        onChange={formik.handleChange} 
                        className={formik.errors.lastName ? 'invalid-input':'valid-input'}
                    />
                </div>
                <div className='form-num'>
                    <label htmlFor='number'>
                        Mobile Number
                    </label>
                    <input 
                        type='number' 
                        name='number' 
                        value={formik.values.number} 
                        onChange={formik.handleChange} 
                        className={formik.errors.number ? 'invalid-input':'valid-input'}
                    />
                </div>
                <div className='form-ml'>
                    <label htmlFor='mail'>
                        E Mail
                    </label>
                    <input 
                        type='email' 
                        name='mail' 
                        value={formik.values.mail} 
                        onChange={formik.handleChange} 
                        className={formik.errors.mail ? 'invalid-input':'valid-input'}
                    />
                </div>
                <div className='form-pw'>
                    <label htmlFor='password'>
                        Password
                    </label>
                    <input 
                        type='password' 
                        name='password' 
                        value={formik.values.password} 
                        onChange={formik.handleChange} 
                        className={formik.errors.password ? 'invalid-input':'valid-input'}
                    />
                </div>
                <div className='form-cpw'>
                    <label htmlFor='confirmPassword'>
                        Confirm Password
                    </label>
                    <input 
                        type='password' 
                        name='confirmPassword' 
                        value={formik.values.confirmPassword} 
                        onChange={formik.handleChange}  
                        className={formik.errors.confirmPassword ? 'invalid-input':'valid-input'
                    }/>
                </div>
                <div className='form-error-msgs'>
                    {formik.touched.firstName && formik.errors.firstName ? formik.errors.firstName : null}
                    {formik.touched.lastName && formik.errors.lastName ? formik.errors.lastName : null}
                    {formik.touched.number && formik.errors.number ? formik.errors.number : null}
                    {formik.touched.mail && formik.errors.mail ? formik.errors.mail : null}
                    {formik.touched.password && formik.errors.password ? formik.errors.password : null}
                    {formik.touched.confirmPassword && formik.errors.confirmPassword ? formik.errors.confirmPassword : null}
                </div>
                <div>
                    <button 
                        type='submit' 
                        className='submit-btn'
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    )
}

export default SignUp