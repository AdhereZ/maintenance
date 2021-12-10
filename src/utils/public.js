// 节流函数
export function throttle(fn,interval) {
  let prev = 0
  return function(...arg) {
     let now=Date.now()
     if(now-prev > interval) {
       fn.apply(this,...arg)
       prev=now
     }
  }
}