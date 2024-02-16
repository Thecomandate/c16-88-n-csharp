import React from 'react'
import Login from './Login'
import Forgot from './Forgot'
import SignUp from './SignUp';
import { useState } from 'react';
export default function PagesLogin() {
    const [setp, setStep] = useState(0);
  return (
    <div>
        {setp === 0 && <Login setStep={setStep}/> }
        {setp === 1 && <Forgot setStep={setStep}/>}
        {setp === 2 && <SignUp setStep={setStep}/>}
        
    </div>
  )
}
