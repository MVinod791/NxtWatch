import {Component} from 'react'
import Cookies from 'js-cookie'
import {AiOutlineClose} from 'react-icons/ai'

import {BsSearch} from 'react-icons/bs'
// import Header from '../Header'

import ThemeContext from '../../context/ThemeContext'

import {
  AppContainer,
  ContentContainer,
  HomeResponseContainer,
  BannerBgContainer,
  LogoImage,
  CustomParagraph,
  CustomButton,
  InputSearch,
  SearchContainer,
  SearchButton,
  CustomCloseButton,
  BannerContainer,
  UnorderList,
} from './styledComponents'
import './index.css'
import VideoItems from '../VideoItems'

class Home extends Component {
  state = {
    videosList: [],
    searchInput: '',
    isClicked: false,
  }

  componentDidMount() {
    this.getHomeDetails()
  }

  getHomeDetails = async () => {
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/all'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const data = await response.json()

      const updatesData = data.videos.map(eachData => ({
        id: eachData.id,
        name: eachData.channel.name,
        profileImageUrl: eachData.channel.profile_image_url,
        thumbnailUrl: eachData.thumbnail_url,
        publishedAt: eachData.published_at,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))

      this.setState({videosList: updatesData})
    }
  }

  onCloseBanner = () => {
    const {isClicked} = this.state
    this.setState({isClicked: !isClicked})
  }

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
        <hr className="line" />
        <SearchButton
          type="button"
          testid="searchButton"
          className="search-icon-btn"
          onClick={this.onEnterSearchInput}
        >
          <BsSearch size={18} className="search-icon" />
        </SearchButton>
      </SearchContainer>
    )
  }

  render() {
    const {isClicked, videosList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'

          return (
            <div className={color}>
              <AppContainer>
                <HomeResponseContainer>
                  <ContentContainer>
                    {isClicked ? (
                      ''
                    ) : (
                      <BannerBgContainer>
                        <BannerContainer>
                          <LogoImage
                            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                            alt="website logo"
                          />

                          <CustomParagraph>
                            By the Nxt Watch Premium prepaid plans with UPI
                          </CustomParagraph>
                          <CustomButton type="button">GET IT NOW</CustomButton>
                        </BannerContainer>
                        <CustomCloseButton
                          type="button"
                          onClick={this.onCloseBanner}
                        >
                          <AiOutlineClose />
                        </CustomCloseButton>
                      </BannerBgContainer>
                    )}

                    {this.renderSearchInputFiled()}
                    <UnorderList>
                      {videosList.map(eachVideo => (
                        <VideoItems
                          videoDetails={eachVideo}
                          key={eachVideo.id}
                        />
                      ))}
                    </UnorderList>
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
