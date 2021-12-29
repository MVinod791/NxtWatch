import styled from 'styled-components'

export const NavBar = styled.nav`
  display: flex;
  justify-content: center;
  padding: 10px;
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
