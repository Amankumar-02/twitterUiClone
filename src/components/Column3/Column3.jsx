import React from 'react';
import {whatsItems} from '../../database.js';

function Column3() {
  return (
    <div className='w-[65%] flex justify-end p-1'>
      <div className='ms-6 me-4 w-full flex gap-4 flex-col'>
        <div className="search w-full rounded-full px-6 bg-[#202327] flex gap-6">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e" fill='#686D71'><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
          <input type="text" className='bg-transparent outline-none placeholder:text-[#686D71] py-3 w-full' placeholder='Search' />
        </div>
        <div className="subscribe w-full rounded-2xl px-4 py-3 bg-[#202327] flex flex-col gap-2">
          <h1 className='font-bold text-xl'>Subscribe to Premium</h1>
          <p className='leading-5'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
          <button className='w-fit bg-[#1d9cf0] hover:bg-blue-600 font-bold px-4 py-2 rounded-full'>Subscribe</button>
        </div>
        <div className="whats w-full rounded-2xl bg-[#202327] flex flex-col overflow-hidden">
          <h1 className='font-bold text-xl py-3 px-4'>What’s happening</h1>
            {whatsItems.map((item, index)=>(
              <div key={index} className="item flex justify-between px-4 py-3 hover:bg-[#1D1F23]">
                <div className='left flex flex-col'>
                  <p className='text-gray-500 text-sm'>{item.t1}</p>
                  <h2 className='font-bold'>{item.t2}</h2>
                  <p className='text-gray-500 text-sm'>{item.t3} <a href="#"><span className='text-[#1d9cf0] hover:underline'>{item?.t4?.tag1}</span></a>, <a href="#"><span className='text-[#1d9cf0] hover:underline'>{item?.t4?.tag2}</span></a></p>
                </div>
                <div className="right">
                  <a href="#">
                  <svg viewBox="0 0 24 24" aria-hidden="true" class="w-6 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1xvli5t r-1hdv0qi" fill='gray'><g><path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"></path></g></svg>
                  </a>
                </div>
            </div>
            ))}
            <a href="#" className='text-[#1d9cf0] hover:bg-[#1D1F23] p-4'>Show more</a>
        </div>

      </div>
    </div>
  )
}

export default Column3