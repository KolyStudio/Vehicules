import { site } from "./config";

export default function Announcement() {
  return (
    <section className=' bg-[#eef2fd] relative   py-2  items-center text-sm font-base text-black tracking-wider flex justify-center space-x-2 px-1'>
    <img
                alt='produit.price'
                src='icons/fb.svg'
                className='w-[25px] lg:static absolute left-2'
              />
              
               <div className="lg:pl-0 pl-6" >Because you came here from <strong className="text-primary">Facebook</strong>, congrats. We applied a <strong className="text-primary">50% OFF discount</strong> until <strong className="text-primary">07 April</strong>
              </div>
    </section>
  );
}
