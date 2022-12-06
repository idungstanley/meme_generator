import React from 'react'

export default function SignUp() {
  const [formData, setformData] = React.useState({
    email: '',
    password: '',
    confirmPassword: '', 
    isChecked: false,
  })
  const handleChange = (event) => {
    const { name, value, type, checked } = event.target
    setformData((prevformData) => {
      return {
        ...prevformData,
        [name]: type === 'checkbox' ? checked : value,
      }
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log(formData)
    console.log(
      formData.isChecked && formData.password === formData.confirmPassword
        ? 'Thanks for signing up to out newsletter'
        : 'ERROR'
    )
    if (formData.password === formData.confirmPassword) {
      console.log('Successfully signed up')
    } else {
      console.log('Password do not match')
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type='email'
          name='email'
          id=''
          onChange={handleChange}
          value={formData.email}
        />
        <br />
        <input
          type='password'
          name='password'
          id=''
          onChange={handleChange}
          value={formData.password}
        />
        <br />
        <input
          type='password'
          name='confirmPassword'
          id=''
          onChange={handleChange}
          value={formData.confirmPassword}
        />
        <br />
        <input
          type='checkbox'
          name='isChecked'
          id=''
          onChange={handleChange}
          checked={formData.isChecked}
        />
        <br />
        <button >Sign Up</button>
      </form>
    </>
  )
}
