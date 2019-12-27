export const routeConfig = {
  user: {
    root: "/user",
    update: "/user/update",
    pay: "/user/pay"
  }
};

// export const routeConfig = {
//   user: {
//     root: "",
//     user: "/user",
//     pay: {
//       root: "/pay",
//       afterPay: "/after",
//       cancel: "/cancel"
//     }
//   }
// };
// function setConfig(){
//   _setConfig(routeConfig, "")
// }
/**
 * 将每个对象的每个属性，前面添加baseStr
 * 属性名如果是root， 直接添加baseStr
 * 如果不是root， baseStr/root/属性值
 * 如果是对象，递归调用
 * @param {*} obj 
 * @param {*} baseStr 
 */
// function _setConfig(obj, baseStr){
//   for(let prop in obj){
//     const v = obj[prop];
//     const newBaseStr = baseStr + (obj.root === undefined ? "" : obj.root)
//     if(typeof v === 'string'){
//       if(prop === 'root'){
//         obj[prop] = baseStr + v;
//       }else{
//         obj[prop] = newBaseStr + prop
//       }
//     }else{
//       _setConfig(obj[prop], newBaseStr)
//     }
//   }
// }
// setConfig();
