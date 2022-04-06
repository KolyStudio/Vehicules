import { site } from "./config";

export default function Announcement() {
  return (
    <section className=' bg-primary  py-2 text-center text-sm font-bold text-white tracking-wider flex justify-center space-x-2 px-1'>
    < img
                alt='produit.price'
                src='icons/checktest2.svg'
                className='w-[14px] lg:block hidden'
              /><div>{site.offre}</div> 
    </section>
  );
}
