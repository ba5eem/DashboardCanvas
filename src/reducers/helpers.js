import { rects, colors, w, h } from '../Utils/Constants';


export function remove(payload,state){
  let res = state.filter((elem) =>{
      return elem.id !== payload.id;
  });
  return res;
}


export function add(state){
  let text = "ola"
  let res = state;
  let card = {
        x: 20,
        y: 50,
        width: w,
        height: h,
        fill: colors[Math.floor(Math.random() * colors.length)],
        isDragging: false,
        text: text
      }
  res.unshift(card);
  return res;
}



