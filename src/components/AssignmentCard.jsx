// components/AssignmentCard.jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function AssignmentCard({ assignment }) {
    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('hi-IN', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };
    return (
        <Card key={assignment.id}>
            <CardHeader className="pb-3">
                <div className="flex flex-col space-y-2 md:flex-row md:justify-between md:items-start md:space-y-0">
                    <div>
                        <CardTitle className="text-base md:text-lg">{assignment.title}</CardTitle>
                        <CardDescription className="text-sm">{assignment.workshop_title}</CardDescription>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-3">
                        <Badge variant="outline" className="text-xs">{assignment.status}</Badge>
                        {assignment.marks && (
                            <Badge className="bg-green-100 text-green-800 text-xs">
                                {assignment.marks}/100
                            </Badge>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <div className="space-y-3 md:space-y-4">
                    <div className="flex flex-col space-y-2 md:flex-row md:items-center md:justify-between md:space-y-0">
                        {assignment.submit_link === null ? 
                        <Button variant="outline" size="sm" asChild>
                            <span>Submit</span>
                        </Button>
                        :
                        <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm" asChild>
                            <a
                                href={assignment.submit_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center space-x-2 w-fit"
                            >
                                <ExternalLink className="w-4 h-4" />
                                <span>View Submission</span>
                            </a>
                        </Button>
                        <Button variant="outline" size="sm" asChild>
                                <span>ReSubmit</span>
                        </Button>
                        </div>}
                        
                        
                        <span className="text-xs md:text-sm text-muted-foreground">
                            {formatDate(assignment.created_at)}
                        </span>
                    </div>
                    {assignment.feedback && (
                        <div className="p-3 md:p-4 bg-muted rounded-lg">
                            <h4 className="font-medium mb-2 text-sm md:text-base">Feedback:</h4>
                            <p className="text-xs md:text-sm">{assignment.feedback}</p>
                        </div>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
