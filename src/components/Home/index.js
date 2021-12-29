import {Component} from 'react'

import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {CgPlayListAdd} from 'react-icons/cg'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  SideMenuContainer,
  ContentContainer,
  HomeResponseContainer,
  SideNavItem,
  ItemName,
  BannerBgContainer,
  LogoImage,
  CustomParagraph,
  CustomButton,
  InputSearch,
  SearchContainer,
  SearchButton,
} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {searchInput: ''}

  renderSideNavbar = () => (
    <SideMenuContainer>
      <SideNavItem>
        <AiFillHome size="24" color="#424242" />
        <ItemName>Home</ItemName>
      </SideNavItem>
      <SideNavItem>
        <HiFire size="24" color="#424242" />
        <ItemName>Trending</ItemName>
      </SideNavItem>
      <SideNavItem>
        <SiYoutubegaming size="24" color="#424242" />
        <ItemName>Gaming</ItemName>
      </SideNavItem>
      <SideNavItem>
        <CgPlayListAdd size="24" color="#383838" />
        <ItemName>Saved Videos</ItemName>
      </SideNavItem>
    </SideMenuContainer>
  )

  renderSearchInputFiled = () => {
    const {searchInput} = this.state
    return (
      <SearchContainer className="desktop-search-container ">
        <InputSearch
          type="search"
          placeholder="Search"
          value={searchInput}
          className="search-input"
          onChange={this.onChangeSearchInput}
        />
        <SearchButton
          type="button"
          testid="searchButton"
          className="search-icon-btn"
          onClick={this.onEnterSearchInput}
        >
          <BsSearch size="14" />
        </SearchButton>
      </SearchContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const homeBgColor = isDarkTheme ? 'home-bg-dark' : 'home-bg-light'
          return (
            <div className={homeBgColor}>
              <AppContainer>
                <HomeResponseContainer>
                  {this.renderSideNavbar()}
                  <ContentContainer>
                    <BannerBgContainer>
                      <LogoImage
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                      <CustomParagraph>
                        By the Nxt Watch Premium prepaid plans with UPI
                      </CustomParagraph>
                      <CustomButton type="button">GET IT NOW</CustomButton>
                    </BannerBgContainer>
                    {this.renderSearchInputFiled()}
                  </ContentContainer>
                </HomeResponseContainer>
              </AppContainer>
            </div>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
