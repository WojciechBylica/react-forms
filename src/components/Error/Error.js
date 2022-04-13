import './style.css'

const Error = ({ isHidden }) => (
  <p hidden={isHidden} className="error">
    *pole wymagane
  </p>
)

export default Error
