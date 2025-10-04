import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-950 px-4">
      
      {/* Illustration */}
      <img
        src="public/placeholder.svg"
        alt="Lost illustration"
        className="w-full max-w-md rounded-xl object-cover mb-8 animate-fadeIn"
      />

      {/* Card */}
      <Card className="max-w-lg w-full text-center shadow-lg">
        <CardContent className="space-y-4">
          <CardTitle className="text-4xl font-bold text-gray-800 dark:text-gray-50">
            Lost in the Clouds
          </CardTitle>
          <CardDescription className="text-gray-600 dark:text-gray-400">
            Whoops! Looks like you took a wrong turn. Don't worry, we’ll get you back home.
          </CardDescription>
          <Link to="/">
            <Button variant="default" className="mt-2">
              Go Back Home
            </Button>
          </Link>
        </CardContent>
      </Card>

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
