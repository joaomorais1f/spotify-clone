import { BsPlayFill } from 'react-icons/bs';

import './styles.scss';

export function Card() {
  return (
    <button type="button" className="card-container">
      <img src="https://www.github.com/joaomorais.png" alt="Foto da Playlist" />
      <div className="content">
        <span> Nome da playlist que foi tocada asdassd\ </span>
      </div>
      <button type="button" className="play-playlist active">
        <BsPlayFill />
      </button>
    </button>
  )
}