import { RiArrowLeftSLine, RiArrowRightSLine } from 'react-icons/ri';
import { RiUser3Line } from 'react-icons/ri';


import './styles.scss';

export function Header() {
  return (
    <header className="header-container">
      <div className="arrows">
        <button type="button" className="btn-left">
          <RiArrowLeftSLine />
        </button>
        <button type="button" className="btn-right">
          <RiArrowRightSLine />
        </button>
      </div>
      <div className="buttons">
        <button type="button" className="upgrade">
          Faça upgrade
        </button>

        <button type="button" className="account">
          <div className="border">
            <RiUser3Line />
          </div>
          <div className="avatar">
            jonhywalker-dd
          </div>
        </button>
      </div>
    </header>
  )
}