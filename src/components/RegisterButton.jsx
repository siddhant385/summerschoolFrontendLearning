import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter,
    DialogClose,


} from "@/components/ui/dialog"
import { Button } from "./ui/button"
import { Label } from "./ui/label"
import { Input } from "./ui/input"
import { useState } from "react"
import { GuestWorkShopRegister } from "@/api/userworkshopapi"
import { toast } from "sonner"
import { usePublic } from "@/context/public"

function RegisterButton({ workshopId }) {
    const {refreshAll} = usePublic()
    const [loading, setLoading] = useState(false);
    const [open, setOpen] = useState(false)
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "workshop_id": workshopId
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
            const data = await GuestWorkShopRegister(formData);

            toast.success(`Successfully registered for the workshop!`);
            setOpen(false); 
            refreshAll();
            console.log("Guest registered:", data);
        } catch (err) {
            toast.error(err.detail ? JSON.stringify(err.detail) : "Something went wrong");
            setOpen(false); 
            console.log(err);
        } finally {
            setLoading(false);


        }
    };


        return (
            <div>
                <Dialog open={open} onOpenChange={setOpen}>

                    <DialogTrigger asChild>
                        <Button size="sm" variant="default" onClick={() => setOpen(true)}>
                            Register Now
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <form onSubmit={handleSubmit}>
                            <DialogHeader>
                                <DialogTitle>Register?</DialogTitle>
                                <DialogDescription>
                                    Register to the WorkShop as Guest
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4">
                                <div className="grid gap-3">
                                    <Label htmlFor="name-1">Name</Label>
                                    <Input
                                        id="username-1"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Enter username"
                                        type="text"
                                    />

                                </div>
                                <div className="grid gap-3">
                                    <Label htmlFor="email-1">Email</Label>
                                    <Input
                                        id="email-1"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Enter email"
                                        type="email"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button variant="outline">Cancel</Button>
                                </DialogClose>
                                <Button type="submit" disabled={loading}>
                                    {loading ? "Registering..." : "Register"}
                                </Button>
                            </DialogFooter>

                        </form>
                    </DialogContent>

                </Dialog>
            </div>
        )
    }

    export default RegisterButton