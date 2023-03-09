import { Response } from "../../../types";
import { getColor } from "../../../lib";
import moment from "moment-timezone";

export const NextDays = ({ data }: { data: Response }) => {
  const dateBuilder = (date: string) => {
    const correctDate = new Date(date);
    return moment(correctDate).format("ddd");
  };

  return (
    <>
      <div className="flex ">
        <p className="text-white font-medium text-center whitespace-nowrap">
          Next 7 days
        </p>
        <div className="bg-teal-50 rounded-full w-full h-1 m-auto ml-2 shadow-xl"></div>
      </div>
      <div className="flex flex-row justify-between">
        {data?.data.slice(1, 8).map((element, index) => (
          <div
            key={index}
            className={`w-[45px] h-[80px] flex justify-center items-center  rounded-lg shadow-xl ${getColor(
              data?.timezone
            )}`}
          >
            <div className="flex flex-col">
              <p className="text-center text-white">
                {dateBuilder(element.valid_date)}
              </p>
              <p className="text-center text-white">{element.min_temp}</p>
              <div className="bg-teal-50 rounded-full w-full h-1 shadow-xl justify-center items-center"></div>
              <p className="text-center text-white">{element.max_temp}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
