import React from 'react'
import {motion} from 'framer-motion'
import { styles } from '../styles'
import { ComputersCanvas } from './canvas'


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto heropattern-overcast-black-100 '>
      {/* jigsaw, overcast, formalinvitation, topography, texture, jupiter, architect, cutout, hideout, graphpaper, yyy, squares, fallingtriangles, pianoman, piefactory, dominos, hexagons, charliebrown, autumn, temple, stampcollection, deathstar, churchonsunday, ilikefood, overlappinghexagons, fourpointstars, bamboo, bathroomfloor, corkscrew, happyintersection, kiwi, lips, lisbon, randomshapes, steelbeams, tinycheckers, xequals, anchorsaway, bevelcircle, brickwall, fancyrectangles, heavyrain, overlappingcircles, plus, roundedplusconnected, volcanolamp, wiggle, bubbles, cage, connections, current, diagonalstripes, flippeddiamonds, floatingcogs, glamorous, houndstooth, leaf, linesinmotion, moroccan, morphingdiamonds, rails, rain, skulls, squaresinsquares, stripes, tictactoe, zigzag, aztec, banknote, boxes, circlessquares, circuitboard, curtain, diagonallines, endlessclouds, eyes, floortile, groovy, intersectingcircles, melt, overlappingdiamonds, parkayfloor, pixeldots, polkadots, signal, slantedstars, wallpaper */}
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 `}>
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='w-5 h-5 rounded-full bg-[#915eff]'/>
            <div className="w-1 sm:h-80 h-40 violet-gradient"/>
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className='text-[#915eff]'>Akram</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I develop aesthetic and functional 
          {/* breaks the line on small devices, sm:block hidden means its hidden normally but shows on sd's  */}
          <br className='sm:block hidden'/> web applications and user interfaces</p>
        </div>
      </div>
        <ComputersCanvas />

{/* scroll button using framer motion */}
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
          <a href="#about">
            <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
            </div>
          </a>

        </div>
    </section>
  )
}

export default Hero