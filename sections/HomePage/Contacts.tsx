'use client';

import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation';

const Contacts = () => {
  // Check the pathname to see if footer should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  return (
    <div className="flex w-full pr-8">

        <div className="w-1/2 bg-orange-500"> {/* 80% width div */}
            <p>Test</p>
        </div>

        <div className="w-1/2 bg-red-500"> {/* 20% width div */}
            <p>Test</p>
        </div>
        
    </div>
  )
}

export default Contacts