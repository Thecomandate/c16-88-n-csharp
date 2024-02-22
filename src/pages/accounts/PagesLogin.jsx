import React, { useContext } from 'react'
import Login from './Login'
import Forgot from './Forgot'
import SignUp from './SignUp';
import MyContext from '../../lib/context';

export default function PagesLogin() {
    const { setp, setStep } = useContext(MyContext);
    return (
        <div>
            {setp === 0 && <Login setStep={setStep}/> }
            {setp === 1 && <Forgot setStep={setStep}/>}
            {setp === 2 && <SignUp setStep={setStep}/>}
        </div>
    )
}
