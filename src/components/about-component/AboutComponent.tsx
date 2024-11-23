import Image from 'next/image'
import React from 'react'

const AboutComponent = ({ url }: { url: string }) => {
  return (
    <div className=''>
      <div className='group-card cursor-pointer  relative'>
        <Image
          className='rounded-lg'
          src={url}
          alt="About"
          width={750}
          height={700}
        />
        <div className='absolute top-0 left-0 w-full h-full hidden group-card-hover:flex bg-white/40'>
          <p>hola</p>
        </div>
      </div>

    </div>
  )
}

export default AboutComponent