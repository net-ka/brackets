module.exports = function check(str, bracketsConfig) {

  let strArray = str.split('');
  let stack = [strArray[0]];

  for (i = 1; i < strArray.length; i++) {
    stack.push(strArray[i]);
    for (let k = 0; k < bracketsConfig.length; k++) {
      if (bracketsConfig[k][0] == stack[stack.length - 2] && bracketsConfig[k][1] == stack[stack.length - 1]) {
        stack.splice(stack.length - 2, 2);
      }
    } 
  }

  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
}
