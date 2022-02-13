import ThemeContext from '../../context/ThemeContext'

import {
  FailureViewContainer,
  FailureImg,
  FailureHeading,
  FailureDescription,
  FailureRetryButton,
} from './styledComponents'

const FailureImage = () => (
  <ThemeContext.Consumer>
    {value => {
      const {activeTheme} = value
      return (
        <FailureViewContainer className="restaurant-failure-view">
          <FailureImg
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="no videos"
          />
          <FailureHeading className="failure-not-found-heading">
            Oops! Something Went Wrong{' '}
          </FailureHeading>
          <FailureDescription className="failure-error-description">
            We are having some trouble to complete your request.
            <br /> Please try again.
          </FailureDescription>

          <FailureRetryButton type="button">Retry</FailureRetryButton>
        </FailureViewContainer>
      )
    }}
  </ThemeContext.Consumer>
)
export default FailureImage
