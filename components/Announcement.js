import { site } from "./config";

export default function Announcement() {
  return (
    <section className=' bg-black relative text-center py-2  items-center text-sm font-medium text-white tracking-wider flex justify-center space-x-2 px-1'>
  
  ⚡ {site.offre}
    </section>
  );
}
