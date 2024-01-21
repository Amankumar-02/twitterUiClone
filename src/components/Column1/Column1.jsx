import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { sideBarItem } from '../../database'

function Column1() {
  return (
    <div className='w-[40%] p-4'>
        <div className="logo ps-4">
        <svg viewBox="0 0 24 24" aria-hidden="true" class="w-8 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-lrsllp r-1nao33i r-16y2uox r-8kz0gk" fill='white'><g><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></g></svg>
        </div>
        <div className="sideBar mt-6">
            <ul className='flex flex-col space-y-2 text-xl font-semibold'>
                {sideBarItem.map((item, index)=>(
                    <a href="#">
                    <li key={index} className='flex justify-start items-center gap-3 px-4 py-2 w-fit hover:bg-[#181818] hover:rounded-3xl'>
                        <span className=''><svg viewBox="0 0 24 24" aria-hidden="true" class="w-7 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e" fill='white'><g><path d={item.icon}></path><path d={item?.icon2}></path></g></svg></span>
                        {item.title}
                    </li>
                    </a>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Column1