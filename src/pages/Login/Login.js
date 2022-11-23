import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const [loginError, setLoginError] = useState('');
    const[loginEmail, setLoginEmail] = useState('');
    const { signIn } = useContext(AuthContext);

    const[token] = useToken(loginEmail);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    if(token){
        navigate(from, {replace:true});
    }



    const handelLogin = data => {
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setLoginEmail(data.email);
            })
            .catch(error => {
                console.error(error);
                setLoginError(error.message);
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7 border rounded-lg'>
                <h2 className='text-xl font-bold text-center'>Login</h2>
                <form onSubmit={handleSubmit(handelLogin)}>
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
                                })} className="input input-bordered w-full" />
                        {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                        <p className='text-red-600'>{loginError}</p>
                    </div>
                    <label className="label"><span className="label-text">Forget Password?</span></label>
                    <input className='btn btn-accent w-full mt-5' value='Login' type="submit" />
                </form>
                <p className='text-sm text-center'>New to Doctors Portal? <Link className='text-secondary' to='/signup'>Create New Account</Link></p>
                <div className="divider">OR</div>

                <button className='btn btn-outline w-full '>CONTINUE WITH GOOGLE</button>

            </div>
        </div>
    );
};

export default Login;