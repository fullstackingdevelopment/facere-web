import Header from './Header';
import Article from './Article';
import Footer from './Footer';

function Main(loginStateManager) {
  return(
    <>
      <Header loginStateManager={loginStateManager}/>
      <Article />
      <Footer />
    </>
  )
}

export default Main;