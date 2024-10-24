// Task 2

const vehicle1 = {
  type: "car",
  color: "green",
  brand: "honda",
  mileage: 1000,
};
const vehicle2 = {
  type: "truck",
  color: "yellow",
  brand: "toyota",
  mileage: 10000,
};
const vehicle3 = {
  type: "van",
  color: "orange",
  brand: "ford",
  mileage: 100000,
};

console.log(vehicle1);
console.log(vehicle2);
console.log(vehicle3);

// Task 2.1

function needsRevision(vehicle) {
  return vehicle.mileage > 60000;
}

console.log(`Does vehicle1 need revision?`, needsRevision(vehicle1));
console.log(`Does vehicle2 need revision?`, needsRevision(vehicle2));
console.log(`Does vehicle3 need revision?`, needsRevision(vehicle3));
