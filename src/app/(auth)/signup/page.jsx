"use client";

import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, ENDPOINT } from "@/lib/api";
import { userLoggedInDetails } from "@/redux/userSlice";
import { LucideLoader2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

export default function LoginForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        setLoading(true);
        if (password !== confirmPassword) {
            toast("Password does not match");
            setLoading(false);
            return;
        }

        try {
            const res = await api.post(ENDPOINT.signup, {
                name,
                email,
                password,
                confirmPassword,
            });

            if (res.data?.user) {
                dispatch(userLoggedInDetails(res.data.user));
                toast("Account Created");
                router.push("/");
            } else {
                toast(res.data?.message || "Signup failed");
            }
        } catch (err) {
            console.error("Signup error:", err);
            toast(err.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") onSubmit();
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-2 py-10">
            <div className="w-full max-w-sm bg-white rounded-md shadow-md border border-gray-200 p-6">
                <div className="text-center mb-4">
                    <h2 className="text-xl font-medium text-gray-900">Join Nexus</h2>
                    <p className="text-gray-600 text-sm">Create your profile</p>
                </div>

                <div className="space-y-4">
                    <div className="space-y-1">
                        <Label htmlFor="name" className="text-sm">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-9 text-sm"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="email" className="text-sm">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-9 text-sm"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="password" className="text-sm">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Enter Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-9 text-sm"
                            required
                        />
                    </div>
                    <div className="space-y-1">
                        <Label htmlFor="confirm-password" className="text-sm">Confirm Password</Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm Password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-9 text-sm"
                            required
                        />
                    </div>
                    <Button
                        onClick={onSubmit}
                        className="w-full h-9 text-sm font-medium rounded-md bg-blue-600 hover:bg-blue-500 text-white cursor-pointer"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                Creating...
                                <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                            </>
                        ) : (
                            "Join"
                        )}
                    </Button>
                </div>

                <div className="mt-4 text-center text-sm text-gray-600">
                    Already on Nexus?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
}
