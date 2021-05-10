import { Header } from '../Header';
import { Card } from '../Card';

import './styles.scss';

export function MainContent() {
  return (
    <main className="main-content">
      <Header />
      <div className="view-recently">
        <h1> Boa tarde </h1>
        <div className="grid">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}