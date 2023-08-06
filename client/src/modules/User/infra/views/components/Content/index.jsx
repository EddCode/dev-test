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
  address: PropTypes.string,
  age: PropTypes.number,
  balance: PropTypes.string,
  company: PropTypes.string,
  email: PropTypes.string,
  eyeColor: PropTypes.string,
  isActive: PropTypes.bool,
  phone: PropTypes.string
}
