import { Friend } from "@/components/friend/friend";
import { WeatherBoard } from "@/components/weather/list";
import {
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  PhotoIcon,
  PlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

export type Weather = "Sunny" | "Cloudy";

export interface IWeatherData {
  city: string;
  planet: string;
  time: string;
  temperature: number;
  weather: Weather;
  backgroundColor: string;
  textColor: string;
}

const weatherData: IWeatherData[] = [
  {
    city: "Casius",
    planet: "Mars",
    time: "12AM",
    temperature: 85,
    weather: "Cloudy",
    backgroundColor: "bg-white",
    textColor: "text-black",
  },
  {
    city: "Dlacria",
    planet: "Mars",
    time: "12AM",
    temperature: 85,
    weather: "Cloudy",
    backgroundColor: "bg-orange-400",
    textColor: "text-black",
  },
  {
    city: "New York",
    planet: "USA",
    time: "12AM",
    temperature: 85,
    weather: "Sunny",
    backgroundColor: "bg-cyan-400",
    textColor: "text-black",
  },
  {
    city: "Zomato",
    planet: "India",
    time: "12AM",
    temperature: 20,
    weather: "Cloudy",
    backgroundColor: "bg-red-400",
    textColor: "text-white",
  },
];

export default function Home() {
  return (
    <main className="size-full p-24 flex justify-between">
      <div className="w-[30%] h-full bg-white p-8 relative flex flex-col items-center">
        <h1 className="text-5xl font-bold my-8">Weather</h1>
        <div className="flex flex-col space-y-8 w-full">
          {weatherData.map((data, index) => (
            <WeatherBoard key={index} data={data} />
          ))}
        </div>
        <PlusIcon className="size-12 border-2 border-b-4 border-black rounded-full mx-auto absolute bottom-8 " />
      </div>
      <div className="w-[30%] h-full bg-white flex flex-col items-center justify-between px-8 py-24 space-y-8 relative">
        <XMarkIcon className="size-12 border-2 border-black border-b-4 rounded-full absolute top-20 left-8" />
        <div className="flex flex-col space-y-4 items-center">
          <h4 className="text-lg font-bold text-gray-700">SIMPLE TAG</h4>
          <h1 className="text-4xl font-extrabold text-center">
            Work with best designers
          </h1>
        </div>
        <div className="grid grid-cols-2 w-full h-96 gap-4">
          <div className="bg-orange-400 rounded-xl border-2 border-black flex justify-center items-center animate-pulse">
            <PhotoIcon className="size-12 text-white font-extralight" />
          </div>
          <div className="bg-emerald-500 rounded-xl border-2 border-black flex justify-center items-center animate-pulse">
            <PhotoIcon className="size-12 text-white font-extralight" />
          </div>
          <div className="bg-pink-400 rounded-xl border-2 border-black flex justify-center items-center animate-pulse">
            <PhotoIcon className="size-12 text-white font-extralight" />
          </div>
          <div className="bg-red-400 rounded-xl border-2 border-black flex justify-center items-center animate-pulse">
            <PhotoIcon className="size-12 text-white font-extralight" />
          </div>
        </div>
        <div className="w-full h-12 bg-blue-700 rounded-xl flex justify-center items-center mt-48">
          <span className="text-white font-semibold text-xl">
            Let&apos;s get it done
          </span>
        </div>
      </div>
      <div className="w-[30%] h-full bg-amber-500 px-8 text-center py-24 relative">
        <ChevronLeftIcon className="size-12 p-1 border-b-4 bg-white border-2 border-black rounded-full absolute top-20 text-black" />
        <h1 className="text-3xl font-black mb-12">Friends</h1>
        <div className="w-full bg-white border-2 border-b-4 border-black rounded-xl px-4 flex justify-between py-2">
          <input
            type="text"
            placeholder="Search with love ..."
            className="bg-transparent outline-none text-xl w-full"
          />
          <MagnifyingGlassIcon className="size-8 text-black ml-4" />
        </div>
        <div className="flex flex-col items-center space-y-6 mt-8">
          <Friend name="Bill Rizer" job="Planet Designer" />
          <Friend name="Genbei Yagy" job="Planet Designer" />
          <Friend name="Lancy Neo" isInvited job="Rogue Corp" />
          <Friend name="Bill Rizer" job="Hard Corp" />
          <Friend name="Konami" job="Xenon Creator" />
        </div>
      </div>
    </main>
  );
}
