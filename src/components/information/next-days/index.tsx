import { Response } from "../../../types";
import { getColor, getWeatherType } from "../../../lib";
import { DateTime } from "luxon";

export const NextDays = ({ data }: { data: Response }) => {
  const dateBuilder = (date: string) => {
    const correctDate = DateTime.fromISO(date);
    const options = { weekday: "short" as const };
    return correctDate.setLocale("en").toLocaleString(options);
  };

  return (
    <>
      <div className="flex ">
        <p className="text-white font-medium text-center whitespace-nowrap">
          Next 6 days
        </p>
        <div className="bg-teal-50 rounded-full w-full h-1 m-auto ml-2 shadow-xl"></div>
      </div>
      <div
        className={`flex items-center flex-wrap justify-around gap-3 rounded-xl         
         opacity-85`}
      >
        {data?.data.slice(1, 8).map((element, index) => (
          <div
            key={index}
            className={`w-[100px] h-[100px] flex justify-center items-center  rounded-lg shadow-2xl opacity-90 ${getColor(
              data?.timezone,
              getWeatherType(data?.data[0].weather.code)
            )}
            `}
          >
            <div className="flex flex-col">
              <div className="flex items-center">
                <img
                  className="h-[40px] w-[40px] "
                  src={`/icons/${data?.data[index].weather.icon}.png`}
                  alt="weatherIcon"
                />
                <p className="text-center text-white text-xl  ">
                  {dateBuilder(element.valid_date)}
                </p>
              </div>
              <p className="text-center text-white text-xl">
                {element.max_temp}°
              </p>

              <div className="bg-teal-50 rounded-full w-full h-1 shadow-xl justify-center items-center"></div>

              <p className="text-center text-white text-xl">
                {element.min_temp}°
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
