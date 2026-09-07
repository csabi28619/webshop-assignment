import React from 'react'
import {bannerImg, siteLogo} from '../assets/assets'
import styles from './HeroSection.module.css'
import LanguageSelector from './LanguageSelector'

const HeroSection = () => {
  return (
    <section className={styles.hero} style={{ backgroundImage: `url(${bannerImg})` }}>
        <img src={siteLogo} alt="Site Logo" />
        <LanguageSelector />
        <h1>Get started with your favourite shopping experience</h1>
        <button>BUY NOW</button>
    </section>
  )
}

export default HeroSection