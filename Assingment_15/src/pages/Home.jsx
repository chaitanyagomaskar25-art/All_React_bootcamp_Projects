import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Learning from '../components/Learning'
import AvaialableStatus from '../components/AvaialableStatus'
import Tools from '../components/Tools'
import WhatICanDo from '../components/WhatICanDo'
import Stats from '../components/Stats'
import CodeQality from '../components/CodeQality'

const Home = () => {
  return (
    <div>
        <Hero />
        <Learning />
        <AvaialableStatus />
        <Tools />
        <WhatICanDo />
        <Stats />
        <CodeQality />
    </div>
  )
}

export default Home
