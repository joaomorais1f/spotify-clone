import './assets/styles/global.scss';

import { Layout } from './components/Layout';
import { MainContent } from './components/MainContent';
import { MenuSide } from './components/MenuSide';
import { PlayingNow } from './components/PlayingNow';

function App() {
  return (
    <Layout>
      <MenuSide />
      <MainContent />
      <PlayingNow />
    </Layout>
  );
}

export default App;
