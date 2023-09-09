const livesElement = document.getElementById('lives');
const actionPointsElement = document.getElementById('actions');

export function setLives(newval) {
  livesElement.textContent = newval;
}
export function setActions(newval) {
  actionPointsElement.textContent = newval;
}
