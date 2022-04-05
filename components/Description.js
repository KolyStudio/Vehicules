import DescriptionDroite from "./DescriptionDroite";
import DescriptionGauche from "./DescriptionGauche";

export default function Description() {
  return (
    <section className='space-y-10 lg:mt-[100px] lg:space-y-20'>
      <DescriptionDroite
        image='produits/description/description_1.webp'
        titre='A new way to '
        titrebg='secure your motorcycle'
        texte="
Having your motorcycle stolen can be <b>financially and emotionally stressful.</b>
<br><br>
Your lock only delays the thief. It doesn't make your motorcycle <b>completely secure.</b>
        <br><br>
GripLock is a new anti-theft device to help make motorcycles <b>totally theft-proof.</b> It secures the motorcycle's handlebar and brake handle using a special locking system, which <b>prevents thieves from being able to ride away on your motorbike.</b> "
      />

      <DescriptionGauche
        image='produits/description/description_2.webp'
        titre='Keep the bike where '
        titrebg='you leave it'
        texte="
Your motorcycle handlebar and brake handle aren't as safe as they should be because <b>thieves can get to them with just a screwdriver.</b> 
<br><br>
Protect your motorcycle in seconds with GripLock, the revolutionary new security lock.
"
      />

      <DescriptionDroite
        image='produits/description/description_3.webp'
        titre='The Strongest Motorcycle '
        titrebg='Lock On'
        texte="
Motorcycles, scooters and mopeds are <b>prone to theft.</b>
<br><br>
Many people don't lock their motorcycle or scooter while they're parked. <b>Thieves know this</b> and they look for the bikes that haven't got any visible security locks.
     <br><br>   
The GripLock is a big,<b> heavy-duty security lock with an anti-theft mechanism.</b> Once you've fitted it on your bike, <b>you can forget about security worries</b> and make a beeline for the open road."
      />

      <DescriptionGauche
        image='produits/description/description_4.webp'
        titre="Don't take "
        titrebg='the risk'
        texte="
Looking for a <b>high-quality and reliable safety device</b>, which also needs to be easy to transport?
<br><br>
It doesn’t need to be that difficult. <b>You’ve found it: Griplock </b>– the compact and easy-to-use security lock for scooters and motorcycles.
        <br><br>
The latest generation of Griplock is not just large enough to provide you with protection, but small enough to <b>keep your bike from being stolen.</b> A high-quality lock with four individual keys, that can be attached and detached in just seconds – no matter if you’re already on the bike or still grabbing your helmet."
      />
    </section>
  );
}
