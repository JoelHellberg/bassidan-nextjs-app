import Image from "next/image";
import Opening from '@/sections/HomePage/Opening'
import Welcome from '@/sections/HomePage/Welcome'
import Contacts from '@/sections/HomePage/Contacts'
import ContactCard from '../components/ContactCard'


export default function Home() {
  return (
    <div className="flex-1">
      <div className="relative flex items-center w-full h-[90vh] p-8 pb-12
      handheld:p-0
      mobile:grid mobile:h-auto mobile:w-full">

        {/* Green square positioned behind the image, only visible on mobile */}
        <div className="hidden  mobile:bg-darkLobster
        mobile:block mobile:aspect-square mobile:absolute mobile:right-0 mobile:top-0 mobile:w-4/6"/>

        <div className="relative mobile:aspect-square mobile:w-1/12" />

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
        <div className="absolute w-1/3 right-1/4 mobile:relative handheld:w-3/5 mobile:w-11/12 mobile:py-8 mobile:mx-auto handheld:right-0" >
          <div className="bg-background p-10 text-center shadow-lg">
            <h2 className="text-left pb-4">Basåret.</h2>
            <p className="text-left pb-5">Glöm inte att fylla i nolle-enkäten! Följ oss gärna också på Instagram för att ta del av fler uppdateringar!</p>
            <div className="flex space-x-4">
              <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley">
                <button className="bg-darkPurple text-white px-4 py-2 rounded h-11 flex items-center justify-center">Nolle-enkäten</button>
              </a>
              <a href="https://www.instagram.com/basaret_norrkoping/">
                <button className="bg-darkOrange text-white px-4 py-2 rounded h-11 flex items-center justify-center">
                  <div className="w-full h-full flex items-center justify-center">
                    <Image
                      src="/images/logos/instagram.png"
                      layout="intrinsic"
                      width={20} // Adjust the width to fit within the button
                      height={20} // Adjust the height to fit within the button
                      objectFit="contain"
                      alt="Left Image"
                    />
                  </div>
                </button>
              </a>
            </div>

          </div>
        </div>
      </div>

      <div className="flex w-full mobile:bg-slate-100 pt-10 mobile:pt-0">

        {/* Welcome */}
        <div className="w-4/6
      handheld:w-screen mobile:py-3"> {/* 80% width div */}
          <h2 className='pt-6 pb-10 px-32 text-left handheld:text-center handheld:px-0 mobile:text-4xl'> Välkommen Nollan!</h2> {/* First paragraph */}
          <div className='
          text-left pb-10 px-32 flex flex-col 
          handheld:px-16
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

        <div className="w-2/6 m-auto
      handheld:hidden"> {/* 20% width div */}
          <Image
            src="/images/brannbollBild.png"
            layout="responsive"
            width={100}
            height={100}
            objectFit="contain"
            alt="Left Image"
          />
        </div>

      </div>

      {/* Welcome */}
      <div className="flex w-full pr-8 mt-20 flex-wrap handheld:flex-col">
        <div className="w-1/2 handheld:w-full"> {/* 80% width div */}
          <div className="w-4/5 h-28 bg-darkOrange flex items-center justify-start pl-[8%] shadow-lg relative
        mobile:w-full mobile:overflow-x-hidden">
            <h2 className="font-futura text-5xl text-white drop-shadow-lg mobile:text-4xl">Klassföreståndare</h2>

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
        mobile:flex-col mobile:space-y-24 handheld:justify-start
        '>
            <ContactCard
              name='Armen Abedi'
              phone='076-610 24 24'
              email='armab790@student.liu.se'
              program='Medieteknik' />
            <ContactCard
              name='Caitlin Wu'
              phone='076-178 60 24'
              email='caiwu993@student.liu.se'
              program='Medieteknik' />
          </div>
        </div>
        <div className="w-1/2 handheld:w-full"> {/* 20% width div */}
          <div className="w-4/5 h-28 bg-darkLobster flex items-center justify-start pl-[8%] shadow-lg relative
        mobile:w-full mobile:overflow-x-hidden mobile:mt-14">
            <h2 className="font-futura text-5xl text-white drop-shadow-lg mobile:text-4xl">Huvudklassfaddrar</h2>

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
        mobile:flex-col mobile:space-y-24 handheld:justify-start
        '>
            <ContactCard
              name='Arvid Magnusson'
              phone='076-207 45 86'
              email='arvma857@student.liu.se'
              program='Medieteknik' />
            <ContactCard
              name='Joel Hellberg'
              phone='070-294 40 05'
              email='joehe737@student.liu.se'
              program='Medieteknik' />
          </div>
        </div>
      </div>
    </div>
  );
}
