'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

type Props = {
  company1: string
  company2: string
  className: string
}

const Sponsor = (props: Props) => {
  const [useCompany2, setUseCompany2] = useState(false);

  useEffect(() => {
    if (props.company2 !== "") {
      const interval = setInterval(() => {
        setUseCompany2(prev => !prev);
      }, 5000);

      return () => clearInterval(interval); // Cleanup interval on component unmount
    }
  }, [props.company2]);

  const company = useCompany2 && props.company2 !== "" ? props.company2 : props.company1;
  const img_src = "/images/sponsors/" + company.toLowerCase() + ".png";

  return (
    <div className={
      props.className +
      " relative" +
      " handheld:px-0"
    }>
      <Image
        src={img_src}
        fill
        alt={company}
        sizes="50vw"
        className="
          object-contain
        " />
    </div>
  )
}

export default Sponsor
