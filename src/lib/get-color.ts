import moment from "moment";

export const getColor = (timezone: string | undefined) => {
  if (!timezone) return "bg-teal-500";
  const realHourse = Number(moment.tz(new Date(), timezone).format("HH"));
  if (5 <= realHourse && realHourse <= 12) {
    return "bg-amber-500";
  }
  if (20 <= realHourse || realHourse <= 4) {
    return "bg-blue-500";
  }
  return "bg-teal-500";
};

export const getBg = (timezone: string | undefined) => {
  if (!timezone) return "bg-daytime";
  const realHourse = Number(moment.tz(new Date(), timezone).format("HH"));
  if (5 <= realHourse && realHourse <= 12) {
    return "bg-morning";
  }
  if (20 <= realHourse || realHourse <= 4) {
    return "bg-evening";
  }
  return "bg-daytime";
};
