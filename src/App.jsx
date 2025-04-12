
import './commonResource/css/bootstrap.css';
import './commonResource/css/styles.css';
import Header from './components/Header/Header'
import Alert from "./components/mainSection/AlertSection/Introduction";
import SectionOne from './components/mainSection/Sectionone/SectionOne'
import SectionTwo from './components/mainSection/SectionTwo/SectionTwo'
import SectionThree from './components/mainSection/SectionThree/SectionThree'
import SectionFour from './components/mainSection/SectionFour/SectionFour'
import SectionFive from './components/mainSection/SectionFive/SectionFive'
import SectionSixth from './components/mainSection/SectionSix/SectionSixth'
import YoutubeVideos from './components/Youtube/YoutubeVideos';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Alert/>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFive/>
      <SectionSixth/>
      <YoutubeVideos/>
      <Footer/>
    </>
  )  
}

export default App







