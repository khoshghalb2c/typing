/*!
  * Styping > Owner is https://github.com/khoshghalb2c;
  * Copyright 2020-2021;
  */
  function Styping(obj, millisec){
    var text = obj.innerHTML;
    obj.innerHTML = "";
    var array = text.split("");
    var i = 0; 
    var interval = setInterval(function(){
      if(i<array.length){
        if(array[i]=="^")
          obj.innerHTML += "<br/>";
        else obj.innerHTML += array[i];
        i++;
      }else clrearInterval(interval);
    }, millisec);
  }
/*!* POWERED BY khoshghalb2c.ir *!*/
