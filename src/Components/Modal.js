import React from 'react'
import ReactDOM from 'react-dom';
import { useDispatch } from 'react-redux';
import { openModal } from '../Redux/Slices/ModalSlices';
import { Link } from 'react-router-dom';


export default function Modal() {

    const dispatch = useDispatch()

    const handleCloseModal = () => {
        document.body.classList.remove('overflow-hidden');
        dispatch(openModal());
    }

    return ReactDOM.createPortal(
        <div className='fixed inset-0 flex justify-end  bg-black bg-opacity-50 scale-up-hor-right'>
            <ul className='bg-slate-700 p-10 rounded-lg flex flex-row mt-20'>
                <div className=' m-5 '>
                    <li className='mb-2  text-xl text-white font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/' onClick={handleCloseModal}>
                            Home
                        </Link>
                    </li>
                    <li className='mb-2 text-xl text-white  font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/business' onClick={handleCloseModal}>
                            Bussiness
                        </Link>
                    </li>
                    <li className='mb-2 text-xl text-white  font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/entertainments' onClick={handleCloseModal}>
                            Entartainments
                        </Link>
                    </li>

                    <li className='mb-2 text-xl text-white  font-serif font-bold  cursor-pointer hover:text-yellow-300 '>
                        <Link to='/sports' onClick={handleCloseModal}>
                            sport
                        </Link>
                    </li>
                    <li className='mb-2 text-xl text-white  font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/health' onClick={handleCloseModal}>
                            health
                        </Link>
                    </li>
                    <li className='mb-2 text-xl text-white  font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/science' onClick={handleCloseModal}>
                            Science
                        </Link>
                    </li>
                    <li className='mb-2 text-xl text-white  font-serif font-bold cursor-pointer hover:text-yellow-300 '>
                        <Link to='/technology' onClick={handleCloseModal}>
                            Technology
                        </Link>
                    </li>
                </div>

            </ul>
            <button className='text-white bg-blue-500 rounded-md p-2 font-bold hover:bg-yellow-300 hover:text-black absolute top-20 right-0 m-4' onClick={handleCloseModal}  > Close</button>
        </div>,
        document.getElementById('myModal')
    )
}
