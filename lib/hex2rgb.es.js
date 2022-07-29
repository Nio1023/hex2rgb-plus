const n = (e, r, t) => {
  if (typeof e == "string") {
    e = e.match(new RegExp("(?<=\\().*(?=\\))", "g")) !== null ? e.match(new RegExp("(?<=\\().*(?=\\))", "g"))[0] : "";
    let s = e.split(",");
    if (s.length < 3)
      return "";
    e = Number(s[0]), r = Number(s[1]), t = Number(s[2]);
  }
  return "#" + ((1 << 24) + (e << 16) + (r << 8) + t).toString(16).slice(1);
}, l = (e, r = 1) => {
  let t = "rgba(" + parseInt("0x" + e.slice(1, 3)) + "," + parseInt("0x" + e.slice(3, 5)) + "," + parseInt("0x" + e.slice(5, 7)) + "," + r + ")";
  return {
    r: parseInt("0x" + e.slice(1, 3)),
    g: parseInt("0x" + e.slice(3, 5)),
    b: parseInt("0x" + e.slice(5, 7)),
    rgba: t
  };
}, a = { rgb2hex: n, hex2rgb: l };
export {
  a as default
};
