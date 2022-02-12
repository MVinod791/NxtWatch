import {Link} from 'react-router-dom'
import ThemeContext from '../../context/ThemeContext'
import {
  ListContainer,
  ImageTag,
  ListItem,
  ProfileImage,
  CountContainer,
  ParaTag,
  Title,
} from './styledComponents'

const VideoItems = props => {
  const {videoDetails} = props
  const {
    name,
    profileImageUrl,
    thumbnailUrl,
    publishedAt,
    title,
    viewCount,
    id,
  } = videoDetails
  return (
    <ThemeContext.Consumer>
      {value => {
        const {activeTheme} = value
        const color = activeTheme === 'light' ? '#000000' : '#ffffff'
        return (
          <Link to={`videos/${id}`}>
            <ListContainer>
              <ImageTag src={thumbnailUrl} alt={name} width="250px" />
              <ListItem>
                <ProfileImage src={profileImageUrl} alt={name} />
                <div>
                  <Title color={`${color}`}>{title}</Title>
                  <ParaTag color={`${color}`}>{name}</ParaTag>
                  <CountContainer>
                    <ParaTag color={`${color}`}>{viewCount} Views</ParaTag>
                    <ParaTag color={`${color}`}>{publishedAt}</ParaTag>
                  </CountContainer>
                </div>
              </ListItem>
            </ListContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItems
