import PropTypes from 'prop-types'

export function Content ({
  address,
  age,
  company,
  email,
  eyeColor,
  isActive,
  phone
}) {
  return (
    <div>
      <p>Address: <span>{address}</span></p>
      <p>Age: <span>{age}</span></p>
      <p>Company: <span>{company}</span></p>
      <p>Email: <span>{email}</span></p>
      <p>Eye Color: <span>{eyeColor}</span></p>
      <p>Active: <span>{isActive ? 'yes' : 'no'}</span></p>
      <p>Phone: <span>{phone}</span></p>
    </div>
  )
}

Content.propTypes = {
  address: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  balance: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  eyeColor: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  phone: PropTypes.string.isRequired
}
