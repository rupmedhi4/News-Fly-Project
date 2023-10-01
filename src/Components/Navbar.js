import React, { useEffect } from 'react'
import { AiOutlineMenu } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { openModal } from '../Redux/Slices/ModalSlices';


export default function Navbar() {

  const navigate = useNavigate()
  const dispatch = useDispatch()


  const handler = () => {
     
      document.body.classList.add('overflow-hidden');
      dispatch(openModal());
    
  };
  

  return (
    <>
      <div className='flex  p-4 pl-4 justify-between  bg-black md:justify-start '>
        <h1 className='text-4xl font-serif text-white font-bold'>NewsFly</h1>
        <ul className='hidden  cursor-pointer md:flex flex-row gap-4 text-white items-center ml-4'>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/")}>Home</li>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/business")}>Bussiness</li>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/entertainment")}>Entartainments</li>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/sports")}>Sport</li>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/health")}>Health</li>
          <li className='text-slate-300 hover:text-white hover:font-bold' onClick={()=>navigate("/science")}>Science</li>
          <li className='text-slate-300 hover:text-white hover:font-bold'onClick={()=>navigate("/technology")}>Technology</li>
        </ul>
        <button className=' md:hidden  text-white' onClick={handler}>
          <AiOutlineMenu/>
        </button>
      </div>

    </>
  )
}
