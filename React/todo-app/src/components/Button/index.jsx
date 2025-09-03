const Button = ({callBack, text, className}) => {
  return (
    <button className={className} onClick={callBack}>{text}</button>
  )
}

export default Button