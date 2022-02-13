import {Component} from 'react'
import Cookies from 'js-cookie'

import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {MdPlaylistAdd} from 'react-icons/md'

import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'

import {
  VideoContainer,
  ParaTag,
  Title,
  CountContainer,
  ChannelContainer,
  IconsPara,
  AttributesContainer,
  ProfileImage,
  ChannelDetailsContainer,
  Description,
  DivContainer,
} from './styledComponents'

import './index.css'

class VideoCard extends Component {
  state = {
    videoDetails: {},
    isLiked: false,
    isDisLiked: false,
    isSaved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok === true) {
      const data = await response.json()
      // console.log(data)
      const updatesData = {
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        id: data.video_details.id,
        description: data.video_details.description,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      // console.log(updatesData)
      this.setState({videoDetails: updatesData})
    }
  }

  onClickLiked = () => {
    const {isLiked, isDisLiked} = this.state
    if (isDisLiked) {
      this.setState({isDisLiked: false})
    }
    if (isLiked) {
      this.setState({isLiked: false})
    } else {
      this.setState({isLiked: true})
    }
  }

  onClickDisLiked = () => {
    const {isLiked, isDisLiked} = this.state
    if (isLiked) {
      this.setState({isLiked: false})
    }
    if (isDisLiked) {
      this.setState({isDisLiked: false})
    } else {
      this.setState({isDisLiked: true})
    }
  }

  onClickSaved = () => {
    const {isSaved} = this.state
    if (isSaved) {
      this.setState({isSaved: false})
    } else {
      this.setState({isSaved: true})
    }
  }

  render() {
    const {videoDetails, isLiked, isDisLiked, isSaved} = this.state
    const {
      videoUrl,
      title,
      publishedAt,
      viewCount,
      profileImageUrl,
      name,
      description,

      subscriberCount,
    } = videoDetails
    return (
      <ThemeContext.Consumer>
        {value => {
          const {activeTheme, addToSavedVideos} = value
          const bgColor = activeTheme === 'light' ? '#ffffff' : '#000000'
          const color = activeTheme === 'light' ? '#000000' : '#ffffff'

          const onSave = () => {
            this.onClickSaved()
            addToSavedVideos(videoDetails)
          }

          return (
            <VideoContainer bgColor={bgColor} color={color}>
              <DivContainer>
                <ReactPlayer url={videoUrl} controls className="react-player" />
                <Title>{title}</Title>
              </DivContainer>
              <AttributesContainer>
                <CountContainer>
                  <ParaTag>
                    {viewCount} Views . {publishedAt}
                  </ParaTag>
                </CountContainer>
                <ChannelContainer>
                  <IconsPara
                    onClick={this.onClickLiked}
                    iconColor={isLiked ? '#3b82f6' : color}
                  >
                    <AiOutlineLike size={22} /> Likes
                  </IconsPara>
                  <IconsPara
                    onClick={this.onClickDisLiked}
                    iconColor={isDisLiked ? '#3b82f6' : color}
                  >
                    <AiOutlineDislike size={22} /> Dislike
                  </IconsPara>
                  <IconsPara
                    onClick={onSave}
                    iconColor={isSaved ? '#3b82f6' : color}
                  >
                    <MdPlaylistAdd size={22} /> {isSaved ? 'Saved' : 'Save'}
                  </IconsPara>
                </ChannelContainer>
              </AttributesContainer>
              <hr className="hr-line" />
              <ChannelDetailsContainer>
                <ProfileImage src={profileImageUrl} />
                <DivContainer>
                  <ParaTag>{name}</ParaTag>
                  <ParaTag>{subscriberCount} subscribers</ParaTag>
                  <Description>{description}</Description>
                </DivContainer>
              </ChannelDetailsContainer>
            </VideoContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default VideoCard
