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
import RegisterButton from "./RegisterButton";
import { useAuth } from "@/context/auth";
import { Button } from "./ui/button";
import { UserWorkShopRegister } from "@/api/userworkshopapi";
import { useState } from "react";
import { toast } from "sonner"
import { ReviewButton } from "./ReviewButton";
import { usePrivate } from "@/context/private";


export const WorkshopCard = ({ workshop,isUserGiven }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const isEnrolled = isUserGiven || null;
  const {fetchMyWorkshops,fetchMyAssignments} = usePrivate()

  async function RegisterForWorkShop() {
    setLoading(true);
    try {
      const data = await UserWorkShopRegister({
        workshop_id: workshop.id,
      });
      toast.success("Workshop registered successfully!");
      fetchMyWorkshops();
      fetchMyAssignments();
    } catch (err) {
      toast.error(err.detail || "Something went wrong");
    } finally {
      setLoading(false);
    }
  }
  const {
    title,
    description,
    scheduled_at,
    technologies,
    conducted_by,
    scheduled_at_ist,
    is_upcoming,
    time_until_workshop,
  } = workshop;

  return (
    <div >
      <Card className="flex flex-col justify-between items-start  max-md:items-start max-sm:items-start h-full ">
        <CardHeader className=" w-full ">
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
            Scheduled at: {scheduled_at_ist || scheduled_at} ({time_until_workshop || "Past"})
          </p>
        </CardContent>

        <CardFooter className="flex justify-between gap-5 max-sm:gap-2 max-sm:flex-col">
          <CardAction>
            {isEnrolled ? <Badge variant={ "destructive"}>
              {"Enrolled"}
            </Badge>:
            <Badge className="p-[9px]" variant={is_upcoming ? "secondary" : "destructive"}>
              {is_upcoming ? "Upcoming" : "Past"}
            </Badge>
            }
          </CardAction>

          {is_upcoming && (
            user ? <Button size="sm" variant="default" onClick={RegisterForWorkShop} disabled={loading}>
              {loading ? "Registering..." : "Register Now"}
            </Button> :
              <RegisterButton workshopId={workshop.id} />
          )}
          

        </CardFooter>
      </Card>
    </div>
  );
};