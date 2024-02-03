import { UserDataResponse } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MapPin } from "@phosphor-icons/react";
import { ChangeUserDialog } from "./change-user-dialog";

export function UserHeader(userData: UserDataResponse) {
  return (
    <>
      <div className="relative">
        <Avatar className="w-[140px] h-[140px]">
          <AvatarImage src={userData.avatar_url} alt={userData.name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ChangeUserDialog />
      </div>

      <div className=" flex flex-col gap-1 text-white">
        <h1 className="font-semibold text-lg">
          {userData.name}
          <a
            href={userData.html_url}
            target="_blank"
            className="ml-2 opacity-60 hover:opacity-40"
          >
            ({userData.login})
          </a>
        </h1>

        {userData.bio && (
          <h2 className="flex items-center gap-2 font-light mb-2 italic">
            "{userData?.bio}"
          </h2>
        )}

        {userData.location && (
          <h3 className="flex items-center gap-2 font-light">
            <MapPin />
            {userData.location}
          </h3>
        )}
      </div>
    </>
  );
}
