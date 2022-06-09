
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = "좋은 저녁이네요.";
} else if (hourNow > 12) {
  greeting = "좋은 오후네요.";
}else if (hourNow > 5) {
  greeting = "좋은 아침이네요.";
} else if (hourNow > 0) {
  greeting = "좋은 새벽이네요.";
} else {
  greeting = "만나서 반가워요.";
}

document.write('<h2>'+greeting+'</h2>'); 