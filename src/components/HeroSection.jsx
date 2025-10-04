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
    <Card className="w-[60%] bg-card text-card-foreground shadow-xl mx-auto py-8 px-0 rounded-xl">
      {/* <CardHeader className="text-center">
        <CardTitle className="text-4xl font-bold mb-2">
          Welcome To the Jlug Summer School
        </CardTitle>
        <CardDescription className="text-lg mb-2">
          Learn cutting-edge technologies, join workshops, and level up your skills!
        </CardDescription>
      </CardHeader> */}
      <CardContent>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 text-center">
          <div className="p-2 rounded-lg shadow">
            <p className="text-4xl font-bold mb-3">{props.total_workshops}</p>
            <p className="text-[#919191] text-xs" >Total Workshops</p>
          </div>

          <div className="p-2 rounded-lg shadow">
            <p className="text-4xl font-bold mb-3">{props.upcoming_workshops}</p>
            <p className="text-[#919191] text-xs"  >Upcoming Workshops</p>
          </div>

          <div className="p-2 rounded-lg shadow">
            <p className="text-4xl font-bold mb-3">{props.past_workshops}</p>
            <p className="text-[#919191] text-xs" >Past Workshops</p>
          </div>

          <div className="p-2 rounded-lg shadow">
            <p className="text-4xl font-bold mb-3">{props.active_instructors}</p>
            <p className="text-[#919191] text-xs" >Active Instructors</p>
          </div>
        </div>
      </CardContent>

    </Card>
  );
}
