/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {

      var element = document.getElementById('encrypt-it');
      var element2= document.getElementById('reset');
      element.addEventListener('click', handleClick);
      element2.addEventListener('click',clear);
  //}

        // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
  }

  function handleClick(){
     //var option=document.getElementById('cipher-type').value;
     var option=getText('cipher-type');
     var str = document.getElementById("input-text").value;
     setFont();
     changeCaps();

      if(option.localeCompare("shift")==0){
        document.getElementById("result").innerHTML =shiftCipher(str,1);
      }else{
        let x = Math.floor((Math.random() * 25) + 1);
        document.getElementById("result").innerHTML =shiftCipher(str,x);
      }
    
  }

  function getText(text){
    return document.getElementById(text).value;
  }

/**
 * Returns an encrypted version of the given text, where
 * each letter is shifted alphabetically ahead by 1 letter,
 * and 'z' is shifted to 'a' (creating an alphabetical cycle).
 */

  function shiftCipher(text,units) {
    text = text.toLowerCase();
    let result = "";
    for (let i = 0; i < text.length; i++) {
        let letter = text.charCodeAt(i)-97;
        let resultLetter = String.fromCharCode((letter + units)%26+97);
        result += resultLetter;
    }
    return result;
  } 

  function setFont(){
    if(document.getElementById('12-pt').checked){
      document.getElementById('result').style.fontSize="12pt";
    }else if(document.getElementById('24-pt').checked){
      document.getElementById('result').style.fontSize="24pt";
    }
  }

  function changeCaps(){
    if(document.getElementById('all-caps').checked){
      document.getElementById('result').style.textTransform="uppercase";
      document.getElementById('all-caps').checked = false;
    }else{
      document.getElementById('result').style.textTransform="lowercase";
    }
  }

  function clear(){
    document.getElementById("input-text").value="";
    document.getElementById("result").innerHTML ="";
  }
})();
