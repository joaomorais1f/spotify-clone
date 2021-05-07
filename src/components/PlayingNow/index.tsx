import { IoRepeat } from 'react-icons/io5';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';

import './styles.scss';

export function PlayingNow () {
  return (
    <footer className="playing-now">
      <section className="song-details">
        <img 
          src="https://www.github.com/joaomorais1f.png" 
          width="60" height="60" alt="Foto da Banda" 
        />
        <div className="artist-details">
          <span> Nome da artista </span>
          <span> Nome da música </span>
        </div>
      </section>
      <section className="song-actions">
        <div className="buttons-container">
          <button type="button">
            <IoRepeat />
          </button>
          <button type="button">
            <BiSkipPrevious />
          </button>
          <button type="button" className="play">
            <BsPlayFill />
          </button>
          <button type="button">
            <IoRepeat />
          </button>
          <button type="button">
            <BiSkipNext />
          </button>
          <button type="button">
            <IoRepeat />
          </button>
        </div>
        <div className="slider-song">
          <span> 00:00 </span>
          <div className="slider-content" />
          <span> 00:00 </span>
        </div>
      </section>
      <section className="device-actions">
        <button type="button">
          <BiSkipNext />
        </button>
        <button type="button">
          <BiSkipNext />
        </button>
        <button type="button">
          <BiSkipNext />
        </button>
        <button type="button">
          <BiSkipNext />
        </button>
      </section>
    </footer>
  )
}