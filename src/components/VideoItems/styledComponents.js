import styled from 'styled-components'

export const ListContainer = styled.li`
  list-style-type: none;
  margin-right: 20px;
  margin-bottom: 20px;
  cursor: pointer;
  width: 250px;
`
export const ImageTag = styled.img`
  width: ${props => props.width};
  object-fit: contain;
`
export const ListItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
`

export const ProfileImage = styled.img`
  width: 40px;
  margin-top: 20px;
  margin-right: 10px;
`
export const CountContainer = styled.div`
  display: flex;
  align-items: center;
  line-height: 10px;
`
export const ParaTag = styled.p`
  color: ${props => props.color};
  line-height: 5px;
  font-family: 'Roboto';
  font-size: 14px;
`

export const Title = styled.p`
  color: ${props => props.color};
  font-family: 'Roboto';
  font-size: 14px;
  line-height: 24px;
`
