import { DateTime } from "luxon";
import { getColor, getWeatherType } from "../../lib";
import { SvgSelector } from "../../lib/svgSelector";
import { Response } from "../../types";
import { NextDays } from "./next-days";
import { Options } from "./options";

export const Information = ({ data }: { data: Response }) => {
  console.log(data?.data[0].weather.code);
  return (
    <>
      <div
        className={`h-[340px] w-[100%] flex flex-col font-mono text-white font-medium text-center drop-shadow-xl mb-5 mt-5 mr-auto ml-auto rounded-xl 
        ${getColor(
          data?.timezone,
          getWeatherType(data?.data[0].weather.code)
        )} opacity-90`}
      >
        <p className="text-2xl mb-4 mt-3">Today</p>
        <div className="flex mr-auto ml-auto mb-4">
          <SvgSelector id={getWeatherType(data?.data[0].weather.code) || ""} />
          <p className="text-7xl ml-4">{Math.round(data?.data[0].temp)}°C</p>
        </div>

        <p className="text-2xl mb-4">{data?.data[0].weather.description}</p>
        <p className="text-xl mb-4">
          {data?.city_name}, {data?.country_code}
        </p>
        <p className="text-xl mb-4">
          {DateTime.local().toFormat("dd LLL yyyy")}
        </p>
        <p className="text-xl mb-4">{DateTime.local().toFormat("h:mm a")}</p>
      </div>
      <Options data={data} />
      <NextDays data={data} />
    </>
  );
};
