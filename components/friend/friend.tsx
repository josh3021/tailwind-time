import { UserIcon } from "@heroicons/react/24/outline";

interface IFriendProps {
  name: string;
  job: string;
  isInvited?: boolean;
}

export function Friend({ name, job, isInvited = false }: IFriendProps) {
  return (
    <div className="w-full h-16 rounded-xl bg-white border-2 border-black items-center flex px-2 justify-between">
      <div className="flex">
        <div className="size-12 rounded-full border-2 border-black flex justify-center items-center">
          <UserIcon className="size-10" />
        </div>
        <div className="flex flex-col items-start px-2">
          <span className="font-bold text-lg">{name}</span>
          <span className="text-xs text-gray-700">{job}</span>
        </div>
      </div>
      <div
        className={`${
          isInvited ? "bg-black text-white" : "bg-amber-500 text-black"
        } px-4 py-1 rounded-xl border-2 border-black`}
      >
        <span className="font-bold">{isInvited ? "Invited" : "Invite"}</span>
      </div>
    </div>
  );
}
