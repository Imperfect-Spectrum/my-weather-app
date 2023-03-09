import moment from "moment";
import { Response } from "../../types";
import { NextDays } from "./next-days";
import { Options } from "./options";

export const Information = ({ data }: { data: Response }) => {
  return (
    <>
      <div className=" flex flex-col text-4xl font-mono text-white font-medium text-center drop-shadow-xl mb-5">
        <p>{data?.city_name}</p>
        <p>{moment.tz(new Date(), data.timezone).format("HH:mm")}</p>
      </div>
      <div className="text-5xl font-mono text-white font-medium text-center block mb-[163px]">
        <p>{Math.round(data?.data[0].temp)}°C</p>
        <p className="text-xl">{data?.data[0].weather.description}</p>
      </div>
      <Options data={data} />
      <NextDays data={data} />
    </>
  );
};
