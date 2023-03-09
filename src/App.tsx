import { useState } from "react";
import { request } from "./api";

import { Information } from "./components/information";
import { getBg } from "./lib";

import { Response } from "./types";

// https://api.openweathermap.org/data/2.5/forecast?q={city%20name}&appid={API%20key}
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid={API key}
// direct?q=London&limit=5&appid={API key}
// https://api.weatherbit.io/v2.0/forecast/daily?&lat=38.123&lon=-78.543&key=fdf14455162d4af1a666d0ea1dd19447

function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<Response | null>(null);

  const search = async (evt: any) => {
    if (evt.key === "Enter") {
      const data = await request(query);
      setData(data);
      setQuery("");
    }
  };

  return (
    <>
      <div
        className={`bg-cover bg-bottom shadow-xl ${getBg(
          data?.timezone
        )} min-h-screen max-h-full w-full min-w-0 mx-auto shadow-lg md:w-1/3  md:min-w-970px`}
      >
        <main className="min-h-[10%] p-[25px]">
          <input
            type="text"
            placeholder="Search..."
            className="w-full appearance-none bg-transparent border-none outline-none p-[10px] mb-[30px] bg-slate-200 hover:bg-slate-300 shadow-xl rounded-xl "
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          ></input>

          {data?.city_name && <Information data={data} />}
        </main>
      </div>
    </>
  );
}

export default App;
