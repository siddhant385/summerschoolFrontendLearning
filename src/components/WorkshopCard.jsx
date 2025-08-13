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
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button"; // agar shadcn ka button hai

export const WorkshopCard = ({ workshop }) => {
  const {
    title,
    description,
    technologies,
    conducted_by,
    scheduled_at_ist,
    is_upcoming,
    time_until_workshop,
  } = workshop;

  return (
    <div className="max-w-sm mx-auto my-4 h-50 h-full">
      <Card className="flex flex-col justify-between h-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            {technologies.map((tech) => (
              <Badge key={tech} variant="outline">
                {tech}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent>
          <p className="font-medium">Conducted by: {conducted_by}</p>
          <p className="text-sm text-muted-foreground mt-1">
            Scheduled at: {scheduled_at_ist} ({time_until_workshop})
          </p>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <CardAction>
            <Badge variant={is_upcoming ? "secondary" : "destructive"}>
              {is_upcoming ? "Upcoming" : "Past"}
            </Badge>
          </CardAction>

          {is_upcoming && (
            <Button size="sm" variant="default">
              Register Now
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};
