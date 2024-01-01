import React from 'react'




const AboutUS = () => {
  return (
    <>
      <div>
    {/*<div className="flex justify-end ">
        <img src={kid} alt="/" className=""></img>
  </div> */}
      <div className=" my-10 w-full   ">
        <h1 className=' text-4xl font-extralight text-center mb-10'>What is SciQuest</h1>
          {/********************************************************************************************************************* */}
        <div className=" max-w-[1400px] mx-auto lg:grid  xl:gap-10 xl:grid-cols-4 lg:grid-cols-2 lg:gap-5   flex flex-wrap">
          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col  p-2 xl:p-4 my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300 ">
            
            <h2 className="text-2xl font-bold text-center py-8">
              Notre Mission
            </h2>
            <p className="text-center text-base py-4 mx-4 font-medium ">
            Notre mission est de mettre à la disposition des parents un
            réseau de crèches fiable et facilement accessible pour 
            trouver une place pour leur enfant. Nous voulons être le 
            partenaire de confiance des parents.

            </p>
            
          </div>
          {/********************************************************************************************************************* */}

          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col p-4  my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300">
          
            <h2 className="text-2xl font-bold text-center py-8">
            Notre engagement
            </h2>
            <p className="text-center text-base py-4  mx-2 ld:mx-8 font-medium ">
            Notre nous engageons a fournir un service de qualité à tous 
            les parents , propriétaires et  enfants 
            et nous croyons que notre service peut aider à améliorer leur
            bien-être et leur épanouissement.
            </p>
          </div>
          {/********************************************************************************************************************* */}

          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col p-4 my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300">
     
            <h2 className="text-2xl font-bold text-center py-8">
            Nos valeurs
            </h2>
            <p className="text-center text-base py-4 mx-2 ld:mx-8 font-medium ">
            Nous sommes animés par des valeurs 
            fondamentales telles que  la disponibilité, 
            l'empathie et l'efficacité. Nous sommes à l'écoute de nos 
            clients et nous somme pret à leur fournir un service de 
            qualité qui respecte ces valeurs.
            </p>
          </div>
          {/********************************************************************************************************************* */}

          <div className=" w-full hover:ring-blue-500 ring ring-gray-500 shadow-xl flex flex-col p-4 my-4 mx-2 rounded-3xl hover:bg-blue-500 hover:text-white md:hover:scale-105 duration-300">
           
            <h2 className="text-2xl font-bold text-center py-8">
            Notre vocation
            </h2>
            <p className="text-center text-sm py-4 mx-2 ld:mx-8 font-medium ">
            
            Nous avons pour vocation de créer un environnement harmonieux 
            entre les parents et les structures d'accueil pour enfants, tout 
            en contribuant à la sérénité et à l'épanouissement de chacun. 
           Nous pensons que le bien-être des enfants doit être au cœur de 
             tout projet professionnel et familial.
            </p>
          </div>
          {/********************************************************************************************************************* */}

        </div>
        
      </div>
    </div>
    </>
  )
}

export default AboutUS