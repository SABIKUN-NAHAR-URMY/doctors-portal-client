import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';
import useToken from '../../Hooks/useToken';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');
    const navigate = useNavigate();


    const[createUserEmail, setCreateUserEmail] = useState('');

    const[token] = useToken(createUserEmail);

    if(token){
        navigate('/');
    }


    const handelSignUp = data => {
        console.log(data);
        setSignupError('');
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Create user successfully');
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                .then(()=>{
                    saveUser(data.name, data.email);
                })
                .catch(error => console.error(error))
            })
            .catch(error => {
                console.error(error);
                setSignupError(error.message);
            })
    }

    const saveUser = (name, email) =>{
        const user = {name, email}
        fetch('http://localhost:5000/users',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setCreateUserEmail(email);
        })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border rounded-lg'>
                <h2 className='text-xl font-bold text-center'>Signup</h2>
                <form onSubmit={handleSubmit(handelSignUp)}>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Name</span></label>
                        <input type="text"
                            {...register("name",
                                { required: "Name is required" })} className="input input-bordered w-full" />
                        {errors.name && <p className='text-red-600'>{errors.name?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Email</span></label>
                        <input type="email"
                            {...register("email",
                                { required: "Email Address is required" })} className="input input-bordered w-full" />
                        {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                    </div>
                    <div className="form-control w-full">
                        <label className="label"><span className="label-text">Password</span></label>
                        <input type="password"
                            {...register("password",
                                {
                                    required: "Password is required",
                                    minLength: { value: 6, message: "Password must be 6 characters long" },
                                    pattern: { value: /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/, message: "Password must be strong" }
                                })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                    </div>
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    <input className='btn btn-accent w-full mt-5' value='Signup' type="submit" />
                    {
                        signupError && <p className='text-red-600'>{signupError}</p>
                    }
                </form>
                <p className='text-sm text-center'>Already have an account? <Link className='text-secondary' to='/login'>Please Login</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Signup;