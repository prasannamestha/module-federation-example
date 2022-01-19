import styles from './Button.module.css'
const Button = ({ children, className, ...rest }) => {
  return (
    <>
      <button className={`${styles.button} ${className}`} {...rest}>{children}<span></span></button>
    </>
  )
}

export default Button