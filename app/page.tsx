import Image from "next/image";
import Opening from '@/sections/HomePage/Opening'
import Welcome from '@/sections/HomePage/Welcome'
import Contacts from '@/sections/HomePage/Contacts'

export default function Home() {
  return (
    <div className="flex-1">
      {/* Opening */}
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

      <div className="flex w-full">

      {/* Welcome */}
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

      {/* Welcome */}
      <div className="flex w-full pr-8">
        <div className="w-1/2 bg-orange-500"> {/* 80% width div */}
            <p>Test</p>
        </div>
        <div className="w-1/2 bg-red-500"> {/* 20% width div */}
            <p>Test</p>
        </div>
      </div>

      <h1 className='py-6'>
        Test - Instantly deploy your Next.js site to a shareable URL with Vercel.
      </h1>
    </div>
  );
}
