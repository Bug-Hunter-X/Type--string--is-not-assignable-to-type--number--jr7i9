function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    console.error("Invalid input types for addSafe function");
    return 0; // Or throw an error
  }
}

let result1 = add(5, 3); // Correct usage
let result2 = addSafe("hello", 5); // Safe usage with type guard
let result3 = addSafe(5, "world");
let result4 = addSafe("hello", "world");