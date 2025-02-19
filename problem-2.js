

function validEmail(email) {
  //  if email is a string
  if (typeof email !== "string") {
    return "Invalid";
  }

  //  if email starts with special characters
  if (/^[\.\-_+@]/.test(email)) {
    return false;
  }

  //  if email contains '@' in the middle
  if (!email.includes("@")) {
    return false;
  }

  //  if email contains spaces
  if (email.includes(" ")) {
    return false;
  }

  //  if email ends with '.com'
  if (!email.endsWith(".com")) {
    return false;
  }

  return true;

}

//Test cases
console.log(validEmail("ferdous@gmail.com")); // true
console.log(validEmail("1zihad@gmail.com")); // true
console.log(validEmail("-king@yahoo.com")); // false
console.log(validEmail(["jhankar@hero.com"])); // Invalid
console.log(validEmail("Mewo@cat.com")); // true
console.log(validEmail("programming-hero.com")); // false
console.log(validEmail("chat420@gpt.net")); // false
console.log(validEmail(true)); // Invalid
console.log(validEmail("he ro@alom.com")); // false