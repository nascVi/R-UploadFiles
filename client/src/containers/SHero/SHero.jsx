import React, { /* useState */ } from 'react'
import ExampleCss from '../../components/HeroH/ExampleCss'
import FadeInLogo from '../../components/HeroH/FadeinLogo'
import hBackground from '../../components/SVGs/shero/hBackground.svg'

const SHero = () => 
    // Afficher logo avec effet de fondu à ouverture
    <div className="hero">
    <ExampleCss />
    <h1>I am the hero here!</h1> 
    <hBackground />
    <FadeInLogo /> 
    {/* Following section is using the onLoad 
    method, displaying the function ready strategButtons
    the adrian way
    <NavStrategButtons />*/} 
     </div>


export default SHero