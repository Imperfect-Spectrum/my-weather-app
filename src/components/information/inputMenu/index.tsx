import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { SvgSelector } from "../../../lib/svgSelector";
import { Coords, Response } from "../../../types";
import { geoRequest, request } from "../../../api";
import { getColor, getWeatherType } from "../../../lib";

type InputMenuProps = {
  data: Response | null;
  setData: React.Dispatch<React.SetStateAction<Response | null>>;
  errorData: boolean;
  setErrorData: React.Dispatch<React.SetStateAction<boolean>>;
};

export const InputMenu = ({
  data,
  setData,
  errorData,
  setErrorData,
}: InputMenuProps) => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [query, setQuery] = useState("");
  const [coords, setCoords] = useState<Coords | null>(null);

  const search = async (evt: any) => {
    if (evt.key === "Enter") {
      const newData = await request(query);
      if (newData) {
        setErrorData(false);
        setData(newData);
        setQuery("");
        toggleOverlay();
      } else {
        setErrorData(true);
        setQuery("");
        setData(null);
        toggleOverlay();
      }
    }
  };

  const handleGeoClick = async () => {
    try {
      const position = await new Promise<GeolocationPosition>(
        (resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        }
      );
      setCoords({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    } catch (error) {
      console.log("Error getting geolocation: ", error);
    }
  };

  useEffect(() => {
    handleGeoClick();
  }, []);

  useEffect(() => {
    if (coords) {
      const fetchData = async () => {
        try {
          const data = await geoRequest(coords);
          setData(data);
        } catch (error) {
          console.log("Error fetching weather data: ", error);
        }
      };
      fetchData();
    }
  }, [coords, setData]);

  const toggleOverlay = () => {
    setOverlayVisible(!overlayVisible);
  };

  return (
    <>
      <button
        onClick={toggleOverlay}
        className="absolute top-3 left-3 mt-5 ml-5 mr-5 z-50 focus:outline-none"
      >
        {overlayVisible ? (
          <FaTimes className="w-7 h-7" />
        ) : (
          <FaBars className="w-7 h-7" />
        )}
      </button>
      {overlayVisible && (
        <>
          <div className="fixed z-40 top-0 w-full sm:w-[390px]">
            <div
              className={`pt-1 pl-4 shadow-lg animate-slideIn h-[930px] w-full sm:w-[390px] ${
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
              <div className="flex justify-center items-center p-[20px] mt-0 ml-7">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full appearance-none bg-transparent border-none outline-none p-[10px] mb-[0px] mr-[10px] bg-white hover:bg-slate-300 shadow-xl rounded-xl "
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                  onKeyDown={search}
                ></input>
                <button
                  className="flex justify-center items-center hover:bg-slate-300 rounded-full"
                  onClick={handleGeoClick}
                >
                  <SvgSelector id={"geo"} />
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
