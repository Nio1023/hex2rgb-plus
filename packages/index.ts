type typeRgba = { r: number; g: number; b: number; rgba: string }

const rgb2hex = (c1: number | string, c2?: number, c3?: number): string => {
  if (typeof c1 == "string") {
    c1 =
      c1.match(/(?<=\().*(?=\))/g) !== null
        ? c1.match(/(?<=\().*(?=\))/g)![0]
        : ""
    let colorArr = c1.split(",")
    if (colorArr.length < 3) return ""
    c1 = Number(colorArr[0])
    c2 = Number(colorArr[1])
    c3 = Number(colorArr[2])
  }
  let hex =
    "#" + ((1 << 24) + (c1 << 16) + (c2! << 8) + c3!).toString(16).slice(1)
  return hex
}

const hex2rgb = (hex: string, opacity: number = 1): typeRgba => {
  let RGBA =
    "rgba(" +
    parseInt("0x" + hex.slice(1, 3)) +
    "," +
    parseInt("0x" + hex.slice(3, 5)) +
    "," +
    parseInt("0x" + hex.slice(5, 7)) +
    "," +
    opacity +
    ")"
  return {
    r: parseInt("0x" + hex.slice(1, 3)),
    g: parseInt("0x" + hex.slice(3, 5)),
    b: parseInt("0x" + hex.slice(5, 7)),
    rgba: RGBA,
  }
}

export default { rgb2hex, hex2rgb }
