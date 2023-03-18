import { Coords, Response } from "../types";

const weatherbitUrl = "https://api.weatherbit.io/v2.0/forecast/daily";
const openweathermapUrl = "http://api.openweathermap.org/geo/1.0/";

export async function request(query: string) {
  const responseGeo = await fetch(
    `${openweathermapUrl}direct?q=${query}&limit=1&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}`
  );
  const dataGeo = await responseGeo.json();
  const responce = await fetch(
    `${weatherbitUrl}?&lat=${dataGeo[0].lat}&lon=${dataGeo[0].lon}&key=${process.env.REACT_APP_WEATERBIT_API_KEY}`
  );
  console.log(responce.json);
  const data: Response = await responce.json();
  console.log(data);
  return data;
}

export async function geoRequest(coords: Coords | null) {
  const responce = await fetch(
    `${weatherbitUrl}?&lat=${coords?.lat}&lon=${coords?.lng}&key=${process.env.REACT_APP_WEATERBIT_API_KEY}`
  );
  const data: Response = await responce.json();
  console.log(data);
  return data;
}
