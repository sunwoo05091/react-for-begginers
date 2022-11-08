import PropTypes from "prop-types";
import styles from "./style.module.css";

function Button({ text }) {
  return <button className={styles.button}>{text}</button>;
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
