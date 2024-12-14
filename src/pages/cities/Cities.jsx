import React from 'react'
import MegaScroll from 'react-mega-scroll'
import city_bg from '../../assets/94be4c766906a96e85eeb3e3f2990681.jpg'
import stroke_y from '../../assets/stroke-y.png'
import valentine from '../../assets/cities/valentine.jpg'
import annesburg from '../../assets/cities/annesburg.jpg'
import saintdeni from '../../assets/cities/saintdeni.jpg'
import mounthagen from '../../assets/cities/mounthagen.jpg'
import rhodes from '../../assets/cities/rhodes.jpg'
import strawberry from '../../assets/cities/strawberry.jpg'
import lagras from '../../assets/cities/lagras.jpg'

const Cities = () => {
    return (
        <div className="w-screen h-screen object-fill animate-ease-in-page">
      
        <MegaScroll>
  
          <div style={{
            backgroundImage: `url(${city_bg})`
            }} 
            className={`bg-cover bg-[0_100%] flex flex-col items-center justify-center h-full`}>
            <h1 className="text-8xl text-white">Cities</h1>
          </div>

          <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${valentine})`}}>
            <div className='flex flex-col justify-center items-end h-full text-white'>
                <h1 className='text-white text-8xl'>Valentine</h1>
                <p className='text-4xl'>THE HEARTLANDS, NH</p>
                <p className='w-[40%] text-2xl text-end'>
                    Uma cidade barulhenta, hostil e caótica nas Heartlands, Valentine organiza leilões de gado que atraem comerciantes, rancheiros, caubóis, apostadores, fora da lei e prostitutas de todos os cantos – todos querendo ganhar dinheiro, arrumar confusão e se divertir.
                </p>
            </div>
          </div>

          <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${annesburg})`}}>
            <div className='flex flex-col justify-center items-end h-full text-white'>
                <h1 className='text-white text-8xl'>Annesburg</h1>
                <p className='text-4xl'>ROANOKE RIDGE, NH</p>
                <p className='w-[40%] text-2xl text-end'>
                    A vida não é fácil para os mineradores e suas famílias em Annesburg, cidade que tem fornecido carvão pelo Rio Lannahechee há quase um século. As condições de trabalho são terríveis, os salários são baixos e muitos homens já perderam suas vidas na labuta.
                </p>
            </div>
          </div>

            <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${saintdeni})`}}>

                <div className='flex flex-col justify-center items-end h-full text-white'>
                    <h1 className='text-white text-8xl'>Saint Denis</h1>
                    <p className='text-4xl'>BAYOU NWA, LE</p>
                    <p className='w-[40%] text-2xl text-end'>
                    Uma das principais portas de entrada para a América do Norte, com uma rota comercial que percorre o país inteiro, a agitada cidade de Saint Denis é um caldeirão de culturas e povos, onde empresários, membros da alta sociedade, marinheiros, trabalhadores, mendigos e ladrões vivem lado a lado.
                    </p>
                </div>
            </div>

            <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${mounthagen})`}}>
                <div className='flex flex-col justify-center items-end h-full text-white'>
                    <h1 className='text-white text-8xl'>Mount Hagen</h1>
                    <p className='text-4xl'>GRIZZLIES WEST, AM</p>
                    <p className='w-[40%] text-2xl text-end'>
                    Um dos picos mais conhecidos em Grizzlies, Ambarino, o Monte Hagen se eleva sobre o Lago Isabella ao oeste e sobre o Riacho Beartooth ao leste, que oferece a passagem principal pela cordilheira e se encontra com o Rio Dakota mais ao sul.
                    </p>
                </div>
            </div>

            <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${rhodes})`}}>
                <div className='flex flex-col justify-center items-end h-full text-white'>
                    <h1 className='text-white text-8xl'>Rhodes</h1>
                    <p className='text-4xl'>SCARLETT MEADOWS, LE</p>
                    <p className='w-[40%] text-2xl text-end'>
                        Apesar da aparência empertigada e correta, tensões e corrupção têm raízes profundas na cidade sulista de Rhodes, que por anos tem sido atingida pelo fogo cruzado entre os Braithwaites e os Grays, duas famílias de latifundiários em guerra.
                    </p>
                </div>
            </div>

            <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${strawberry})`}}>
                <div className='flex flex-col justify-center items-end h-full text-white'>
                    <h1 className='text-white text-8xl'>Strawberry</h1>
                    <p className='text-4xl'>BIG VALLEY, WE</p>
                    <p className='w-[40%] text-2xl text-end'>
                        Strawberry não passava de uma cidadezinha madeireira até a chegada do seu novo prefeito, um excêntrico da Costa Leste obcecado em transformá-la em um polo cultural para turistas ricos, para a perplexidade dos seus habitantes.
                    </p>
                </div>
            </div>

            <div className='bg-cover bg-[0_100%] p-6 h-full' style={{backgroundImage: `url(${lagras})`}}>
                <div className='flex flex-col justify-center items-end h-full text-white'>
                    <h1 className='text-white text-8xl'>Lagras</h1>
                    <p className='text-4xl'>BAYOU NWA, LE</p>
                    <p className='w-[40%] text-2xl text-end'>
                        Um pequeno e remoto assentamento próximo aos pântanos de Bayou Nwa, Lemoyne, Lagras possui uma população que vive de forma autossuficiente, ganhando um pouco de dinheiro aqui e ali por meio da pesca e atuando como guias para os viajantes que querem explorar a região.
                    </p>
                </div>
            </div>

          

        </MegaScroll>
  
      </div>
    )
}

export default Cities