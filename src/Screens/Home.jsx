import React from 'react'
import Blog from '../Componentes/Blog'
import Care from '../Componentes/Care'
import Causes from '../Componentes/Causes'
import Header from '../Componentes/Header'
import JoinUs from '../Componentes/JoinUs'
import PageSpeed from '../Componentes/PageSpeed'
import Statistics from '../Componentes/Statistics'
import Testimony from '../Componentes/Testimony'
import Volunteer from '../Componentes/Volunteer'


function Home() {
  return (
    <div>
<Header></Header>
<JoinUs></JoinUs>
<Statistics></Statistics>
<Causes></Causes>
<PageSpeed></PageSpeed>
<Volunteer></Volunteer>
<Testimony></Testimony>
<Care></Care>
<Blog></Blog>
    </div>
  )
}

export default Home