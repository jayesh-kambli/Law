import './App.css';
import Header from "./component/header/header";
import Hero from "./component/hero/hero";
import Intro from "./component/intro/intro"
import WhyUs from './component/whyUs/whyUs';
import AreaOfPractice from "./component/areaOfPractices/area";
import HappyClients from "./component/happyClients/happyClient";
import OurTeam from './component/ourTeam/ourTeam';
import Faq from './component/FAQ/faq';
import News from './component/newsLetter/news';
import Footer from './component/footer/footer';

function App() {
  return (
    <div className='website'>
      <Header />
      <Hero />
      <Intro />
      <WhyUs />
      <AreaOfPractice />
      <HappyClients />
      <OurTeam />
      <Faq />
      <News />
      <Footer />
    </div>
  );
}

export default App;
