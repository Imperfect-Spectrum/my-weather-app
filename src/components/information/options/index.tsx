import { Response } from "../../../types";
import { SvgSelector } from "../../../lib/svgSelector";
import { getColor, getWeatherType } from "../../../lib";

export const Options = ({ data }: { data: Response }) => {
  return (
    <>
      <div className="flex ">
        <p className="text-white font-medium text-center">Options</p>
        <div className="bg-teal-50 rounded-full w-full h-1 m-auto ml-2 shadow-xl"></div>
      </div>
      <div className="flex items-center flex-wrap justify-around gap-3">
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"wind"} />
            <p className="text-xl text-white font-medium">
              {data?.data[0].wind_spd}
            </p>
          </div>
          <p className="text-sm text-white font-medium">Wind(m/s)</p>
        </div>
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"pop"} />
            <p className="text-xl text-white font-medium">
              {data?.data[0].pop}
            </p>
          </div>
          <p className="text-sm text-white font-medium">Precipitation(%)</p>
        </div>
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"pres"} />
            <p className="text-xl text-white font-medium">
              {Math.round(data?.data[0].pres)}
            </p>
          </div>
          <p className="text-sm text-white font-medium">pressure(mb)</p>
        </div>
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"rh"} />
            <p className="text-xl text-white font-medium">{data?.data[0].rh}</p>
          </div>
          <p className="text-sm text-white font-medium">humidity(%)</p>
        </div>
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"clouds"} />
            <p className="text-xl text-white font-medium">
              {data?.data[0].clouds}
            </p>
          </div>
          <p className="text-sm text-white font-medium">Cloudiness(%)</p>
        </div>
        <div
          className={`w-[100px] h-[70px] flex flex-col justify-center items-center mb-[17px] gap-2 rounded-lg shadow-xl ${getColor(
            data?.timezone,
            getWeatherType(data?.data[0].weather.code)
          )}`}
        >
          <div className="flex items-center flex-wrap justify-around gap-x-3">
            <SvgSelector id={"vis"} />
            <p className="text-xl text-white font-medium">
              {Math.round(data?.data[0].vis)}
            </p>
          </div>
          <p className="text-sm text-white font-medium">Visibility(km)</p>
        </div>
      </div>
    </>
  );
};
