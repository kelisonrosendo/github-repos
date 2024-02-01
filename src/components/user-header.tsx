import { UserDataResponse } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { ArrowsClockwise, MapPin } from "@phosphor-icons/react";

export function UserHeader(userData: UserDataResponse) {
  return (
    <>
      <div className="relative">
        <Avatar className="w-[140px] h-[140px]">
          <AvatarImage src={userData.avatar_url} alt={userData.name} />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="p-0 h-8 w-8 rounded-full absolute bottom-1 left-1"
              >
                <ArrowsClockwise
                  size={18}
                  weight="bold"
                  className="text-violet-500"
                />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Trocar usuário</TooltipContent>
          </Tooltip>
        </TooltipProvider>
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
