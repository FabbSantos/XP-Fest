import { motion } from 'framer-motion'
import './slide.css'
import { useRef, useEffect, useState } from 'react'

function Slide() {

    const [width, setWidth] = useState(0)
    const carousel = useRef<Object>() ?? {}
    console.log(carousel)

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, []);

    return (
        <>
            <motion.div ref={carousel} className='carousel  -mt-32'
                whileTap={{ cursor: "grabbing" }}
            >
                <img src="./src/assets/arrow_left.png" alt="" className=' w-[300px] absolute bottom-0 left-0' />
                <img src="./src/assets/arrow_right.png" alt="" className=' w-[300px] absolute bottom-0 right-0' />


                <motion.div
                    drag="x"
                    dragConstraints={{ right: 0, left: -width }}
                    className='inner-carousel'
                >

                    <motion.div className='item'>
                        <img src="./src/assets/samsung-logo.svg" width="200px"></img>
                        <motion.div className='item-content relative'>
                            <h3 className='py-20 text-center robot'>Junte-se a nós no nosso minigame de <span>tiro ao alvo</span>! Acerte os produtos que aparecem na tela e ganhe um cupom de desconto exclusivo nas lojas Samsung! </h3>
                        </motion.div>

                    </motion.div>

                    <motion.div className='item'>
                        <img src="./src/assets/riot.svg" width="200px"></img>
                        <motion.div className='item-content'>
                            <h3 className='py-20 text-center robot'>Encontre-nos no metaverso, jogue com seus amigos um jogo da memória com temática de <span>LoR</span> e ganhe uma skin exclusiva! </h3>
                        </motion.div>
                    </motion.div>

                    <motion.div className='item'>
                        <img src="./src/assets/burger-king.svg" width="160px"></img>
                        <motion.div className='item-content'>
                            <h3 className='py-20 text-center robot'>Monte um <span>Whoper</span> corretamente e ganhe um cupom para trocar em um milkshake na compra de um combo Whopper! </h3>
                        </motion.div>
                    </motion.div>

                    <motion.div className='item'>
                        <img src="./src/assets/Louis.svg" width="200px"></img>
                        <motion.div className='item-content'>
                            <h3 className='py-20 text-center robot'>Junte 3 bolhas iguais, e ganhe uma <span>blusa exclusiva</span> para o seu avatar, e retire a mesma blusa em uma de <span>nossas lojas!</span> </h3>
                        </motion.div>
                    </motion.div>

                   

                </motion.div>
            </motion.div>
        </>
    )

}

export default Slide;
