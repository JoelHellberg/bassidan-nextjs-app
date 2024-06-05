'use client'

import ActivityContainer from './ActivityContainer';

type Props = {
  date: string;
  weekday: string;
  color: string;
  activities: { header: string, location: string, time: string, alcohol: boolean, description: string }[];
}

function DayContainer(props: Props) {
  const today = new Date();


  // Split the dates into day and month (from [DAY]/[MONTH] format)
  const currentDay = today.getDate();
  const currentMonth = (today.getMonth() + 1);
  const activityDay = Number(props.date.split('/')[0]);
  const activityMonth = Number(props.date.split('/')[1]);

  // Don't render if day already has passed
  // Removed after nolle-p for demonstration purposes and because it looked bad with a empty page :)
  // if (currentMonth > activityMonth || (currentMonth == activityMonth && currentDay > activityDay)) {
  //   return null;
  // }

  return (
    <div className='
      w-3/5 bg-background p-4 pb-6 mb-5 min-h-[15rem] rounded-2xl 
      mobile:w-11/12 mobile:mx-3'>
      {/* Tailwind custom colors does not seem to work if they're not written out manually once on the website */}
      {/* <div className='bg-customGreen'></div> */}
      {/* <div className='bg-customBlue'></div> */}
      {/* --------------- TODO: Remove above ----------------- */}
      <div className={"bg-" + props.color + " w-fit flex rounded-2xl mobile:w-full"}>
        <h3 className={'p-4 m-0 mobile:m-auto mobile:px-0'}>{props.weekday.toUpperCase() + " - " + props.date}</h3>
      </div>
      <div className='w-full'>
        {props.activities.map((activity) => {
          return (
            <ActivityContainer
              key={activity.header}
              header={activity.header}
              location={activity.location}
              time={activity.time}
              alcohol={activity.alcohol}
              description={activity.description}
            />
          );
        })}
      </div>
    </div>
  )
}

export default DayContainer