function calculateDemeritPoints(speed) {
  const speedLimit = 70;
  const kmPerDemerit = 5;
  const maxDemeritPoints = 12;

  if (speed < speedLimit) {
      console.log("Ok");
  } else {
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);

      if (demeritPoints > maxDemeritPoints) {
          console.log("License suspended");
      } else {
          console.log(`Points: ${demeritPoints}`);
      }
  }
}

const carSpeed = parseFloat(prompt("Enter car speed:"));
calculateDemeritPoints(carSpeed);