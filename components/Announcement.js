import { site } from "./config";

export default function Announcement() {
  return (
    <section className=' bg-[#eef2fd] relative   py-2  items-center text-sm font-base text-BLACK tracking-wider flex justify-center space-x-2 px-1'>
    <img
                alt='produit.price'
                src='icons/fb.svg'
                className='w-[20px] lg:static absolute left-1'
              />
              
               <div className="lg:pl-0  text-center" ><strong className="text-[#1b74e4]">FB OFFER:</strong> <span className="font-medium">50% OFF & FREE DELIVERY UNTIL <strong className="text-[#1b74e4]">08 APRIL</strong></span>
              </div>
    </section>
  );
}
