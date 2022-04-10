import { site } from "./config";
import * as dayjs from 'dayjs'

export default function Announcement() {

  const date = dayjs().format('DD MMMM');
  console.log(date);

  const time = new Date();


  return (
    <section className='bg-bar relative h-[70px] text-[#242424] font-semibold pb-10 pt-5 uppercase text-center items-center text-sm font-base text-BLACK tracking-wider  justify-center space-x-2 px-1 z-[-99] '>
    
              
              {site.offre} UNTIL<strong className="text-primary "> {date}</strong>
    </section> 
  );
}
