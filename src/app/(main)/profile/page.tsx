"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import UpdatePassword from "@/components/users/UpdatePassword";
import UserInfo from "@/components/users/UserInfo";
import Protected from "@/lib/Protected";

export default function Page() {
  return (
    <Protected>
      <div className="pt-[120px]">
        <Tabs defaultValue="account" className="max-w-[450px] w-full mx-auto">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="account" className="font-noto">
              প্রোফাইল
            </TabsTrigger>
            <TabsTrigger value="password" className="font-noto">
              পাসওয়ার্ড পরিবর্তন
            </TabsTrigger>
          </TabsList>
          <TabsContent value="account">
            <UserInfo />
          </TabsContent>
          <TabsContent value="password">
            <UpdatePassword />
          </TabsContent>
        </Tabs>
      </div>
    </Protected>
  );
}
