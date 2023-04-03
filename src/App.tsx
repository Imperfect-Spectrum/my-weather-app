import { useState } from "react";
import { Information } from "./components/information";
import { getBg, getColor, getWeatherType } from "./lib";
import { Response } from "./types";
import { InputMenu } from "./components/information/inputMenu";

function App() {
  const [data, setData] = useState<Response | null>(null);
  const [errorData, setErrorData] = useState(false);
  return (
    <div
      className={`${
        data === null
          ? "bg-[#80c4af]"
          : getColor(
              data?.timezone,
              getWeatherType(
                data?.data[0].weather.code !== undefined
                  ? data?.data[0].weather.code
                  : 0
              )
            )
      }`}
    >
      <div
        className={`bg-cover bg-bottom ${getBg(
          data?.timezone,
          data?.data[0].weather.code as number
        )} shadow-xl h-[930px] w-full mx-auto  sm:w-[390px]`}
      >
        <div className="relative">
          <InputMenu
            data={data}
            setData={setData}
            errorData={errorData}
            setErrorData={setErrorData}
          />
          {errorData === true ? (
            <h1 className="text-center text-4xl font-extrabold leading-none tracking-tight text-gray-900 pt-[200px] ">
              City not found
            </h1>
          ) : null}
          {data?.city_name && <Information data={data} />}
        </div>
      </div>
    </div>
  );
}

export default App;
