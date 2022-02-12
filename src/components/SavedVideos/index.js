import {Link} from 'react-router-dom'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiFillFire} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'

import {
  HeadingContainer,
  CustomContainer,
  CustomContainer2,
  CustomPara,
  ParaTag,
  ParaItems,
  TitlePara,
  CustomImage,
  MainContainer,
  NoVideosImageEl,
  NotFoundContainer,
  SavedVideosContainer,
  CustomHeading,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme, savedVideos} = value

      const bgColor = activeTheme === 'light' ? '#f1f1f1' : '#000000'
      const color = activeTheme === 'light' ? '#000000' : '#ffffff'
      return (
        <SavedVideosContainer bgColor={bgColor} color={color}>
          {savedVideos.length === 0 ? (
            <NotFoundContainer>
              <NoVideosImageEl
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                alt="no saved videos"
              />
              <CustomHeading>No saved videos found</CustomHeading>
              <ParaItems>
                You can save your videos while watching them
              </ParaItems>
            </NotFoundContainer>
          ) : (
            <MainContainer>
              <HeadingContainer
                bgColor={activeTheme === 'light' ? '#f1f1f1' : '#181818'}
              >
                <ParaTag
                  bgColor={activeTheme === 'light' ? '#d7dfe9' : '#000000'}
                >
                  <AiFillFire color="red" size={24} />
                </ParaTag>
                <CustomPara>Saved Videos</CustomPara>
              </HeadingContainer>

              {savedVideos.map(eachData => (
                <Link to={`/saved-videos/${eachData.id}`} key={eachData.id}>
                  <CustomContainer>
                    <CustomImage
                      src={eachData.thumbnailUrl}
                      alt={eachData.name}
                    />
                    <CustomContainer2>
                      <TitlePara color={color}>{eachData.title}</TitlePara>
                      <ParaItems color={color}>{eachData.name}</ParaItems>
                      <ParaItems color={color}>
                        {eachData.viewCount} Views . {eachData.publishedAt}
                      </ParaItems>
                    </CustomContainer2>
                  </CustomContainer>
                </Link>
              ))}
            </MainContainer>
          )}
        </SavedVideosContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default SavedVideos
