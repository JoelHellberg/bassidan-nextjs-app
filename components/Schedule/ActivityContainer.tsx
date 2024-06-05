import React from 'react'
import Image from 'next/image'

type Props = {
  header: string;
  location: string;
  time: string;
  alcohol: boolean;
  description: string;
}

function ActivityContainer(props: Props) {
  const time = props.time.split(','); // If multiple timestamps (eg. group A and B) then split them and place them in different headings

  return (
    <div className='pl-10 mt-4 pb-2 mobile:pl-4'>
      {time.map((timeStamp) => (
        <h6 key={timeStamp}>{timeStamp}</h6>
      ))}
      <h5>{props.location}</h5>
      <div className='flex items-center' >
        <h4>{props.header}</h4>
        {!props.alcohol ? (
          // TODO: Fix alcohol icon placement
          <Image
            src={'/images/misc/alcohol.png'}
            width={24}
            height={24}
            alt="Alkoholfri"
            className='object-contain ml-2 mobile:ml-4'
          />
        ) : (null)}

      </div>
      <p className='pl-4 pr-8'>{props.description}</p>
    </div>
  )
}

export default ActivityContainer