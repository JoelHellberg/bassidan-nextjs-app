import Image from "next/image";

export default function Home() {
  return (
    <div className="flex-1">
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
      <h1 className='py-6'>
        Test - Instantly deploy your Next.js site to a shareable URL with Vercel.
      </h1>
    </div>
  );
}
