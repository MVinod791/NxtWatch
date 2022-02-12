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
  padding: 20px;
  background-color: ${props => props.bgColor};
  display: flex;
  align-items: center;
`
export const CustomPara = styled.h1`
  font-size: 24px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ParaTag = styled.p`
  background-color: ${props => props.bgColor};
  border-radius: 100%;
  padding: 14px;
  margin-right: 10px;
`
export const CustomContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
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
export const CustomImage = styled.img`
  margin-right: 20px;
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
