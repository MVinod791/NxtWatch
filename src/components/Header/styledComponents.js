import styled, {keyframes} from 'styled-components'

const FadeIn = keyframes`
    0%{
        opacity:0;
    }
    100%{
        opacity:1;
    }
`

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;

  height: 34px;
  padding-top: 20px;
  width: 100%;
  background-color: ${props => props.bgColor};
  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    border-bottom-style: none;
  }
`

export const LogoImage = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 135px;
  }
`
export const NavbarMobileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const MobileIconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const ButtonElSmall = styled.button`
    background: none;
    border: none;
    outline: none;
    color: ${props => props.color};
}
`
export const ListItem = styled.li`
  list-style-type: none;
  margin-left: 10px;
  margin-right: 10px;
`

export const NavbarLargeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const MenuContainer = styled.div`
  display: flex;
  align-items: center;
`

export const ThemeButton = styled.button`
  color: ${props => props.color};
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`

export const ProfileImage = styled.img`
  height: 34px;
  width: 34px;
  margin-left: 10px;
`

export const LogOutDesktopButton = styled.button`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 14px;
  padding: 4px 16px;

  color: #3b82f6;
  border: 1px solid #3b82f6;
  background-color: transparent;
  border-radius: 4px;
  margin-left: 14px;
  cursor: pointer;
  outline: none;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  background: ${props => props.bgColor};
  width: 103%;
  height: 105vh;
  top: -16px;
  left: -9px;
  padding-left: 40%;
  @media (min-width: 768px) {
    display: none;
  }
`

export const ExtraDiv = styled.div`
  display: ${props => props.display};
  animation: ${FadeIn} 0.5s;
`

export const List = styled.li`
  padding: 10px 0;
  :hover {
    background-color: ${props => props.bgColor};
    color: ${props => props.color};
    .nav-icons {
      color: red;
    }
  }
`
export const Para = styled.p`
  position: absolute;
  top: 45px;
  right: 50px;
  color: ${props => props.color};
`
