// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
    isSubmitted: false,
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value, firstNameError: ''})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value, lastNameError: ''})
  }

  validateFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: 'Required'})
    }
  }

  validateLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: 'Required'})
    }
  }

  handleSubmit = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state
    this.validateFirstName()
    this.validateLastName()

    if (firstName !== '' && lastName !== '') {
      this.setState({isSubmitted: true})
    } else {
      if (firstName === '') this.setState({firstNameError: 'Required'})
      if (lastName === '') this.setState({lastNameError: 'Required'})
    }
  }

  resetForm = () => {
    this.setState({
      firstName: '',
      lastName: '',
      firstNameError: '',
      lastNameError: '',
      isSubmitted: false, // Reset submission status
    })
  }

  renderFirstNameField = () => {
    const {firstName, firstNameError} = this.state
    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={`firstName-input-filed ${firstNameError ? 'error' : ''}`}
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.validateFirstName}
          placeholder="First name"
        />
        {firstNameError && <p className="error-message">{firstNameError}</p>}
      </>
    )
  }

  renderLastNameField = () => {
    const {lastName, lastNameError} = this.state
    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={`lastName-input-filed ${lastNameError ? 'error' : ''}`}
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.validateLastName}
          placeholder="Last name"
        />
        {lastNameError && <p className="error-message">{lastNameError}</p>}
      </>
    )
  }

  renderSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-icon"
      />
      <p className="success-message">Submitted Successfully</p>
      <button type="button" className="submit-button" onClick={this.resetForm}>
        Submit Another Response
      </button>
    </div>
  )

  renderForm = () => (
    <form className="form-container" onSubmit={this.handleSubmit}>
      <div className="input-container">{this.renderFirstNameField()}</div>
      <div className="input-container">{this.renderLastNameField()}</div>
      <button type="submit" className="submit-button">
        Submit
      </button>
    </form>
  )

  render() {
    const {isSubmitted} = this.state
    return (
      <div className="login-form-container">
        <h1 className="heading">Registration</h1>
        {isSubmitted ? this.renderSuccessView() : this.renderForm()}
      </div>
    )
  }
}

export default RegistrationForm
