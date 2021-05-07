import { useState } from 'react';

import { IoRepeat } from 'react-icons/io5';
import { IoIosShuffle } from 'react-icons/io';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { BsPlayFill, BsPauseFill } from 'react-icons/bs';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';

import './styles.scss';

export function PlayingNow () {
  const [liked, setLiked] = useState(false);
  const [active, setActive] = useState(false);
  const [pause, setPause] = useState(false);

  const likedSong = () => {
    setLiked((oldState) => !oldState);
  }

  const activeHover = () => {
    setActive((oldState) => !oldState);
  }

  const handlePause = () => {
    setPause((oldState) => !oldState);
  }

  return (
    <footer className="playing-now">
      <section className="song-details">
        <img 
          src="https://www.github.com/joaomorais1f.png" 
          width="55" height="55" alt="Foto da Banda" 
        />
        <div className="artist-details">
          <span> Nome do artista </span>
          <span> Nome da música </span>
          <button type="button" className="song-like" onClick={likedSong}>
            {liked ? (
              <AiFillHeart className="liked" />
            ) : (
              <AiOutlineHeart className="not-liked" />
            )}
          </button>
        </div>
      </section>
      <section className="song-actions">
        <div className="buttons-container">
          <button 
            type="button"
            onClick={activeHover} 
            className={`random-song ${active ? 'active' : ''}`}
          >
            <IoIosShuffle />
          </button>
          <button type="button">
            <BiSkipPrevious />
          </button>
          <button type="button" onClick={handlePause} className="play">
            {pause ? (
              <BsPauseFill />
            ) : (
              <BsPlayFill />
            )}
          </button>
          <button type="button">
            <BiSkipNext />
          </button>
          <button type="button">
            <IoRepeat />
          </button>
        </div>
        <div className="slider-container">
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