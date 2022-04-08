import { Popover } from "@varld/popover";
import { IoSettingsOutline } from "react-icons/io5";
import styles from "./ConfigTimer.module.css";
import { useMemory } from "../../context/memory";
import PropTypes from "prop-types";

import {
  clockSource,
  counterMode,
  setClockSource,
  setCounterMode,
} from "../../function/timer";
import SelectComponent from "../common/SelectComponent";
function ConfigTimer({ ctlAddress }) {
  const { memory, setMemory } = useMemory();
  return (
    <Popover
      popover={() => {
        return (
          <div className="popover">
            <SelectComponent
              label="Counter mode"
              value={counterMode(memory, ctlAddress)}
              onChange={(value) =>
                setMemory(setCounterMode(memory, ctlAddress, value))
              }
              options={[
                { value: 0, label: "Stop mode" },
                { value: 1, label: "Up mode" },
                { value: 2, label: "Continuous mode" },
                { value: 3, label: "Up/down mode" },
              ]}
            />
            <SelectComponent
              label="Clock source"
              value={clockSource(memory, ctlAddress)}
              onChange={(value) =>
                setMemory(setClockSource(memory, ctlAddress, value))
              }
              options={[
                { value: 1, label: "ACLK" },
                { value: 2, label: "SMCLK" },
              ]}
            />
          </div>
        );
      }}
    >
      <button className={styles.configbtn}>
        <IoSettingsOutline size={16} />
      </button>
    </Popover>
  );
}
ConfigTimer.propTypes = {
  ctlAddress: PropTypes.number.isRequired,
};
export default ConfigTimer;
