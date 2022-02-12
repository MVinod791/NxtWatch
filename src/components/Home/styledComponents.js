import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  min-height: 100vh;
`

export const HomeResponseContainer = styled.div`
  width: 100%;
  max-width: 1200px;
`

export const SideMenuContainer = styled.ul`
  width: 25%;
  max-width: 250px;
  line-height: 0px;
  padding-left: 0px;
  margin-top: 0px;
  cursor: pointer;
`

export const SideNavItem = styled.li`
  display: flex;
  align-items: center;
`
export const ItemName = styled.p`
  color: #424242;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
  margin-left: 20px;
`
export const ContentContainer = styled.div`
  width: 90%;
  margin-left: 0px;
`
export const BannerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`
export const BannerBgContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`
export const LogoImage = styled.img`
  width: 110px;
  @media screen and (min-width: 768px) {
    width: 135px;
  }
`
export const CustomParagraph = styled.p`
  color: #181818;
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 400;
  margin-left: 0px;
`
export const CustomButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid #181818;
  padding-left: 22px;
  padding-top: 12px;
  padding-bottom: 12px;
  padding-right: 24px;
  color: #424242;
  font-size: 20px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const CustomCloseButton = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  cursor: pointer;
  color: #424242;
  font-size: 20px;
  text-align: right;
  font-weight: 500;
`

export const SearchContainer = styled.div`
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 8px;
  border: 1px solid #909090;
  border-radius: 4px;
  width: 50%;
  margin-left: 0px;
  display: flex;
  align-items: center;
  margin-top: 30px;
  height: 34px;
  margin-bottom: 30px;
`

export const InputSearch = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  text-align: left;
  color: #475569;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: 500;
`
export const SearchButton = styled.button`
  background-color: #cccccc;
  border: none;
  outline: none;
  cursor: pointer;
  height: 34px;
  width: 20%;
`
export const UnorderList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`
