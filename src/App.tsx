import React, { useEffect } from 'react';
import './App.scss';
import Intro from './components/intro';
import Info from './components/Info';
import Positon from './components/Positon';
import Utility from './components/Utility';
import Design from './components/Design';
import Footer from './components/Footer';
import Tell from './components/Tell';
import Media from './components/Media';
import { projectConfig } from './configs';
interface Props {

}

const App: React.FC<Props> = () => {

  useEffect(() => {
    document.title = projectConfig.name.toLocaleUpperCase();
  }, [])

  return <div id='app'>
    <Intro></Intro>
    <div className='mt32'>
      <Info />
    </div>
    <Positon />
    <Utility />
    <Design></Design>
    <Media></Media>
    <Footer></Footer>
    <Tell></Tell>
  </div>
}

export default App;
