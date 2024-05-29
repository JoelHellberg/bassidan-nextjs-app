'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

import Sponsor from '@/components/Sponsor'

const Ads = () => {
  // Check the pathname to see if footer should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  return (
    <div className="
    flex flex-wrap justify-evenly items-center w-full py-20 px-32
    handheld:px-20 handheld:flex-col handheld:space-y-10
    mobile:px-8      
    ">
      <Sponsor company1="ICA" company2="" className="grow-1 h-52 w-1/3 mobile:w-3/5" />
      <Sponsor company1="NAB" company2="Voyado" className="grow-1 h-48 w-1/3 mobile:w-3/5" />
      <Sponsor company1="Micropower" company2="" className="grow-2 h-48 w-2/3 mobile:w-full" />
    </div>
  )
}

export default Ads