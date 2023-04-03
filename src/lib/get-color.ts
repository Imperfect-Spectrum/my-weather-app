import { DateTime } from "luxon";

export const getColor = (
  timezone: string | undefined,
  weatherType: string | undefined
) => {
  const realHourse = Number(DateTime.local().setZone(timezone).toFormat("HH"));
  if (!weatherType) return "";

  if (weatherType === "weatherRainy") {
    return 5 <= realHourse && realHourse <= 12
      ? "bg-[#3e6669]"
      : 20 <= realHourse || realHourse <= 4
      ? "bg-[#605174]"
      : "bg-[#80c4af]";
  }
  if (weatherType === "weatherSnowy") {
    return 5 <= realHourse && realHourse <= 12
      ? "bg-[#9ab9cd]"
      : 20 <= realHourse || realHourse <= 4
      ? "bg-[#1C8FBD]"
      : "bg-[#a8adc5]";
  }
  if (weatherType === "weatherSunny") {
    return 5 <= realHourse && realHourse <= 12
      ? "bg-[#fae3be]"
      : "bg-[#a0dda8]";
  }
  if (weatherType === "weatherCloudy") {
    return 5 <= realHourse && realHourse <= 12
      ? "bg-[#ad7469]"
      : 20 <= realHourse || realHourse <= 4
      ? "bg-[#9191ad]"
      : "bg-[#588cad]";
  }
};

export const getBg = (timezone: string | undefined, weatherCode: number) => {
  if (!timezone) return "bg-daytimeRainy";
  const realHourse = Number(DateTime.local().setZone(timezone).toFormat("HH"));
  if (199 <= weatherCode && weatherCode <= 523) {
    // Rainy
    return 5 <= realHourse && realHourse <= 12
      ? "bg-morningRainy"
      : 20 <= realHourse || realHourse <= 4
      ? "bg-eveningRainy"
      : "bg-daytimeRainy";
  }
  if (599 <= weatherCode && weatherCode <= 624) {
    // Snowy
    return 5 <= realHourse && realHourse <= 12
      ? "bg-morningSnowy"
      : 20 <= realHourse || realHourse <= 4
      ? "bg-eveningSnowy"
      : "bg-daytimeSnowy";
  }
  if (699 <= weatherCode && weatherCode <= 752) {
    // Sunny
    return 5 <= realHourse && realHourse <= 12
      ? "bg-morningSunny"
      : "bg-daytimeSnowy";
  }
  // Cloudy
  return 5 <= realHourse && realHourse <= 12
    ? "bg-morningCloudy"
    : 20 <= realHourse || realHourse <= 4
    ? "bg-eveningCloudy"
    : "bg-daytimeCloudy";
};

export const getWeatherType = (weatherCode: number) => {
  if (199 <= weatherCode && weatherCode <= 523) {
    return "weatherRainy";
  }
  if (599 <= weatherCode && weatherCode <= 624) {
    return "weatherSnowy";
  }
  if (699 <= weatherCode && weatherCode <= 752) {
    return "weatherSunny";
  }
  if (799 <= weatherCode && weatherCode <= 804) {
    return "weatherCloudy";
  }
};
