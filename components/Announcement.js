import { site } from "./config";
import * as dayjs from 'dayjs'

export default function Announcement() {

  const date = dayjs().format('DD MMMM');
  console.log(date);

  const time = new Date();


  return (
    <section className=' bg-[#eef2fd] relative  uppercase py-2  items-center text-sm font-base text-BLACK tracking-wider flex justify-center space-x-2 px-1'>
    <img
                alt='produit.price'
                src='icons/fb.svg'
                className='w-[20px] lg:static absolute left-1'
              />
              
               <div className="lg:pl-0  text-center" ><strong className="text-[#1b74e4]">FB OFFER:</strong> <span className="font-medium">50% OFF & FREE DELIVERY UNTIL <strong className="text-[#1b74e4]">{date}</strong></span>
              </div>
    </section>
  );
}
