import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function HeroSection(props) {

  return (
    <Card className="bg-card text-card-foreground shadow-xl mx-auto p-6 rounded-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold mb-2">
          Welcome To the Jlug Summer School
        </CardTitle>
        <CardDescription className="text-lg text-gray-700 mb-4">
          Learn cutting-edge technologies, join workshops, and level up your skills!
        </CardDescription>
      </CardHeader>
      <CardContent className="mt-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div className="bg-indigo-100 p-4 rounded-lg shadow">
            <p className="text-2xl font-bold">{props.total_workshops}</p>
            <p>Total Workshops</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow">
            <p className="text-2xl font-bold">{props.upcoming_workshops}</p>
            <p>Upcoming Workshops</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow">
            <p className="text-2xl font-bold">{props.past_workshops}</p>
            <p>Past Workshops</p>
          </div>

          <div className="bg-indigo-100 p-4 rounded-lg shadow">
            <p className="text-2xl font-bold">{props.active_instructors}</p>
            <p>Active Instructors</p>
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex justify-center mt-4">

        <CardAction className="flex justify-center">
          <Button variant="outline">Get Started</Button>
        </CardAction>

      </CardFooter>

    </Card>
  );
}
