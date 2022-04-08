import styled, { keyframes } from "styled-components";
import styles from "./Diode.module.css";
import PropTypes from "prop-types";

function Diode({ ratio, period }) {
  const colorCode = period < 50 ? ~~(225 - 225 * ratio) : 255;
  const diodePeriod = period < 50 ? 0 : period;
  const shadow =
    period < 50
      ? `inset #660000 0 -2px 9px, rgba(255, 0, 0, ${ratio}) 0 2px 12px`
      : "inset #444444 0 -2px 9px";
  const blinkerAnimation = keyframes`
  ${~~(100 - 100 * ratio)}%{
    background-color: rgb(255, 80, 80);
    box-shadow: rgba(0, 0, 0, 0.2) 0 -2px 7px 2px, inset #660000 0 -2px 9px, rgba(255, 0, 0, 1) 0 2px 12px;
  }
  `;
  const Blink = styled.div`
    width: 26px;
    height: 26px;
    background-color: rgb(255, ${colorCode}, ${colorCode});
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.2) 0 -2px 7px 2px, ${shadow};
    animation: ${blinkerAnimation} ${diodePeriod}ms steps(1, end) infinite;
  `;
  return (
    <div className={styles.diode}>
      <Blink />
    </div>
  );
}
Diode.propTypes = {
  ratio: PropTypes.number.isRequired,
  period: PropTypes.number.isRequired,
};
export default Diode;
