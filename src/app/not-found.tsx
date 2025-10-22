"use client";

import { Button } from "@/components/ui/button";
import { USER_ROUTES } from "@/constants/navigation-data/URLs";
import { ArrowLeft, Home } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-black font-sans">
      <div className="relative px-6 py-20 text-center w-full max-w-lg">
        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden opacity-30">
          <div className="absolute left-1/4 top-1/4 h-64 w-64 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
          <div className="absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full bg-amber-500/10 blur-3xl animate-pulse delay-700" />
        </div>

        <div className="mb-8">
          <h1 className="text-9xl font-black tracking-tighter sm:text-[12rem] lg:text-[16rem]">
            <span className="bg-gradient-to-br from-red-500 via-amber-500 to-red-600 bg-clip-text text-transparent">
              404
            </span>
          </h1>
          <div className="mt-2 h-1 w-32 mx-auto bg-gradient-to-r from-red-500 to-amber-500 rounded-full" />
        </div>
        
        <div className="mb-10 space-y-3">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Page Not Found
          </h2>
          <p className="text-lg text-white/60 max-w-md mx-auto">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={() => router.back()}
            variant="outline"
            size="lg"
            className="group transition-all duration-300 shadow-xl hover:shadow-red-500/30"
          >
            <ArrowLeft className="mr-2 h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
          <Button
            variant="myTheme"
            onClick={() => router.push(USER_ROUTES.HOME)}
            size="lg"
            className="group shadow-xl hover:shadow-amber-500/30 transition-all duration-300"
          >
            <Home className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;