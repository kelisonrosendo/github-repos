import { useQuery } from "@tanstack/react-query";
import { getRepoData } from "@/api/get-repo-data";
import { Eye, GitFork, Star } from "@phosphor-icons/react";

interface UserNameProps {
  userName: string;
}

export function Repo({ userName }: UserNameProps) {
  const { data: repoData } = useQuery({
    queryKey: ["repo", userName],
    queryFn: () => getRepoData({ userName }),
  });

  return (
    <div className="flex flex-col">
      {repoData?.map((repo) => (
        <div key={repo.id} className="border-b border-slate-200 py-4">
          <a
            href={repo.html_url}
            target="blank"
            className="font-light text-lg text-slate-700 hover:text-violet-500"
          >
            {repo.name}
          </a>

          <div className="flex gap-4">
            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <Eye size={18} weight="fill" />
              {repo.watchers} Watchers
            </div>

            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <GitFork size={18} weight="fill" />
              {repo.forks} Forks
            </div>

            <div className="flex items-center gap-1 text-slate-400 text-sm">
              <Star size={18} weight="fill" />
              {repo.stargazers_count} Stars
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
