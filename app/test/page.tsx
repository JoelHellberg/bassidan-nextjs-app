import Image from "next/image";


export default function Page() {
    return (
      <div className="flex justify-center items-center h-screen">
      {/* First rectangle */}
      <div className="relative mr-4 w-[200px] h-[200px]">
        {/* Shadow behind the first image */}
        <div className="absolute inset-0 bg-black rounded-md shadow-md" style={{ transform: 'translate(10px, 10px)' }}></div>
        {/* First image */}
        <Image
          src="/images/arvid.jpg"
          alt="Rectangle 1"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      {/* Second rectangle */}
      <div className="relative w-[200px] h-[200px]">
        {/* Shadow behind the second image */}
        <div className="absolute inset-0 bg-black rounded-md shadow-md" style={{ transform: 'translate(10px, 10px)' }}></div>
        {/* Second image */}
        <Image
          src="/images/arvid.jpg"
          alt="Rectangle 2"
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
        <p>test</p>
      </div>
    </div>
    );
}

