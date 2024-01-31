import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@/api/get-user-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  GitFork,
  MapPin,
  PersonSimpleRun,
  ThumbsUp,
} from "@phosphor-icons/react";
import { Repo } from "./repo";
import { Follower } from "./follower";
import { Following } from "./following";

export function Home() {
  const [userName] = useState("kelisonrosendo");

  const { data: userData } = useQuery({
    queryKey: ["user", userName],
    queryFn: () => getUserData({ userName }),
  });

  const tabs = [
    {
      key: "repos",
      label: "Public repos",
      count: userData?.public_repos,
      icon: <GitFork size={38} className="text-violet-500" />,
      content: <Repo userName={userName} />,
    },
    {
      key: "followers",
      label: "Followers",
      count: userData?.followers,
      icon: <PersonSimpleRun size={38} className="text-violet-500" />,
      content: <Follower userName={userName} />,
    },
    {
      key: "following",
      label: "Following",
      count: userData?.following,
      icon: <ThumbsUp size={38} className="text-violet-500" />,
      content: <Following userName={userName} />,
    },
  ];

  return (
    <div className="h-screen bg-slate-200">
      <header className="h-[250px] flex justify-center bg-violet-500">
        <div className="h-[190px] max-w-[550px] flex items-center gap-8">
          <Avatar className="w-[140px] h-[140px]">
            <AvatarImage src={userData?.avatar_url} alt={userData?.name} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>

          <div className=" flex flex-col gap-1 text-white">
            <h1 className="font-semibold text-lg">
              {userData?.name}
              <span className="ml-2 opacity-60">({userData?.login})</span>
            </h1>

            {userData?.bio && (
              <h2 className="flex items-center gap-2 font-light mb-2 italic">
                "{userData?.bio}"
              </h2>
            )}

            {userData?.location && (
              <h3 className="flex items-center gap-2 font-light">
                <MapPin />
                {userData?.location}
              </h3>
            )}
          </div>
        </div>
      </header>

      <main className="flex justify-center">
        <Card className="w-[650px] absolute top-[190px] bottom-10 overflow-hidden">
          <CardContent className="mt-6">
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
                  <ScrollArea className="h-screen pr-6">
                    {tab.content}
                  </ScrollArea>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
