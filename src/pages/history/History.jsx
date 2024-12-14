import React from 'react'
import MegaScroll from 'react-mega-scroll'
import history_bg from '../../assets/179041dd1cc9016fcba223d8e952c427.jpg'
import history2_bg from '../../assets/dddba1283626a4a2b4b72caab74b7b52.jpg'
import stroke_y from '../../assets/stroke-y.png'

const History = () => {
  return (
    <div className='w-screen h-screen object-fill animate-ease-in-page'>
        <MegaScroll>
            <div style={{
                backgroundImage: `url(${history_bg})`
                }}
                className={`bg-cover  flex flex-col items-center justify-center h-full`}
            >
                <div className="flex items-center justify-center">
                    <p className=" flex items-center justify-center text-white text-8xl font-bold">
                        History
                    </p>
                </div>
            </div>
            <div style={{ backgroundImage: `url(${history2_bg})`}} className="bg-cover bg-opacity-65 bg-[0_100%] flex items-center justify-center h-full">
                <div className="w-[70%] flex items-center justify-center h-full">
                    <p className='text-white text-4xl'>
                        Estados Unidos, 1899. O fim da era do velho oeste começou. Depois de tudo dar errado durante um roubo em uma cidade do oeste chamada Blackwater, Arthur Morgan e a gangue Van der Linde são forçados a fugir. Com agentes federais e os melhores caçadores de recompensas no seu encalço, a gangue precisa roubar, assaltar e lutar para sobreviver no impiedoso coração dos Estados Unidos. Conforme divisões internas profundas ameaçam despedaçar a gangue, Arthur deve fazer uma escolha entre os seus próprios ideais e a lealdade à gangue que o criou.
                    </p>
                </div>
            </div>
        </MegaScroll>
    </div>
  )
}

export default History