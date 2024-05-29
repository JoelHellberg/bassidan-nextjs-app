'use client';

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Opening = () => {
  // Check the pathname to see if footer should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  return (
<div className="h-[700px] relative justify-center items-center">
        <div className="absolute w-1/2">
          <Image 
          src={'/images/group-desktop.jpg'}
          width={2500}
          height={782}
          sizes="100vw"
          priority
          unoptimized={true}    // Hidden gem setting
          alt="Basårsfaddrar"
          className='object-cover'
          />
        </div>
        <div className="absolute w-1/2 right-0">
          <span className="inline-block h-full align-middle"/>
          <Image 
          src={'/images/Campus-Norrkoping.jpg'}
          width={2500}
          height={782}
          sizes="100vw"
          priority
          unoptimized={true}    // Hidden gem setting
          alt="Basårsfaddrar"
          className='object-cover align-middle'
          />
        </div>
      </div>
  )
}

export default Opening