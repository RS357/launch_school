// Cute Angles 

let dms = num => {
  let MINUTES_PER_DEGREE = 60;
  let SECONDS_PER_MINUTE = 60;

  if (num === 0) return `0°00'00"`;
  if (Number.isInteger(num)) return `${num}°00'00"`;

  let degrees = Math.floor(num);
  let decimal = num - degrees;
  let minutes = decimal * MINUTES_PER_DEGREE;
  minutes = String(Math.floor(minutes)).padStart(2, "0");
  let seconds = ((decimal * MINUTES_PER_DEGREE) - minutes) * SECONDS_PER_MINUTE;
  seconds = String(Math.floor(seconds)).padStart(2, "0");
  return `${degrees}°${minutes}'${seconds}"`;
}
