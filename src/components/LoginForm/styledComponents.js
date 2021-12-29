import styled from 'styled-components'

export const LoginFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 80%;
  max-width: 1110px;
  margin: auto;
  @media screen and (min-width: 992px) {
    width: 95%;
    max-width: 1200px;
    flex-direction: row;
    justify-content: space-around;
  }
`

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  width: 100%;
  max-width: 400px;
  @media screen and (min-width: 798px) {
    max-width: 400px;
    flex-shrink: 0;
    padding: 64px 48px 64px 48px;
    box-shadow: 0px 4px 16px 0px #cccccc;
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  width: 100%;
`

export const LogoImage = styled.img`
  width: 185px;
  margin-bottom: 35px;
  @media screen and (max-width: 767px) {
    width: 100px;
    margin-top: 10px;
    margin-bottom: 25px;
  }
`
export const LabelName = styled.label`
  margin-bottom: 0px;
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #475569;
`
export const CustomInput = styled.input`
  font-size: 14px;
  height: 40px;
  border: 1px solid #64748b;
  background-color: transparent;
  color: #64748b;
  border-radius: 2px;
  margin-top: 5px;
  padding: 8px 16px 8px 16px;
  outline: none;
`
export const CheckBoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-self: flex-start;
  margin-top: 10px;
  margin-bottom: 20px;
`

export const CheckBoxInput = styled.input`
  height: 18px;
  width: 18px;
`
export const CheckBoxLabel = styled.label`
  font-family: 'Roboto';
  font-weight: 500;
  font-size: 16px;
  color: #0f0f0f;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-weight: bold;
  font-size: 14px;
  color: #ffffff;
  height: 40px;
  width: 100%;
  margin-top: 20px;
  margin-bottom: 2px;
  background-color: #3b82f6;
  border-radius: 8px;
  border: none;
  outline: none;
  cursor: pointer;
`
export const ErrorMsg = styled.p`
  color: red;
`
