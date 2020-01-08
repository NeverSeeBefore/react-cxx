/**
 * 返回小驼峰式
 * @param {String} str
 */
export function toSmallCamel(str) {
  return str
    .split("_")
    .map((s, i) => {
      s = s.toLowerCase();
      if (i !== 0 && s.length >= 1) {
        s = s[0].toUpperCase() + s.substr(1);
      }
      return s;
    })
    .join("");
}

// console.log(toSmallCamel("AUTO_INCREASE_ABC"))