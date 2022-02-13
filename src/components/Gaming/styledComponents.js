import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const CustomHeading = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: 600;
`

export const MainContainer = styled.div`
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const HeadingContainer = styled.div`
  padding: 10px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
`
export const CustomPara = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
  color: ${props => props.color};
`
export const ParaTag = styled.p`
  background-color: ${props => props.bgColor};
  border-radius: 100%;
  padding: 14px;
  margin-right: 10px;
  margin-left: 20px;
`
export const ParaButton = styled.button`
  background-color: ${props => props.bgColor};
  border-radius: 100%;
  padding: 14px;
  margin-right: 10px;
  margin-left: 20px;
  border: none;
  outline: none;
`

export const CustomListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
`

export const CustomContainer = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`
export const CustomContainer2 = styled.div`
  margin-top: 0px;
`
export const TitlePara = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
`
export const CustomImg = styled.img`
  width: 250px;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-top: 20px;
  margin-right: 10px;
`

export const ParaItems = styled.p`
  font-size: 16px;
  font-family: 'Roboto';
  font-weight: 500;
  color: ${props => props.color};
`
export const NoVideosImageEl = styled.img`
  @media (max-width: 767px) {
    width: 100%;
    object-fit: contain;
    padding-top: 5%;
  }
  @media (min-width: 768px) {
    width: 50%;
    object-fit: contain;
    padding: 30px 40px;
  }
`

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const LoaderContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 767px) {
    height: 95vh;
  }
`

export const FailureViewContainer = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`

export const FailureImage = styled.img`
  width: 300px;
  border-radius: 0px;
`

export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  font-weight: 600;
  line-height: 48px;
  letter-spacing: 0em;
  text-align: center;
  color: ${props => props.color};
`
export const FailureDescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 32px;
  color: ${props => props.color};
  text-align: center;
`
export const FailureRetryButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  font-size: 14px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  color: #ffffff;
  background-color: #4f46e5;
  border-radius: 4px;
`
