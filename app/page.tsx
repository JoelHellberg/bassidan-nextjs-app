import Image from "next/image";
import Opening from '@/sections/HomePage/Opening'
import Welcome from '@/sections/HomePage/Welcome'
import Contacts from '@/sections/HomePage/Contacts'
import ContactCard from '../components/ContactCard'


export default function Home() {
  return (
    <div className="flex-1">
      <div className="relative flex items-center w-full h-[90vh] mobile:grid mobile:h-auto mobile:w-full">

         {/* Green square positioned behind the image, only visible on mobile */}
    <div className="hidden mobile:block mobile:aspect-square mobile:absolute mobile:right-0 mobile:top-0 mobile:w-4/6 mobile:bg-darkLobster"></div>
    <div className="relative mobile:aspect-square mobile:w-1/12"></div>
    {/* Left Image Container */}
    <div className="relative w-1/2 shadow-lg mobile:w-4/5 mobile:mx-auto">
      {/* Left Image */}
      <div className="relative" style={{ top: '16.66%' }}>
        <Image
          src="/images/group_square.jpg"
          layout="responsive"
          width={100}
          height={100}
          objectFit="contain"
          alt="Left Image"
        />
      </div>
    </div>

{/* Gap */}
<div className="mobile:hidden" style={{ width: '10%' }}></div>

{/* Right Image */}
<div className="w-2/5 shadow-lg mobile:hidden">
  <Image
    src="/images/LiU_square.png"
    layout="responsive"
    width={100}
    height={100}
    objectFit="contain"
    alt="Right Image"
  />
</div>

{/* Centered Text Overlay */}
<div className="absolute w-1/3 mobile:relative mobile:w-11/12 mobile:py-8 mobile:mx-auto">
  <div className="bg-background p-10 text-center shadow-lg">
    <h2 className="text-left">Basåret.</h2>
    <p className="text-left">Glöm inte att fylla i nolle-enkäten! Följ oss gärna också på Instagram för att ta del av fler uppdateringar!.</p>
    <div className="flex space-x-4">
            <a href="https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUqFAgAEEUYOxhDGIMBGLEDGIAEGIoFMhQIABBFGDsYQxiDARixAxiABBiKBTIMCAEQABhDGIAEGIoFMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTIKCAQQABixAxiABDIKCAUQABixAxiABDIQCAYQABiDARixAxiABBiKBTIKCAcQABixAxiABDIGCAgQRRg80gEHNzM2ajBqMagCALACAA&sourceid=chrome&ie=UTF-8">
            <button className="bg-darkPurple text-white px-4 py-2 rounded">Nolle-enkäten</button>
            </a>
            <a href="https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUqFAgAEEUYOxhDGIMBGLEDGIAEGIoFMhQIABBFGDsYQxiDARixAxiABBiKBTIMCAEQABhDGIAEGIoFMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTIKCAQQABixAxiABDIKCAUQABixAxiABDIQCAYQABiDARixAxiABBiKBTIKCAcQABixAxiABDIGCAgQRRg80gEHNzM2ajBqMagCALACAA&sourceid=chrome&ie=UTF-8">
            <button className="bg-darkOrange text-white px-4 py-2 rounded">
                <Image
                    src="/images/logos/instagram.png"
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="Left Image"
                />
            </button>
            </a>
    </div>
  </div>
</div>
</div>

      <div className="flex w-full bg-blue-500 mobile:bg-slate-100">

      {/* Welcome */}
      <div className="w-4/6
      mobile:w-screen mobile:py-3"> {/* 80% width div */}
          <h2 className='py-6 px-32 text-left mobile:text-center mobile:px-0'> Välkommen Nollan!</h2> {/* First paragraph */}
          <div className='
          text-left pb-10 px-32 flex flex-col 
          handheld:px-32
          mobile:px-6
          '>
              <p className='
              text-xl text-justify pb-2
              mobile:text-lg mobile:text-center
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

      <div className="w-2/6 px-20 bg-green-500
      mobile:hidden"> {/* 20% width div */}
      <Image
                    src="/images/sampleBild.png"
                    layout="responsive"
                    width={100}
                    height={100}
                    objectFit="contain"
                    alt="Left Image"
                />
      </div>

      </div>

      {/* Welcome */}
      <div className="flex w-full pr-8 mt-20 flex-wrap mobile:flex-col">
        <div className="w-1/2 mobile:w-full"> {/* 80% width div */}
        <div className="w-4/5 h-28 bg-darkOrange flex items-center justify-start pl-[8%] shadow-lg relative
        mobile:w-full mobile:overflow-x-hidden">
          <h2 className="text-white drop-shadow-lg">Klassföreståndare</h2>

          {/* Circle container */}
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative w-36 h-36">
              {/* Outer Circle */}
              <div className="absolute top-0 left-0 w-full h-full bg-background rounded-full"></div>
              {/* Middle Circle */}
              <div className="absolute top-6 left-6 w-24 h-24 bg-orange rounded-full"></div>
              {/* Inner Circle */}
              <div className="absolute top-11 left-11 w-14 h-14 bg-darkOrange rounded-full"></div>
            </div>
          </div>

        </div>

        <div className='
        flex justify-center -mt-12
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Amanda Hult'
            phone='072-749 18 00'
            email='amahu396@student.liu.se'
            program='Medieteknik' />
          <ContactCard
            name='Josephine Zettervall'
            phone='0725286711'
            email='josze195@student.liu.se'
            program='Medieteknik' />
        </div>
        </div>
        <div className="w-1/2 mobile:w-full"> {/* 20% width div */}
        <div className="w-4/5 h-28 bg-darkLobster flex items-center justify-start pl-[8%] shadow-lg relative
        mobile:w-full mobile:overflow-x-hidden mobile:mt-14">
              <h2 className="text-white drop-shadow-lg">Huvudklassfaddrar</h2>

                        {/* Circle container */}
          <div className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
            <div className="relative w-36 h-36">
              {/* Outer Circle */}
              <div className="absolute top-0 left-0 w-full h-full bg-background rounded-full"></div>
              {/* Middle Circle */}
              <div className="absolute top-6 left-6 w-24 h-24 bg-lobster rounded-full"></div>
              {/* Inner Circle */}
              <div className="absolute top-11 left-11 w-14 h-14 bg-darkLobster rounded-full"></div>
            </div>
          </div>
            </div>
            <div className='
        flex justify-center -mt-12
        handheld:flex-col handheld:space-y-24
        '>
          <ContactCard
            name='Arvid Magnusson'
            phone='072-246 68 12'
            email='albkj604@student.liu.se'
            program='Medieteknik' />
          <ContactCard
            name='Joel Hellberg'
            phone='072-399 40 07'
            email='guskr150@student.liu.se'
            program='Medieteknik' />
        </div>
        </div>
      </div>
    </div>
  );
}
