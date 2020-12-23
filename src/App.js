import Container from 'react-bootstrap/Container';
import NavTabs from './components/content/NavTabs';

import Footer from './components/footer/Footer';
import Header from './components/header/Header';

const App = () => {
  return (
    <Container className="p-3">
      <Header />
      <NavTabs />
      <Footer />
    </Container>
  );
};

export default App;
