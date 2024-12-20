import React from 'react'
import stroke from '../../assets/stroke.png'
import stroke_y from '../../assets/stroke-y.png'
import arthur from '../../assets/characters/arthur.png'
import home_bg from '../../assets/bg/fundo_home.jpg'

const Home = () => {
  return (
    <div style={{
      backgroundImage: `url(${home_bg})`
      }}
      className={`relative w-full h-screen bg-cover bg-center animate-ease-in-page`}>
      <div className="pt-36">
        <div className='flex items-center ml-4 h-[20rem]'>
          <div role='button' className="relative h-[9rem] w-[28rem] flex items-center justify-center">
            <img src={stroke} className="" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              Comprar
            </p>
          </div>

          <div role='button' className="relative h-[9rem] w-[28rem] flex items-center justify-center ml-4">
            <img src={stroke_y} className="filter" />
            <p className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
              Assistir ao Trailer
            </p>
          </div>
        </div>

        {/* Imagem Arthur posicionada à direita e alinhada ao topo */}
        <img src={arthur} className="absolute right-0 top-14 h-[96.2vh] z-10" />

        <div className='mt-[8em]'>
          <p className='text-white text-4xl p-5 w-[60%]'>
            Red Dead Redemption 2 é um jogo de ação e aventura em um mundo aberto, criado pela Rockstar Games. Situado em 1899, no final do Velho Oeste, ele narra a trajetória de Arthur Morgan, um fora-da-lei que pertence à gangue Van der Linde.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
