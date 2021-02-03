let args = process.argv
args = args.slice(2);

const obfuscate = function (password) {
  let newPass = '';
  for (let i = 0; i < password.length; i++) {
    for (let j = 0; j < password[i].length; j++) {
      switch (password[i][j]) {
        case 'a':
          newPass += 4;
          break;
        case 'e':
          newPass += 3;
          break;
        case 'o':
          newPass += 0;
          break;
        case 'l':
          newPass += 1;
          break;
        default:
          newPass += password[i][j];
      }
    }
  }
  return newPass;
}


console.log(obfuscate(args));