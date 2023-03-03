export const getDate = (date: Date = new Date()) => {
  return date.toISOString().slice(0, 10);
};

const whenIsSaturday = () => {
  const today = new Date();
  return today.getDate() + (6 - today.getDay());
}

export const getWeekendDate = () => {
  const weekendDay = whenIsSaturday()?.toString();
  const date = getDate();
  const result = date.split("-")
  result[2] = weekendDay.length < 2 ? "0" + weekendDay : weekendDay ;
  return result.join("-");
};

export const formatedDate = (date: Date = new Date()) => {
  if (!date) return;
  const meses = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul","Ago","Set","Out","Nov","Dez"];
  return ((date.getDate() + " " + meses[(date.getMonth())] + " " + date.getFullYear()));
};
