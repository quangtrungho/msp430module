import { getBit, setBit } from "./memory.func";

export function dir(memory, dirAddress, pinNumber) {
  return getBit(memory, dirAddress, pinNumber);
}

export function setDir(memory, dirAddress, pinNumber, value) {
  return setBit(memory, dirAddress, pinNumber, value);
}

export function sel(memory, selAddress, pinNumber) {
  return getBit(memory, selAddress, pinNumber);
}

export function setSel(memory, selAddress, pinNumber, value) {
  return setBit(memory, selAddress, pinNumber, value);
}

export function outValue(memory, outAddress, pinNumber) {
  return getBit(memory, outAddress, pinNumber);
}

export function setOutValue(memory, outAddress, pinNumber, value) {
  return setBit(memory, outAddress, pinNumber, value);
}
