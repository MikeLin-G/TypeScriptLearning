for (var i = 0; i < 5; i++) { 
  (function (i) { 
      setTimeout(function () { 
　　　　　　console.log(i); 
  　　}, 1000 * i); 
  })(i); //这里使用闭包
}