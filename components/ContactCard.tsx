import React from 'react'
import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'

type Props = {
  name: string
  phone: string
  email: string
  program: string
}

const ContactCard = (props: Props) => {
  // Styling for icons placed as const, for easier modification
  const iconStyling = "h-4 w-4 mr-2 handheld:h-7 handheld:w-7 mobile:h-4 mobile:w-4";
  const img_src = "/images/" + props.name.split(" ")[0].toLowerCase() + ".jpg";

  return (
    <div className="flex flex-col items-center w-1/3 p-4 m-2 rounded-lg mobile:w-4/5 mobile:mx-auto">
      <div className="relative aspect-[5/7] w-full">
        {/* Shadow div */}
        <div className="absolute top-0 left-0 w-full h-full bg-backgroundShaded" style={{ transform: 'translate(15px, 15px)' }}></div>
        {/* Image */}
        <Image
          src={img_src}
          layout="fill"
          alt={props.name}
          sizes="50vw"
          className="relative border border-solid object-cover"
        />
      </div>

      <h3 className='z-10'>{props.name}</h3>
      <div className="
        flex flex-col text-base
        handheld:text-base
        mobile:text-lg
        ">
        <div className="flex justify-center items-center">
          <PhoneIcon className={iconStyling} />
          {props.phone}
        </div>
        <div className="flex justify-center items-center">
          <EnvelopeIcon className={iconStyling} />
          <a href={"mailto:" + props.email}>
            {props.email}
          </a>
        </div>
        <div className="flex justify-center">
          {props.program}
        </div>
      </div>
    </div>
  )
}

export default ContactCard