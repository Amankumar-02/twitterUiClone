import React from 'react'

function Column3() {
  return (
    <div className='w-[65%] flex justify-end p-1'>
      <div className='ms-6 me-4 w-full'>
        <div className="search w-full rounded-full px-6 py-3 bg-[#202327] flex gap-6 sticky top-1">
          <svg viewBox="0 0 24 24" aria-hidden="true" class="w-5 r-4qtqp9 r-yyyyoo r-dnmrzs r-bnwqim r-1plcrui r-lrvibr r-1nao33i r-lwhw9o r-cnnz9e" fill='#686D71'><g><path d="M10.25 3.75c-3.59 0-6.5 2.91-6.5 6.5s2.91 6.5 6.5 6.5c1.795 0 3.419-.726 4.596-1.904 1.178-1.177 1.904-2.801 1.904-4.596 0-3.59-2.91-6.5-6.5-6.5zm-8.5 6.5c0-4.694 3.806-8.5 8.5-8.5s8.5 3.806 8.5 8.5c0 1.986-.682 3.815-1.824 5.262l4.781 4.781-1.414 1.414-4.781-4.781c-1.447 1.142-3.276 1.824-5.262 1.824-4.694 0-8.5-3.806-8.5-8.5z"></path></g></svg>
          <input type="text" className='bg-transparent outline-none placeholder:text-[#686D71] placeholder:text-[] placeholder:' placeholder='Search' />
        </div>

      </div>
    </div>
  )
}

export default Column3