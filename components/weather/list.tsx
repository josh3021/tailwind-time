import { IWeatherData, Weather } from "@/app/page";
import { CloudIcon, SunIcon } from "@heroicons/react/24/outline";

export function WeatherBoard({ data }: { data: IWeatherData }) {
  return (
    <div
      className={`w-full h-24 border-2 border-black rounded-xl border-b-4 py-4 px-6 flex justify-between items-center ${data.backgroundColor} ${data.textColor}`}
    >
      <div>
        <h2 className="font-bold text-2xl">{data.city}</h2>
        <h4 className="text-sm, font-medium">
          {data.planet}, {data.time}
        </h4>
      </div>
      <div className="flex items-center space-x-2">
        <WeatherIcon weather={data.weather} />
        <h5 className="text-5xl font-bold">{data.temperature}°</h5>
      </div>
    </div>
  );
}

function WeatherIcon({ weather }: { weather: Weather }) {
  switch (weather) {
    case "Sunny":
      return <SunIcon className="w-16 h-16" />;
    case "Cloudy":
      return <CloudIcon className="w-16 h-16" />;
  }
}
