import { submitAssignment } from "@/api/assignmentapi"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import { toast } from "sonner"

export function DialogButton({workshopId,ButtonName,submit_link,title}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false)
  const [formData, setFormData] = useState({
        "title": title,
        "submit_link": "",
    });

  const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
            
        });
        console.log(formData)
    };

  const handleSubmit = async (e) => {
        
        e.preventDefault();
        setLoading(true);
        try {
            console.log("Sending to backend:", formData);
            const data = await submitAssignment(workshopId,formData);

            toast.success(`Successfully submitted Assignent!`);
            setOpen(false); 
            console.log("Assignent Submitted:", data);
        } catch (err) {
            toast.error(err.detail ? JSON.stringify(err.detail) : "Something went wrong");
            setOpen(false); 
            console.log(err);
        } finally {
            setLoading(false);


        }
    };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      
        <DialogTrigger asChild>
          <Button variant="outline" onClick={() => setOpen(true)}>{ButtonName}</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <form onSubmit={handleSubmit}>
          <DialogHeader>
            <DialogTitle>Assignemnt</DialogTitle>
            <DialogDescription>
              Enter your Assignment link
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Assignment URL</Label>
              <Input id="name-1" name="submit_link" value={formData.submit_link} onChange={handleChange} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit" disabled={loading}>
                {loading ? "Submitting..." : "Submit"}
            </Button>
          </DialogFooter>
          </form>
        </DialogContent>
      
    </Dialog>
  )
}
