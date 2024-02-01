import { UserDataResponse } from "@/types/user";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function ListUserRepo(user: UserDataResponse) {
  return (
    <div className="flex items-center gap-4 border-b py-4">
      <Avatar className="w-[60px] h-[60px]">
        <AvatarImage src={user.avatar_url} alt={user.login} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <div className="text-slate-700">
        <h1 className="font-normal">{user.login}</h1>

        <a
          href={user.html_url}
          target="blank"
          className="font-light hover:text-violet-500"
        >
          {user.html_url}
        </a>
      </div>
    </div>
  );
}
