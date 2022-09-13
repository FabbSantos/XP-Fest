import { motion } from 'framer-motion'
import Timer from './timer/timer';



function Ticket() {
    const isMobile = window.innerWidth < 768

    const animation = !isMobile ? {
        
            initial: {
                opacity: 0,
                // x: '17rem',
                y: '-20rem',
            },
            whileInView: {
                opacity: 1,
                // x: '17rem',
                y:'-5rem',
                textShadow: '0px 0px  4px, 0px 0px 12px',
            },
            transition:{
                delay: 0.2,
                duration: 1
            },
    } : {}

    return (
        <>
            <div className="ticket w-screen px-10 lg:min-h-[100vh] flex flex-col  relative align-top lg:justify-center">

                 
                <motion.h1  {...animation} className='intro lg:max-w-[900px] lg:pr-[15rem] self-end pb-10 lg:pb-0 text-4xl lg:text-7xl text-white text-center uppercase'>
                    <span className=''>sobre o </span> <br />ingresso
                </motion.h1>

                <div className="flex flex-col justify-center items-center lg:max-w-[900px] lg:pr-[5rem] self-end lg:pb-40">

                    <motion.h3 className='text-center robot text-base'>Para oferecer a você uma Experiência inesquecível e totalmente imersiva, nosso ingresso será o nosso óculos de realidade aumentada. Com ele você vai se sentir dentro do THE XP, e vai poder aproveitar todos os shows e atrações dentro da sua casa. Ao adquirir nossos óculos, você automaticamente receberá seu voucher com seu ingresso, um avatar personalizável, acesso a todos os dias de festival e também a nossa playlist exclusiva.
                        <br /><br />

                        <span className='font-bold text-xl'>Teremos 3 tipos de ingresso:</span><br /><br />

                        <motion.li
                        initial={{ opacity: 0, x:'-5rem' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 1 }}
                        >    
                             <span className='intro '>The Basic</span>, conta com: o ingresso e uma camiseta exclusiva autografada de um artista da preferência do consumidor e um avatar com cinco opções de personalização.</motion.li>

                        <br />

                        <motion.li
                        initial={{ opacity: 0, x:'-5rem' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        >    
                             <span className='intro'>The VIP</span>, conta com: ingresso, duas camisetas exclusivas autografadas pelo artista da preferência do consumidor e um copo exclusivo do festival, e um avatar com cinco tipos de personalização.

                        </motion.li>

                        <br />

                        <motion.li
                        initial={{ opacity: 0, x:'-5rem' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 3, duration: 1 }}
                        >    
                            <span className='intro'>The Experience</span>, conta com: quatro camisetas exclusivas autografadas pelo cantor(a) da preferência do consumidor, copo exclusivo do festival e um Funko Pop do artista que o consumidor preferir, uma vídeo chamada de cinco minutos de duração com um artista headliner e um avatar com quinze tipos de personalização.</motion.li> <br />

                        <motion.span className='intro text-sm'
                        initial={{ opacity: 0, x:'-5rem' }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2, duration: 1 }}
                        >
                        Nossas vendas começarão em breve, não deixe de conferir nossas redes e não perca nenhum detalhe de tudo que estamos preparando para levar você ao Primeiro Festival de Música do Metaverso.</motion.span>
                    </motion.h3>

                    <Timer />
                    <motion.h4 className='intro pt-3'
                    initial={{ opacity: 0, x:'-5rem' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    >
                        siga-nos no <a className='underline' target="_blank" href="https://www.instagram.com/the.xpfest/"> instagram</a> para saber mais!</motion.h4>

                    <motion.h4 className='intro pt-3'
                    initial={{ opacity: 0, x:'-5rem' }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 2, duration: 1 }}
                    >
                        não deixe de conferir a <a className='underline' target="_blank" href="https://open.spotify.com/playlist/6EfDHIox6ZI1XoqZdcxY3v?si=L2wwnyu9Sd6WevrdpDLARQ"> playlist</a> do festival!</motion.h4>
                </div>

            </div>
        </>
    )

}

export default Ticket;
