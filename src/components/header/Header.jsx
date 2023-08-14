import React from 'react';
import userImg from '../../assets/user-img.jpg';

const Header = ({user, setUser}) => {
    return (
        <div className='flex justify-between items-center h-12 w-full bg-gray-800 mt-0 p-2'>
            <p className='text-lg font-bold ml-5'>LOGO</p>
            <div className='flex flex-row items-center'> 
                <img 
                    className='w-10 h-10 rounded-3xl mr-3' 
                    src={userImg} 
                    alt='userphoto' />
                <p>{user.name}</p>
                <button 
                    className='mr-3 ml-5 bg-gray-700 rounded-lg px-3 py-1'
                    onClick={() => {setUser(null)}}
                >
                    LogOut
                </button>
            </div>
        </div>
    )
}

export default Header;
