import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginFormContainer,
  FormContainer,
  LogoImage,
  InputContainer,
  LabelName,
  CustomInput,
  CheckBoxContainer,
  CheckBoxInput,
  CheckBoxLabel,
  LoginButton,
  ErrorMsg,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    visibility: false,
  }

  showPassword = event => {
    if (event.target.checked) {
      this.setState({visibility: true})
    } else {
      this.setState({visibility: false})
    }
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30, path: '/'})
    history.replace('/')
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <>
        <LabelName htmlFor="username">USERNAME</LabelName>
        <CustomInput
          type="text"
          id="username"
          value={username}
          onChange={this.onChangeUsername}
        />
      </>
    )
  }

  renderPasswordField = () => {
    const {password, visibility} = this.state
    return (
      <>
        <LabelName htmlFor="password">PASSWORD</LabelName>
        <CustomInput
          type={visibility ? 'text' : 'password'}
          id="password"
          value={password}
          onChange={this.onChangePassword}
        />
      </>
    )
  }

  renderCheckBoxField = () => (
    <CheckBoxContainer>
      <CheckBoxInput
        type="checkbox"
        id="checkboxId"
        onChange={this.showPassword}
      />
      <CheckBoxLabel htmlFor="checkboxId">Show Password</CheckBoxLabel>
    </CheckBoxContainer>
  )

  render() {
    const {showSubmitError, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <LoginFormContainer>
              <FormContainer onSubmit={this.onSubmitForm}>
                <LogoImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                  alt="website logo"
                />
                <InputContainer>{this.renderUsernameField()}</InputContainer>
                <InputContainer>{this.renderPasswordField()}</InputContainer>
                {this.renderCheckBoxField()}
                <LoginButton type="submit">Login</LoginButton>
                {showSubmitError && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </FormContainer>
            </LoginFormContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default LoginForm
