export const onlyLetters = (arr) => {
    let check = true;
  
    for (let i = 0; i < arr.length; i++) {
      let chr = arr[i].charCodeAt(0);
      if ((65 > chr || chr > 90) && (chr < 97 || chr > 122)) {
        check = false;
      }
    }
    return check;
  };
  