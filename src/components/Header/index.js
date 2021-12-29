import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {FaMoon} from 'react-icons/fa'
import {BsBrightnessHigh} from 'react-icons/bs'
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
  ListItem,
  ButtonElSmall,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, toggleTheme} = value

      const colorClass = activeTheme === 'light' ? '#000000' : '#ffffff'
      const bgColor = activeTheme === 'light' ? '#ffffff' : '#231f20'

      const onClickLogout = () => {
        const {history} = props
        Cookies.remove('jwt_token')
        history.replace('/login')
      }

      const webSiteLogoUrl =
        activeTheme === 'light'
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

      const onToggleTheme = () => {
        const val = activeTheme === 'light' ? 'dark' : 'light'
        toggleTheme(val)
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
              <ButtonElSmall onClick={onToggleTheme} color={`${colorClass}`}>
                {activeTheme === 'light' ? (
                  <FaMoon size={25} />
                ) : (
                  <BsBrightnessHigh size={25} />
                )}
              </ButtonElSmall>

              <ButtonElSmall color={`${colorClass}`}>
                <GiHamburgerMenu size={25} />
              </ButtonElSmall>
              <ButtonElSmall color={`${colorClass}`} onClick={onClickLogout}>
                <FiLogOut size={32} />
              </ButtonElSmall>
            </MobileIconContainer>
          </NavbarMobileContainer>

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
                onClick={onClickLogout}
                color={activeTheme === 'light' ? '#3b82f6' : '#ffffff'}
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

export default withRouter(Header)
