import ScrollBar from './ScrollBar';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import BtnToApp from './BtnToApp';

function Home() {
  return (
    <div>
      <ScrollBar />
      <Header />
      <BtnToApp />
      <Content />
      <BtnToApp />
      <Footer />
    </div>
  );
}

export default Home;
