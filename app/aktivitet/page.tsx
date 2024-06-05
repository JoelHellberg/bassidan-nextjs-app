import Image from 'next/image';

import DayContainer from "@/components/Schedule/DayContainer";
import { schedule } from "@/data/schedule_data";

export default function Page() {
  return (
    <main className="bg-slate-100 flex flex-col items-center pb-10 flex-1">
      <h1 className="py-10">Aktivitetsschema</h1>
      <div
        className="
          bg-background flex items-center px-8 py-4 rounded-2xl mb-10
          mx-3
          ">
        <Image
          src={'/images/misc/alcohol.png'}
          width={40}
          height={40}
          alt="Alkoholfri"
          className='object-contain mobile:w-8 thin:w-7'
          priority
        />
        <p className="text-2xl mobile:text-lg"> &nbsp;= Alkoholfri aktivitet</p>
      </div>

      {/* Generate character cards from the stories JSON file */}
      {schedule.map((day) => {
        return (
          <DayContainer
            key={day.date}
            date={day.date}
            color={day.color}
            weekday={day.weekday}
            activities={day.activities}
          />
        );
      })}
    </main>
  )
}