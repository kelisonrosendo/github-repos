import { UserDataResponse } from "@/types/user";
import { Repo } from "@/pages/home/repo";
import { Follower } from "@/pages/home/follower";
import { Following } from "@/pages/home/following";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { ScrollArea } from "./ui/scroll-area";
import { GitFork, PersonSimpleRun, ThumbsUp } from "@phosphor-icons/react";

export interface TabProp {
  key: string;
  label: string;
  count: number | undefined;
  icon: React.ReactElement;
  content: React.ReactElement;
}

export function TabCardContent(userData: UserDataResponse) {
  const tabs: TabProp[] = [
    {
      key: "repos",
      label: "Public repos",
      count: userData?.public_repos,
      icon: <GitFork size={38} className="text-violet-500" />,
      content: <Repo userName={userData.login} />,
    },
    {
      key: "followers",
      label: "Followers",
      count: userData?.followers,
      icon: <PersonSimpleRun size={38} className="text-violet-500" />,
      content: <Follower userName={userData.login} />,
    },
    {
      key: "following",
      label: "Following",
      count: userData?.following,
      icon: <ThumbsUp size={38} className="text-violet-500" />,
      content: <Following userName={userData.login} />,
    },
  ];

  return (
    <Tabs defaultValue="repos">
      <TabsList>
        {tabs.map((tab) => (
          <TabsTrigger value={tab.key} key={tab.key}>
            <div className="flex items-center gap-2">
              {tab.icon}
              <div className="flex flex-col items-start font-light">
                <span className=" font-bold text-lg">{tab.count}</span>
                {tab.label}
              </div>
            </div>
          </TabsTrigger>
        ))}
      </TabsList>

      {tabs.map((tab) => (
        <TabsContent value={tab.key} key={tab.key}>
          <ScrollArea className="pr-6 overflow-auto h-[calc(100vh-367px)]">
            {tab.content}
          </ScrollArea>
        </TabsContent>
      ))}
    </Tabs>
  );
}
