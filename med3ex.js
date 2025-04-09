function reverseString(str) {
    let reversed = "";
    let i = str.length - 1;  
    while (i >= 0) {
      reversed += str[i];
      i--;
    }
    console.log(reversed);
}

reverseString("gorgeous Georgia");