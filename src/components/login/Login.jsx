import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({setUser}) => {
    const {register, handleSubmit, formState: {
        errors
    },
    } = useForm();

    const onSubmit = (data) => {
        setUser(data);
    }

    return (
        <div className='mx-auto mb-4 px-5 py-2 w-1/3'>
            <h1 className='text-3xl font-bold text-center m-7'>Login</h1>
            <form 
                onSubmit={handleSubmit(onSubmit)}
                className='flex flex-col items-center rounded-2xl h-65 p-7 bg-cover bg-[url("https://bogatyr.club/uploads/posts/2023-03/thumbs/1679552251_bogatyr-club-p-rozovie-gori-foni-pinterest-3.jpg")]' 
            >
                <input 
                    {...register('name', {
                        required: 'Name is required',
                        validate: {
                            minLength: (v) => v.length >= 5 || 'The name should have at least 5 characters',
                            matchPattern: (v) => /^[a-zA-Z0-9_]+$/.test(v) ||
                            'Name must contain only letters, numbers and _'
                        }
                    })}
                    placeholder='Name'
                    type='text'
                    className='w-2/3 rounded-lg p-1 opacity-70 border-2 border-gray-300 text-gray-800'
                />
                {errors && <div className='text-red-700 m-2'>{errors?.name?.message}</div>}
                <input 
                    {...register('email', {
                        required: 'Email is required',
                        validate: {
                            maxLength: (v) =>
                              v.length <= 50 || 'The email should have at most 50 characters',
                            matchPattern: (v) =>
                              /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                              'Email address must be a valid address'
                          }
                    })}
                    placeholder='Email'
                    type="text"
                    className='w-2/3 rounded-lg p-1 opacity-70  border-2 border-gray-300 text-gray-800'
                />
                {errors && <div className='text-red-700 m-2'>{errors?.email?.message}</div>}
                <input 
                    {...register('password', {
                        required: 'Password is required',
                        minLength: {
                            value: 8,
                            message: 'The password should have at least 5 characters'
                        }
                    })}
                    placeholder='Password'
                    type="password"
                    className='w-2/3 rounded-lg p-1 opacity-70  border-2 border-gray-300 text-gray-800'
                />
                {errors && <div className='text-red-700 m-1'>{errors?.password?.message}</div>}

                <button
                    className='bg-gray-900 border-gray-700 border-1 px-6 py-1 rounded-xl w-1/3 mt-4 opacity-70'
                >
                    Log In
                </button>
            </form>
        </div>
    )
}

export default Login;
