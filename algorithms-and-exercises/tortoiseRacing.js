function race(v1, v2, g) {
  if (v1 >= v2) return null;

  let timeInSeconds = (g / (v2 - v1)) * 3600;

  let hours = Math.floor(timeInSeconds / 3600);
  let minutes = Math.floor((timeInSeconds - hours * 3600) / 60);
  let seconds = Math.floor(timeInSeconds - hours * 3600 - minutes * 60);

  return [hours, minutes, seconds];
}
