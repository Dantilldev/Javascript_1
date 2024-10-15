// Task 1
const printCurrentTime = () => {
  const currentTime = new Date();
  return currentTime.toLocaleTimeString();
};
console.log(printCurrentTime());

// Task 2
function myName() {
  console.log('Daniel');
}
myName();
myName();

// Task 3
function printGreeting(name) {
  console.log('Hello ' + name);
}
printGreeting('Bob');
printGreeting('Sue');

// Task 4
function mutliply(a, b) {
  return a * b;
}
const first = mutliply(2, 2);
console.log(first);

const second = mutliply(100, 4);
console.log(second);

// Task 5:
function warmEnough(currentTemp) {
  if (currentTemp >= 10) {
    console.log('Go for a run!');
    return true;
  } else {
    console.log('Stay at home!');
    return false;
  }
}

warmEnough(15);
