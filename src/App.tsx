import { useState } from "react";
import { Information } from "./components/information";
import { getBg } from "./lib";
import { Response } from "./types";
import { InputMenu } from "./components/information/inputMenu";

function App() {
  const [data, setData] = useState<Response | null>(null);

  return (
    <>
      <div
        className={`bg-cover bg-bottom ${getBg(
          data?.timezone,
          data?.data[0].weather.code as number
        )} shadow-xl h-[930px] w-[390px]  min-w-0 mx-auto`}
      >
        <main className=" relative min-h-[10%]">
          <InputMenu data={data} setData={setData} />

          {data?.city_name && <Information data={data} />}
        </main>
      </div>
    </>
  );
}

export default App;
