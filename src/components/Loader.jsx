import React from 'react'

const Loader = () => {
  return (
      <>
        <div className='h-screen w-full flex items-center justify-center border border-primary'>
             <img src="/images/airbnb.png" alt="loader" height={50} width={50} />
        </div>
      </>
  )
}

export default Loader
