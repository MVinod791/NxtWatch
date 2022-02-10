import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  DivContainer,
  ListContainer,
  ListItems,
  SpanEl,
} from './styledComponents'

import './index.css'

const Navbar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'
      const hoverBgColor = activeTheme === 'light' ? '#d7dfe9' : '#475569'
      return (
        <DivContainer>
          <ListContainer>
            <Link to="/">
              <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                <span className="nav-icons">
                  <HiHome size={20} />
                </span>
                <SpanEl>Home</SpanEl>
              </ListItems>
            </Link>
            <Link to="/trending">
              <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                <span className="nav-icons">
                  <AiFillFire size={20} />
                </span>
                <SpanEl>Trending</SpanEl>
              </ListItems>
            </Link>
            <Link to="/gaming">
              <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                <span className="nav-icons">
                  <SiYoutubegaming size={20} />
                </span>
                <SpanEl>Gaming</SpanEl>
              </ListItems>
            </Link>
            <Link to="/saved-videos">
              <ListItems color={`${color}`} bgColor={`${hoverBgColor}`}>
                <span className="nav-icons">
                  <MdPlaylistAdd size={20} />
                </span>
                <SpanEl>Saved videos</SpanEl>
              </ListItems>
            </Link>
          </ListContainer>
        </DivContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default Navbar