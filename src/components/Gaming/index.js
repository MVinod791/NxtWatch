import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {AiFillFire} from 'react-icons/ai'
import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'

import {
  HeadingContainer,
  CustomContainer,
  CustomContainer2,
  CustomPara,
  ParaTag,
  ParaItems,
  TitlePara,
  CustomImg,
  MainContainer,
  LoaderContainer,
  CustomListContainer,
  SavedVideosContainer,
  FailureViewContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
  ParaButton,
} from './styledComponents'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Gaming extends Component {
  state = {
    gamesList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getGames()
  }

  getGames = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = 'https://apis.ccbp.in/videos/gaming'
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    // console.log(response)
    if (response.ok) {
      const data = await response.json()
      //  console.log(data)
      const updatesGamesData = data.videos.map(eachData => ({
        id: eachData.id,
        thumbnailUrl: eachData.thumbnail_url,
        title: eachData.title,
        viewCount: eachData.view_count,
      }))
      console.log(updatesGamesData)
      this.setState({
        gamesList: updatesGamesData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderGamesDataView = () => {
    const {gamesList} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme} = value
          const bgColor = activeTheme === 'light' ? '#f1f1f1' : '#000000'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'
          return (
            <SavedVideosContainer bgColor={bgColor}>
              <MainContainer>
                <Link to="/gaming">
                  <HeadingContainer
                    bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
                  >
                    <ParaButton
                      testid="theme"
                      bgColor={activeTheme === 'light' ? '#d7dfe9' : '#000000'}
                    >
                      <AiFillFire color="red" size={24} />
                    </ParaButton>
                    <CustomPara color={color}>Gaming</CustomPara>
                  </HeadingContainer>
                </Link>
                <CustomListContainer>
                  {gamesList.map(eachData => (
                    <Link to={`/videos/${eachData.id}`} key={eachData.id}>
                      <CustomContainer>
                        <CustomImg
                          src={eachData.thumbnailUrl}
                          alt="video thumbnail"
                        />
                        <CustomContainer2>
                          <TitlePara color={color}>{eachData.title}</TitlePara>
                          <ParaItems color={color}>
                            {eachData.viewCount} Views
                          </ParaItems>
                        </CustomContainer2>
                      </CustomContainer>
                    </Link>
                  ))}
                </CustomListContainer>
              </MainContainer>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }

  renderLoadingView = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#4f46e5" height="50" width="50" />
    </LoaderContainer>
  )

  renderFailureView = () => (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const bgColor = activeTheme === 'light' ? '#f1f1f1' : '#000000'
        const color = activeTheme === 'light' ? '#000000' : '#ffffff'
        const imageUrl =
          activeTheme === 'light'
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <FailureViewContainer bgColor={bgColor} color={color}>
            <FailureImage src={imageUrl} alt="no videos" />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
              We are having some trouble to complete your request.
              <br /> Please try again.
            </FailureDescription>

            <FailureRetryButton type="button" onClick={this.onClickHome}>
              Retry
            </FailureRetryButton>
          </FailureViewContainer>
        )
      }}
    </ThemeContext.Consumer>
  )

  renderGamesList = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderGamesDataView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return <div>{this.renderGamesList()}</div>
  }
}

export default Gaming
