import React from 'react'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { MdOutlineMail } from 'react-icons/md'

function Footer() {
    const links= [
        {
            id:1,
            child: (
                <>
                <FaLinkedin size={30}/>
                </>
            ),
            href:'https://www.linkedin.com/in/tejasvitarde',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child: (
                <>
                <FaGithub size={30}/>
                </>
            ),
            href:'https://github.com/codewithtarde9370/',
            style:''
        },
        {
            id:3,
            child: (
                <>
                <MdOutlineMail size={30}/>
                </>
            ),
            href:'mailto:tejasvitarde36@gmail.com',
            style:''
        },
        {
            id:4,
            child: (
                <>
                <BsFillPersonLinesFill size={30}/>
                </>
            ),
            href:'/resume.pdf',
            style:'rounded-br-md',
            download:true,
        }
    ]
    
  return (
    <div name='footer' className='flex flex-col sm:flex-row justify-between items-center w-full h-auto bg-black text-white px-4 sm:px-8 py-4'>
    <h1 className='text-xl sm:text-2xl mb-4 sm:mb-0 text-center'>
      Developed by <span className='text-blue-500'>Tejasvi Tarde</span>
    </h1>
    
    <ul className='flex flex-row sm:flex-row sm:space-x-4 text-center'>
      {links.map(({ id, child, style, href, download }) => (
        <li key={id} className='flex justify-between items-center w-full h-14 px-4 hover:rounded-md duration-300'>
          <a 
            href={href} 
            className='w-full flex justify-between items-center text-white' 
            download={download}
            target='_blank' 
            rel='noreferrer'
          >
            {child}
          </a>
        </li>
      ))}
    </ul>
  </div>
  
  )
}

export default Footer