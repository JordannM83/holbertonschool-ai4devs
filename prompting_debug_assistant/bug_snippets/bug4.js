function calculateAverage(numbers) {
  let sum = 0;
  for (let i = 0; i <= numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}

const scores = [85, 90, 78, 92, 88];
const average = calculateAverage(scores);
console.log("Average score: " + average);
