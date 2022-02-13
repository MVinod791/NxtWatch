import styled from 'styled-components'

export const VideoContainer = styled.div`
  min-height: 100vh;
  width: 100;
  padding: 20px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  overflow-y: auto;
  overflow: auto;
`
export const DivContainer = styled.div``

export const VideoFrameContainer = styled.div`
  width: 100%;
  overflow: auto;
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export const ParaTag = styled.p`
  color: ${props => props.color};
  line-height: 16px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
`

export const Title = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 10px;
`
export const ChannelContainer = styled.div`
  display: flex;
  align-items: center;
`

export const IconsPara = styled.button`
  cursor: pointer;
  border: none;
  outline: none;
  background-color: transparent;
  color: ${props => props.iconColor};
  font-size: 14px;
  font-weight: 500;
  padding: 0 10px;
  display: flex;
  align-items: center;
`
export const AttributesContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-top: 0px;
  margin-right: 10px;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  align-items: center;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin-top: 20px;
  font-family: 'Roboto';
`
