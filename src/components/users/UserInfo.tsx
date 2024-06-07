"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Image from "next/image";

import { LoadingButton } from "@/components/LoaderButton";
import { cn, serverUrl } from "@/lib/utils";

import ComponentLoader from "@/components/ComponentLoader";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { customRevalidateTag } from "@/lib/_actions/revalidateTag";
import {
  useUpdateProfileMutation,
  useUpdateUserInfoMutation,
} from "@/redux/features/users/usersApi";
import { Camera, Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const UserInfo = () => {
  const { user } = useSelector((state: any) => state.auth);
  const [name, setName] = useState<string>();
  const [phone, setPhone] = useState<string>();
  const [address, setAddress] = useState<string>();
  const [fatherName, setFatherName] = useState<string>();
  const [motherName, setMotherName] = useState<string>();
  const [district, setDistrict] = useState<string>();
  const [postCode, setPostCode] = useState<string>();
  const [instructor, setInstructor] = useState<{
    title?: string;
    description?: string;
  }>();
  const [isMounded, setIsMounted] = useState(false);
  const router = useRouter();

  const [updateProfile, { isSuccess, error, isLoading, data }] =
    useUpdateProfileMutation();
  const [
    updateUserInfo,
    { isSuccess: nameIsSuccess, isLoading: updateIsLoading, data: nameData },
  ] = useUpdateUserInfoMutation();

  const handleImage = (e: any) => {
    const avatar = e.target.files[0];

    const formData = new FormData();
    formData.append("avatar", avatar);

    updateProfile(formData);
  };

  const handleName = async () => {
    const updatedPayload = {
      name,
      phone,
      address,
      fatherName,
      motherName,
      district,
      postCode,
      instructor,
    };

    await updateUserInfo(updatedPayload);
    await customRevalidateTag("Single_Course");
  };

  //side effects
  useEffect(() => {
    if (nameIsSuccess) {
      toast.success(nameData.message);
    }
  }, [nameData, nameIsSuccess]);

  useEffect(() => {
    if (isSuccess) {
      toast.success(data.message);
    }
    if (error) {
      const errorData = error as any;
      toast.error(errorData.data?.message);
    }
  }, [data, error, isSuccess, router]);

  useEffect(() => {
    setIsMounted(true);

    //initialize user info
    setName(user?.name && user.name);
    setPhone(user?.phone && user.phone);
    setAddress(user?.address && user.address);
    setInstructor(
      user?.instructor && {
        title: user?.instructor?.title,
        description: user?.instructor?.description,
      }
    );
    setFatherName(user?.fatherName && user?.fatherName);
    setMotherName(user?.motherName && user?.motherName);
    setDistrict(user?.district);
    setPostCode(user?.postCode);
  }, [
    user.address,
    user?.district,
    user?.fatherName,
    user?.instructor,
    user?.motherName,
    user.name,
    user.phone,
    user?.postCode,
  ]);

  if (!isMounded) {
    return <ComponentLoader />;
  }

  return (
    <div className="">
      <Card className="">
        <CardHeader className="w-full flex justify-center">
          <div className="relative">
            <Image
              className={cn(
                "rounded-full m-auto w-[110px] h-[110px] object-cover",
                isLoading ? "blur-md" : ""
              )}
              src={
                user?.avatar
                  ? `${serverUrl}/${user.avatar}`
                  : "/default-avater.jpg"
              }
              alt="default avater"
              height={110}
              width={110}
            />
            <Loader2
              className={cn(
                `absolute inset-0 m-auto h-10 w-10 animate-spin`,
                isLoading ? "block" : "hidden"
              )}
            />
            <Input
              className="hidden"
              name="avatar"
              id="avatar"
              onChange={handleImage}
              type="file"
              disabled={isLoading}
              accept="image/jpeg,image/jpg,image/png,image/webp"
            />
            <Label
              htmlFor="avatar"
              className="absolute bottom-0 left-[50%] bg-secondary rounded-full p-1  mx-auto cursor-pointer"
            >
              <Camera className="z-20 h-[30px] w-[30px] rounded-full" />
            </Label>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="space-y-1">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              value={name}
              disabled={updateIsLoading}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="email">Email</Label>
            <Input defaultValue={user?.email} readOnly disabled />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Label htmlFor="fatherName">Father Name</Label>
              <Input
                id="fatherName"
                value={fatherName}
                disabled={updateIsLoading}
                placeholder="Enter Your Father Name"
                onChange={(e) => setFatherName(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="motherName">Mother Name</Label>
              <Input
                id="motherName"
                value={motherName}
                placeholder="Enter Your Mother Name"
                disabled={updateIsLoading}
                onChange={(e) => setMotherName(e.target.value)}
              />
            </div>
          </div>

          <div className="space-y-1">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              value={phone}
              disabled={updateIsLoading}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="space-y-1">
            <Label htmlFor="address">Address</Label>
            <Input
              id="address"
              value={address}
              disabled={updateIsLoading}
              placeholder="Enter Your Address"
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="space-y-1">
              <Label htmlFor="district">District</Label>
              <Input
                id="district"
                value={district}
                disabled={updateIsLoading}
                placeholder="Enter Your District"
                onChange={(e) => setDistrict(e.target.value)}
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="postCode">Post Code</Label>
              <Input
                id="postCode"
                value={postCode}
                placeholder="Enter Your Post Code"
                disabled={updateIsLoading}
                onChange={(e) => setPostCode(e.target.value)}
              />
            </div>
          </div>
          {user?.role === "instructor" && (
            <div className="">
              <Separator className="my-6" />
              <h1 className="font-semibold text-center text-base mb-2 uppercase text-muted-foreground">
                Instructor
              </h1>
              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="title">Title</Label>
                  <Input
                    id="title"
                    value={instructor?.title}
                    disabled={updateIsLoading}
                    onChange={(e) => setInstructor({ title: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    value={instructor?.description}
                    disabled={updateIsLoading}
                    onChange={(e) =>
                      setInstructor({ description: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
          )}
        </CardContent>
        <CardFooter>
          {updateIsLoading ? (
            <LoadingButton className="w-auto" />
          ) : (
            <Button onClick={handleName}>সেইভ পরিবর্তন</Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default UserInfo;
