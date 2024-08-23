- TypeScript is a superset of JS

  - we can use all of the features of JavaScript, plus additional features provided by TypeScript, such as static typing and interfaces. However, web browsers can only understand JavaScript, so we need to convert our TypeScript code into JavaScript before it can be executed in a browser.

- In statically typed languages, each variable must be assigned a specific data type when it is declared, and functions must specify the type of value they return. This helps catch errors at compile-time instead of runtime, and can make code easier to read and maintain.

- ```js
  function add(a: number, b: number): number {
    return a + b;
  }
  
  console.log(add(5, "5")); // Error: Argument of type '"5"'
  // is not assignable to parameter of type 'number'.
  ```

- In TypeScript, compile-time errors occur during the process of converting the TypeScript code into JavaScript code. These errors are detected by the TypeScript compiler before the code is executed and typically relate to syntax and type errors.

- It also catches this:

  - ```js
    const zoo = {
      animals: ["Zebra", "Lion", "Giraffe", "Hippo"],
    };
    
    const animalList = zoo.aminals; // Property 'aminals' does not exist on type '{ animals: string[]; }'.
    
    console.log(animalList);
    ```



**Summary**

To recap, while dynamically typed languages like JavaScript and Ruby can be more flexible and easier to write, they are also prone to type-related errors that may not become apparent until runtime. In contrast, statically typed languages require variables to be explicitly declared with a specific data type, allowing the compiler to catch type-related errors at compile time, before the program is ever run. This is known as type safety.

Type safety is important since it helps prevent bugs in our code that could lead to errors or even security vulnerabilities. By using TypeScript's optional static typing, we can get the best of both worlds: the flexibility and ease of use of JavaScript, along with the added security and reliability of a statically typed language.

Beyond type safety, Typescript also detects many other common errors that JavaScript developers make during development.



-**Why TypeScript?**

- Better code quality: TypeScript helps us write better-quality code by catching errors before they happen. This means that TypeScript code is less likely to have bugs and more likely to be maintainable.
- Code scalability: As your codebase grows, it becomes harder to keep track of the purpose and state of each variable you declare, the intended inputs and outputs of every function, and the structure of data you receive from external libraries or APIs. TypeScript helps with code scalability by making data types explicit and static. Ultimately, this makes it easier to maintain and refactor large codebases.
- Better collaboration: When working on large projects, it's common for multiple developers to work on the same codebase. TypeScript helps with collaboration by enforcing strict typing rules, which makes it easier for developers to understand each other's code and reduce miscommunication.

**TradeOffs**

- Slower development time: TypeScript requires developers to explicitly add types and interfaces to their variables and functions. While this is ultimately helpful in preventing errors, adding these type annotations to the code takes extra development time, particularly when the types are complex. However, this is often far outweighed by the time saved later debugging buggy JavaScript code.
- An additional compile step: As we will explore in a future lesson, TypeScript inspects your code and provides warnings *before* your application runs. Before you can run a TypeScript application, the TypeScript compiler will "transpile" your code to plain JavaScript. This additional step before you run your code can result in additional complexity and time.
- Reduced flexibility: TypeScript's strict typing can sometimes limit the flexibility of the code, making it more difficult to modify or extend. This can be particularly challenging for developers who are used to the dynamic nature of JavaScript.
- Working with third-party libraries: Not all third-party libraries are written in TypeScript, which can make integrating them into a TypeScript project more challenging. In these cases, developers may need to write their own types for the external library. When third-party libraries are written in TypeScript, it's also possible that their type annotations contain errors, which can be time-consuming for the consumer of the library to resolve.

**When is JS better?**

- Simple projects: For small projects that don't require complex type checking, adding types may take more time than it's worth. In these cases, JavaScript may be simpler and faster to develop with. This is especially the case if you are working on a project that won't be maintained or consumed by any other developers.
- Rapid prototyping: When rapidly prototyping a project, it can be faster to use JavaScript since it requires less setup and has fewer restrictions than TypeScript.
- Compatibility with third-party libraries written in JS: Some popular JavaScript libraries don't include TypeScript types, which can make it difficult to use the library with TypeScript without having to write custom typings. This can be a time-consuming and difficult process depending on the size of the library.
- Quick scripts: For one-off scripts or small tasks, using TypeScript can add unnecessary complexity. In these cases, JavaScript is often sufficient.

**Installing TypeScript Locally**

1) Initialize a new project: Navigate to the root directory of your project and run the following command to initialize a new project:

`npm init -y`

2. Install TypeScript: Add TypeScript to your project with the following command:

`npm install typescript --save-dev`

Installing TypeScript to your project will also make the TypeScript compiler `tsc` available in this directory.

3. Create a source directory: Create a new directory in the root of your project called "src". This is where you will write your TypeScript code. Although this is not strictly necessary, this is a common convention for all TypeScript projects.
4. Create a tsconfig.json file: In the root directory of your project, create a new file called "tsconfig.json". This file will contain configuration options for the TypeScript compiler. Copy the following code to that file:
5. run `npx tsc --init`

```
{
  "compilerOptions": {
    "target": "ES2015",
    "module": "commonjs",
    "strict": true,
    "outDir": "./dist",
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["./src/**/*"],
  "$schema": "https://json.schemastore.org/tsconfig",
  "display": "Recommended"
}
```

- `"target": "ES2015"`: This option specifies the version of JavaScript we want to compile our TypeScript to. In this case, we want to compile to ES2015 (also known as ES6), which is supported by most modern browsers.
- `"include": ["./src/**/*"]`: This option tells `tsc` to run against all files in the `src` directory, if a specific file is not specified.
- `"outDir": "./dist"`: This option tells the TypeScript compiler to output compiled JavaScript files to the `dist` folder in the root directory.
- `"strict": true`: By default, the TypeScript compiler will not check all possible type checking rules. This permissiveness can be helpful in limited situations. Using the `strict` flag turns on a broader range of type checking behavior in order to alert the developer to a greater number of possible type errors.

5. Once TypeScript has been added to your project, you can run the compiler with the command:

    `npx tsc`.

1. Create a file in your `src` folder called `helloWorld.ts`
2. Copy the following code to the file and save.

```js
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("World");
```

1. From your root directory, run the following command: `npx tsc`
2. You should see a new directory named `dist` appear in your root directory. Inside `dist` you will find `helloWorld.js`.

Your TypeScript code has been compiled to JavaScript!



*TypeScript Book The Basics*

https://www.typescriptlang.org/docs/handbook/2/basic-types.html

- Ideally, we could have a tool that helps us find these bugs *before* our code runs. That’s what a static type-checker like TypeScript does. *Static types systems* describe the shapes and behaviors of what our values will be when we run our programs. A type-checker like TypeScript uses that information and tells us when things might be going off the rails.

- The type-checker has information to check things like whether we’re accessing the right properties on variables and other properties. Once it has that information, it can also start *suggesting* which properties you might want to use.
- That means TypeScript can be leveraged for editing code too, and the core type-checker can provide error messages and code completion as you type in the editor. That’s part of what people often refer to when they talk about tooling in TypeScript.

`npm install -g typescript` global 

or use `npx` locally 

- But check again - we got some *file* output instead. If we look in our current directory, we’ll see a `hello.js` file next to `hello.ts`. That’s the output from our `hello.ts` file after `tsc` *compiles* or *transforms* it into a plain JavaScript file. And if we check the contents, we’ll see what TypeScript spits out after it processes a `.ts` file:

- If you don't want to change the js file when running `tsc`
  - `tsc -noEmitOnError hello.ts`

```js
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
```

What we did was add *type annotations* on `person` and `date` to describe what types of values `greet` can be called with. You can read that signature as ”`greet` takes a `person` of type `string`, and a `date` of type `Date`“.

ex

```js
function greet(person: string, date: Date) {
  console.log(`Hello ${person}, today is ${date.toDateString()}!`);
}
 
greet("Maddison", Date());
Argument of type 'string' is not assignable to parameter of type 'Date'.
```

Keep in mind, we don’t always have to write explicit type annotations. In many cases, TypeScript can even just *infer* (or “figure out”) the types for us even if we omit them.

Type annotations never change the runtime behavior of your program.

*DownLeveling*

This process of moving from a newer or “higher” version of ECMAScript down to an older or “lower” one is sometimes called *downleveling*. By default TypeScript targets ES3, an extremely old version of ECMAScript. We could have chosen something a little bit more recent by using the [`target`](https://www.typescriptlang.org/tsconfig#target) option. Running with `--target es2015` changes TypeScript to target ECMAScript 2015, meaning code should be able to run wherever ECMAScript 2015 is supported. So running `tsc --target es2015 hello.ts` gives us the following output:

*Strictness*

These strictness settings turn static type-checking from a switch (either your code is checked or not) into something closer to a dial. The further you turn this dial up, the more TypeScript will check for you. This can require a little extra work, but generally speaking it pays for itself in the long run, and enables more thorough checks and more accurate tooling. When possible, a new codebase should always turn these strictness checks on.

TypeScript has several type-checking strictness flags that can be turned on or off, and all of our examples will be written with all of them enabled unless otherwise stated. The [`strict`](https://www.typescriptlang.org/tsconfig#strict) flag in the CLI, or `"strict": true` in a [`tsconfig.json`](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) toggles them all on simultaneously, but we can opt out of them individually. The two biggest ones you should know about are [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny) and [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks).

*noImplicitAny*

Recall that in some places, TypeScript doesn’t try to infer types for us and instead falls back to the most lenient type: `any`. This isn’t the worst thing that can happen - after all, falling back to `any` is just the plain JavaScript experience anyway.

However, using `any` often defeats the purpose of using TypeScript in the first place. The more typed your program is, the more validation and tooling you’ll get, meaning you’ll run into fewer bugs as you code. Turning on the [`noImplicitAny`](https://www.typescriptlang.org/tsconfig#noImplicitAny) flag will issue an error on any variables whose type is implicitly inferred as `any`.

*strictNullChecks*

By default, values like `null` and `undefined` are assignable to any other type. This can make writing some code easier, but forgetting to handle `null` and `undefined` is the cause of countless bugs in the world - some consider it a [billion dollar mistake](https://www.youtube.com/watch?v=ybrQvs4x0Ps)! The [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) flag makes handling `null` and `undefined` more explicit, and *spares* us from worrying about whether we *forgot* to handle `null` and `undefined`.



- Say we add type annotations to the function arguments and we try to pass in the wrong type argument.. the TypeScript compiler will raise an error, preventing us from introducing the unexpected behavior into our code 

- What is **tsc**
  - A command line tool provided by TypeScript. It is the TS compiler.
  - Running this tool against a `.ts` file will examine our TypeScript code, output relevant warnings or errors about the code, and produce a `.js` file. 
  - The `.js` file will contain equivalent JavaScript code that can be executed by a web browser or in a JavaScript runtime like Node.js.
  - Compiling TypeScript to JavaScript is done at build time, which means it's part of the process of preparing our code for deployment.
    - Use `npx` if running `tsc` locally ex/ `npx tsc greet.ts`
- [
  Courses](https://launchschool.com/course_catalog)
- [TS240 Introduction to TypeScript](https://launchschool.com/courses/e052c1ca)
- [Lesson 1: Introduction to TypeScript](https://launchschool.com/lessons/525da66e)
- 6. Compiling TypeScript to JavaScript

# Compiling TypeScript to JavaScript

As we mentioned in the previous lesson, when we write TypeScript code, we're writing code in a language that is a superset of JavaScript. This means we can use all of the features of JavaScript, plus additional features provided by TypeScript, such as static typing and interfaces. However, web browsers can only understand JavaScript, so we need to convert our TypeScript code into JavaScript before it can be executed in a browser. In this assignment, we'll explore how TypeScript is compiled at build time and what that means for our development process.

When added to a project, TypeScript provides a command line tool called `tsc`. `tsc` is the TypeScript compiler. Running this tool against a `.ts` file will examine our TypeScript code, output relevant warnings or errors about the code, and produce a `.js` file. The `.js` file will contain equivalent JavaScript code that can be executed by a web browser or in a JavaScript runtime like Node.js.

Compiling TypeScript to JavaScript is done at build time, which means it's part of the process of preparing our code for deployment.

Let's say we have a TypeScript file `greet.ts` with the following code:

greet.ts

Copy Code

```js
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet("Srdjan");
```

First we run the TypeScript compiler (`tsc`) on this file:

Copy Code

```none
npx tsc greet.ts
```

`tsc` will generate a JavaScript file `greet.js` with the following code:

greet.js

Copy Code

```js
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Srdjan");
```

As you can see, the TypeScript code has been converted into equivalent JavaScript code, and the type annotations have been removed. This JavaScript code can now be executed in a web browser, or any other environment that supports JavaScript.

Let's say that we introduce a type error into this code:

greet.ts

Copy Code

```js
function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}

greet(1);
```

Now, when we run `npx tsc greet.ts`, we will see the following error in our terminal:

Copy Code

```none
greet.ts:5:7 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

5 greet(1);
        ~

Found 1 error in greet.ts:5
```

Note that `tsc` still produces a `greet.js` file. The version of our program with the type error is still valid JavaScript, but the TypeScript compiler has warned us at build time that there is an issue to fix before we deploy our code.

## What version of JavaScript does TypeScript compile to?

One of the benefits of compiling TypeScript to JavaScript is that it allows us to use the latest features of JavaScript, even if some web browsers don't yet support those features. The TypeScript compiler can convert newer syntax into equivalent older syntax that is supported by more browsers, so we can write modern JavaScript code without worrying about compatibility issues.

It's worth noting that JavaScript itself is also compiled at runtime by web browsers, but the difference is that TypeScript is compiled by the developer before the code is deployed, while JavaScript is compiled when the code is executed in a user's browser. This means that TypeScript compilation can catch errors and provide helpful feedback before our code is deployed, while JavaScript compilation only happens once the code is running, which can lead to unexpected errors.

In summary, TypeScript is compiled at build time to JavaScript so that it can be run in a web browser. This compilation process is an important step in the development workflow for TypeScript projects, and it helps ensure that TypeScript code can be run on any platform that supports JavaScript.



**Language Service**

- Although you can manually run the TypeScript compiler from the command line to view the warnings and errors in your program, TypeScript also provides a language service that integrates with many code editors.

- As a component of the TypeScript compiler, the language service operates in the background and provides a range of features, including code completion, signature help, error checking, and refactoring.
- When working with TypeScript, the language service analyzes the TypeScript code as it is being edited and provides suggestions and feedback in real-time in your code editor. It uses the information from the project's tsconfig.json file to understand the project's configuration and dependencies and to provide intelligent suggestions and error checking based on this information.
  1. *Code Completion*
     1. is a key feature of the TypeScript language service that allows developers to write code faster and with fewer errors. The language service can suggest code completions based on the current context, making it easy for developers to quickly write TypeScript code.
  2. *Signature help*
     1. When calling functions, the language service can display a tooltip that shows the parameters and return type of the function, helping developers to use functions correctly.
  3. *Error Checking*
     1. As developers write TypeScript code, the language service can detect type errors in real-time and highlight them in the editor, making it easy for developers to fix issues as they arise.
  4. *Refactoring*
     1. Suggestions for Renaming Variables or Functions 
     2. Improves code structure adn maintainability 

**READ** *Everyday Types*

https://www.typescriptlang.org/docs/handbook/2/everyday-types.html

- Primitives

  - string, number, boolean- use lowercase unless referring to special built-in types that will rarely appear in your code

  - There are seven primitive types in TypeScript: `boolean`, `number`, `bigint`, `symbol`, `string`, `null`, and `undefined`

  - `boolean`

    - We can initialize a variable with the `boolean` type using the following syntax:

      ```jslet isCompleted: boolean = true;
      let isCompleted: boolean = true;
      
      //or 
      
      let isCompleted: boolean;
      isCompleted = true;
      ```

    - `number`, `string`, `null`, `undefined`

      - ```js
        let num: number = 1;
        
        let firstName: string = "Jane";
        let lastName: string = "Doe";
        let fullName: string = `${firstName} ${lastName}`;
        
        let x: null = null;
        It is important to note that null is a value that represents the intentional absence of any object value.
        
        let y: undefined;
        null is a value that represents the intentional absence of any object value, whereas undefined is a value that represents an uninitialized variable.
        
        
        ```

        

- Arrays

  - number[], string[] pr Array<number>

- any

  - TypeScript also has a special type, `any`, that you can use whenever you don’t want a particular value to cause typechecking errors. You can assign all types to a variable of `any` type, and a value with type `any` can be assigned to every other type (except `never`): Using `any` essentially turns off type checking for a given value or assignment. This can be a useful tool in some specific scenarios, but is more often a source of potential problems.

  - The `any` type is a type that disables TypeScript's type checking, effectively allowing `obj` to hold any value or structure.

  - ```ts
    // Accessing a method that doesn't exist
    let isStudent: any = true;
    let school: string = isStudent;
    console.log(school.toLowerCase()); // No compile-time error, but runtime error
    
    //When you declare isStudent as any, TypeScript will not perform any type checking on isStudent. This means you can assign any value to isStudent without TypeScript complaining. Here, isStudent is assigned a boolean (true).
    Assignment to school:
    
    You then assign isStudent to school, which is typed as string. Since isStudent is of type any, TypeScript allows this assignment because it doesn't enforce type constraints. Essentially, any overrides type safety.
    ```
  
  - The above code snippets are examples of type unsoundness, where TypeScript's type system fails to catch a type error. This type unsoundness can subtly spread throughout an application. Since `any` types can be so flexibly reassigned, they make it easy for an incorrect type to be introduced in one part of an application, get passed through many functions, and cause an error in a completely different function or file. For this reason, it's important to use `any` sparingly and only when necessary.
  
  - While `any` makes your code more flexible, it also prevents the type system from ensuring that variables have the types that we think they have. This can make it easy to assign the incorrect value to a variable or access a property or method that doesn't exist -- in all cases leading to the sort of runtime errors TypeScript is designed to catch:

  - ```js
    let obj: any = { x: 0 };
    
    // Accessing the property x
    console.log(obj.x); // Output: 0
    
    // Changing the value of x
    obj.x = 42;
    console.log(obj.x); // Output: 42
    
    // Adding a new property
    obj.y = "hello";
    console.log(obj.y); // Output: hello
    
    ```
  
- **When to use `any`**

  - **Gradual migration from JavaScript to TypeScript:** When transitioning an existing JavaScript codebase to TypeScript, employing the `any` type can serve as a practical initial step. This approach enables you to progressively introduce type annotations and enhance type safety while maintaining the functionality of the code throughout the migration process.

  - **Working with third-party libraries:** You may be working with a library that lacks TypeScript type definitions or has incorrect or incomplete type definitions. In this case, `any` can be a temporary solution until the proper types are available, either by adding them yourself, using community-provided type definitions, or waiting for the library maintainers to add them.

  If you decide to use `any` in this scenario, you should use **type guards** to narrow the `any` type back to the type it should have.
  
  Here's an example:
  
  In this code, we define a type guard called `isString` that checks if a value is a string. We use this type guard in the `doSomethingWithLibraryData` function to check if the `data` parameter is a `string`. If it is, we can safely call `toUpperCase()` on it. If not, we handle the error gracefully.
  
  ```ts
  function isString(value: any): value is string { //type predicate
    return typeof value === "string";
  }
  
  function doSomethingWithLibraryData(data: any) {
    if (isString(data)) {
      console.log(data.toUpperCase());
    } else {
      console.log("Data is not a string.");
    }
  }
  ```

`any` can be useful as an intermediate, temporary step when working with external libraries or on code migrations. However, using `any` outside of these cases should be an exception and not the rule. When possible, try to use more specific types that accurately describe the data structure and behavior, allowing TypeScript to provide better type checking, error detection, and tooling support. If you encounter a situation where you need to use `any`, consider using type guards to narrow the type back to the type it should have.

In a future assignment we will look at the `unknown` type, which offers many of the benefits of `any` while providing useful restrictions.



**Problems using `any`**

```ts
function processInput(input: any) {
  console.log(input.toUpperCase());
  console.log(input.toFixed(2));
  console.log(input.length);
}

processInput("hello");
processInput(42);
processInput(true);
```

Will there be any type errors when calling the `processInput` function with different inputs like strings, numbers, and booleans?

There will be no type errors at compile time when calling the `processInput` function with different inputs. This is because the input parameter has the `any` type, which disables TypeScript's type checking, allowing the function to be called with literally any value.

However, this lack of type checking can lead to runtime errors. For example, calling `processInput(true)` will result in a runtime error, as the `boolean` type does not have an `toUpperCase` method.



2. Rewrite `processInput` with proper typing so that the given function calls would run without any errors.

```ts
function processInput(input: any) {
  // Your implementation here
}

processInput("hello"); // Outputs: HELLO
processInput(42); // Outputs: 42.00
processInput([1, 2, 3]); // Outputs: 3
```

```ts
type Input = string | number | number[];

function processInput(input: Input) {
  if (typeof input === 'string') {
    console.log(input.toUpperCase());
  } else if (typeof input === 'number') {
    console.log(input.toFixed(2));
  } else if (Array.isArray(input)) {
    console.log(input.length);
  }
}

processInput("hello");
processInput(42);
processInput([1, 2, 3]); // Outputs: 3
```









**Type Annotations on Variables**

When you declare a variable using `const`, `var`, or `let`, you can optionally add a type annotation to explicitly specify the type of the variable:

As you've seen, the way that we provide type information to variables is with a colon `:`, followed by the type. This syntax is called a **type annotation**. Type annotations are TypeScript specific syntax that provides the compiler with type information about a given value.

Type annotations can be used with many different kinds of values in TypeScript, including:

- Variables and constants
- Function parameters
- Function return values
- Object properties
- Array elements

```
let myName: string = "Alice";Try
```

In most cases, though, this isn’t needed. Wherever possible, TypeScript tries to automatically *infer* the types in your code. For example, the type of a variable is inferred based on the type of its initializer:

```
// No type annotation needed -- 'myName' inferred as type 'string'
let myName = "Alice";
```

*Functions*

Functions are the primary means of passing data around in JavaScript. TypeScript allows you to specify the types of both the input and output values of functions.

When you declare a function, you can add type annotations after each parameter to declare what types of parameters the function accepts. Parameter type annotations go after the parameter name:

```js
// Parameter type annotation
function greet(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}
```

When a parameter has a type annotation, arguments to that function will be checked:

```
// Would be a runtime error if executed!
greet(42);
Argument of type 'number' is not assignable to parameter of type 'string'.
```

> Even if you don’t have type annotations on your parameters, TypeScript will still check that you passed the right number of arguments.

### 

*Return Type Annotations*

You can also add return type annotations. Return type annotations appear after the parameter list:

```js
function getFavoriteNumber(): number {
  return 26;
}
```

Much like variable type annotations, you usually don’t need a return type annotation because TypeScript will infer the function’s return type based on its `return` statements. The type annotation in the above example doesn’t change anything. Some codebases will explicitly specify a return type for documentation purposes, to prevent accidental changes, or just for personal preference.



*Functions Which Return Promises*

If you want to annotate the return type of a function which returns a promise, you should use the `Promise` type:

```js
async function getFavoriteNumber(): Promise<number> {
  return 26;
}
```



*Anonymous Functions*

Anonymous functions are a little bit different from function declarations. When a function appears in a place where TypeScript can determine how it’s going to be called, the parameters of that function are automatically given types.

```js
const names = ["Alice", "Bob", "Eve"];
 
// Contextual typing for function - parameter s inferred to have type string
names.forEach(function (s) {
  console.log(s.toUpperCase());
});
 
// Contextual typing also applies to arrow functions
names.forEach((s) => {
  console.log(s.toUpperCase());
});Try
```

Even though the parameter `s` didn’t have a type annotation, TypeScript used the types of the `forEach` function, along with the inferred type of the array, to determine the type `s` will have.

This process is called *contextual typing* because the *context* that the function occurred within informs what type it should have.



*Object Types*

 This refers to any JavaScript value with properties, which is almost all of them! To define an object type, we simply list its properties and their types.

In TypeScript, object types define the **shape** of objects and ensure that all properties are present with their corresponding types. This is useful for preventing errors that may occur in JavaScript, where accessing a property that doesn't exist on an object returns `undefined`.

- The "shape" of an object refers to the structure of its properties and their types. When we talk about the shape of an object, we are referring to the names and types of the object's properties.

For example, if we have an object representing a person with properties like `name`, `age`, and `address`, the shape of the object would include the names of these properties and their respective types.



For example, here’s a function that takes a point-like object:

```js
// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });Try
```



*NoImplicitOverride*

```js
class Album {
  setup() {}
}
 
class MLAlbum extends Album {
  override setup() {}
}
 
class SharedAlbum extends Album {
  setup() {}This member must have an 'override' modifier because it overrides a member in the base class 'Album'.This member must have an 'override' modifier because it overrides a member in the base class 'Album'.
}
```

If you add `noImplicitOverride` then you have to use the `override` keyword for functions that are meant to override parent functions 



*NoImplicitReturns*

```js
function lookupHeadphonesManufacturer(color: "blue" | "black"): string {
Function lacks ending return statement and return type does not include 'undefined'.
  if (color === "blue") {
    return "beats";
  } else {
    ("bose");
  }
}
```



*noImplicitThis*

```js
class Rectangle {
  width: number;
  height: number;
 
  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
 
  getAreaFunction() {
    return function () {
      return this.width * this.height;
'this' implicitly has type 'any' because it does not have a type annotation.
'this' implicitly has type 'any' because it does not have a type annotation.
    };
  }
}
```



*noPropertyAccessFromIndexSignature*



*Union Type*

TypeScript’s type system allows you to build new types out of existing ones using a large variety of operators.

*Defining a Union Type*

A union type is a type formed from two or more other types, representing values that may be *any one* of those types. We refer to each of these types as the union’s *members*.

```js
function printId(id: number | string) {
  console.log("Your ID is: " + id);
}
// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });
Argument of type '{ myID: number; }' is not assignable to parameter of type 'string | number'.
```



- If you call a method within the function that is not available to ne of the types allocated, then an error will be thrown ie id.toUpperCase() in this case will throw an error bc number.toUpperCase() doesn't work 
- You have to use *narrowing* where you use `if/else` branches if you use methods that aren't available to a certain type 



**Type Aliases**

A *type alias* is exactly that - a *name* for any *type*. The syntax for a type alias is:

```js
type Point = {
  x: number;  //Note this syntax with ; 
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });

//or

type ID = number | string;
```

You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type



**Interfaces**

An *interface declaration* is another way to name an object type:

Interfaces can be merged where types cant.

Almost all features of an `interface` are available in `type`, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.

You can also use two interfaces or types within each other:

```ts
interface Address {  //see here that the = sign is not here w/ interface
  street: string;
  city: string;
  state: string;
  zip: number;
}

interface Person {
  name: string;
  age: number;
  address: Address;  //by nesting interfaces it makes code more structured, readable, and reusable
}

// Previous interface definitions above

const person: Person = {
  name: "Alice",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
    zip: 10001,
  },
};
```



```js
// Interface merging
interface User {
  name: string;
}

interface User {
  age: number;
}

// Merged result
const user: User = {
  name: "Alice",
  age: 25
};

// Type alias - no merging
type User = {
  name: string;
};

// Error: Duplicate identifier 'User'.
type User = {
  age: number;
};

```



```js
interface Point {
  x: number;
  y: number;
}
 
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });


```



*How to merge an interface*

```js
//use extends like in a class
interface Animal {
  name: string;
}

interface Bear extends Animal {
  honey: boolean;
} //Using interfaces with extends can often be more performant for the compiler than type aliases with intersections


function getBear(): Bear {
  const obj: Bear = {
    name: "Winnie",
    honey: true
  };
  return obj;
}

const bear = getBear();
bear.name;
bear.honey;


//or you can add new fields to an existing interface
interface Window {
  title: string;
}

interface Window {
  ts: TypeScriptAPI;
}

const src = 'const a = "Hello World"';
window.ts.transpileModule(src, {});
```



*How to merge a type*

```js

type Animal = {
  name: string;
}

type Bear = Animal & { 
  honey: boolean;
}

function getBear(): Bear {
  const obj: Bear = {
    name: "Winnie",
    honey: true
  };
  return obj;
}


const bear = getBear();
bear.name;
bear.honey;

//but we cant change the type after created

type Window = {
  title: string;
}

type Window = {
  ts: TypeScriptAPI;
}

 // Error: Duplicate identifier 'Window'.

    
```



**Practice Problem with Interfaces**

Given the following JavaScript object representing a book in a library:

```ts
const book = {
  title: "The Great Gatsby",
  author: {
    firstName: "F. Scott",
    lastName: "Fitzgerald",
  },
  publicationDate: 1925,
  genres: ["Tragedy", "Realism"],
};
```





**Structurally Types type System**

Just like when we used a type alias above, the example works just as if we had used an anonymous object type. TypeScript is only concerned with the *structure* of the value we passed to `printCoord` - it only cares that it has the expected properties. Being concerned only with the structure and capabilities of types is why we call TypeScript a *structurally typed* type system.



**Type Assertions**

Sometimes you will have information about the type of a value that TypeScript can’t know about.

For example, if you’re using `document.getElementById`, TypeScript only knows that this will return *some* kind of `HTMLElement`, but you might know that your page will always have an `HTMLCanvasElement` with a given ID.

**Use type assertions rarely, and with caution.** By overriding TypeScript's checks, you make your code much more vulnerable to errors.

In this situation, you can use a *type assertion* to specify a more specific type:

```js
const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;

```



**Unknown**

- The `unknown` type was introduced in TypeScript 3.0 as a safer alternative to `any`. It is similar to the `any` type, but with stricter type checking rules. In this lesson, we will explore the `unknown` type in TypeScript, including its use cases and examples.

- As you recall, the `any` type essentially overrides TypeScript's type checking; all types can be assigned to `any`, and `any` can be assigned to all other types. Further, the compiler will allow you to reference any property on an `any` value, without checking for its existence:

- Using `unknown` in TypeScript can help prevent TypeScript from inferring a specific type and ensure that you explicitly handle the type of the variable. Here’s how `unknown` works and how it affects type inference and type safety:
- Similar to `any`, all types can be assigned to the `unknown` type. However, the `unknown` type cannot be assigned to any other type, and the compiler will raise an error when you try to access any property on a value of `unknown` type. The only way to re-assign or otherwise take action on an `unknown` value is to first narrow it to a more specific type with a type guard. This behavior helps us guarantee type safety even when handling data where we don't initially know the type.

*Using type assertions with unknown values*

 Another common technique to narrow an `unknown` value in these scenarios is with **type assertions**. As we learned in a previous lesson, type assertions use the `as` keyword to tell the compiler that a value is a given type.

This can be useful when working with external data of an `unknown` type. For example, let's say we want to handle some data from a movie API.

```ts
type MovieApiResponse = {
  status: string;
  data: {
    title: string;
    releaseYear: number;
  };
};

function handleMovieApiResponse(response: unknown) {
  // Perform some basic validation of the unknown type
  if (!response || typeof response !== "object") {
    console.log("No data received!");
    return;
  }

  const movieApiResponse = response as MovieApiResponse; // Using a type assertion to inform TypeScript that we expect 'response' to be of type 'MovieApiResponse'

  // Now TypeScript knows the structure of movieApiResponse and allows us to access its properties
  console.log(`Status: ${movieApiResponse.status}`);
  console.log(`Title: ${movieApiResponse.data.title}`);
  console.log(`Release Year: ${movieApiResponse.data.releaseYear}`);
}
```



- ```ts
  function processValue(value: unknown) {
    console.log(value.toLowerCase()); // 'value' is of type 'unknown'
    console.log(value.toFixed(2)); // 'value' is of type 'unknown'
    let strValue: string = value; // Type 'unknown' is not assignable to type 'string
  }
  
  //narrow to 
  function processValue(value: unknown) {
    if (typeof value === "string") {
      console.log(value.toLowerCase());
    } else if (typeof value === "number") {
      console.log(value.toFixed(2));
    } else {
      console.log("Unknown value");
    }
  }
  
  processValue("Launch School"); // prints "launch school"
  processValue(3.14159); // prints "3.14"
  processValue(true); // prints "Unknown value"
  
  //be carefull for null when narrowing an object
  function describeShape(shape: unknown) {
    let area: number;
  
    if (typeof shape === "object" && shape.kind === "circle") {
      // 'shape' is possibly 'null'.
      area = Math.PI * shape.radius * shape.radius;
    } else {
      area = shape.sideLength * shape.sideLength;
    }
    console.log("The area is " + area);
  }
  
  //when things get crazy with objects then use a custom type (type predicate)
  function isCircle(shape: unknown): shape is Circle {
    return (
      typeof shape === "object" &&
      shape !== null &&
      "kind" in shape &&
      shape.kind === "circle"
    );
  }
  
  function describeShape(shape: unknown) {
    let area: number;
  
    if (isCircle(shape)) {
      area = Math.PI * shape.radius * shape.radius;
    } else {
      area = shape.sideLength * shape.sideLength; // 'shape' is of type 'unknown'
    }
    console.log("The area is " + area);
  }
  ```

- In this case, the function can accept any value as its argument, but we won't be able to take action on that value until we narrow it to a more specific type.

```ts
const inputElement = document.querySelector("input"); // const inputElement: Element | null
console.log(inputElement && inputElement.value); // Property 'value' does not exist on type 'Element'.
```

We see on line 1 that the `querySelector` method returns a value of type `Element | null`. This makes sense because the TypeScript compiler can't know about the state of the DOM or what type of DOM node will be returned before runtime. As a result, we can't access the `value` property on `inputElement`.

However, we can be certain that if a DOM element is returned from this query, then it will be an `HTMLInputElement`.

To resolve the issue, we can use a type assertion to override the compiler and treat `inputElement` as an `HTMLInputElement`:



**Practice Problems with Unknown**

1. Given these two code snippets, which one do you think would result in a type error, or both?

```ts
const x: any = "Launch School";
if (typeof x === "string") {
  console.log(x.toUpperCase());
} else {
  console.log(x.toLowerCase());
}


const y: unknown = "Launch School";
if (typeof y === "string") {
  console.log(y.toUpperCase());
} else {
  console.log(y.toLowerCase());
}
```

The second code snippet with the `unknown` type will result in an error:

```plaintext
'y' is of type 'unknown'.
// Property 'toLowerCase' does not exist on type 'unknown'.
```

In the first code snippet, `x` is of type `any`, so TypeScript does not perform any type checking, and the code will execute without errors. However, this could lead to potential issues at runtime if `x` is not actually a string.

In the second code snippet, `y` is of type `unknown`, which means TypeScript will enforce type checking. Since `y` is not guaranteed to be a string in the `else` block, TypeScript raises an error when trying to call `toLowerCase()`.



2. Will the following TypeScript code compile without type errors?

```ts
let userInput: unknown;
let userName: string;

userInput = 5;
userName = userInput;
```

There is a type error in this code.

Copy Code

```plaintext
Type 'unknown' is not assignable to type 'string'.
```

The error occurs when assigning `userInput` to `userName`.

In TypeScript, `unknown` is a type-safe counterpart of `any`. Anything is assignable to `unknown`, but `unknown` isn't assignable to anything (except any) without a type assertion or a control flow-based narrowing.

We can't assign a variable of type `unknown` to a variable of a different type (in this case, `string`). So, trying to assign `userInput` to `userName` raises a type error.

To fix this error, we must perform a type check before assigning `userInput` to `userName`, like so:

```ts
if (typeof userInput === "string") {
  userName = userInput;
}
```

3. Consider the following scenario: You're given a variable `data` of type `unknown`.

Please write a function `processData` that takes `data` as a parameter. If `data` is a string, the function should return `"Hello, " + data`. If `data` is a number, the function should return `"Age: " + data`. If `data` is neither a string nor a number, the function should throw an error saying `"Invalid data"`.

```ts
function processData(data: unknown): string {
  // Implement this function
}

// Usage
console.log(processData("Alice")); // Should print: "Hello, Alice"
console.log(processData(25)); // Should print: "Age: 25"
console.log(processData(true)); // Should throw an error: "Invalid data"
```

```ts
function processData(data: unknown): string {
  if (typeof data === "string") {
    return "Hello, " + data;
  } else if (typeof data === "number") {
    return "Age: " + data;
  } else {
    throw new Error("Invalid data");
  }
}
```



# Summary

We covered a lot in this lesson! In order to safely make variable assignments or access properties, we often need to narrow a value's type from a wider set to a narrower set. We explored many techniques to achieve this, from simple type guards to custom guards with type predicates. We also demonstrated how discriminated unions help us distinguish between related types at runtime. Finally, we took a look at `any` and `unknown`, two "wide" types that the compiler treats very differently.

Many introductory TypeScript courses introduce `any` much earlier, as a "basic" type. However, given its lack of type safety, we feel that `any` is best understood in the context of narrowing; you should rarely use the `any` type without narrowing it down.

At this point, we've learned many ways to define the shape of an object. However, sometimes we don't know what an object's shape will be until runtime. Or, the properties on an object might change over the course of a program's execution. This will be the focus of the next lesson.







```ts
// With type assertion
const inputElement = document.querySelector("input");
console.log(inputElement && (inputElement as HTMLInputElement).value); // No error, logs the value of the input
and we called value on the inputElement which we did bc we knew that the type of element has that property.. but we get an error bc not all elements have this property
```

You can also use the angle-bracket syntax (except if the code is in a `.tsx` file), which is equivalent:

```js
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

```

Reminder: Because type assertions are removed at compile-time, there is no runtime checking associated with a type assertion. There won’t be an exception or `null` generated if the type assertion is wrong.TypeScript only allows type assertions which convert to a *more specific* or *less specific* version of a type. This rule prevents “impossible” coercions like:Sometimes this rule can be too conservative and will disallow more complex coercions that might be valid. If this happens, you can use two assertions, first to `any` (or `unknown`, which we’ll introduce later), then to the desired type:

`as` enables us to override TypeScript's type checking for specific values. This can be helpful in certain scenarios like working with the DOM, when we might know more about a method's return type than the compiler does.

However, it is a feature that should be used rarely and with caution. Do not reach for type assertions simply because you are receiving errors from the compiler that are difficult to understand or time-consuming to resolve. In most circumstances, we can safely resolve type errors by writing more types, by structuring our types more effectively, and by adding conditional checks to validate our data. We will explore all of these approaches in further lessons.



**Practice Problem Type Assertion**

```ts
let age: number | string = 30;
age = (age as unknown as string).length;
```

Does the code above have any type errors? And what will be the value of `age` after the execution of these lines?

**Initial Variable Declaration**:

```
let age: number | string = 30;
```

- `age` is declared with a union type `number | string`, meaning it can hold either a number or a string.

**Type Assertion**:

```ts
age = (age as unknown as string).length;
```

- **`age as unknown`**: This first asserts `age` to `unknown`. The `unknown` type is a safer alternative to `any`, allowing you to perform type assertions after confirming the type.
- **`(age as unknown as string)`**: After asserting `age` as `unknown`, it’s then asserted as `string`. This effectively tells TypeScript to treat `age` as a `string` type.
- **`.length`**: Accesses the `length` property of the `string`. Since `length` is a valid property of `string`, this is valid for strings.

There are no type errors in this code at compile time, but it will result in a runtime error.

The value of age after these lines will be `undefined`, and accessing `.length` will cause a runtime error.

In the code, age is initially declared as a union type `number | string` and is assigned the number value `30`.

In the next line, the code uses a double type assertion: first to `unknown` and then to `string`. This is a forceful way to tell the TypeScript compiler to treat age as a string, even though it is actually a number. As a result, when trying to access the length property of `age`, which is a number at runtime, it leads to a runtime error because numbers do not have a length property.

This example illustrates the potential risks associated with improper use of type assertions, as they can lead to runtime errors despite the absence of compile-time type errors.

**Literal Types**

In TypeScript, **literal types** are a way to describe specific values that a variable can have. They allow you to define a type that is limited to a certain set of values and make your code more specific and less error-prone.

```js
let changingString = "Hello World";
changingString = "Olá Mundo";
// Because `changingString` can represent any possible string, that
// is how TypeScript describes it in the type system
changingString;
      
let changingString: string
 
const constantString = "Hello World";
// Because `constantString` can only represent 1 possible string, it
// has a literal type representation
constantString;
      
const constantString: "Hello World"

let color: "red" | "blue" | "green" = "red"; // This is valid
color = "yellow"; // Type '"yellow"' is not assignable to type '"red" | "blue" | "green"'
```

You likely noticed the use of the pipe `|` operator in `"red" | "blue" | "green"`. This operator creates a Union Type. Similar to the `||` operator in JavaScript, this type annotation means that `color` can be "red" OR "blue" OR "green". We will explore Union Types in more detail in a future lesson.

But by *combining* literals into unions, you can express a much more useful concept - for example, functions that only accept a certain set of known values:

```js
function printText(s: string, alignment: "left" | "right" | "center") {
  // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");
Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'.

//or

function compare(a: string, b: string): -1 | 0 | 1 {
  return a === b ? 0 : a > b ? 1 : -1;
}

//or combined 

interface Options {
  width: number;
}
function configure(x: Options | "auto") {
  // ...
}
configure({ width: 100 });
configure("auto");
configure("automatic");
Argument of type '"automatic"' is not assignable to parameter of type 'Options | "auto"'.


There’s one more kind of literal type: boolean literals. There are only two boolean literal types, and as you might guess, they are the types true and false. The type boolean itself is actually just an alias for the union true | false.


```



**Literal Inference**

types are used to determine both *reading* and *writing* behavior.



You can use `as const` to convert the entire object to be type literals:

```
const req = { url: "https://example.com", method: "GET" } as const;
handleRequest(req.url, req.method);

// Change 1:
const req = { url: "https://example.com", method: "GET" as "GET" };
// Change 2
handleRequest(req.url, req.method as "GET");
```



**`null` and `undefined`**

JavaScript has two primitive values used to signal absent or uninitialized value: `null` and `undefined`.TypeScript has two corresponding *types* by the same names. How these types behave depends on whether you have the [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) option on.

With [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) *off*, values that might be `null` or `undefined` can still be accessed normally, and the values `null` and `undefined` can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; we always recommend people turn [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) on if it’s practical to do so in their codebase.

With [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) *on*, when a value is `null` or `undefined`, you will need to test for those values before using methods or properties on that value. Just like checking for `undefined` before using an optional property, we can use *narrowing* to check for values that might be `null`:

```js
function doSomething(x: string | null) {
  if (x === null) {
    // do nothing
  } else {
    console.log("Hello, " + x.toUpperCase());
  }
}
```

**Non-null Assertion Operator Postfix(!)**

TypeScript also has a special syntax for removing `null` and `undefined` from a type without doing any explicit checking. Writing `!` after any expression is effectively a type assertion that the value isn’t `null` or `undefined`:

```
function liveDangerously(x?: number | null) {
  console.log(x!.toFixed());
}
```

In TypeScript, the `?` in a function parameter indicates that the parameter is optional. This means the argument for that parameter can either be of the specified type, or it can be omitted entirely, which results in `undefined`.

The `?` after the parameter name `x` makes `x` optional. This means that when calling `liveDangerously`, you can either pass a value of type `number` or `null`, or omit the argument altogether, in which case `x` will be `undefined`.

The type `number | null` specifies that if provided, `x` can be either a `number` or `null`.

Inside the function, `x!` is used to assert that `x` is not `null` or `undefined`. This is a way of telling TypeScript to trust that `x`will not be `null` or `undefined` at that point in the code.

Since `x` is optional, it can be `undefined` if not provided. However, TypeScript allows you to use the non-null assertion operator (`!`) to override its type checking.Using `x!` can lead to runtime errors if `x` is `undefined` or `null`:

**Enums**

Enums are a feature added to JavaScript by TypeScript which allows for describing a value which could be one of a set of possible named constants. Unlike most TypeScript features, this is *not* a type-level addition to JavaScript but something added to the language and runtime. Because of this, it’s a feature which you should know exists, but maybe hold off on using unless you are sure. You can read more about enums in the [Enum reference page](https://www.typescriptlang.org/docs/handbook/enums.html).



**Practice Problems**

1) Will the code below raise an error?

   ```js
   let x: number = 2;
   let y: number = 2;
   let result: string = x + y;
   ```

   Yes, there will be an error. Type 'number' is not assignable to type 'string'. The reason for this error is that the `result` variable has been explicitly declared as a `string` data type. However, the expression `x + y` will result a `number` data type, since both `x` and `y` are of type `number`. When TypeScript tries to assign the result of the addition to the `result` variable, it encounters a type mismatch, causing the error.

   

   2. Will the code below raise an error?

   ```js
   let x: number = 2;
   let y: string = "2";
   let result: string = x + y;
   ```

   No, in this case, the expression `x + y` will result a `string` value of `"22"`, which matches our type definition.

   

3. Will the following code raise an error?

   ```js
   let x: number = 2;
   let y: string = "2";
   let result: boolean = x === y;
   ```

   Yes, there will be an error.

   ```plaintext
   This comparison appears to be unintentional because the types 'number' and 'string' have no overlap.
   ```

   To rephrase the error message, `x` is a `number` and `y` is a `string`, so the `===` operator cannot be used to compare them for equality.



4. Will the following code raise an error?

```js
let x: boolean = true;
let y: number = 2;
let z: string = "";
let result: boolean = (x && y) || z;
```



Yes, there will be an error.

```plaintext
Type 'string | number' is not assignable to type 'boolean'.
```

Let's break it down piece by piece. First, `x && y` will result in the value of `y`, which is type `number`, then it comes down to `2 || ""`, these two operands have different types (`number` and `string`).

Since the `||` operator returns one of the two operands and the types of the operands are different, TypeScript infers the resulting type as a union of the two types, which is `string | number`.

You will have a better understanding of this later with the course progress.



5. Will the code below raise an error? 

```js
let x: undefined; 
x = 1
```

Yes, there will be an error.

```plaintext
Type '1' is not assignable to type 'undefined'.
```

In the world of JavaScript, an `undefined` variable can be reassigned whenever we want. However, in TypeScript, when you declare a variable using `let x: undefined`, you are essentially telling TypeScript that `x` is and will always be `undefined`. TypeScript will remind you of this fact if you try to perform any operation on it.

In practice, explicitly declaring a variable to be of the `undefined` type and initializing it with `undefined` is not a common pattern. However, it can be useful in certain situations where you want to ensure that a variable can only hold the value `undefined`.



**Arrays and Tuples**

```js
let numbers: number[] = [1,2,3,4,5];

or 

let numbers: Array<number> = [1,2,3,4,5]

//access a value 
let numbers: Array<number> = [1, 2, 3, 4, 5];
const myNum: number = numbers[2];
```



What if we try to access an element at an index that doesn't exist? In JavaScript, this will result in `undefined` being returned. However, we see some surprising behavior when we assign the out-of-bounds element to a typed variable:

```ts
let numbers: Array<number> = [1, 2, 3, 4, 5];
let myNum: number = numbers[5];
console.log(myNum); // Output: undefined
```

In the above code, we are able to assign the value `undefined` to the variable `myNum`, even though `myNum` has the type `number`. This seems like a bug, but TypeScript doesn't raise a warning.

The issue is that TypeScript can't know how long the array is, or will be. In other words, because JavaScript arrays have a dynamic length, the TypeScript compiler doesn't know whether any particular index is out of bounds. As a result, it infers that any elements returned from the array are of the type the array contains.

Fix this by: 

1. **Check for `undefined` elements**

   We can check whether we got an `undefined` back, even though TypeScript is not forcing us to do that check.

   ```ts
   let numbers: number[] = [1, 2, 3, 4, 5];
   const num = numbers[5];
   
   if (num !== undefined) {
     console.log(num);
   } else {
     console.log("Element doesn't exist");
   }
   ```

   In this example, we check if the element at index `5` in `numbers` is `undefined` before trying to use it. If the element is not `undefined`, we log it, otherwise, we log a message indicating that the element does not exist.

2. **Use the `--noUncheckedIndexedAccess` Compiler Option**

   Another way to solve this issue is to use the `noUncheckedIndexedAccess` compiler option in TypeScript.

   To enable `noUncheckedIndexedAccess`, you can add the following line to your `tsconfig.json` file:

   ```json
   {
     "compilerOptions": {
       "noUncheckedIndexedAccess": true
     }
   }
   ```

   With this option enabled accessing `numbers[5]` would give us the type `number | undefined` back rather than just a `number`. This will force us to check for `undefined` whenever we access an array element by its index.

**Tuples**

A tuple is a collection of values that are stored in a specific order. **Unlike arrays, tuples have a fixed length.** Each element in the tuple can have a different data type.

In JavaScript, there is no built-in support for tuples. This is because JavaScript is a dynamically-typed language, and the concept of tuples is more closely associated with statically-typed languages like TypeScript. However, tuples can be very useful in TypeScript when you want to work with a collection of values that have a specific order and data type. Tuples are defined using a fixed-length array with elements of different types, like this:

```js
let aTuple: [string, number, boolean] = ["Launch School", 1, true];

let aTuple: [string, number, boolean] = ["Launch School", 1, true];
let myString: string = aTuple[0];
let myNum: number = aTuple[1];
let myBool: boolean = aTuple[2];
```

When working with tuples, you can access the elements using their indices, like you would with an array. The value returned will have the data type of the element at that position in the tuple:

Unlike arrays, you cannot access out-of-bounds indexes of a tuple:

```js
let aTuple: [string, number, boolean] = ["Launch School", 1, true];
let myElement = aTuple[4]; // Tuple type '[string, number, boolean]' of length '3' has no element at index '4'.
```

Avoid using methods like `push()` and `pop()` on tuples bc tuples are still arrays and may act unexpectedly 

Arrays and tuples are both important data structures in TypeScript that allow you to store and manipulate multiple values in a single variable. When working with arrays, it's important to understand how to access elements safely and avoid undefined values. When working with tuples, it's important to understand their fixed length and how they can be used to define a specific structure for your data.

**Practice Problems**

1. Will the codes below raise an error?

```js
let arr: string[] = ['hello', 'world'];
arr.push(5);
```

Yes, argument of type 'number' is not assignable to parameter of type 'string'.  TypeScript identifies this type mismatch and raises an error.

```js
let tuple: [number, number] = [1,2];
tuple.push('3');
```

Yes, there will be an error.

Argument of type 'string' is not assignable to parameter of type 'number'.

Same as last problem. You may wonder, isn't tuple's length supposed to be fixed? Let's find out more in the next problem.

```js
let tuple: [number, number] = [1,2];
tuple.push(3);
```

In JavaScript, there's actually no such thing as a fixed-length-list-like data structure as tuple as you may know from other programming languages. `[number, number]` is essentially `number[]`, that's why it is okay to push another value onto it, as long as it has a `number` type in this case.

Since TypeScript is the superset of JavaScript, so it behaves the same way.

```js
let tuple: [number, string] = [1, "2"];
tuple[0] = "1";
```

Yes, there will be an error.

Type 'string' is not assignable to type 'number'.

Because the type of the first element is `number`. As you can see here, the elements inside of our tuple are also mutable, as long as we get the type right.

To conclude, TypeScript allows us to declare tuple-like data types, however, it is still an array that we're working with underneath.



2. You have seen that you can create a tuple that holds different types of values. Let's take a look at this array:

   ```js
   const myArray = ["is", "launch school", "awesome", true, "or", false];
   ```

   ```js
   const myArray: (string | boolean)[] = [
     "is",
     "launch school",
     "awesome",
     true,
     "or",
     false,
   ];
   
   By using this type definition, TypeScript understands that the elements within myArray can be of either string or boolean data types, ensuring proper type checking and validation.
   ```

   

**Functions: Parameter Types and return Types**

```ts
function add(a: number, b:number): number {
  return a + b;
}
console.log(add(2,5))
```

*Optional Parameters*

```js
function greet(name?: string): string {
  return name ? `Hello, ${name}!` : `Hello, World!`;
}

console.log(greet()); // Output: Hello, World!
console.log(greet("Pete")); // Output: Hello, Pete!
```

In this example, we specify that the `name` parameter is optional by adding a `?` to its type annotation.

If you take a look at `name`'s type inside the function, you will see that it has a type of `string | undefined`. This is because TypeScript does not know whether the optional argument will be provided when the function is invoked at runtime. As a result, it determines that the parameter could either be its declared type or `undefined`.

This representation of multiple possible types as a single type is called a Union Type



*Default Parameters*

```ts
function greet(name = "World"): string {
  return `Hello, ${name}!`;
}

console.log(greet()); // Output: Hello, World!
console.log(greet("Pete")); // Output: Hello, Pete!
```

In this example, the `greet()` function takes one parameter, `name`. We've provided a default value of `"World"` for the `name` parameter, so if no value is passed in, the function will use the default value. Because we've provided a default value, the TypeScript compiler will infer the type of the parameter. In this case, `name` is typed as `string`. This means that this will raise a compiler error: 

```ts
greet(1)
```



*Function Return Types*

```ts
function getFullName(firstName: string, lastName: string): string {
  return `${firstName} ${lastName}`
}

function favoriteNumber():number {
  return 42;
}

let myName: string;
myName = getFullName('Jane', 'Doe');
myName = favoriteNumber();
```

In this example, the function `getFullName()` takes two parameters of type string and returns a value of type string. The return value of `getFullName()` can be assigned to `myName` because they are both declared as type `string`. However, the return value of `favoriteNumber` is type `number`, so it cannot be assigned to a variable of type `string`.

If a function doesn't return a value, you can use the `void` type as the return type. We will discuss `void` in more detail later in this lesson.



**Practice Problems Parameter Types and return types**

1. ```ts
   function subtract(initial, values) {
     let remaining = initial; 
     for (const value of values) {
       remaining -= value; 
     }
     return 'The result is: ' + remaining;
   }
   ```

   What do you think the types for both parameters and the return type of this `subtract` function would be?

   Parameters: number, number[] 

   Return Type: string

2. ```ts
   function displayInfo(name: string, age?: number, country: string = "USA") : string {
     return `${name}, ${age ? age : "unknown age"}, from ${country}`;
   }
   
   console.log(displayInfo('Alice', 30));
   console.log(displayInfo("Bob", undefined, "Canada"));
   console.log(displayInfo("Charlie", 25, "UK"));
   ```

   ```
   Alice, 30, from USA
   Bob, unknown age, from Canada
   Charlie, 25, from UK
   ```

In the `displayInfo` function, the `age` parameter is marked as optional with the `?` symbol, while the `country` parameter has a default value of "USA". If `age` is not provided or is `undefined`, the function will use the string "unknown age" for the age. If `country` is not provided, the function will use the default value "USA". The function then returns a string combining the provided information

**Functions: Working with built-in JS methods**

```ts
const myNumber = 42;
const myString: string = myNumber.toString();
console.log(myString); 

const anotherNumber: number = myNumber.toString();
```

TypeScript provides type definitions for built-in JavaScript objects and methods out-of-the-box, so you don't need to define their types yourself. When you're working with JavaScript methods in TypeScript, you can use them as you would in plain JavaScript, and TypeScript will provide type information based on the method's signature.

TypeScript provides a definition for the `toString` method on JavaScript's `Number` prototype out of the box. The return value of this method is `string`, therefore the return value is assignable to `myString`, but not `anotherNumber`.



TypeScript also provides definitions for built-in methods that take callbacks. In this case, TypeScript relies on a feature called **type inference** to determine the type of the return value.

Type inference is a feature in TypeScript that allows the compiler to automatically deduce the types of variables, function parameters, and function return values when they are not explicitly specified. This can make your code more concise and maintainable while still benefiting from TypeScript's strong typing capabilities.

In the context of using built-in JavaScript methods in TypeScript, type inference can be helpful in determining the expected input and output types without explicitly specifying them. 

```js
const myStringArray: string[] = ["1", "2", "3"];
let myNumberArray: number[];
myNumberArray = myStringArray.map((str) => parseInt(str, 10));

console.log(myNumberArray); // Output: [1, 2, 3]
```

TypeScript's built-in type definition for the `map` method specifies that the method returns a new array of the same length as the input array, with each element transformed by the provided callback function. The type of each element in the output array is inferred based on the return type of the callback function.

In this example, the TypeScript compiler infers that the return type of the callback function that we pass into the `map` method is `number`. Therefore, the return value of `myStringArray.map(str => parseInt(str, 10))` is inferred to be an array of numbers and is assignable to `myNumberArray`.



**Practice Problems- Working with built-in JS methods**

1. ```js
   const numbersInStringFormat = ["10", "20", "30", "40"];
   ```

Write a TypeScript function `convertToNumbers` that uses the `map` method to transform this array into an array of numbers. The function should take an array of strings (representing numbers) as an argument and return an array of numbers.

Remember, TypeScript will infer the type of the output array based on the return type of the callback function you pass to `map`. Make sure your implementation is type-safe.

```js
const numbersInStringFormat = ["10", "20", "30", "40"];

function convertToNumbers(arr: string[]): number[] {
  return arr.map(el=>Number(el))
}

console.log(convertToNumbers(numbersInStringFormat)); // [10, 20, 30, 40]
```



**Void**

In TypeScript, void is a type that represents the absence of a value. It's commonly used as the return type for functions that don't return a value. Here's an example:

```ts
function logMessage(message: string): void {
  console.log(message);
}

logMessage("Hello, world!"); // Output: Hello, world!
```

in TypeScript, if a function does not have an explicit `return` statement, its return type is `void`.

`**void**`: Represents the absence of a return value from a function. It means "this function doesn't return anything" or "the return value should not be used."

`**null**`: Represents the intentional absence of any object value. It is a specific value that can be assigned to variables.

In this example, even though the runtime value of `result` will be `undefined`, the TypeScript compiler will not allow us to use it as we would use a typical `undefined` value. It cannot be assigned to a variable of type `undefined`, nor can it be used in a conditional to test truthiness.

In this example, a developer mistakenly assumes that the `Array.prototype.forEach` method will return the original array. Because the `forEach` function is typed to return `void`, they quickly catch the error.

Overall, `void` is a type that's used to represent the absence of a value. It's commonly used as the return type for functions that don't return a meaningful value.



**Practice Problem - Literal Type**

1. The following JavaScript function uses a "magic string" to determine its behavior, which is considered bad practice and should be avoided due to its unreliability. However, we can improve it by using literal types in TypeScript. Rewrite the function using literal types to make it more robust.

   ```js
   function calculate(operation: string, a: number, b: number) {
     switch (operation) {
       case "add":
         return a + b;
       case "subtract":
         return a - b;
       case "multiply":
         return a * b;
       case "divide":
         return a / b;
       default:
         throw new Error("Invalid operation");
     }
   }
   ```

   By using the `Operation` type, we ensure that only valid operations are passed to the `calculate` function, reducing the risk of errors and making the code more reliable.

```ts
type Operation = "add" | "subtract" | "multiply" | "divide";

function calculate(operation: Operation, a: number, b: number): number {
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      return a / b;
    default:
      throw new Error("Invalid operation");
  }
}
```



**Explicit Typing vs Type Inference**

In TypeScript (TS), there are two approaches to typing variables: explicit typing and type inference.



*Explicit Typing*

Explicit typing is when you explicitly specify the type of a variable. You can do this by using type annotations when you declare the variable. Here's an example:

```ts
let name: string = "Jane";
let age: number = 25;
let isStudent: boolean = true;
```

In this example, we have explicitly declared the data types of the variables `name`, `age`, and `isStudent`. This helps TypeScript catch errors and provide better code completion suggestions. However, this approach can be more verbose and time-consuming.



*Type Inference*

Type inference is when TypeScript infers the data type of a variable based on its initial value and its static analysis of the code paths, including the structure of the code and the context in which a value is used. Here's a simple example:

```js
let name = "Jane";
let age = 25;
let isStudent = true;
```

TypeScript is very good at type inference. Beyond primitive types, TypeScript can infer complex object types and function return values.

Be aware that TypeScript cannot infer the type of a function's parameters. For example:

```js
function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
```

In this example, TypeScript infers the type of firstName and lastName as any, as we haven't declared their types. This can lead to unexpected behavior as TypeScript won't catch any errors related to the types of firstName and lastName. To avoid this, we should use explicit typing:

```ts
function fullName(firstName:string, lastName:string) {
  return `${firstName} ${lastName}`;
}
```

**Return Type Inference**

In TypeScript, function return types can be inferred by the compiler based on the value that's returned from the function. For example, if a function returns a string, the compiler will infer that the return type of the function is string. 

It's important to note that while TypeScript is good at inferring the types of your values, it is not perfect, particularly in cases where you are working with more complex data types, working with the DOM, or using third-party libraries. In these cases, explicit typing will be preferable, or even necessary.

Type inference is a powerful aspect of TypeScript that can speed up development and help catch errors with minimal additional work. However, it is not always reliable, and explicit typing becomes more important as the complexity of an application and its data grows. In practice, you will likely rely on a combination of both to some degree. Implicit typing is common when working with primitive values and function return types, and explicit typing is more common for complex objects, function parameters, and class properties.

```ts
function concatenate(a, b) {
  return a + b;
}

const result = concatenate("Hello", "World");
const numericResult = concatenate(1, 2);

console.log(result);
console.log(numericResult);

//change to 

function concatenateStrings(a: string, b: string): string {
  return a + b;
}

function addNumbers(a: number, b: number): number {
  return a + b;
}

const result = concatenateStrings("Hello", "World");
const numericResult = addNumbers(1, 2);

console.log(result); // "HelloWorld"
console.log(numericResult); // 3
```

In this example, TypeScript's type inference system may not work as expected due to the lack of type annotations and the use of the `+` operator for both string concatenation and numeric addition. As a result, the inferred types for variables `a` and `b` might not be specific enough to detect potential issues.

To mitigate this, we can utilize explicit typing and create two distinct functions: one for string concatenation and another for numeric addition. This approach ensures that the correct types are enforced for each operation, reducing the chances of unexpected behavior due to type errors.

Explicit typing can be used to ensure that functions only accept the intended data types, preventing potential errors that can arise from unintended usage.

What if we wanted to use a single function to handle both string concatenation and numeric addition? There are techniques available to accomplish this, which we will explore in future lessons.



**Type Errors Vs. Syntax Errors**

In JavaScript, any code with a valid syntax will run regardless of whether it makes sense. However, TypeScript requires code to have both valid syntax and pass type checking.

A syntax error occurs when code violates the syntax rules of the language. This can happen if you misspell a keyword, forget to close a bracket, or use an incorrect operator. When a syntax error occurs, the program will not run and the developer must correct the error before running the code.

By contrast, a type error occurs when code violates the type rules of the language. TypeScript is a statically typed language, which means that variables have a specific type that is determined at compile-time. If you try to assign a value of the wrong type to a variable, TypeScript will raise a type error.

So, syntax errors in TypeScript are like grammatical mistakes in a recipe, and type errors in TypeScript are like using the wrong ingredients or measurements in a recipe. Just like a recipe needs both the correct grammar and the right ingredients to make a delicious cake, TypeScript code needs both valid syntax and correct types.

The objective for the majority of this course will be to focus on the various ways that TypeScript prevents type errors



**Type Aliases**

We can see that we need to define the same types in multiple places: 

```ts
const srdjan: { name: string; age: number } = {
  name: "Srdjan",
  age: 30,
};

const myCallbackFunction: () => boolean[] = () => [true, false, true];

function sayHello(
  person: { name: string; age: number },
  callbackFn: () => boolean[]
) {
  callbackFn().forEach((shouldGreet) => {
    console.log(shouldGreet ? `Hi ${person.name}` : `...`);
  });
}
```



A more common way to define types in these situations is with **Type Aliases**. Type aliases enable developers to define new custom types, based on existing types. Type aliases are created using the `type` keyword, followed by an identifier that represents the name of the type alias, an equals sign, and the type that you want to alias.

```ts
type Person = { name: string; age: number };
type BooleansFunction = () => boolean[];

const srdjan: Person = {
  name: "Srdjan",
  age: 30,
};

const myCallbackFunction: BooleansFunction = () => [true, false, true];

function sayHello(person: Person, callbackFn: BooleansFunction) {
  // function implementation
}
```



```tp
type GreetFunction = (name?: string) => string;

const greet: GreetFunction = (name) => {
  return name ? `Hello, ${name}!` : `Hello, World!`;
};

greet(); // Hello, World!
greet("Catherine"); // Hello, Catherine!
greet(8); // Argument of type 'number' is not assignable to parameter of type 'string'.
```

In this example, we define a type alias GreetFunction for a function that takes an optional string parameter name and returns a string. We then create a variable `greet` of the type GreetFunction and assign a function with the specified signature to it. Note that in order to apply the `GreetFunction` type annotation to `greet`, we must define the function as an arrow function or function expression and assign it to a variable, rather than use a function statement.

You can define type aliases for any type, including primitives, objects, functions, and more advanced types like type unions and generics (which we will cover in future in lessons), and you can use them anywhere you use types:

In summary, type aliases abstract away the details of your custom types and make them easier to read, reuse, and maintain as your codebase grows and changes. In the next assignment, we will explore how to define object types with Type Aliases in more detail.

*Will this raise an error?*

```ts
type Name = string;
type Age = number;
type Person = {
  name: Name;
  age: Age;
};

function greet(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

const person1: Person = {
  name: "Alice",
  age: 30,
};

const person2: Person = {
  name: 42,
  age: "Bob",
};

console.log(greet(person1));
console.log(greet(person2));
```

Yes, there will be two errors.

```ts
const person2: Person = {
  name: 42, // Type 'number' is not assignable to type 'string'.
  age: "Bob", // Type 'string' is not assignable to type 'number'.
};
```

At this stage, the errors highlighted should be quite apparent. The main takeaway is that Type aliases in TypeScript offer several advantages by enabling reusability and consistency in the codebase. When a type alias is created for a specific structure, such as the `Person` type, it ensures that all instances of that type adhere to the same predefined properties and their respective types. As a result, code duplication is reduced, and the likelihood of introducing errors is minimized, leading to a more maintainable and scalable codebase.

**Object Types**

```ts
type Person = {
  name: string;
  age: number;
};

const person: Person = { name: "Jane", age: 40 };
console.log(person.occupation); // TypeScript error: Property 'occupation' does not exist on type 'Person'
```

Note that ts will infer the type by the initialization of `person` but explicit type annotation will lead to more clarity. Now if we try to access a non-existent property like `occupation` on the `person` object, TypeScript will produce an error. This error helps catch errors early in the development process.

Sometimes it's not worth defining an object type, especially when we are using an object type just once. In such cases, we can put the object type directly in a function's signature as a **literal object type**. A literal object type is an object type defined inline, directly in the function signature.



```ts
function processObject(obj: { name: string; value: number }) {
  // ...
}
```

Here we have defined a literal object type `{ name: string, value: number }` inline in the function signature. We did not give it a name because we are only using it once.

In TypeScript, we can further destructure objects that are passed as function parameters and assign their properties to variables inside the function. For example:

```ts
function processObject({ name, value }: { name: string; value: number }) {
  console.log(`The name is ${name} and the value is ${value}`);
}
```

Here, we have used destructuring to assign the `name` and `value` properties on the object parameter to variables. Combining object destructuring with literal object types in function parameters is a common TypeScript pattern.

This technique of destructuring objects as function parameters is available in JavaScript as well.

In summary, using object types in TypeScript helps prevent errors by ensuring that all properties are present and have the correct types, including complex types like objects and arrays. This helps catch errors early in the development process and produce more reliable code. Finally, we have seen how we can use a literal object type, to make our code more concise and easier to read.



**Practice Problem**

Take a look at the following function. As we can see, this function takes a string array as input. Which property do you think could be destructured from the argument and returned in order to match the function's return type definition?

```ts
function myFunc({ }: string[]): number {
  return;
}
```

```js
function myFunc({ length }: string[]): number {
  return length;
}
```

The property that can be destructured from the input string array and returned to match the function's return type definition is `length`. The `length` property represents the number of elements in the array, and its value is a `number`. Since arrays are also objects in JavaScript, the `length` property can be accessed and used.



**Structural Typing**

TypeScript uses a **structural typing** system. This means that when the compiler compares two types to determine whether they are compatible, it only looks at the shape of the data -- their properties and the types of those properties -- rather than comparing the names of the types. Let's take a look at an example:

```ts
type Student = { name: string; age: number };
type Employee = { name: string; age: number };

const jane: Student = { name: "Jane Smith", age: 30 };
const engineer: Employee = jane; // ok
```

In this example, we have two type aliases: `Student` and `Employee`. Both of these types have the same shape, consisting of two properties: `name` of type `string` and `age` of type `number`. These types are equivalent from a structural typing perspective since they have the same properties with the same types.

This means that TypeScript considers `Student` and `Employee` types to be interchangeable.

- You cannot use comparisons like `Student === Employee` in TypeScript or JavaScript because types in TypeScript are not available at runtime—they are purely a compile-time construct.

  - **TypeScript Types:** Types in TypeScript are used by the compiler to check the correctness of the code during development. Once the code is compiled to JavaScript, these types are erased, and they do not exist in the runtime JavaScript code.

    **Runtime Comparisons:** In JavaScript, you can only compare values or objects that exist at runtime. Since `Student` and `Employee` are TypeScript type aliases and not actual JavaScript objects or values, you cannot directly compare them using `===` or any other operator.

There are some important details to TypeScript's structural typing rules. If we have two types, `TypeA` and `TypeB`, then `TypeB` is assignable to `TypeA` if it has **at least the same members (properties and property types) as TypeA**. In other words, `TypeB` can have *additional properties* that aren't available on TypeA, but as long as it has the same properties as `TypeA`, then it is assignable:

In the above example, the variable `jane` is assignable to the `Employee` type because it has the required members `name` and `age`. Although it has an additional property, `gpa`, it is still a valid assignment. However, the reverse is not true. `manager` cannot be assigned to the `Student` type because it is missing a required property, `gpa`.

Finally, we see that we can no longer access the `gpa` property on the `engineer` object. This might be surprising, because we've assigned an object, `jane`, that has a `gpa` property to `engineer`. However, because the `Employee` type does not have a `gpa` property, that property is no longer accessible from the perspective of TypeScript's compiler.

```js
type Student = { name: string; age: number; gpa: number };
type Employee = { name: string; age: number };

const jane: Student = { name: "Jane Smith", age: 30, gpa: 4.0 };
const engineer: Employee = jane; // still ok

const manager: Employee = { name: "Helen Jones", age: 40 };
const helen: Student = manager; // Property 'gpa' is missing in type 'Employee' but required in type 'Student'.

console.log(engineer.gpa); // Property 'gpa' does not exist on type 'Employee'.

```

So this is weird. It can assign it with an extra property, but it will raise a compiler error and not be accessible.



**Structural Typing and assignment**

Another weird thing is that you can do variable assignement with extra properties but you cant assign an object literal to a type with missing properties

```ts
type Employee = { name: string; age: number };
const jane: Employee = { name: "Jane Smith", age: 30, gpa: 4.0 }; // Type '{ name: string; age: number; gpa: number; }' is not assignable to type 'Employee'.
// Object literal may only specify known properties, and 'gpa' does not exist in type 'Employee'.
```

TypeScript prevents us from assigning an object literal with additional properties to a type with fewer properties. This makes some intuitive sense: it would be strange to define a variable of a given type with properties that aren't available on that type. The TypeScript compiler assumes that this is an error.



While a structural typing system allows for greater flexibility, there are some cases where it can cause unintended issues. Consider the following example:

```ts
type Animal = { color: string; legs: number };
type Table = { color: string; legs: number };

const bear: Animal = { color: "brown", legs: 4 };
const diningTable: Table = bear;
```

In this case, while `Animal` and `Table` have compatible properties, it is likely that we don't want to treat these types as equivalent and assignable to each other. In a future lesson, we will explore some of the methods we can use to discriminate between types with overlapping properties.

In summary, TypeScript's structural typing system checks whether a type has all the required properties of another type to determine whether one type is assignable to another. If a type has all the properties of another type plus additional properties, it is considered a *valid subtype* of that type. The structural typing system allows for greater flexibility in our use of types throughout an a

- **Subtype**: A type with all the properties of another type (supertype) and potentially more properties.
- **Supertype**: A more general type that other types (subtypes) can extend or be assigned to.

**`Fruit` and `Apple` Relationship**:

- **`Apple`** is a subtype of **`Fruit`**, not a subset. `Apple` includes all properties of `Fruit` (i.e., `name` and `color`) and adds an additional property (`variety`).

**Subtypes and Supertypes**:

- **Subtype (Apple)**: A type that extends or refines another type (the supertype) with additional properties.
- **Supertype (Fruit)**: A more general type that d
- Structural typing in TypeScript is central to understanding the relationship between subtypes and supertypes, as it determines type compatibility based on the shape of the types rather than their explicit names or declarations. Here’s how structural typing relates to subtypes and supertypes:efines a basic structure that subtypes (like `Apple`) build upon.

**Practice Problems with Structural Typing**

Error?

```ts
type Fruit = {
  name: string;
  color: string;
};

type Apple = {
  name: string;
  color: string;
  variety: string;
};

function describeFruit(fruit: Fruit): string {
  return `${fruit.name} is a ${fruit.color} fruit.`;
}

const goldenDelicious: Apple = {
  name: "Golden Delicious",
  color: "yellow",
  variety: "apple",
};

console.log(describeFruit(goldenDelicious));
```

```ts
type Fruit = {  //so this is a superset of apple
  name: string;
  color: string;
};

type Apple = {  //so this is a subset of apple
  name: string;
  color: string;
  variety: string;
};

//variables assigned to an object with more properties can be assigned to 
//Fruit but these are no longer accessible, but not vise versa
//also object literals with less properties than the superset cannot be assigned to the 
//superset type 

function describeFruit(fruit: Fruit): string {
  return `${fruit.name} is a ${fruit.color} fruit.`;
}

const goldenDelicious: Apple = {
  name: "Golden Delicious",
  color: "yellow",
  variety: "apple",
};

console.log(describeFruit(goldenDelicious)); //we are passing in an argumment with 
//more properties than the allowed type. This is ok bc we are 
//assigning the argument to the parameter variable 
```

No, we're all good.

The `Apple` type includes all properties required by the `Fruit` type (`name` and `color`), as well as an additional property (`variety`). This structural compatibility ensures that any object of type `Apple`, such as the `goldenDelicious` object, meets the criteria to be used wherever a `Fruit` type is expected. As a result, `goldenDelicious` can be passed as an argument to the `describeFruit` function without any issues, thanks to TypeScript's use of structural typing to evaluate type relationships.





2. Given the following TypeScript code, are there any type errors? If so, identify them.

   

   ```ts
   type Alien = { name: string; planet: string; age: number };
   type Human = { name: string; country: string; age: number };
   
   const et: Alien = { name: "E.T.", planet: "Unknown", age: 120 };
   const john: Human = et;
   ```

```ts
type Alien = { name: string; planet: string; age: number };
//Alien has 3 properties: name, planet, and age 

type Human = { name: string; country: string; age: number };
//Human has 3 properties: name, country, and age 

const et: Alien = { name: "E.T.", planet: "Unknown", age: 120 };
const john: Human = et;

//we are attempting to do variable assignement here where we assign john 
//to et. et is of type Alien while john is of type human
//this would mean that the object assigned to john would have 
//name and age, but not country and an extra property planet
//having an extra property is ok bc we can assign using structural typing 
//where you can assign to supersets. BUT we are missing a property country
//which will cause a compiler error TYPE ERROR
```

There is a type error in this TypeScript code. When we try to assign the `et` object of type `Alien` to the `john` object of type `Human`, TypeScript's <u>structural typing system</u> notices that the `Alien` type does not have the `country` property required by the `Human` type.

Even though `Alien` and `Human` both have `name` and `age` properties with the same types, `Human` has a `country` property that `Alien` does not have, so `Alien` cannot be assigned to `Human`.

In TypeScript's structural typing system, one type is assignable to another if it has at least the same members (properties and property types) as the other type. In this case, `Alien` does not have all the members of `Human`, and thus cannot be assigned to it.

3. ```ts
   type Shape = { color: string; sides: number };
   type Square = { color: string; sides: number; sideLength: number };
   
   const redSquare: Square = { color: "red", sides: 4, sideLength: 5 };
   const shape: Shape = redSquare;
   
   console.log(shape.sideLength);
   ```

   Are there any type errors in this code? If so, identify them. And what will be the output of the `console.log` statement?

```ts
type Shape = { color: string; sides: number };
//So here we have a type being assigned. We have the properties: color and sides
//This is a supertype of SQUARE


type Square = { color: string; sides: number; sideLength: number };
//Here we have a type being assigned. We have the properties color, sides, and sideLength
//This is a subtype of SHAPE 


const redSquare: Square = { color: "red", sides: 4, sideLength: 5 };
//Here we have a variable redSquare being assigned to an object with 
//3 properties: color, sides, and sideLength
//We are assigning it to a Square type and it checks out

const shape: Shape = redSquare;
//Here we are using variable assignement to assign the variable shape 
//to the object assigned to redSquare and we are assigning it to type Shape 
//Because Shape is a supertype of the subtype Square we are good
//BUT the sideLength property will be inaccessible! 

console.log(shape.sideLength);
```

1. Yes, there is a type error in this code. The error is in the `console.log(shape.sideLength)` statement.

   Copy Code

   ```plaintext
   Property 'sideLength' does not exist on type 'Shape'.
   ```

   This is because `Shape` type does not include a `sideLength` property, while the `shape` variable references the `redSquare` object that does have a `sideLength` property. From TypeScript's perspective, `shape` does not have a `sideLength` property, which is why accessing `shape.sideLength` results in a type error.

   However, this type error will not prevent the JavaScript runtime from successfully logging the value of `shape.sideLength`. This is because at runtime, TypeScript types do not exist and `shape` is an object that does have a `sideLength` property.

   So, despite the type error, the output of the `console.log(shape.sideLength)` statement will be `5`. This illustrates an important distinction between compile-time type errors and runtime behavior in TypeScript.



**Optional Properties**

In TypeScript, optional properties are a way to define properties on an interface that are not required to be present. This can be useful in situations where certain properties may be present or not, depending on the use case.

This definition would require all three properties to be present on any object that is of the `Person` interface. However, what if we have a use case where we don't always have an email address for a person? In this case we would need to define `email` as `string | undefined`.

```ts
interface Person {
  name: string;
  age: number;
  email: string | undefined;
}

//OR BETTER
interface Person {
  name: string;
  age: number;
  email?: string;
}
```

The `?` character makes the `email` property optional, meaning it may or may not be present on an object of the `Person` interface.

Optional properties can be especially useful when working with APIs that may not always return the same properties for every response. For example, let's say we're working with an API that returns data about users. Some users may have a phone property, while others don't. We could define our `Person` interface like this:

```ts
interface Person {
  name: string;
  email: string;
  phone?: string;
}
```

Another use case for optional properties is when defining configuration objects. Let's say we have a function that takes an object as a parameter to configure its behavior:

```ts
function configure(options: { timeout: number; retries: number }) {
  // ...
}
```

In this case, both the timeout and retries properties are required. However, what if we have a use case where we don't always want to specify both properties? We could make them optional like this:

```ts
function configure(options: { timeout?: number; retries?: number }) {
  // ...
}
```

This way, we can call the configure function with only the properties we want to specify, without having to provide both every time.

Optional properties in TypeScript help us write more flexible and concise code. By allowing properties to be optional, we can handle different use cases without sacrificing code readability or maintainability.

**Practice Optional Parameters**

1. Consider the following interface definition that utilizes optional properties:

```ts
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}
```

Implement a function `displayUserInfo` that takes a `UserInfo` object and returns a formatted string containing the user's information. For optional properties, display a default value (use "N/A" for `email` and "unknown" for `age`) if they are not provided.

```ts
function displayUserInfo(userInfo: UserInfo): string {
  // Your implementation here
}
```

```js
interface UserInfo {
  name: string;
  email?: string;
  age?: number;
}

function displayUserInfo(userInfo: UserInfo): string {
  let email = userInfo.email || 'N/A'
  let age = userInfo.age || 'unknown'
  let str = `The user's name is ${userInfo.name} with email ${email} and age ${age}`
  console.log(str)
  return str
}

displayUserInfo( {
  name: "bob",
  email: "bob@gmail.com",
  age: 50
}
)
displayUserInfo( {
  name: "sam",
  age: 50,
}
)
displayUserInfo( {
  name: "nancy",
  email: "nancy@gmail.com",
}
)

//or 

function displayUserInfo(userInfo: UserInfo): string {
  const email = userInfo.email ? userInfo.email : "N/A";
  const age = userInfo.age ? userInfo.age : "unknown";

  return `Name: ${userInfo.name}, Email: ${email}, Age: ${age}`;
}
```

This implementation ensures that even if the optional properties are not provided, the function will still return a properly formatted string with default values for the missing properties.



**readonly Properties**

In TypeScript, readonly properties are used to create properties that can only be set once during initialization and cannot be modified afterward. Once the value of a readonly property is set, it cannot be changed throughout the object's lifetime.

```ts
interface InterfaceName {
  readonly propertyName: propertyType;
}
```

*Side Note about JS's built in ways to make a property readonly*

In TypeScript, you have the advantage of using type annotations and utility types to declare properties as `readonly` directly within the type or interface definitions. This approach integrates well with TypeScript's static type checking and provides compile-time guarantees about immutability.

In JavaScript, you would use runtime techniques such as `Object.defineProperty()` or `Object.freeze()` to enforce immutability at runtime.

### TypeScript: Using `readonly`

In TypeScript, you can specify that a property is `readonly` using the `readonly` modifier in type definitions. This prevents reassignment of the property but does not enforce immutability at runtime.

#### Example:

```
typescript
Copy code
type Person = {
  readonly name: string;
  readonly age: number;
};

const person: Person = {
  name: "Alice",
  age: 30,
};

// person.name = "Bob"; // Error: Index signature in type 'Person' only permits reading property 'name'
```

### JavaScript: Using Runtime Techniques

In JavaScript, you enforce immutability at runtime using techniques like `Object.defineProperty()` or `Object.freeze()`. These methods ensure that properties are read-only at runtime but do not provide compile-time type checking.

#### Example with `Object.defineProperty()`:

```
javascript
Copy code
const obj = {};

Object.defineProperty(obj, 'readOnlyProp', {
  value: 42,
  writable: false, // Make the property read-only
  enumerable: true,
  configurable: true
});

console.log(obj.readOnlyProp); // 42

obj.readOnlyProp = 100; // This will not change the value
console.log(obj.readOnlyProp); // 42
```

#### Example with `Object.freeze()`:

```
javascript
Copy code
const obj = {
  readOnlyProp: 42
};

Object.freeze(obj);

console.log(obj.readOnlyProp); // 42

obj.readOnlyProp = 100; // This will not change the value
console.log(obj.readOnlyProp); // 42
```

### Combining TypeScript and JavaScript Techniques

- **TypeScript**: Use `readonly` to define immutability at the type level. This provides compile-time checks and helps maintain immutability in code.
- **JavaScript**: Use runtime techniques like `Object.defineProperty()` or `Object.freeze()` to enforce immutability at runtime, ensuring that property values cannot be changed.

### Summary

- **In TypeScript**, use the `readonly` modifier to declare properties that should not be reassigned, benefiting from static type checking.
- **In JavaScript**, use runtime techniques to make properties read-only to enforce immutability at runtime.

Combining both approaches allows you to leverage TypeScript’s type system for compile-time checks and JavaScript’s runtime capabilities for enforcing immutability.



*Why is readonly useful*

Readonly properties are useful in real-life scenarios such as:

- Configuration objects: Readonly properties can be used to define configuration objects where some properties are intended to remain constant. While readonly is a compile-time check and doesn't enforce immutability at runtime, it helps catch errors during development when a modification is attempted.

  - For example, let's say you have a configuration object with a `readonly` property called `apiUrl` that should be set during initialization and not be changed afterward:

  - ```ts
    interface Configuration {
      readonly apiUrl: string;
      debugMode: boolean;
    }
    
    const config: Configuration = {
      apiUrl: "https://api.example.com",
      debugMode: false,
    };
    
    config.apiUrl = "https://api.test.com"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
    config.apiUrl = "https://api.test.com"; // Error: Cannot assign to 'apiUrl' because it is a read-only property.
    config.debugMode = true; // Okay: 'debugMode' is not a readonly property and can be modified.
    ```

  - In the above example, we have defined a configuration object with two properties: `apiUrl` and `debugMode`. The `apiUrl` property is readonly and cannot be modified at runtime.

- Constants: Readonly properties can be used to define constants in your application.

- Database entity classes: Readonly properties can be used to define primary keys or other immutable properties of a database entity class.

  ```ts
  interface User {
    readonly id: number;
    name: string;
    email: string;
  }
  
  const user: User = { id: 123, name: "John Doe", email: "johndoe@example.com" };
  
  user.id = 456; // Error: Cannot assign to 'id' because it is a read-only property.
  user.name = "Jane Doe"; // Okay: 'name' is not a readonly property and can be modified.
  user.email = "janedoe@example.com"; // Okay: 'email' is not a readonly property and can be modified.
  ```

  In the above example, the `id` property is readonly and cannot be modified at runtime, while the `name` and `email` properties can be modified.

If the property is assigned to an object or an array then it can be mutated.

You have to do this: 

```ts
interface User {
  readonly address: { readonly street: string; readonly city: string };
}

const user: User = {
  address: { street: "123 Main St", city: "Anytown" },
};

user.address.street = "999 Main St"; // Cannot assign to 'street' because it is a read-only property.
```

If we need runtime protection from object mutation, we can freeze the object using the `Object.freeze()` method. Here's an updated example:

```js
const user: User = {
  address: Object.freeze({ street: "123 Main St", city: "Anytown" }),
};
```

**ReadonlyArray**

TypeScript provides a special type called `ReadonlyArray` to type arrays that can't be mutated. Elements in a `ReadonlyArray` cannot be changed, added, or removed without the compiler raising an error. In addition, `ReadonlyArray`s do not have the typical methods available to mutate arrays like `push`, `pop`, or `shift`.

```ts
type Person = {
  name: string;
  hobbies: ReadonlyArray<string>;
};

const person: Person = { name: "John", hobbies: ["reading", "running"] };

person.hobbies.push("swimming"); // Error: Property 'push' does not exist on type 'readonly string[]'.

person.hobbies[1] = "cooking"; // Index signature in type 'readonly string[]' only permits reading.
```

`ReadonlyArray` is particularly useful when typing arrays that are function parameters to ensure that the contents of the array are not modified by the function.

```js
type Student = {
  id: number;
  name: string;
};

const students: ReadonlyArray<Student> = [
  { id: 1, name: "Karis" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Victor" },
];

// Function receives a ReadonlyArray and returns a ReadonlyArray
function getStudentNames(
  students: ReadonlyArray<Student>
): ReadonlyArray<string> {
  return students.map((student) => student.name);
}

const names = getStudentNames(students);
console.log(names); // Output: ['Karis', 'Pete', 'Victor']

// Trying to modify the students array or the returned array will cause a TypeScript error
students.push({ id: 4, name: "David" }); // Error: Property 'push' does not exist on type 'readonly Student[]'
names.push("Jessica"); // Error: Property 'push' does not exist on type 'readonly string[]'
```

**Definition**: `ReadonlyArray<T>` is a TypeScript utility type that makes arrays immutable. This means that you cannot modify the array’s structure or its elements.

​	-`ReadonlyArray<Student>` is essentially a way of making an array of `Student` objects immutable. It serves as a read-only version of the `Student[]` type. Here’s a more detailed comparison: Think Array<number> is the same as number[]

**Key Characteristics**:

- You can read elements from the array, but you cannot change, add, or remove elements.
- Methods that modify the array, such as `push`, `pop`, `splice`, etc., are not available on `ReadonlyArray`.

The TypeScript compiler also raises an error if you try to assign a `ReadonlyArray` to a regular `Array` type:

```ts
const students: ReadonlyArray<Student> = [
  { id: 1, name: "Karis" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Victor" },
];

function getStudentNames(students: Array<Student>) {
  return students.map((student) => student.name);
}

const names = getStudentNames(students); // Argument of type 'readonly Student[]' is not assignable to parameter of type 'Student[]'.
// The type 'readonly Student[]' is 'readonly' and cannot be assigned to the mutable type 'Student[]'
```

However, the compiler allows you to assign a regular array to a `ReadonlyArray`:

```ts
const students: Array<Student> = [
  { id: 1, name: "Karis" },
  { id: 2, name: "Pete" },
  { id: 3, name: "Victor" },
];

function getStudentNames(students: ReadonlyArray<Student>) {
  return students.map((student) => student.name);
}

const names = getStudentNames(students); // ok

```

**RULE**- regular array assigned to readonly is ok, readonly to regular is not 

Readonly properties are properties that can only be set once during initialization and cannot be modified afterward without raising an error with the TypeScript compiler. They provide a way to define constants or immutable properties in your application, which can help prevent bugs and make your code more reliable.

Although developers coming from a JavaScript background tend to skip adding `readonly` to the properties of their types, we would encourage you to think carefully about whether each property's value should change over the course of a program's execution. If not, adding `readonly` will help you uncover and prevent serious issues later on.

Remember, when a `readonly` property points to an object or array, keep in mind that the `readonly` protection only applies to the reference to the object, not the object's properties. To ensure that the object cannot be mutated, you should mark the object's properties as `readonly`. To ensure an array cannot be mutated, use the `ReadonlyArray` type.



**Practice Readonly Properties**

1. Consider the following interface definition that utilizes readonly properties:

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
```

Create a function `movePoint` that takes a `Point` object, a `dx` value, and a `dy` value, and returns a new `Point` object with `dx` and `dy` added to its `x` and `y` coordinates.

For example, calling `movePoint({x: 3, y: 4}, 2, 2)` should return a `Point` object with `x` as 5 and `y` as 6.

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}

function movePoint(point: Point, dx: number, dy: number): Point {
  console.log({x: point.x + dx, y: point.y + dy})
  return {x: point.x + dx, y: point.y + dy}
}

movePoint({x:3, y: 4}, 2, 2)
```

This implementation respects the readonly properties of the `Point` interface, as it does not attempt to modify the original object. Instead, it creates a new `Point` object with the updated coordinates.

**Type Assertion**

Sometimes we know more about a value's type than the TypeScript compiler does. In these cases, we can use a feature called **type assertions** to force the compiler to treat a value as a given type. Here's a basic example:

```ts
function getDataFromFile(): unknown {
  return "this is a string";
}

let someValue = getDataFromFile() as string;
let strLength: number = someValue.length;
```

**Classes**

In JavaScript, the `class` keyword is syntactic sugar that simplifies the creation of object constructors and the handling of inheritance using a pseudo-classical model. TypeScript supports the `class` keyword and adds a layer of type safety to the properties and methods defined on a class.

```ts
class Point {
  x = 0; // instance property 'x' of type number
  y = 0; // instance property 'y' of type number
}
```

is a valid TypeScript code snippet, and it is equivalent to the following TypeScript code:

```ts
class Point {
  x: number;
  y: number;

  constructor() {
    this.x = 0;
    this.y = 0;
  }
```

in TypeScript, when you define a class, you typically declare type annotations for the class properties before defining the constructor or any methods. This allows TypeScript to know the types of the properties upfront, providing better type checking and autocomplete support.

The type can be inferred throught the constructor, BUT declaring a type annotation leads to more clarity, consistency and readability. 

- **Typing the constructor method**: The constructor method in a class can take typed parameters. Note that you should not provide a return type for the constructor method; the return type is always an instance of the class itself.
- **Typing instance methods**: Class methods are typed in the same way we type function declarations. We can add types to the parameters and return value of the method.
- Remember that classes in JavaScript are templates for the creation of objects. In TypeScript, we have another way to describe the shape of objects: interfaces and type aliases. That means we can use an interface to describe the properties and methods on a class. Then, we can use the `implements` keyword to ensure that that class meets the shape of the interface.

Using an interface to descibe the shape of a class

```ts
interface Animal {
  name: string;
  makeNoise(): string;
}
```

Let's create a `Dog` class that implements the `Animal` interface:

```ts
class Dog implements Animal { //use this syntax 
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeNoise(): string {
    return `${this.name} says Woof!`;
  }
}

const fido = new Dog("Fido");
console.log(fido.makeNoise()); // Outputs: "Fido says Woof!"
```

if we forget anything in the type annotation we will get a compile time error 

It is important to clarify that `implements` doesn't directly add type information to the properties or methods of the class. Instead, think of `implements` as a contract between the class definition and the interface. In order to fulfill the contract, you have to explicitly add the correct type information to the properties and methods.

*Subclasses with `extends`*

In JavaScript, subclasses can inherit properties and methods from superclasses by using the `extends` keyword. TypeScript supports subclasses and inheritance with `extends`. In the following example we create a class `Person`, and a subclass `Student` that inherits the methods and properties of `Person`:



**extends** *keyword*

- When used with classes in JS it executes at runtime.

  - ```ts
    class Person {
      name: string;
      age: number;
    
      constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
      }
    
      sayName(): void {
        console.log(`My name is ${this.name}.`);
      }
    }
    
    class Student extends Person {
      semester: string;
    
      constructor(name: string, age: number, semester: string) {
        super(name, age);
        this.semester = semester;
      }
    
      enrollInCourse(courseNumber: string): void {
        console.log(`${this.name} has enrolled in course ${courseNumber}.`);
      }
    }
    ```

- When used with interfaces it executes at compile time

  - ```ts
    interface Person { //supertype
      name: string;
      age: number;
    }
    
    interface Student extends Person { //subtype
      semester: string;
    }
    ```

 in TypeScript, when an interface like `Student` extends another interface like `Person`, it must adhere to the type annotations of the parent interface.

A subclass is always a subtype of its base class. In other words, an instance of type `Subclass` must be assignable to a variable of type `ParentClass`:

​	- this makes sense bc a parent is like a supertype or the subtype child 

- **Subclass**: A class that extends another class (also called the child class). It inherits properties and methods from the base class (also called the parent class).
- **Base Class (Parent Class)**: The class that is extended by the subclass. It can be considered a supertype.

A subclass is always a subtype of its base class. This means that an instance of the subclass can be used wherever an instance of the base class is expected.

This relationship allows for polymorphism, where a base class reference can hold an object of any subclass.

In TypeScript (and many other programming languages), an instance of a subclass is assignable to a variable of the base class type. This is due to the fact that the subclass inherits the properties and methods of the base class, ensuring compatibility. In TypeScript (and JavaScript), if you extend a class and do not call `super` in the constructor of the subclass, you'll encounter an error. This is because the `super` call is required to properly initialize the base class.

Here, we've assigned an instance of subclass `Student` to a variable of type `Person`. This is valid because `Student` shares all the same members of `Person`. As we know from our lesson on structural typing, `TypeB` is assignable to `TypeA` if it has at least the same members as `TypeA`.

- Lets try to override a property of a superclass.. We will update Student.prototype.sayName to require a string argument and ts will raise an error at compile time.

  ```ts
  class Person {
    // ...previous implementation
  
    sayName(): void {
      console.log(`My name is ${this.name}.`);
    }
  }
  
  class Student extends Person {
    // ...previous implementation
  
    sayName(friend: string): void {
      // Property 'sayName' in type 'Student' is not assignable to the same property in base type 'Person'.
      // Type '(friend: string) => void' is not assignable to type '() => void'.
      console.log(`Hi ${friend.toUpperCase()}!! My name is ${this.name}.`);
    }
  }
  
  let person: Person = new Student("Kim", 22, "Fall");
  person.sayName(); // Would crash at runtime
  ```

  The compiler raises an error because there is a mismatch between the method signatures of `sayName`. To highlight the problem, let's demonstrate the type mismatch if we were to encounter it outside of class inheritance:

```ts
type PersonSayName = () => void;

let sayName: PersonSayName = (friend: string) =>
  console.log(`Hi ${friend.toUpperCase()}!!`); // Type '(friend: string) => void' is not assignable to type 'PersonSayName'
```

Without resolving the compiler error, the program would crash when the method is invoked without an argument. In order to resolve the issue, the `sayName` method in `Student` needs to be assignable to the `sayName` method in `Person`. We can achieve this by updating `Student.prototype.sayName` to take `friend` as an optional argument:

```ts
class Person {
  // ...previous implementation

  sayName(): void {
    console.log(`My name is ${this.name}.`);
  }
}

class Student extends Person {
  // ...previous implementation

  sayName(friend?: string): void {
    if (typeof friend === "string") {
      console.log(`Hi ${friend.toUpperCase()}!! My name is ${this.name}.`);
    } else {
      super.sayName();
    }
  }
}

let student = new Student("Kim", 22, "Fall");
student.sayName("Jerry"); // logs 'Hi JERRY!! My name is Kim.'

let person: Person = new Student("Kim", 22, "Fall");
person.sayName(); // 'My name is Kim.'
```

This is interesting! If we give it an option to run the super method without an argument than it works fine!

- We used a combination of `friend?` to provide an optional argument and hten also an `if..else` conditional to call something different if its provided 



**The `private` Property Modifier**

By default, class properties and methods are public; they can be accessed outside of the class implementation. With ES2020, JavaScript has introduced a syntax to mark class properties as private by adding the `#` prefix before the field name. Private members of a class cannot be accessed outside of the class implementation:

By default, class properties and methods are public; they can be accessed outside of the class implementation. With ES2020, JavaScript has introduced a syntax to mark class properties as private by adding the `#` prefix before the field name. Private members of a class cannot be accessed outside of the class implementation:

```js
class Animal {
  #species = "I am private";

  constructor(species) {
    this.#species = species;
  }
  printPrivateProperty() {
    console.log(`I am a private ${this.#species}`);
  }
}

const myCat = new Animal("Cat");
myCat.printPrivateProperty(); // 'I am a private Cat'
console.log(myCat.#species); // SyntaxError: Private field '#species' must be declared in an enclosing class

I had to run npx tsc hello.ts --target ES2022 to get this to work 
```

Note that the private class properties are truly private, in that they're not just hidden or obfuscated - the JavaScript runtime enforces their privacy.

However, in the Chrome console private properties can be accessed outside the class. This is a DevTools-only relaxation of the JavaScript syntax restriction.

TypeScript was developed several years before this feature became available in JavaScript, and TypeScript's developers wanted a way to declare private class properties enforced at compile-time. Hence, TypeScript also has the `private` keyword.

```ts
class Animal {
  private type: string;

  constructor(type: string) {
    this.type = type;
  }

  printPrivateProperty() {
    console.log(`I am a private ${this.type}`);
  }
}

const myCat = new Animal("Cat");
myCat.printPrivateProperty(); // 'I am a private Cat'
console.log(myCat.type); //  Property 'type' is private and only accessible within class 'Animal'.
```

The `private` keyword enforces privacy at compile-time, but not during runtime. Unfortunately, the `private` keyword and `#` property modifier can't be used together. Which one you choose ultimately comes down to the level of privacy you require at runtime.

It's worth noting that `private` fields should be used carefully, as they can limit the flexibility of your code and make it more difficult to test. They can also add overhead to your program, as each instance of the class will need to create its own copy of the `private` field. However, in cases where encapsulation and preventing accidental access to internal state is important, `private` fields can be a useful tool.



*SUMMARY*

Classes allow us to create reusable blueprints for objects with shared properties and methods, providing a structured and modular way to organize our code. TypeScript supports the typing of class properties and methods, both directly and via the `implements` keyword. It also provides access modifiers like `private` to control the visibility of properties and methods within a class hierarchy.

When extending a class in TypeScript, it's important to maintain the same method signatures in order to ensure that the child class is substitutable for the parent class. Violating this principle can lead to type errors and unexpected behavior in your code.

Finally, while `private` fields can be useful for encapsulation and preventing accidental access to internal state, they should be used with caution as they can limit the flexibility of your code and make it more difficult to test.



**Practice Problems**

1. Consider the following TypeScript class `Person`. Will this class definition result in a type error or execute without any issues?

```ts
class Person {
  age?: number;
  name: string;

  constructor(age?: number, name: string) {
    this.name = name;
    this.age = age;
  }
}
```

This class definition will result in a type error. The error occurs because the constructor function has the optional `age` parameter before the required `name` parameter. In TypeScript, optional parameters must follow required parameters. To fix the error, we should change the order of the parameters in the constructor function:

```ts
class Person {
  age?: number;
  name: string;

  constructor(name: string, age?: number) {
    this.name = name;
    this.age = age;
  }
}
```



2. Consider the following TypeScript code:

```ts
interface Movable {
  speed: number;
  move(): void;
}
```

Please create a `Car` class that implements the `Movable` interface. Ensure the `move` method outputs a message to the console.

```ts
interface Movable {
  speed: number; 
  move(): void;
}

class Car implements Movable {
  speed: number; 

  constructor(speed: number) {
    this.speed = speed;
  }

  move(): void {
     console.log(`${this.speed}`)
  }
}

let newCar = new Car(60) 

newCar.move()
```

 this `Car` class, we implement the `Movable` interface by defining a `speed` property and a `move` method. The `speed` property is set through the constructor when a new `Car` object is created. The `move` method logs a message to the console indicating the speed at which the car is moving.

**SUMMARY**

This lesson has explored how to represent more complex data types in TypeScript by defining type aliases and interfaces. We've also demonstrated how TypeScript's structural typing rules determine the assignability of one object to another. Structural typing is fundamental to understanding many other behaviors of TypeScript over the remainder of the course, so re-read that assignment if you have any fuzziness about the concept.

In our next lesson, we will move from defining single complex types, to creating types that can represent a multitude of possible types.



**Union Types and Type Guards**

There are some situations where a value could be one of multiple acceptable types. One way we can represent this is by using **type unions**, which allow us to define a type that can be one of several different types.

```ts
type Status = "success" | "warning" | "error";

function setStatus(status: Status) {
  // ...
}

setStatus("success"); // OK
setStatus("pending"); // Type error: Argument of type '"pending"' is not assignable to parameter of type 'Status'.
```

We can use union types in any situation where we can use other types. For example, we can use union types as function parameters and return types:

```ts
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Not an array!";
  }
}
```

We can also create union types with objects. For example, we can define a type that represents either a `Dog` or a `Cat` like this:

```js
type Dog = { breed: string; age: number };
type Cat = { breed: string; age: number; whiskerLength: number };

type Pet = Dog | Cat;
```



**Assignability**

Assignability in TypeScript refers to the process of determining whether a value of one type can be assigned to a variable or parameter of another type. TypeScript checks for assignability to ensure type safety at compile time.

When discussing assignability, developers sometimes refer to "narrow" and "wide" types to describe how specific or general a type is. A **narrow type** is more specific and represents a smaller set of possible values, whereas a **wide type** is more general and represents a larger set of possible values.

Assignability comes into play when you try to assign a value of one type to a variable of another type. In general, you can assign a value of a narrower type to a variable of a wider type without issues, as long as the wider type can accommodate all values of the narrower type. However, the reverse is not true: assigning a value of a wider type to a variable of a narrower type will cause a type error.

```ts
function assignValueToMyString(myUnion: string | boolean) {
  let myString: string;
  myString = myUnion; // Type 'string | boolean' is not assignable to type 'string'
}
```

Here we tried to assign a narrower string type to a wider string|boolean type. This results in an error. 

Put a type guard here: 

```ts
function assignValueToMyString(myUnion: string | boolean) {
  let myString: string;
  if (typeof myUnion === "string") {
    myString = myUnion; // This assignment is safe because we've checked that myUnion is a string
  }
}
```

Type guards are a technique that enables you to refine the type of a variable within a specific scope, providing more precise type information to the compiler. This ensures that your code is type-safe during runtime. Type guards are especially valuable when dealing with union types, as they help you ascertain the exact type of a value at a certain point in your code.

Type guards typically involve a conditional check using an if statement, which allows TypeScript to infer the type of the variable within that block. We will encounter several ways to write type guards over the course of the next two lessons, and the above example is one of the most common: a conditional with the `typeof` operator.



**Type Unions in Practice**

1) API responses: When working with APIs, we often need to handle different types of responses. For example, an API might return a JSON object that has a data property that can be either a `string` or an array of strings. We can represent this using a union type:

```ts
type ApiResponse = {
  data: string | string[];
};
```

2. Event Handlers:  In UI development, we often need to handle different types of events. For example, a button can be clicked, a form can be submitted, or a user can hover over an element. We can represent these events using a union type:

   ```ts
   type MyEventHandler = (event: MouseEvent | SubmitEvent | HoverEvent) => void;
   ```

3. Configuration: When creating a configuration object for a library or an application, we might have different options that can take different types. For example, we might have an option that can take a `boolean` or a `number.` We can represent this using a union type:

```ts
type MyConfig = {
  option1: boolean | number;
  option2: string | null;
};
```



In conclusion, union types in TypeScript allow us to define a type that can hold more than one type. This can be useful when we want to work with values that can have different types or when we want to create more flexible and reusable code. We can use union types to create more specific and narrow types, which can help catch errors early on and make our code more type-safe. Union types can be used with literals, primitives, and objects, and we can perform type guards to narrow down the types and work with them in a more specific way.



**Union Types and Objects**

As we introduced in the previous assignment, we can create union types with objects. For example, we can define a type that represents either a Dog or a Cat like this:

```ts
type Dog = {
  breed: string;
  age: number;
};

type Cat = {
  breed: string; 
  age: number; 
  whiskerLength: number;
};

type Pet = Dog | Cat; 
```

When using a union of objects, by default the TypeScript compiler will only allow us to access properties that are available on *all* of the objects.

```ts
type Dog = { breed: string; age: number };
type Cat = { breed: string; age: number; whiskerLength: number };

type Pet = Dog | Cat;

function meetPet(pet: Pet) {
  console.log(`This is a ${pet.age} year old ${pet.breed}`); //ok
  console.log(`My pet has whiskers ${pet.whiskerLength} inches long.`); // Property 'whiskerLength' does not exist on type 'Pet'.
  // Property 'whiskerLength' does not exist on type 'Dog'.
}
```

If we want to access any properties that are exclusive to the `Dog` or `Cat` type, we will need to specify which type of object in the union this variable belongs to. In other words, we need to use a *type guard* to narrow down the type of the object.

**`in` Keyword in JS**

```js
let something = {
    greeting: 'hi'
}

console.log("greeting" in something) //true
```

```ts
function meetPet(pet: Pet) {
  console.log(`This is a ${pet.age} year old ${pet.breed}`); //ok
  if ("whiskerLength" in pet) {
    console.log(`My cat has whiskers ${pet.whiskerLength} inches long.`);
  } else {
    console.log(`Dogs don't have whiskers.`);
  }
}

const rex: Pet = { breed: "Golden Retriever", age: 5 };
const pepe: Pet = { breed: "stray cat", age: 5, whiskerLength: 2 };

meetPet(rex); // Dogs don't have whiskers.
meetPet(pepe); // My cat has whiskers 2 inches long.
```

In this example, we add a type guard with a conditional that checks whether the `pet` parameter has a `whiskerLength` property using `in` operator. If the parameter has a `whiskerLength` property, the compiler determines that the type must be `Cat`, and therefore we can access any properties that are exclusive to the `Cat` type.



**Practice Problems Union Type**

1. Remember the last practice problem in lesson 1? We had separate functions `concatenateStrings` and `addNumbers` in the solution.

   ```ts
   function concatenateStrings(a: string, b: string): string {
     return a + b;
   }
   
   function addNumbers(a: number, b: number): number {
     return a + b;
   }
   
   const result = concatenateStrings("Hello", "World");
   const numericResult = addNumbers(1, 2);
   ```

   

   You're right that if a method is available to all members of a union type, TypeScript typically won't require type checking. However, the situation with the `+` operator is a bit special because `+` does different things depending on whether it's used with numbers or strings:

   - For numbers, `+` performs addition.
   - For strings, `+` performs concatenation.

   While both numbers and strings support the `+` operator, the result can vary widely depending on the types of the operands. TypeScript doesn’t automatically assume that the operands will behave in a consistent way because the operation's semantics change based on the types.

```ts
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const concatenated = combine("Hello, ", "World!"); // Returns "Hello, World!"
const added = combine(5, 10); // Returns 15
```

By utilizing type unions, we have made the code more versatile and capable of handling both string and number inputs within a single function.



**Function Overloads**

```ts
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Not an array!";
  }
}

const numberResult: number = getLengthOfArray(["a", "b", "c"]); // Type 'string | number' is not assignable to type 'number'.
// Type 'string' is not assignable to type 'number'.
const stringResult: string = getLengthOfArray("abc"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.
```

This error makes sense if we think about the return type of `getLengthOfArray`, which is `string | number`. As we know, we can't assign a wider type (`string | number`) to a narrower type (`string` or `number`).

We actually know more about the function implementation than the function's type signature currently represents. We know that if we pass an array to the function, the return type will be a `number`, not a `number | string`. Likewise, we know that if we pass a `string` to the function, the return type will be a `string`.

In essence, the function actually has two correct signatures, depending on the type of the argument. **Function overloads** help us express this relationship. Function overloads allow us to define multiple function signatures for the same function, each with different parameter and return types. Here's how we could refactor `getLengthOfArray` using function overloads:

```ts
function getLengthOfArray(value: string[]): number;
function getLengthOfArray(value: string): string;
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.length;
  } else {
    return "Not an array!";
  }
}

const numberResult: number = getLengthOfArray(["a", "b", "c"]); 
const stringResult: string = getLengthOfArray("abc"); 

//good to go! 
```

The first two signatures are the overload signatures for the function. These are the signatures that you can use to invoke the function. In this case, the parameters and return values are typed to express our intent: an array argument returns a `number`, and a `string` argument returns a `string`.

The bottom function signature is called the implementation signature, and it is considered 'private', meaning that its parameter and return types are not available to callers of the function. Importantly, **the overload function signatures must be compatible with the implementation signature.**

In order to be compatible:

1. Each parameter in an overload signature should have a corresponding parameter in the implementation signature
2. The overload parameter type should be assignable to the implementation parameter type
3. The overload return type should be assignable to the implementation return type

When using function overloads, you must have at least two overload signatures, but can have more.

*A Note of Caution with function overloaded*

Function overloads provide you with the ability to express the relationship between an argument type and a return type when your function takes many types of arguments. Unfortunately, there is a mistake we can make that the compiler won't catch:

```ts
function getLengthOfArray(value: string[]): number;
function getLengthOfArray(value: string): string;
function getLengthOfArray(value: string | string[]): number | string {
  if (Array.isArray(value)) {
    return value.toString(); // no error!
  } else {
    return "Not an array!";
  }
}

const numberResult: number = getLengthOfArray(["a", "b", "c"]);
console.log(numberResult); // "a,b,c"
```

The compiler ensures that the overload signatures are compatible with the implementation signature. And it makes sure that the function's implementation is compatible with the implementation's return type. However it doesn't validate that the function's implementation correctly implements the overload signatures. In this case, it doesn't validate that the function returns a `number` when a string array is passed in. The compiler assumes that the return value is a `number`, which means that if the implementation has an error (in this case it returns a string), then you can violate the type safety of your application.

### Summary

Function overloads provide us with the ability to return different return types based on our argument types. However, their inability to validate that the implementation of the function correctly matches each overload signature means they should be used with caution. In future assignments, we will learn about more techniques for expressing a function's return type in relation to its input type.

**Practice Problems: Function Overloads**

Let's build upon the previous practice problem from our Union Types assignment. There, we created a `combine` function that accepted union types as arguments. However, we receive an error when we try to add type annotations to those variables:

```ts
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  } else {
    throw new Error(
      "Invalid input types: both inputs must be strings or both inputs must be numbers."
    );
  }
}

const concatenated: string = combine("Hello, ", "World!"); // Type 'string | number' is not assignable to type 'string'.
// Type 'number' is not assignable to type 'string'.

const added: number = combine(5, 10); // Type 'string | number' is not assignable to type 'string'.
// Type 'string' is not assignable to type 'number'.
```

Refactor this code to use function overloads to resolve the errors.

```ts
// Function overloads
function combine(input1: string, input2: string): string;
function combine(input1: number, input2: number): number;
// Function implementation
function combine(
  input1: string | number,
  input2: string | number
): string | number {
  if (typeof input1 === "string" && typeof input2 === "string") {
    return input1.concat(input2);
  } else if (typeof input1 === "number" && typeof input2 === "number") {
    return input1 + input2;
  }
  throw new Error(
    "Invalid input types: both inputs must be strings or both inputs must be numbers."
  );
}

// Now, no errors:
const concatenated: string = combine("Hello, ", "World!");
const added: number = combine(5, 10);
```

With these function overloads, TypeScript understands that combine can take two strings and return a string or take two numbers and return a number. This matches up with the types we're trying to assign the results to (string and number, respectively), so there's no type error.



**Generics**

Generics in TypeScript allow us to define functions and classes that can work with a variety of data types, while still providing type safety at compile time. In contrast to union types, which allow us to define a type that can be one of several specific types, generics allow us to define a type that acts as a placeholder for a type that will be specified later. This allows us to write code that can work with a variety of different types, while still providing type safety.

A major part of software engineering is building components that not only have well-defined and consistent APIs, but are also reusable. Components that are capable of working on the data of today as well as the data of tomorrow will give you the most flexible capabilities for building up large software systems.

In languages like C# and Java, one of the main tools in the toolbox for creating reusable components is *generics*, that is, being able to create a component that can work over a variety of types rather than a single one. This allows users to consume these components and use their own types.

The identity function is a function that will return back whatever is passed in. You can think of this in a similar way to the `echo` command.

Without generics, we would either have to give the identity function a specific type:

```ts
function identity(arg: number): number {
  return arg;
}
```

Or, we could describe the identity function using the `any` type:

```ts
function identity(arg: any): any {
  return arg;
}
```

While using `any` is certainly generic in that it will cause the function to accept any and all types for the type of `arg`, we actually are losing the information about what that type was when the function returns. If we passed in a number, the only information we have is that any type could be returned.

*Type Variable*

Instead, we need a way of capturing the type of the argument in such a way that we can also use it to denote what is being returned. Here, we will use a *type variable*, a special kind of variable that works on types rather than values.

```ts
function identity<Type>(arg: Type)L Type {
  return arg;
}
```

We’ve now added a type variable `Type` to the identity function. This `Type` allows us to capture the type the user provides (e.g. `number`), so that we can use that information later. Here, we use `Type` again as the return type. On inspection, we can now see the same type is used for the argument and the return type. This allows us to traffic that type information in one side of the function and out the other.

We say that this version of the `identity` function is generic, as it works over a range of types. Unlike using `any`, it’s also just as precise (i.e., it doesn’t lose any information) as the first `identity` function that used numbers for the argument and return type.

Once we’ve written the generic identity function, we can call it in one of two ways. The first way is to pass all of the arguments, including the type argument, to the function:

```ts
let output = identity<string>("myString");
```

Here we explicitly set `Type` to be `string` as one of the arguments to the function call, denoted using the `<>` around the arguments rather than `()`.

The second way is also perhaps the most common. Here we use *type argument inference* — that is, we want the compiler to set the value of `Type` for us automatically based on the type of the argument we pass in:

```ts
let output = identity("myString");
```

When you begin to use generics, you’ll notice that when you create generic functions like `identity`, the compiler will enforce that you use any generically typed parameters in the body of the function correctly. That is, that you actually treat these parameters as if they could be any and all types.

```ts
function loggingIdentity<Type>(arg: Type): Type {
  console.log(arg.length);
Property 'length' does not exist on type 'Type'.
  return arg;
}
```

When we do, the compiler will give us an error that we’re using the `.length` member of `arg`, but nowhere have we said that `arg` has this member. Remember, we said earlier that these type variables stand in for any and all types, so someone using this function could have passed in a `number` instead, which does not have a `.length` member.

Let’s say that we’ve actually intended this function to work on arrays of `Type` rather than `Type` directly. Since we’re working with arrays, the `.length` member should be available. We can describe this just like we would create arrays of other types:

```ts
function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
} // the loggingIdentity function with a generic type parameter allows it to handle arrays of any data type. 
```

You can read the type of `loggingIdentity` as “the generic function `loggingIdentity` takes a type parameter `Type`, and an argument `arg` which is an array of `Type`s, and returns an array of `Type`s.” If we passed in an array of numbers, we’d get an array of numbers back out, as `Type` would bind to `number`. This allows us to use our generic type variable `Type` as part of the types we’re working with, rather than the whole type, giving us greater flexibility.



**Generic Functions**

In their simplest version, generics are best thought of as all-purpose placeholders for a type that can be specified later. To understand the benefit of this, let's look at an example function `first`, which returns the first element in an array of numbers:

```ts
function first(arr: number[]): number {
  return arr[0];
}

first([2, 4, 6]); // 2

//change to 
function first<Type>(arr: Type[]): Type {
  return arr[0];
}

first([2,4,6]); //2
```

```ts
function first(arr: number[] | string[]): number | string {
  return arr[0];
}

const element: string = first(["dog", "cat", "horse"]); // Type 'string | number' is not assignable to type 'string'. Type 'number' is not assignable to type 'string'
```

Surprisingly, the compiler raises an error here. The issue is that the return type of `first` is `string | number`, and we want to assign the return value to `element`, which is type `string`. As we learned in the earlier assignment on assignability, we cannot assign a wider type to a narrower type.

So we've encountered our first issue: there is a connection between the parameter type and the return type, but that isn't expressed when we define this function with union types. All the compiler knows is that `arr` could be an array of numbers or strings, and that the function will return a number or a string. It doesn't know that if a number array is passed as argument, the return type will definitely be a number.

```ts
function first(arr: Array<number | string>): number | string {
  return arr[0];
}

first([16, "cat", 32, "zebra"]);
```

Obviously, we can't individually represent all of the possible permutations of data types that an array can hold. One possible solution is to use the `any` type:

```ts
function first(arr: any[]): any {
  return arr[0];
}

first(["dog", "cat", "horse"]); // "dog";
first([true, false, false]); // true;
first([16, true, undefined]); // 16;
```

However, in doing so, we lose the type information about the return value. As we've learned, working with `any` is rarely the best approach, because the `any` type can be assigned to any other type. This is likely to lead to the sort of type errors we want to avoid:

```ts
function first(arr: any[]): any {
  return arr[0];
}

const myFavoriteNumber: number = first(["dog", "cat", "horse"]);
console.log(typeof myFavoriteNumber); // string
```

In the above code, the return type of `first` is `any`, so the TypeScript compiler allows it to be assigned to `myFavoriteNumber`, of type `number`. When the code executes, the actual return value of `first` will be a string, but using `any` as a return type has obscured that from the compiler. This will likely lead to runtime errors later in the application. so using any allows you to from broad to narrow without compiler issues which can cause runtime errors

```ts
function first<T>(arr: T[]): T {
  return arr[0];
}
```

`T` here is a generic type: consider it a kind of variable that works for types instead of values. This function can be used with any type `T`, which is determined by the caller of the function when it is invoked. That's why `T` is referred to as a generic parameter: it allows this function to work with different types while still preserving type safety.

The function takes one argument, `arr`, which is expected to be an array of some type `T`. The `T[]` type notation represents an array where each element is of type `T`.

The function returns a value of type `T`. In the function body, it returns the first element of `arr` (i.e., `arr[0]`). Since `arr` is of type `T[]`, it's guaranteed that `arr[0]` (if it exists) will be of type `T`, so this function return type is consistent.

So, the first time we call the function `first<number>(numArray)`, the TypeScript compiler follows these steps:

- The type `number` is "assigned" to the generic type `T`
- The parameter `arr` is defined as `T[]` so the compiler determines `arr` is an array of numbers
- The return value is typed as `T`, so the compiler knows that the function will return a `number`

**Practice Problems: Generic Functions**

```js
function identity<T>(arg: T): T {
  return arg;
}
```

Please write a TypeScript function called `pair` similar to the `identity` function above, it should accept two parameters of the same type and returns an array of that type.

Here's how `pair` behaves.

```ts
const pairOfNumbers = pair(1, 2); // returns [1, 2]
const pairOfStrings = pair("hello", "world"); // returns ["hello", "world"]
```

```ts
function pair<Type>(arg1: Type, arg2: Type): Type[] {
  return [arg1, arg2];
}
```



**Generic Objects**

```ts
type User<T> = {
  name: string; 
  age: T
}
```

In this example, we're using the `type` keyword to define our generic object. The `<T>` syntax is used to specify that the `age` property can be of any type. This means that we can create a user with an age of type `number`, `string`, or any other valid TypeScript type.

```ts
const user1: User<number> = {
  name: "Jonn", 
  age: 25,
};

const user2: User<string> = {
  name: "Jane", 
  age: "thirty"
};
```

As you can see in the above example, each time you define a new `User`, you can pass a different type argument to use as `T`.

You can use a single generic type for multiple properties within an object type. In this case, all properties will share that same type:

```ts
type Car<t> = {
  model: T; 
  year: T;
};

const car1: Car<string> = {
  model: "Mustang",
  year: "2021",
};

const car2: Car<number> = {
  model: 3, 
  year: 2021,
};

const car3: Car<string> = {
  model: "Accord", 
  year: 2021, // Type 'number' is not assignable to type 'string'.(2322)
  // The expected type comes from property 'year' which is declared here on type 'Car<string>'
}
```

**Objects with multiple Generic Types**

Generic objects can take more than one generic type parameter. For example, let's say that our `User` object also has an `id` property that can be of multiple types. We could define it like this:

```ts
type User<T1, T2> = {
  name: string;
  age: T1;
  id: T2;
};

const user1: User<number, string> = {
  id: "4d747fb8-bdb3-11ed-afa1-0242ac120002",
  name: "John Doe",
  age: 25,
};

const user2: User<string, number> = {
  id: 1,
  name: "Jane Doe",
  age: "thirty",
};
```

Now we can create a user with an id of type string and age of type number. We could also use strings for both values or use any other combination of types.

**Practice Problems: Generic Objects**

1. Does the code below use generic object type correctly?

   ```ts
   type Pair<T,U> = {
     first: T;
     second: U;
   };
   
   const myPair: Pair<number, string> = {
     first: 42, 
     second: "Answer",
   };
   
   const yourPair: Pair<number, string> = {
     first: "Another answer",
     second: 42,
   } //This one will cause an error 
   ```

   The code misuses the generic object type for the `yourPair` object. The `yourPair` object is declared as a `Pair<number, string>`, but has a `first` property of type `string` and a `second` property of type `number`, which violates the expected generic object types.

2. Does the code below use generic object type correctly?

   ```ts
   type KeyValuePairs<T.U> = {
     key: T; 
     values: U[];
   };
   
   const myPairs: KeyValuePairs<string, number> = {
     key: "Numbers", 
     values: [1,2,3,4,5],
   };
   
   const yourPairs: KeyValuePairs<number, string> = {
     key: 42, 
     values: ["one", "two", 3, "four"],
   } //error here with the number 3
   ```

   The `KeyValuePairs` type is defined as a generic object type with two properties: `key` of type `T` and `values` of type `U[]` (an array of type `U`).

   The code does not use the generic object type correctly for the `yourPairs` object. Although `yourPairs` is declared as a `KeyValuePairs<number, string>`, its `values` property contains elements of both `string` and `number` types, which is inconsistent with the expected generic array type.

   Before proceeding, it's important to note that for those encountering generics for the first time, the use of `T`, `U`, `P`, and other letters may seem confusing. However, these are simply names that can be replaced with more readable names to make the code easier to understand. Therefore, we can rewrite the `KeyValuePairs` type with more descriptive names:

```ts
type KeyValuePairs<KeyType, ValueType> = {
  key: KeyType;
  values: ValueType[];
};
```

Doesn't it look more human-readable and less intimidating? By using more descriptive names for our generic types, we can make our code more approachable, especially for beginners. Great, now let's move on to the next assignment.



**Generic Arrays**

Now that you've encountered generic object types, you can see that arrays are an example of a generic object. In fact, the `Array` type is simply a custom object type that has been pre-defined in the TypeScript library.

As with generic objects, you can think of arrays as types that accept an argument within the `<>` brackets. This argument defines the types that the array is allowed to contain.

For example, to create an array of numbers, we can use `Array<number>`:

```ts
const numbers: Array<number> = [1, 2, 3];
const nonNumbers: Array<number> = ["1", "2", "3"]; //Type 'string' is not assignable to type 'number'.
```

We can also use type unions to indicate that the array can contain multiple types:

```ts
const numsAndStrings: Array<string | number> = [1, "2"];
```

Nested arrays, which are arrays within arrays, can also be created using generic arrays. For example, we can create an array of arrays of numbers:

```ts
const matrix: Array<Array<number>> = [
  [1, 2],
  [3, 4],
];
```

As with generic functions, we can usually rely on the TypeScript compiler to infer the type of our arrays:

Copy Code

```ts
const values = [1, "2", false]; // Type is Array<string | number | boolean>
```

### Alternate array syntax

In the lesson on arrays, we introduced you to the alternative syntax using `T[]`:

Copy Code

```ts
let numbers: number[] = [1, 2, 3, 4, 5];
```

This alternative syntax is simply syntactic sugar for `Array<T>`. Which syntax to use is up to your preference, though you tend to see the `Array<T>` syntax used more often when defining arrays with more complex types like unions.

Yes, in TypeScript, you can use `Array<T>` to define a generic array type. This is equivalent to the more common `T[]` notation. Both notations are used to specify that an array contains elements of type `T`.



**Practice Problems: Generic Arrays**

1. Does the code below use generic array type correctly?

```ts
let numbers: Array<number> = [1, 2, 3];
```

Yes. The code correctly declares an array of numbers using the `Array<number>` syntax. (The code snippet you provided is not an example of generic programming by itself, but rather an example of using a generic type with a specific type argument. Let's break it down:

Code Explanation
typescript
Copy code
let numbers: Array<number> = [1, 2, 3];
Array<number>: This is using TypeScript's generic type Array<T> with the type argument number. It specifies that numbers is an array where each element is of type number.
[1, 2, 3]: This is an array of numbers, which matches the type Array<number>.)



2. ```ts
   let strings: string[] = ["apple", "banana", "cherry"];
   ```

   Yes. The code correctly declares an array of strings using the `string[]` syntax.

3. ````ts
   let bools: boolean[[]] = [true, false, true];
   ````

   No. The code attempts to declare an array of booleans, but the syntax is incorrect. The correct syntax should be `boolean[]`.



4. ```ts
   type FruitNames = "apple" | "banana" | "cherry";
   const fruits: Array<FruitNames> = ["apple", "banana", "mango"];
   ```

The code defines a generic array correctly. However, did you notice that there is a type error when we make an assignment to that type?

```plaintext
Type '"mango"' is not assignable to type 'FruitNames'.
```

This generic array pattern is useful for creating type guarded arrays, as it leverages TypeScript's type system to ensure that only valid elements are included in the array.

# Summary

In this lesson, we've learned about how union types and generics add flexibility and reusability to our type definitions. Both features are at the core of how we represent complex types in TypeScript. Generics can be difficult for newcomers to typed languages to understand, and they can certainly be used in very clever and sophisticated ways in advanced TypeScript applications. Our recommendation is to review the basic examples and scenarios that we've covered in this lesson until you feel comfortable moving on.

Generics and union types ultimately allow us to express a value as a range of possible types. In the next lesson, we will learn how to narrow that range of types back down to a single type that we can act on.



**Overview of Narrowing**

In the previous lesson, we explored various ways to widen the set of possible types that a value may represent. Union types and Generics offer us flexibility in the types of values we pass around our code.

However, when we want to access specific properties on those values, having a "wide" set of possible types is no longer helpful to us. Let's take a look at an example:

Ironically, by widening the set of possible types for `Shape`, we've constrained the accessible properties to *only* those that exist on every type in the union.

In order to access either `radius` or `sideLength`, we need to determine whether this `Shape` is a `Circle` or a `Square`. This process of refining a value from a larger set of possible types to a smaller set of possible types (or a single type) is called **narrowing**.

In this lesson, we will encounter various techniques to narrow types in TypeScript, such as type guards, type predicates, and control flow-based type analysis. 

The idea is that TypeScript’s type system aims to make it as easy as possible to write typical JavaScript code without bending over backwards to get type safety.

### **Static Type Analysis**

- **Static Type Checking**: TypeScript checks types without executing the code. It uses information from type annotations and control flow to infer and validate types.
- **Flow Analysis**: By analyzing how variables are modified and used through different control flow paths, TypeScript can provide more accurate type checking.
- Yes, exactly! TypeScript can use runtime constructs (like control flow statements) to narrow types and infer more specific types during type checking. Here’s a more detailed explanation of how TypeScript achieves this:

**Type Guard**

Type guards work by checking certain conditions and then informing TypeScript about the type of a variable within specific blocks of code. This helps TypeScript to:

- **Refine Types**: Narrow down the type of a variable to a more specific type based on the checks.
- **Improve Type Safety**: Prevent type-related runtime errors by ensuring that operations are only performed on valid types.
- **Provide Better Autocomplete and Error Checking**: Help TypeScript provide more accurate autocomplete suggestions and compile-time error checking.

In summary, type guards are a powerful feature in TypeScript that enable you to perform runtime checks to narrow down the types of variables, improving type safety and reducing potential runtime errors.



**Examples of Type Guards**

1) `typeof`

   As we’ve seen, JavaScript supports a `typeof` operator which can give very basic information about the type of values we have at runtime. TypeScript expects this to return a certain set of strings: Remember that typeof null === "object"

   - `"string"`
   - `"number"`
   - `"bigint"`
   - `"boolean"`
   - `"symbol"`
   - `"undefined"`
   - `"object"`
   - `"function"`

2. `truthiness` narrowing

   1. In JavaScript, we can use any expression in conditionals, `&&`s, `||`s, `if` statements, Boolean negations (`!`), and more. As an example, `if` statements don’t expect their condition to always have the type `boolean`.

      ```ts
      function getUsersOnlineMessage(numUsersOnline: number) {
        if (numUsersOnline) {
          return `There are ${numUsersOnline} online now!`;
        }
        return "Nobody's here. :(";
      }
      ```

In JavaScript, constructs like `if` first “coerce” their conditions to `boolean`s to make sense of them, and then choose their branches depending on whether the result is `true` or `false`. Values like

- `0`
- `NaN`
- `""` (the empty string)
- `0n` (the `bigint` version of zero)
- `null`
- `undefined`

all coerce to `false`, and other values get coerced to `true`. You can always coerce values to `boolean`s by running them through the `Boolean` function, or by using the shorter double-Boolean negation. (The latter has the advantage that TypeScript infers a narrow literal boolean type `true`, while inferring the first as type `boolean`.)



3. `equality` narrowing
   1. TypeScript also uses `switch` statements and equality checks like `===`, `!==`, `==`, and `!=` to narrow types. For example:

JavaScript’s looser equality checks with `==` and `!=` also get narrowed correctly. If you’re unfamiliar, checking whether something `== null` actually not only checks whether it is specifically the value `null` - it also checks whether it’s potentially `undefined`. The same applies to `== undefined`: it checks whether a value is either `null` or `undefined`.

4. `in` operator narrowing 

   JavaScript has an operator for determining if an object or its prototype chain has a property with a name: the `in` operator. TypeScript takes this into account as a way to narrow down potential types.

   ```ts
   type A = { a: string };
   type B = { b: number };
   type C = A | B;
   
   function checkProperty(x: C, value: string) {
     if (value in x) {
       console.log(`Property ${value} exists in x`);
     } else {
       console.log(`Property ${value} does not exist in x`);
     }
   }
   
   const objA: A = { a: "hello" };
   const objB: B = { b: 42 };
   
   checkProperty(objA, "a"); // Property a exists in x
   checkProperty(objB, "a"); // Property a does not exist in x
   
   ```

   ```ts
   type Fish = { swim: () => void };
   type Bird = { fly: () => void };
    
   function move(animal: Fish | Bird) {
     if ("swim" in animal) {
       return animal.swim();
     }
    
     return animal.fly();
   }
   
   //or 
   type Fish = { swim: () => void };
   type Bird = { fly: () => void };
   type Human = { swim?: () => void; fly?: () => void };
    
   function move(animal: Fish | Bird | Human) {
     if ("swim" in animal) {
       animal;
         
   (parameter) animal: Fish | Human
     } else {
       animal;
         
   (parameter) animal: Bird | Human
     }
   }
   ```

   

5. *instanceof* narrowing 

   ```ts
   function logValue(x: Date | string) {
     if (x instanceof Date) {
       console.log(x.toUTCString());
                  
   (parameter) x: Date
     } else {
       console.log(x.toUpperCase());
                  
   (parameter) x: string
     }
   }
   ```

   

6. *Assignments*

   As we mentioned earlier, when we assign to any variable, TypeScript looks at the right side of the assignment and narrows the left side appropriately.

```ts
let x = Math.random() < 0.5 ? 10 : "hello world!";
   
let x: string | number
x = 1;
 
console.log(x);
           
let x: number
x = "goodbye!";
 
console.log(x);
           
let x: string
```

Notice that each of these assignments is valid. Even though the observed type of `x` changed to `number` after our first assignment, we were still able to assign a `string` to `x`. This is because the *declared type* of `x` - the type that `x` started with - is `string | number`, and assignability is always checked against the declared type.

If we’d assigned a `boolean` to `x`, we’d have seen an error since that wasn’t part of the declared type.



*Control Flow Analysis*

Up until this point, we’ve gone through some basic examples of how TypeScript narrows within specific branches. But there’s a bit more going on than just walking up from every variable and looking for type guards in `if`s, `while`s, conditionals, etc. 

This analysis of code based on reachability is called *control flow analysis*, and TypeScript uses this flow analysis to narrow types as it encounters type guards and assignments.

When a variable is analyzed, control flow can split off and re-merge over and over again, and that variable can be observed to have a different type at each point.

```ts
function example() {
  let x: string | number | boolean;
 
  x = Math.random() < 0.5;
 
  console.log(x);
             
let x: boolean
 
  if (Math.random() < 0.5) {
    x = "hello";
    console.log(x);
               
let x: string
  } else {
    x = 100;
    console.log(x);
               
let x: number
  }
 
  return x;
        
let x: string | number
}
```

**Using Type Predicates**

We’ve worked with existing JavaScript constructs to handle narrowing so far, however sometimes you want more direct control over how types change throughout your code.

To define a user-defined type guard, we simply need to define a function whose return type is a *type predicate*:

```ts
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}
```

`pet is Fish` is our type predicate in this example. A predicate takes the form `parameterName is Type`, where `parameterName` must be the name of a parameter from the current function signature.

Any time `isFish` is called with some variable, TypeScript will *narrow* that variable to that specific type if the original type is compatible.

- **Function Definition**: `isFish(pet: Pet): pet is Fish`
  - `isFish` is a type predicate function.
  - `pet is Fish` is the type predicate. It means that if `isFish(pet)` returns `true`, then `pet` should be treated as a `Fish`.
- **Type Narrowing**:
  - Inside the `if` statement where `isFish(pet)` is used, TypeScript narrows the type of `pet` to `Fish`. This allows you to safely access properties and methods specific to `Fish`.
  - so a type predicate is when we are trying to create some conditional to narrow a type but we dont have a great way to do it. we then create a predicate function which will tell us that something is for sure that type if it returns true.. bc doing something like this: function isCircle(shape: Shape): shape is Circle {  return "radius" in shape; } if instead we just said if ("radius" in shape) wouldnt necessarily narrow it to a Circle 
  - Type predicates can be very useful when we want to create custom logic to narrow a specific type from a union of possible types. Now that we've seen how they are used, we can understand how the TypeScript library implements `Array.isArray` using a type predicate in order to act as a type guard. To conclude, let's implement our own version of an `isArray` function and use it in our `feed` function:

```ts
// Both calls to 'swim' and 'fly' are now okay.
let pet = getSmallPet();
 
if (isFish(pet)) {
  pet.swim();
} else {
  pet.fly();
}

//OR

function isCircle(shape: Shape): shape is Circle {
  return "radius" in shape;
}
```

```ts
//without Type Predicates
interface Fish {
  swim: () => void;
}

interface Bird {
  fly: () => void;
}

type Pet = Fish | Bird;

function handlePet(pet: Pet) {
  if ('swim' in pet) {
    (pet as Fish).swim(); // TypeScript knows `pet` is `Fish` here
  } else if ('fly' in pet) {
    (pet as Bird).fly(); // TypeScript knows `pet` is `Bird` here
  } else {
    console.log('Unknown pet type');
  }
}

//here we need to tell ts that if it has this function then it actually is an instance of the Fish class using `as`

//OR 
class Fish {
  swim() {
    console.log("Swimming");
  }
}

class Bird {
  fly() {
    console.log("Flying");
  }
}

type Pet = Fish | Bird;

function handlePet(pet: Pet) {
  if (pet instanceof Fish) {
    pet.swim(); // TypeScript knows `pet` is `Fish` here
  } else if (pet instanceof Bird) {
    pet.fly(); // TypeScript knows `pet` is `Bird` here
  } else {
    console.log('Unknown pet type');
  }
}

//OR 
interface Fish {
  kind: 'fish';
  swim: () => void;
}

interface Bird {
  kind: 'bird';
  fly: () => void;
}

type Pet = Fish | Bird;

function handlePet(pet: Pet) {
  if (pet.kind === 'fish') {
    pet.swim(); // TypeScript knows `pet` is `Fish` here
  } else if (pet.kind === 'bird') {
    pet.fly(); // TypeScript knows `pet` is `Bird` here
  } else {
    console.log('Unknown pet type');
  }
}


```

```ts
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
Try

```

using `this is` 

```ts
isFish(): this is { pet: Fish } {
    return 'swim' in this.pet;
  }
```

*Narrowing by Assertion Functions*

There’s a specific set of functions that `throw` an error if something unexpected happened. They’re called “assertion” functions. As an example, Node.js has a dedicated function for this called `assert`.

```js
assert(someValue === 42);
```

```ts
function multiply(x, y) {
  assert(typeof x === "number");
  assert(typeof y === "number");
  return x * y;
}
```

```ts
function assert(condition: any, msg?: string): asserts condition {
  if (!condition) {
    throw new AssertionError(msg);
  }
}
```

`asserts condition` says that whatever gets passed into the `condition` parameter must be true if the `assert` returns (because otherwise it would throw an error). That means that for the rest of the scope, that condition must be truthy. As an example, using this assertion function means we *do* catch our original `yell` example.

```ts
function assertIsString(val: any): asserts val is string {
  if (typeof val !== "string") {
    throw new AssertionError("Not a string!");
  }
}
```

**Practice Problem Predicate**

```ts
type Vehicle = { make: string; model: string; year: number };
type Motorcycle = Vehicle & { type: "motorcycle" };
type Car = Vehicle & { type: "car"; doors: number };

function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  // Implement this function
}

// Usage
let myCar: Car = {
  make: "Toyota",
  model: "Camry",
  year: 2021,
  type: "car",
  doors: 4,
};

if (isCar(myCar)) {
  console.log(myCar.doors);
}
```

Please implement the `isCar` function as a type predicate (type guard) function that determines if the input argument is of type `Car`.

```ts
function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "type" in vehicle && vehicle.type === 'car'
}

//Or 
function isCar(vehicle: Vehicle | Car | Motorcycle): vehicle is Car {
  return "doors" in vehicle;
}
```





**Discrimated Unions**

Most of the examples we’ve looked at so far have focused around narrowing single variables with simple types like `string`, `boolean`, and `number`. While this is common, most of the time in JavaScript we’ll be dealing with slightly more complex structures.

```ts
interface Shape {
  kind: "circle" | "square";
  radius?: number;
  sideLength?: number;
}
```

Notice we’re using a union of string literal types: `"circle"` and `"square"` to tell us whether we should treat the shape as a circle or square respectively. By using `"circle" | "square"` instead of `string`, we can avoid misspelling issues.

```ts
function handleShape(shape: Shape) {
  // oops!
  if (shape.kind === "rect") {
This comparison appears to be unintentional because the types '"circle" | "square"' and '"rect"' have no overlap.
    // ...
  }
}

//also

function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
'shape.radius' is possibly 'undefined'.
  }
}
```

Hmm, TypeScript still doesn’t know what to do here. We’ve hit a point where we know more about our values than the type checker does. We could try to use a non-null assertion (a `!` after `shape.radius`) to say that `radius` is definitely present.

```js
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius! ** 2;
  }
}
```

But this doesn’t feel ideal. We had to shout a bit at the type-checker with those non-null assertions (`!`) to convince it that `shape.radius` was defined, but those assertions are error-prone if we start to move code around. Additionally, outside of [`strictNullChecks`](https://www.typescriptlang.org/tsconfig#strictNullChecks) we’re able to accidentally access any of those fields anyway (since optional properties are just assumed to always be present when reading them). We can definitely do better.

The problem with this encoding of `Shape` is that the type-checker doesn’t have any way to know whether or not `radius` or `sideLength` are present based on the `kind` property. We need to communicate what *we* know to the type checker. With that in mind, let’s take another swing at defining `Shape`.

```ts
 interface Circle {
  kind: "circle"; //discriminate property
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}
 
type Shape = Circle | Square;

function getArea(shape: Shape) {
  return Math.PI * shape.radius ** 2;
  Property 'radius' does not exist on type 'Shape'.
  Property 'radius' does not exist on type 'Square'.
}

//narrow
function getArea(shape: Shape) {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
                      
(parameter) shape: Circle
  }
}
```

In this case, `kind` was that common property (which is what’s considered a *discriminant* property of `Shape`). Checking whether the `kind` property was `"circle"` got rid of every type in `Shape` that didn’t have a `kind` property with the type `"circle"`. That narrowed `shape` down to the type `Circle`.

*Discrimate Property using a switch*

```ts
function describeShape(shape: Shape) {
  let area: number;

  switch (shape.kind) {
    case "circle":
      area = Math.PI * shape.radius ** 2;
      break;
    case "square":
      area = shape.sideLength ** 2;
      break;
    default:
    // TODO: Ensure the code never reaches this condition!
  }

  console.log("The area is " + area);
}
```

Inside the `switch` statement, we evaluate the value of the discriminant property `kind`. If the value is `"circle"`, then the TypeScript compiler can determine that the object is of type `Circle`. If the value is `"square"`, the compiler can narrow the type to `Square`.

Although this is a simple example, one of the first benefits of discriminated unions is evident: the type that each conditional path handles is more clear. While we can't directly access the TypeScript type of `shape`, the `kind` property allows us to approximate this behavior.



Good for: 

1. Representing different variants of a data structure: When you have multiple types in a union that share some common properties, but also have distinct properties, discriminated unions can clearly express the relationship between them. We saw this in our previous example with `Circle` and `Square` as types of `Shapes`.

2. Modeling workflows or processes: When modeling processes that have a discrete set of steps or possible states, discriminated unions can be a powerful tool to express different states and their corresponding transitions. For example, you might model the various states of an HTTP Request:

   ```ts
   // Initial state before the request is made
   type HttpRequestInitial = {
     status: "initial";
   };
   
   // Loading state when the request is in progress
   type HttpRequestLoading = {
     status: "loading";
   };
   
   // Success state when the request has completed successfully
   type HttpRequestSuccess = {
     status: "success";
     data: any; // Use a more specific type based on the expected response data
   };
   
   // Error state when the request has failed
   type HttpRequestError = {
     status: "error";
     error: string;
   };
   
   // The HttpRequest union type represents the various states of an HTTP request
   type HttpRequest =
     | HttpRequestInitial
     | HttpRequestLoading
     | HttpRequestSuccess
     | HttpRequestError;
   ```

   1. Error handling: Discriminated unions can be used to represent success and failure cases, making it easier to handle errors in a type-safe manner.

      Copy Code

      ```ts
      type Result<T, E> =
        | { status: "success"; value: T }
        | { status: "failure"; error: E };
      
      function divide(
        numerator: number,
        denominator: number
      ): Result<number, string> {
        if (denominator === 0) {
          return { status: "failure", error: "Division by zero" };
        }
        return { status: "success", value: numerator / denominator };
      }
      ```

### When to prefer the `in` operator

The expressiveness and type safety we get from discriminated unions make them a good choice in many scenarios. However, there are some cases where you may prefer to use the `in` operator for narrowing:

1. When you are working with types that don't have a clear discriminant property.
2. When you want to take action on a property that may be available on a wide set of types. For example, in a `sendMessage` function you may want to narrow down to any type that has an `email` property, regardless of the type that contains it (e.g. `Student`, `Store`, `Employee`).

### Summary

Although we cannot access TypeScript types at runtime, we can approximate this behavior using discriminated unions. Discriminated unions allow us to differentiate between members of a union by using a shared property called a discriminant. They are a great choice when dealing with different variants of a data structure, modeling discrete steps or states, and handling errors in a type-safe way.



**Exhaustiveness checking**

While this mistake might seem unlikely in this small example, this error can be easy to make in typical commercial software. In larger applications, type definitions and related functions can be spread across many files, and updated by many different software engineers.

In order to prevent this sort of error, we can take advantage of a feature called **exhaustiveness checking**. Exhaustiveness checking is a feature of many typed programming languages that helps guarantee that possible cases have been handled. In TypeScript, discriminated unions help us perform exhaustiveness checking by ensuring that each possible value of the discriminant property has been covered by a `switch` statement.

*Never*

The `never` type in TypeScript represents a value that never occurs. This can be due to a function that never returns, or a situation that is logically impossible. It's used in exhaustive checks to signify that all possible cases have been handled, and no other cases should be possible. So say we say the arg is a pet, and then we narrow and we should never get to the bottom but we do.. if we use `never` than itll make an error 

The `never` type is assignable to every type; however, no type is assignable to `never` (except `never` itself). This means you can use narrowing and rely on `never` turning up to do exhaustive checking in a `switch` statement.

For example, adding a `default` to our `getArea` function which tries to assign the shape to `never` will not raise an error when every possible case has been handled.

```ts
type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

interface Triangle {
  kind: "triangle";
  sideLength: number;
}
 
type Shape = Circle | Square | Triangle;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
Type 'Triangle' is not assignable to type 'never'.
      return _exhaustiveCheck;
  }
}
```

Exhaustiveness checks are a helpful feature of many typed languages, including TypeScript. They improve the robustness and reliability of our applications by catching potential oversights as types change over time. We can take advantage of the `never` type to add an exhaustiveness check in the `default` case of `switch` statements.



**Practice Probems with Exhaustiveness Checking**

Thanks to TypeScript, we have exhaustiveness checking now! This is a great programming technique to add robustness to our codebase. Let's put it in use! Suppose we're creating an application for managing a zoo. In our zoo, we have three types of animals: `Elephant`, `Tiger`, and `Peacock`.

```ts
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;
```

Write a function `describeAnimal` that takes an `Animal` as an argument and returns a string describing that animal's characteristic feature. For example, if the animal is an `elephant`, the function should return `"An elephant weighs [weight] kg."`. Include an exhaustiveness check in your function to handle potential future additions to the `Animal` type.

```ts
type Elephant = {
  kind: "elephant";
  weight: number;
};

type Tiger = {
  kind: "tiger";
  speed: number;
};

type Peacock = {
  kind: "peacock";
  featherLength: number;
};

type Animal = Elephant | Tiger | Peacock;

function describeAnimal(animal: Animal):string {
  let sent: string;

  switch (animal.kind) {
    case "elephant": 
      sent = `An elephant weighs ${animal.weight} kg`;
      break;
    case "tiger": 
      sent = `A tiger goes ${animal.speed} mph`
      break;
    case "peacock":
      sent = `A peacock's feathers are ${animal.featherLength} inch`
      break;
    default: 
      const _exhaustiveCheck: never = animal;
      throw new Error('Unhandled animal kind');
  }
  console.log(sent)
  return sent
}

let elephant: Elephant = {
  kind: 'elephant',
  weight: 4000
}

describeAnimal(elephant)
```

1. Now suppose we want to add a new animal to our zoo: `Giraffe`. Add the `Giraffe` animal to our `Animal` type, but do not update the `describeAnimal` function. What will happen when we call `describeAnimal` with a `Giraffe`?

   Solution

   The TypeScript compiler will raise an error because the `Giraffe` type is not handled in the `describeAnimal` function.

   ```plaintext
   Type 'Giraffe' is not assignable to type 'never'.
   ```

   And it is not assignable to the `never` type. The unhandled `Giraffe` animal will trigger the default case of the switch statement, and the unknown animal message will be returned if the code is run.











**Practice Problems: Narrowing with Type Guards**

1) ```ts
   type Video = {
     title: string;
     creator: string;
   };
   
   function printVideoInfo(videoOrVideos: Video | Video[]) {
     if ("length" in videoOrVideos) {
       videoOrVideos.forEach((v) =>
         console.log(`"${v.title}" by ${v.creator}`)
       );
     } else {
       console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
     }
   }
   
   printVideoInfo({
     title: "Introduction to TypeScript",
     creator: "John Doe",
   });
   ```

   Will the following code result in a type error or execute without any issues?

All good! 

2. ```ts
   type Video = {
     title: string;
     creator: string;
     length: number;
   };
   
   function printVideoInfo(videoOrVideos: Video | Video[]) {
     if ("length" in videoOrVideos) {
       videoOrVideos.forEach((v) =>
         console.log(`"${v.title}" by ${v.creator}`)
       );
     } else {
       console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
     }
   }
   
   printVideoInfo({
     title: "Introduction to TypeScript",
     creator: "John Doe",
     length: 100,
   });
   ```

So in this one we include a length property in our object.. because of this we are within the `if` conditional even if we have an object.



This time around, our code will result in a type error.

```plaintext
Property 'forEach' does not exist on type 'Video | Video[]'.
```

TypeScript becomes confused because it cannot determine whether `videoOrVideos` is a single `Video` object or an array of `Video` objects when checking for the `length` property. This is because the `Video` type also has a `length` property, which makes the type guard check with `length` ambiguous.

To resolve this issue, we can use the `isArray` method on the `Array` object. This will enable us to correctly determine whether `videoOrVideos` is an array or not.

```ts
function printVideoInfo(videoOrVideos: Video | Video[]) {
  if (Array.isArray(videoOrVideos)) {
    videoOrVideos.forEach((v) =>
      console.log(`"${v.title}" by ${v.creator}`)
    );
  } else {
    console.log(`"${videoOrVideos.title}" by ${videoOrVideos.creator}`);
  }
}
```



**Narrowing with Short Circuiting**

So far, we've used type guards to narrow our types inside of conditional statements like `if` and `switch`. We can also use type guards to narrow types via **short-circuiting**. Short-circuiting is a behavior of the logical operators (`&&` and `||`) in which the second operand is only evaluated if the first operand does not determine the result.

```ts
type Circle = {
  radius: number;
  opacity?: number;
};

type Square = {
  sideLength: number;
};

type Shape = Circle | Square;


function logOpacity(shape: Shape): void {
 "opacity" in shape && console.log("this circle is opacity", shape.opacity)
}
const circle: Circle = { radius: 5, opacity: 0.8 };
const square: Square = { sideLength: 4 };

logOpacity(circle); // Output: "Opacity: 0.8"
logOpacity(square); // No output
```

this will short circuit for square and not ever hit console.log

**Practice Problem Narrowing with Short Circuiting**

```ts
type Vehicle =
  | {
      kind: "car";
      fuelType: "gas" | "electric";
      range: number;
    }
  | {
      type: "bicycle";
      isElectric: boolean;
    };

function getVehicleInfo(vehicle: Vehicle) {
  const info =
    (vehicle.kind === "car" &&
      `Car with ${vehicle.fuelType} engine and a range of ${vehicle.range} km`) ||
    (vehicle.type === "bicycle" &&
      `Bicycle with electric assist: ${vehicle.isElectric}`);
  console.log(info);
}

getVehicleInfo({ type: "bicycle", isElectric: true });
```

This code will result in a type error.

```plaintext
Property 'kind' does not exist on type 'Vehicle'.
```

TypeScript is unable to narrow down the type of vehicle within the logical expressions because the property names `kind` and `type` are different between the union types. To perform narrowing, TypeScript requires a common property with the same name and distinct values between the union types.

This behavior is known as discriminated unions. We will learn more about this in the upcoming assignment.



**Type Soundness**

TypeScript is a statically typed language that offers great benefits such as catching errors at compile-time and enhancing code readability. However, despite TypeScript's best efforts, there are still ways to bypass its type system, resulting in a phenomenon called **type unsoundness**.

Type unsoundness happens when the type system fails to prevent type errors, resulting in runtime errors. This can lead to unexpected behavior and bugs in your code. In this lesson, we'll explore some examples of type unsoundness in TypeScript.

One common source of type unsoundness is when we use the `any` type. As we've learned, the `any` type can hold any value, and TypeScript will not perform any type checking on a value of `any` type. This can be useful in limited scenarios, but it will generally cause problems if misused. For example, consider the following code:

```ts
let x: any = "Launch School";
const y: number = x;
console.log(y);
```

Another source of type unsoundness is when we use type assertions. Type assertions allow us to tell TypeScript that a value has a certain type, even if TypeScript can't verify it. For example: * this will lead to runtime but not compiler error

```ts
let x: any = "Launch School";
const y: number = x as number;
```

A third source of type unsoundness is when we index beyond the end of an array. For example:

```ts
const names: string[] = ["John", "Jane"];
const name: string = names[2];
name; // undefined
```

In this code, we try to access the third element of the `names` array, which does not exist. TypeScript allows this code to compile, even though the result is `undefined`, which is not compatible with a variable of type `string`.

​		- use tuples

**Practice Problems**

1. Given the code examples you have seen in the assignment, which both involve using the `any` type, try to create a reusable type guard function called `isNumber` to make our code safer when working with these external code snippets.

```ts
// example 1
let x: any = "Launch School";
const y: number = x;
console.log(y);
Copy Code
// example 2
let x: any = "Launch School";
const y: number = x as number;

```

```ts
function isNumber(value: any): value is number {
  return typeof value === "number";
}
```

With this `isNumber` type guard function, we can ensure that we only assign `x` to `y` when it is a `number`:

```ts
if (isNumber(x)) {
  const y = x;
  console.log(y);
} else {
  console.log("x is not a number");
}
```

And as you may have noticed, because of this, we don't even need to declare the type of `y` explicitly.



2. ```ts
   const names: string[] = ["John", "Jane"];
   const name = safeGet(names, 2); // Should return undefined
   
   const numbers: number[] = [1, 2, 3];
   const number = safeGet(numbers, 1); // Should return 2
   ```

   Try to create a utility function called `safeGet` that allows us to access the elements in any array safely. `safeGet` should take two arguments: an array and the index of an element in the array. If the index is within the bounds of the array, return the element at that index, otherwise, return `undefined`.

   ```ts
   function safeGet<T>(arr: T[], index: number) {
     if (index >= 0 && index < arr.length) {
       return arr[index];
     }
     return undefined;
   }
   ```

 [Index Signatures](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures) through [Interfaces vs Intersections](https://www.typescriptlang.org/docs/handbook/2/objects.html#interfaces-vs-intersections). 



**Index Signature**

Sometimes you don’t know all the names of a type’s properties ahead of time, but you do know the shape of the values.

In those cases you can use an index signature to describe the types of possible values, for example:

```ts
interface StringArray {
  [index: number]: string; //obj keys get converted to strings so you could also put [index: string] even if the key is a number 
}

const myArray: StringArray = getStringArray();
const secondItem = myArray[1];
```

Above, we have a `StringArray` interface which has an index signature. This index signature states that when a `StringArray` is indexed with a `number`, it will return a `string`.

Only some types are allowed for index signature properties: `string`, `number`, `symbol`, template string patterns, and union types consisting only of these.

Yes, with an index signature like the one in the `StringArray` example, if you try to access a property that doesn't exist, TypeScript will infer that the result is of the specified value type, which in this case is `string`.

*My explanation*

```ts
interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

interface Okay {
  [x: number]: Animal;
  [x: string]: Dog;
}

```

so this is saying that the number is essentially a string.. so a string has to return a dog so you can reverse it and say that  [x: string]: Animal;  [x: number]: Dog; bc this would mean that all things would return a dog and dogs are all animals so it doesnt contradict itself? BUT

```ts
interface Animal {
  name: string;
}
 
interface Dog extends Animal {
  breed: string;
}
 
// Error: indexing with a numeric string might get you a completely separate type of Animal!
interface NotOkay {
  [x: number]: Animal;
'number' index type 'Animal' is not assignable to 'string' index type 'Dog'.

```

bc not all animals are dogs 



and also 

```ts
interface NumberDictionary {
  [index: string]: number;
 
  length: number; // ok
  name: string;
Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
}
//fix it 
interface NumberOrStringDictionary {
  [index: string]: number | string;
  length: number; // ok, length is a number
  name: string; // ok, name is a string
}
```

*readonly*

```ts
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
 
let myArray: ReadonlyStringArray = getReadOnlyStringArray();
myArray[2] = "Mallory";
Index signature in type 'ReadonlyStringArray' only permits reading.
```

Where and how an object is assigned a type can make a difference in the type system. One of the key examples of this is in excess property checking, which validates the object more thoroughly when it is created and assigned to an object type during creation.

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 
let mySquare = createSquare({ colour: "red", width: 100 });
Object literal may only specify known properties, but 'colour' does not exist in type 'SquareConfig'. Did you mean to write 'color'?
```

However, TypeScript takes the stance that there’s probably a bug in this code. Object literals get special treatment and undergo *excess property checking* when assigning them to other variables, or passing them as arguments. If an object literal has any properties that the “target type” doesn’t have, you’ll get an error:

**SO OBJECT LITERALS ARE TREATED DIFFERENT THAN VARIABLE ASSIGNEMENT**

so this is ok... BUT not if it has NO common properties... The above workaround will work as long as you have a common property between `squareOptions` and `SquareConfig`. In this example, it was the property `width`. It will however, fail if the variable does not have any common object property. For example:

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
 
function createSquare(config: SquareConfig): { color: string; area: number } {
  return {
    color: config.color || "red",
    area: config.width ? config.width * config.width : 20,
  };
}
 

let x = { colour: "red", width: 100 }
let mySquare = createSquare(x);

```

Getting around these checks is actually really simple. The easiest method is to just use a type assertion:

```ts
let mySquare = createSquare({ width: 100, opacity: 0.5 } as SquareConfig);Try
```

However, a better approach might be to add a string index signature if you’re sure that the object can have some extra properties that are used in some special way. If `SquareConfig` can have `color` and `width` properties with the above types, but could *also* have any number of other properties, then we could define it like so:

```ts
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

**Adding properties to an interface using *extends* **

```ts
interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}
 
interface AddressWithUnit extends BasicAddress {
  unit: string;
}
```

The `extends` keyword on an `interface` allows us to effectively copy members from other named types, and add whatever new members we want. This can be useful for cutting down the amount of type declaration boilerplate we have to write, and for signaling intent that several different declarations of the same property might be related. For example, `AddressWithUnit` didn’t need to repeat the `street` property, and because `street` originates from `BasicAddress`, a reader will know that those two types are related in some way.

also..

```ts
interface Colorful {
  color: string;
}
 
interface Circle {
  radius: number;
}
 
interface ColorfulCircle extends Colorful, Circle {}
 
const cc: ColorfulCircle = {
  color: "red",
  radius: 42,
};
```

**Intersection Types**

`interface`s allowed us to build up new types from other types by extending them. TypeScript provides another construct called *intersection types* that is mainly used to combine existing object types.

An intersection type is defined using the `&` operator.

```ts
interface Colorful {
  color: string;
}

interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle //note the use of "type" instead of interface
```

Here, we’ve intersected `Colorful` and `Circle` to produce a new type that has all the members of `Colorful` *and* `Circle`.

**Interfaces vs. Intersections**

We just looked at two ways to combine types which are similar, but are actually subtly different. With interfaces, we could use an `extends` clause to extend from other types, and we were able to do something similar with intersections and name the result with a type alias. The principal difference between the two is how conflicts are handled, and that difference is typically one of the main reasons why you’d pick one over the other between an interface and a type alias of an intersection type.

If interfaces are defined with the same name, TypeScript will attempt to merge them if the properties are compatible. If the properties are not compatible (i.e., they have the same property name but different types), TypeScript will raise an error.

In the case of intersection types, properties with different types will be merged automatically. When the type is used later, TypeScript will expect the property to satisfy both types simultaneously, which may produce unexpected results.

For example, the following code will throw an error because the properties are incompatible:

```ts
interface Person {
  name: string;
}

interface Person {
  name: number;
}
```

In contrast, the following code will compile, but it results in a `never` type:

```ts
interface Person1 {
  name: string;
}
 
interface Person2 {
  name: number;
}
 
type Staff = Person1 & Person2 //you can combine two types or two interfaces but the combined one is always a type 
 
declare const staffer: Staff;
staffer.name;
```

What's happening is that the compiler determines that the `id` property on `Student & User` should be the intersection of `string & number`. In pseudocode:

```ts
{id: string} & {id: number} == {id: string & number}
```

Of course, `string` and `number` don't have any intersecting values, so `id` must be of type `never`.





See here that type makes it easier to have additional properties in your type object....

you can just have it and if you call it it will be undefined... BUT if you do interface then you have to add it to the interface via extends or intersections



**Declaration Merging**

So if you don't want to rename the interface and you want to add another property then you can just say interface sameName = {new prop}

but if you add the props after you initialize an object to that type then the first one is still valid and you cant access that prop on it 



You can't extend a `type` 



**Practice Problems Extending Interfaces**

Please convert this code to TypeScript using interfaces and interface extension. Assume all animals have a `name` and can `makeSound`, and dogs in addition can `fetch`.

```ts
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

const myDog = new Dog("Rex");
console.log(myDog.fetch());
```

so we can keep it as a class: 

```ts
interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal{
  fetch(): string;
}

class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    return "Generic animal sound";
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name);
  }

  fetch() {
    return `${this.name} fetches a stick.`;
  }
}

const myDog = new Dog("Rex");
console.log(myDog.fetch());
```

or switch it over to an object

```ts
interface Animal {
  name: string;
  makeSound(): string;
}

interface Dog extends Animal {
  fetch(): string;
}

const myDog: Dog = {
  name: "Rex",
  makeSound: () => "Generic animal sound",
  fetch: () => "Rex fetches a stick.",
};

console.log(myDog.fetch());
```

If we want to use types and intersections then we cant use extends we have to use & 

```ts
type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
};

type Review = {
  id: string;
  productId: string;
  rating: number;
  comment: string;
};

type ProductWithReviews = Product & {
  reviews: Review[];
};
```



**Practice Problems: Type Intersections**

1) Consider the following two types 

   ```ts
   type Product = {
     name: string;
     price: number;
   };
   
   type Shipping = {
     weight: number;
     shippingCost: number;
   };
   ```

   Now, imagine there's a new product type called `ShippableProduct`, that combines the properties of both `Product` and `Shipping`. Try to create this new type using the knowledge you just learned.













**TS Playground**

https://www.typescriptlang.org/play/?#code/PTAEHUFMBsGMHsC2lQBd5oBYoCoE8AHSAZVgCcBLA1UABWgEM8BzM+AVwDsATAGiwoBnUENANQAd0gAjQRVSQAUCEmYKsTKGYUAbpGF4OY0BoadYKdJMoL+gzAzIoz3UNEiPOofEVKVqAHSKymAAmkYI7NCuqGqcANag8ABmIjQUXrFOKBJMggBcISGgoAC0oACCbvCwDKgU8JkY7p7ehCTkVDQS2E6gnPCxGcwmZqDSTgzxxWWVoASMFmgYkAAeRJTInN3ymj4d-jSCeNsMq-wuoPaOltigAKoASgAywhK7SbGQZIIz5VWCFzSeCrZagNYbChbHaxUDcCjJZLfSDbExIAgUdxkUBIursJzCFJtXydajBBCcQQ0MwAUVWDEQC0gADVHBQGNJ3KAALygABEAAkYNAMOB4GRonzFBTBPB3AERcwABS0+mM9ysygc9wASmCKhwzQ8ZC8iHFzmB7BoXzcZmY7AYzEg-Fg0HUiQ58D0Ii8fLpDKZgj5SWxfPADlQAHJhAA5SASPlBFQAeS+ZHegmdWkgR1QjgUrmkeFATjNOmGWH0KAQiGhwkuNok4uiIgMHGxCyYrA4PCCJSAA



Create a tsconfig.json file: 

run `tsc --init` in root directory













