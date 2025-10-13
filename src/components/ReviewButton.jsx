import { submitAssignment } from "@/api/assignmentapi"
import { submitReview, updateReview } from "@/api/reviewapi"
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
import { Star } from "lucide-react"   // ✅ Add this line

export function ReviewButton({ ButtonName, workshopId,Edit,review_id}) {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  console.log(workshopId)
  const [formData, setFormData] = useState({
    rating: 0,
    review_description: "",
    workshop_id: workshopId,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Sending to backend:", formData);
      const data = await submitReview(workshopId, formData);
      toast.success(`Successfully submitted Review!`);
      setOpen(false);
      console.log("Review Submitted:", data);
    } catch (err) {
      toast.error(err.detail ? JSON.stringify(err.detail) : "Something went wrong");
      setOpen(false);
      console.log(err);
    } finally {
      setLoading(false);
    }
  };
  const handleEditSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log("Sending to backend:", formData);
      const data = await updateReview(review_id, formData);
      toast.success(`Successfully submitted Review!`);
      setOpen(false);
      console.log("Review Submitted:", data);
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
        <Button variant="outline" onClick={() => setOpen(true)}>
          {ButtonName}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={Edit? handleEditSubmit:handleSubmit}>
        
          <DialogHeader>
            <DialogTitle>Review</DialogTitle>
            <DialogDescription>Enter your Review</DialogDescription>
          </DialogHeader>

          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label>Rating</Label>
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <Star
                    key={value}
                    size={24}
                    className={`cursor-pointer transition-colors ${
                      value <= formData.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-400"
                    }`}
                    onClick={() => setFormData({ ...formData, rating: value })}
                  />
                ))}
              </div>

              <Label htmlFor="name-1">Review Description</Label>
              <Input
                id="name-1"
                name="review_description"
                value={formData.review_description}
                onChange={handleChange}
              />
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
  );
}
