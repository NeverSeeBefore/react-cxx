// 复位横向和纵向的滚动条
let timer = null;
export default function resetScroll() {
  clearInterval(timer);
  const start = document.documentElement.scrollTop;
  console.log(start)
  if(start == 0){return};
  timer = _animate(start, 0, val => {
    document.documentElement.scrollTop = val;
  });
}
/**
 * 一秒内，从初始值变化到结束值
 * @param {number} start
 * @param {*} end
 */
function _animate(start, end, callback) {
  
  const tick = 16;
  const total = 1000;
  const times = Math.ceil(total / tick);
  let ctime = 0;
  const step = (end - start) / times;
  const timer = setInterval(() => {
    ctime++;
    start += step;
    if (ctime == times) {
      start = end;
      clearInterval(timer);
      console.log('清空timer')
    }
    callback(start);
  }, tick);
  return timer;
}
