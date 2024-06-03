import Image from "next/image";


export default function Page() {
    return (
<div className="relative flex items-center w-full h-[85vh]">
{/* Left Image */}
<div className="w-1/2 shadow-lg">
  <Image
    src="/images/group_square.jpg"
    layout="responsive"
    width={100}
    height={100}
    objectFit="contain"
    alt="Left Image"
  />
</div>

{/* Gap */}
<div style={{ width: '10%' }}></div>

{/* Right Image */}
<div className="w-2/5 shadow-lg">
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
<div className="absolute w-1/3" style={{ left: '55%', transform: 'translateX(-45%)' }}>
  <div className="bg-white p-10 text-center shadow-lg">
    <p className="text-left">Basåret.</p>
    <p className="text-left">Glöm inte att fylla i nolle-enkäten! Följ oss gärna också på Instagram för att ta del av fler uppdateringar!.</p>
    <div className="flex space-x-4">
            <a href="https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUqFAgAEEUYOxhDGIMBGLEDGIAEGIoFMhQIABBFGDsYQxiDARixAxiABBiKBTIMCAEQABhDGIAEGIoFMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTIKCAQQABixAxiABDIKCAUQABixAxiABDIQCAYQABiDARixAxiABBiKBTIKCAcQABixAxiABDIGCAgQRRg80gEHNzM2ajBqMagCALACAA&sourceid=chrome&ie=UTF-8">
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Nolle-enkäten</button>
            </a>
            <a href="https://www.google.com/search?q=test&oq=test&gs_lcrp=EgZjaHJvbWUqFAgAEEUYOxhDGIMBGLEDGIAEGIoFMhQIABBFGDsYQxiDARixAxiABBiKBTIMCAEQABhDGIAEGIoFMgwIAhAAGEMYgAQYigUyDAgDEAAYQxiABBiKBTIKCAQQABixAxiABDIKCAUQABixAxiABDIQCAYQABiDARixAxiABBiKBTIKCAcQABixAxiABDIGCAgQRRg80gEHNzM2ajBqMagCALACAA&sourceid=chrome&ie=UTF-8">
            <button className="bg-green-500 text-white px-4 py-2 rounded">
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
    );
}

