import { site } from "./config";

export default function Announcement() {
  return (
    <section className=' bg-primary  py-2 text-center text-sm font-bold text-white tracking-wider'>
      {site.offre}
    </section>
  );
}
