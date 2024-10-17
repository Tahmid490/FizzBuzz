let series = "";

const fizzBuzz = (num) => {
  for (let i = 1; i <= num; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      series += "Fizzbuzz" + " ";
    } else {
      if (i % 3 == 0) {
        series += "Fizz" + " ";
      } else if (i % 5 == 0) {
        {
          series += "Buzz" + " ";
        }
      } else {
        series += i + " ";
      }
    }
  }
  return series;
};

let num = prompt("Enter a number where you want fizzBuzz within");
let howMany = fizzBuzz(num);
document.write(`<h1>Here is the fizzBuzz number ${num} : ${howMany} </h1>`);
