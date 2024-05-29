'use client';

import React from 'react'
import { usePathname } from 'next/navigation';

const Welcome = () => {
  // Check the pathname to see if footer should be included or not
  const pathname = usePathname();
  if (pathname == "/nolleboken")
    return null;

  return (
    <div className="flex w-full">

        <div className="w-4/5 bg-blue-500"> {/* 80% width div */}
            <h1 className='py-6'> Välkommen Nollan!</h1> {/* First paragraph */}
            <div className='
            text-left pb-10 px-52 flex flex-col 
            handheld:px-32
            mobile:px-6
            '>
                <p className='
                text-xl text-justify pb-2
                mobile:text-lg
                thin:text-base
                '>
                På denna sida hittar Nollan information om vad som händer under första veckan på Linköpings Universitet, den så kallade ”Nolle-veckan”.
                Nolle-veckan består av både undervisning och roliga aktiviteter där alla Basårsnollan får chans att lära känna varandra. Aktiviteterna är såklart
                frivilliga, men vi hoppas att du vill vara med på så mycket som möjligt, Nollan!
                <br /><br />
                Viktigt att veta är att Linköpings Universitet tar kraftigt avstånd från förnedrande och kränkande nollningar som Nollan kanske hört talas om. Syftet
                med denna vecka är att ge Nollan en rolig start på basåret och en introduktion till livet som universitetsstudent! Vi som kommer att ta hand om dig
                under denna roliga period är en frisk blandning av studenter från olika tekniska utbildningar här på Campus Norrköping. För att se till så att du får
                en så bra start på studentlivet som möjligt kommer vi faddrar att vägleda dig genom din första vecka av studier och roliga aktiviteter.
                <br /><br />
                Det ska bli kul att ses!
                </p>
            </div>
        </div>

        <div className="w-1/5 bg-green-500"> {/* 20% width div */}
            <p>This div takes 20% of the width.</p>
        </div>

  </div>
  )
}

export default Welcome