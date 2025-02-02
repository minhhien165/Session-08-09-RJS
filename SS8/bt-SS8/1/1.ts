function parseInput(input: string): number | boolean | string | null | undefined {
    switch (input) {
      case "number":
        return 123;
      case "boolean":
        return true;
      case "string":
        return "Hello";
      case "null":
        return null;
      case "undefined":
        return undefined;
    }
}
console.log(parseInput("number")); 
console.log(parseInput("boolean"));
console.log(parseInput("string"));
console.log(parseInput("null"));
console.log(parseInput("undefined"));