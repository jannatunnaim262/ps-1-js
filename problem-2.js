function validEmail(email) {
    // Check if email contains no spaces, starts with no special characters, 
    // contains "@" in the middle, and ends with ".com"
    const regex = /^[a-zA-Z0-9](?:[a-zA-Z0-9._-]*[a-zA-Z0-9])?@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    
  const sampleExpression = ['.','-','_','+','@'];

    if (email.includes(" ") || !email.includes("@") || !email.endsWith(".com")) {
      return false;
    }
  
    const atIndex = email.indexOf("@");
    if (atIndex === 0 || email[atIndex - 1].match(/[^a-zA-Z0-9]/)) {
      return false;
    }
  
    // return regex.test(email);
    return sampleExpression(email);
  }
  
  console.log(validEmail("ferdaous@gmail.com")); 
  console.log(validEmail("example@domain.com"));  
  console.log(validEmail("-example@domain.com"));  
  console.log(validEmail("!example-domain.com"));  
  console.log(validEmail("example@domain.net"));  
  console.log(validEmail("example domain.com"));  
  