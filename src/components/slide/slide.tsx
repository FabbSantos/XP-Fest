import { motion } from 'framer-motion'
import './slide.css'
import React, { useRef, useEffect, useState, Ref } from 'react'

import arrow_left from '../../assets/arrow_left.png'
import arrow_right from '../../assets/arrow_right.png'
import samsung from '../../assets/samsung-logo.svg'
import bk from '../../assets/burger-king.svg'
import louis from '../../assets/Louis.svg'
import riot from '../../assets/riot.svg'

function Slide() {

    const [width, setWidth] = useState(0)
    const carousel = useRef<HTMLDivElement>() ?? {}
    const r = carousel as Ref<HTMLDivElement>

    useEffect(() => {
        const scrollWidth = carousel?.current?.scrollWidth ?? 0
        const offsetWidth = carousel?.current?.offsetWidth ?? 0
        setWidth(scrollWidth - offsetWidth)
    }, []);

    return (
        <>
            <motion.div ref={r} className='carousel pt-14 max-w-screen lg:max-w-[1400px]'
                whileTap={{ cursor: "grabbing" }}
            >
                <img src={arrow_left} alt="arrow-left" className=' pointer-events-none w-[300px] absolute hidden lg:block bottom-0 left-0' />
                <img src={arrow_right} alt="arrow-right" className=' pointer-events-none w-[300px] absolute hidden lg:block bottom-0 right-0' />


                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'>

                    <motion.div className='item px-10 lg:px-0'>
                        <img src={samsung} width="200px" alt='Samsung'></img>
                        <motion.div className='item-content relative '>
                            <h3 className='py-10 text-center robot'>No stand da <span>Samsung</span>, você vai jogar um tiro ao alvo personalizado. O game consiste em acertar os produtos que aparecerão na sua tela, o mais rápido possível antes que sumam. Você terá 3 minutos, e quanto mais produtos acertar, maior será o seu <span>cupom de desconto</span>. Contaremos com 3 cupons exclusivos: 15%, 20% e 25% em compras acima de 350 R$ no site da Samsung.    </h3>
                        </motion.div>

                    </motion.div>

                    <motion.div className='item px-10 lg:px-0'>
                        <img src={riot} width="200px" alt='Riot Games'></img>
                        <motion.div className='item-content'>
                            <h3 className='py-10 text-center robot'>Aqui no stand da <span>Riot Games</span> você encontra o Lembranças de Runeterra, que é um jogo da memória baseado no jogo de cartas da Riot Games, o Legends of Runeterra. Você vai achar um tabuleiro com 10 cartas, e deverá encontrar todos os 5 pares em um limite de tempo de 3 minutos. Ao completar o jogo, você ganha um pacote de espólios exclusivo do <span>THE XP</span>. Para resgata-lo é só logar na nossa plataforma com sua conta Riot e digitar o código que estará disponível na tela ao final do jogo. </h3>
                        </motion.div>
                    </motion.div>

                    <motion.div className='item px-10 lg:px-0'>
                        <img src={bk} width="160px" alt='Burger King'></img>
                        <motion.div className='item-content'>
                            <h3 className='py-10 text-center robot'>No <span>BK</span> você vai aprender a fazer o sanduíche mais gostoso do mundo! A receita do Whopper aparecerá para você durante 5 segundos, e em seguida você deverá replica-la corretamente, seu tempo será de 3 minutos. Ao vencer esse desafio você ganhará um cupom que vai te dar o direito de duplicar seu combo Whopper e ainda te da direito a duas casquinhas.  </h3>
                        </motion.div>
                    </motion.div>

                    <motion.div className='item px-10 lg:px-0'>
                        <img src={louis} width="200px" alt='Louis Vuitton'></img>
                        <motion.div className='item-content'>
                            <h3 className='py-10 text-center robot'>No stand mais chique do festival, você encontrará um puzzle bubble, e terá 3 minutos para juntar 5 trios de logo que aparecerão dentro das bolhas. Ao completar a missão, você ganhará uma camiseta feita exclusivamente para o seu avatar dentro do <span>THE XP</span>. E também ganha a camiseta em uma loja física da marca em compras acima de 500 R$.  </h3>
                        </motion.div>
                    </motion.div>

                   

                </motion.div>
            </motion.div>
        </>
    )

}

export default Slide;
