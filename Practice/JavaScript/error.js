try {
    console.log("Hello User!");
    let i = 2;
    console.log(i);

} catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {
    console.log("Good");
}

// Throwing Errors
// Valid Code:
const json = '{"name" : "Robert", "Age" : 20}';

try {
    const user_robert = JSON.parse(json);
    console.log(user_robert.name);
    console.log(user_robert.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);

}

// Error Code:
const json_2 = '{ bad json}';

try {
    const user_robert = JSON.parse(json_2);
    console.log(user_robert.name);
    console.log(user_robert.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

// Undetected Error Code:
const json_3 = '{"Age" : 20}';

try {
    const user_robert = JSON.parse(json_3);
    console.log(user_robert.name);
    console.log(user_robert.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

// solution is to use Throwing in try{}
try {
    const user_robert = JSON.parse(json_3);

    if(!user_robert.name){
        throw new SyntaxError("'name' is required")
    }
    console.log(user_robert.name);
    console.log(user_robert.age);
} catch(error){
    console.log(error.name);
    console.log(error.message);
}

// Another Case
const json_albert = '{"name": "Albert", "age" : 20}';

try {
    const user_robert = JSON.parse(json_albert); // Using the valid json

    if(!user_robert.name){
        throw new SyntaxError("'name' is required")
    }
    errorCode;
    console.log(user_robert.name);
    console.log(user_robert.age);
} catch(error){
    if(error instanceof SyntaxError){ // Using If else to check the condition
        console.log(`JSON error: ${error.message}`)
    } else if (error instanceof ReferenceError){
        console.log(error.message)
    } else {
        console.log(error.stack)
    }
}

console.log("Class study case Error -----------------------")
// Using Class Error
class ValidationError extends Error{
    constructor(message){
        super(message);
        this.name = "ValidationError";
    }
}

const json_4 = '{ "age": 30 }';
 
try {
  const user = JSON.parse(json_4);
 
  if (!user.name) {
    throw new ValidationError("'name' is required.");
  }
  if (!user.age) {
    throw new ValidationError("'age' is required.");
  }
 
  console.log(user.name);
  console.log(user.age);
} catch (error) {
  if (error instanceof SyntaxError) {
    console.log(`JSON Syntax Error: ${error.message}`);
  } else if (error instanceof ValidationError) {
    console.log(`Invalid data: ${error.message}`);
  } else if (error instanceof ReferenceError) {
    console.log(error.message);
  } else {
    console.log(error.stack);
  }
}
