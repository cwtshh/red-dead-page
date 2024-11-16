import React from 'react'
import stroke from '../../assets/stroke.png'
import stroke_y from '../../assets/stroke-y.png'
import arthur from '../../assets/characters/arthur.png'

const Home = () => {
  return (
    <div className="relative bg-[url('src/assets/bg/fundo_home.jpg')] w-full h-screen bg-cover bg-center">
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
          <p className='text-white w-[80rem] text-4xl p-5'>
            Red Dead Redemption 2 é um jogo de ação e aventura em um mundo aberto, criado pela Rockstar Games. Situado em 1899, no final do Velho Oeste, ele narra a trajetória de Arthur Morgan, um fora-da-lei que pertence à gangue Van der Linde.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home
