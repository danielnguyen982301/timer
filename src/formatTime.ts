export const formatTime = (time: number) => {
  const getMiliseconds = (time % 100).toString().padStart(2, "0");
  const getSeconds = Math.floor((time / 100) % 60)
    .toString()
    .padStart(2, "0");
  const getMinutes = Math.floor((time / 6000) % 60)
    .toString()
    .padStart(2, "0");
  const getHours = Math.floor(time / 360000)
    .toString()
    .padStart(2, "0");

  return `${getHours} : ${getMinutes} : ${getSeconds} . ${getMiliseconds}`;
};
