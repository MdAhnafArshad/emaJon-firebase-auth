import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Form, Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const SignUp = () => {

    const [error, setError] = useState("")

    const {createUser} = useContext(AuthContext);


    const handleSignIn = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        setError("")
        if (password !== confirm) {
            setError("please write accurate pass");
            return
        }
        if (password.length < 6) {
            setError("")
            setError("pass will have 6 character long")
        }

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
        })
        .catch(error => {
            console.error(error);
            setError(error.message);
        })

        
        console.log(email, password, confirm);
        form.reset();
    }

    return (
        <div>
            <Form onSubmit={handleSignIn} className="hero min-h-screen bg-base-200" >
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Sign-up now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name='password' className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm password</span>
                                </label>
                                <input type="password" placeholder="Confirm password" name='confirm' className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Sign-Up</button>
                            </div>
                            <div>{
                                <span className='text-red-700'>{error}</span>
                            }</div>
                            <label className="label">
                                <Link to="/Login" className="label-text-alt link link-hover">Login now?</Link>
                            </label>
                        </div>
                    </div>
                </div>
            </Form>
        </div>
    );
};

export default SignUp;