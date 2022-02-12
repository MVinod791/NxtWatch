import styled from 'styled-components'

export const DivContainer = styled.div`
  width: 20%;
  margin-left: 20px;
  margin-top: -20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
`
export const ListItems = styled.li`
  color: ${props => props.color};
  padding: 10px 0;
  display: flex;
  align-items: center;
  padding: 10px 25px;
  transition: background-color 0.5s;
  transform-origin: center center;
  :hover {
    background-color: ${props => props.bgColor};
    color: black;
    .nav-icons {
      color: red;
    }
  }
`

export const SpanEl = styled.span`
  padding: 0 10px;
  font-weight: 500;
  font-size: 18px;
  font-family: 'Roboto';
  font-weight: bold;
`
export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;

  list-style-type: none;
  padding: 10px 25px;
`
export const ContactMedia = styled.div`
  display: flex;
  align-items: center;
`
export const ContactImage = styled.img`
  width: 24px;
  margin-right: 10px;
`
export const ContactPara = styled.p`
  color: ${props => props.color};
  font-size: 16px;
  font-weight: 500;
  font-family: 'Roboto';
`
