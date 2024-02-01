import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUserData } from "@/api/get-user-data";
import { Card, CardContent } from "@/components/ui/card";
import { UserHeader } from "@/components/user-header";
import { TabCardContent } from "@/components/tab-card-content";

export function Home() {
  const [userName] = useState<string>("kelisonrosendo");

  const { data: userData } = useQuery({
    queryKey: ["user", userName],
    queryFn: () => getUserData(userName),
  });

  return (
    <div className="h-screen bg-slate-200">
      <header className="h-[250px] flex justify-center bg-violet-500">
        <div className="h-[190px] max-w-[550px] flex items-center gap-8">
          {userData && <UserHeader {...userData} />}
        </div>
      </header>

      <main className="flex justify-center">
        <Card className="w-[650px] absolute top-[190px] bottom-10 overflow-hidden">
          <CardContent className="mt-6">
            {userData && <TabCardContent {...userData} />}
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
