// const code = (e) => {
//   const div = document.querySelectorAll(".key");
//   div.forEach((e) => {
//     let keycode = e.dataset.key;
//     // console.log(keycode)s
    
//   });
// //   return keyCode;
// };

// console.log(div)
window.addEventListener("keypress", function (e) {
  let key = e.keyCode;
  const audio = document.querySelector('audio[data-key="' + key + '"]');
//   code(audio);
  audio.play();
});
