import {Component} from 'react'
import {HiHome} from 'react-icons/hi'
import {AiFillFire} from 'react-icons/ai'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'

import {ImCross} from 'react-icons/im'
import {Link, withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

import {
  NavBar,
  LogoImage,
  NavbarLargeContainer,
  MenuContainer,
  ThemeButton,
  ProfileImage,
  LogOutDesktopButton,
  NavbarMobileContainer,
  MobileIconContainer,
  ButtonElSmall,
  ListContainer,
  List,
  Para,
  ExtraDiv,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

class Header extends Component {
  state = {
    displayHeader: 'none',
  }

  render() {
    const {displayHeader} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme, toggleTheme} = value

          const colorClass = activeTheme === 'light' ? '#000000' : '#ffffff'
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#231f20'
          const navColor = activeTheme === 'light' ? 'blacked' : 'whiter'

          const webSiteLogoUrl =
            activeTheme === 'light'
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          const onToggleTheme = () => {
            const val = activeTheme === 'light' ? 'dark' : 'light'
            toggleTheme(val)
          }

          const onClickLogout = () => {
            const {history} = this.props
            Cookies.remove('jwt_token')
            history.replace('/login')
          }

          return (
            <NavBar bgColor={`${bgColor}`}>
              <NavbarMobileContainer>
                <Link to="/">
                  <LogoImage
                    src={webSiteLogoUrl}
                    alt="website logo"
                    cursor="pointer"
                  />
                </Link>
                <MobileIconContainer>
                  <ButtonElSmall
                    onClick={onToggleTheme}
                    color={`${colorClass}`}
                  >
                    {activeTheme === 'light' ? (
                      <FaMoon size={25} />
                    ) : (
                      <BsBrightnessHigh size={25} />
                    )}
                  </ButtonElSmall>

                  <ButtonElSmall color={`${colorClass}`}>
                    <GiHamburgerMenu size={25} />
                  </ButtonElSmall>
                  <ButtonElSmall
                    color={`${colorClass}`}
                    onClick={onClickLogout}
                  >
                    <FiLogOut size={32} />
                  </ButtonElSmall>
                </MobileIconContainer>
              </NavbarMobileContainer>

              <ExtraDiv display={displayHeader}>
                <ListContainer
                  bgColor={activeTheme === 'light' ? '#e2e8f0' : '#000000'}
                >
                  <Para onClick={this.hideHeader}>
                    <ImCross
                      color={activeTheme === 'light' ? '#000' : ' #d7dfe9'}
                    />
                  </Para>
                  <Link to="/" className={navColor}>
                    <List color={`${colorClass}`}>
                      <HiHome className="nav-icons" /> <span>Home</span>
                    </List>
                  </Link>
                  <Link to="/trending" className={navColor}>
                    <List color={`${colorClass}`}>
                      <AiFillFire className="nav-icons" /> <span>Trending</span>
                    </List>
                  </Link>
                  <Link to="/gaming" className={navColor}>
                    <List color={`${colorClass}`}>
                      <SiYoutubegaming className="nav-icons" />{' '}
                      <span>Gaming</span>
                    </List>
                  </Link>
                  <Link to="/saved-videos" className={navColor}>
                    <List color={`${colorClass}`}>
                      <MdPlaylistAdd className="nav-icons" />
                      <span>Saved Videos</span>
                    </List>
                  </Link>
                </ListContainer>
              </ExtraDiv>

              <NavbarLargeContainer>
                <Link to="/">
                  <LogoImage src={webSiteLogoUrl} alt="website logo" />
                </Link>
                <MenuContainer>
                  <ThemeButton
                    border="none"
                    type="button"
                    onClick={onToggleTheme}
                    color={colorClass}
                  >
                    {activeTheme === 'light' ? (
                      <FaMoon size={24} />
                    ) : (
                      <BsBrightnessHigh size={24} className="animated" />
                    )}
                  </ThemeButton>
                  <ProfileImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                  <LogOutDesktopButton
                    type="button"
                    color={activeTheme === 'light' ? '#3b82f6' : '#ffffff'}
                    onClick={onClickLogout}
                  >
                    Logout
                  </LogOutDesktopButton>
                </MenuContainer>
              </NavbarLargeContainer>
            </NavBar>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default withRouter(Header)
