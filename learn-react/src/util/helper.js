/**
 * 浅比较，值比较对象的一层属性
 * @param {*}} obj1 
 * @param {*} obj2 
 */
export function ObjectEqual(obj1, obj2){
  for (let prop in obj1) {
    if(!Object.is(obj1[prop], obj2[prop])){
      return false;
    }
  }
  return true;
}