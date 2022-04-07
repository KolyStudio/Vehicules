import ReactHtmlParser from "react-html-parser";

export default function DescriptionGauche({image, titre, titrebg, texte}) {
  return (
    <>
      <section className='m-auto w-[90%] items-center justify-between space-y-5 lg:flex lg:w-3/5 lg:space-y-0'>
        <article className='w-full text-center'>
          <img
            alt='imgproduit'
            src={image}
            className='m-auto w-[510px]  rounded-[50px]  '
          />
        </article>
        <article className='w-full space-y-4 lg:pl-10'>
          <h1 className='text-2xl font-bold lg:text-3xl '>
          {titre} {titrebg}
            <span className='rotate-180 text-white px-2 py-1  '>
            
            </span>
          </h1>
          <p>
          {ReactHtmlParser(texte)}
          </p>
        </article>
      </section>
    </>
  );
}
