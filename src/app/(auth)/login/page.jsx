
"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Link from "next/link";
import { api, ENDPOINT } from "@/lib/api";
import { LucideLoader2, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { useDispatch } from "react-redux";
import { userLoggedInDetails } from "@/redux/userSlice";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const dispatch = useDispatch();

    const onSubmit = async () => {
        try {
            if (!email || !password) {
                toast.error("Please fill in all fields");
                return;
            }
            setLoading(true);
            const res = await api.post(ENDPOINT.login, {
                email,
                password,
            });
            if (res.data.status === "success") {
                dispatch(userLoggedInDetails(res.data.user));
                toast.success("Successfully login !");
                router.push("/");
            }
        } catch (err) {
            console.log("err: ", err.response.data.message);
            toast.error("Please check your email and password");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col">
            
      

      
            <div className="flex-1 flex items-center justify-center px-4 py-12">
                <div className="w-full max-w-md">
                  
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-light text-gray-900 mb-2">
                            Sign in
                        </h1>
                        <p className="text-gray-600 text-base">
                            Stay updated on your professional world
                        </p>
                    </div>

                    <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                                    Email or Phone
                                </Label>
                                <Input
                                    id="email"
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                                    placeholder="Email or Phone"
                                    required
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                                    Password
                                </Label>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                                    placeholder="Password"
                                    required
                                />
                            </div>

                            <Button
                                onClick={onSubmit}
                                disabled={loading}
                                className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-full transition-colors duration-200 disabled:opacity-50"
                            >
                                {loading ? (
                                    <>
                                        <LucideLoader2 className="animate-spin mr-2 w-4 h-4" />
                                        Signing in...
                                    </>
                                ) : (
                                    "Sign in"
                                )}
                            </Button>

                            <div className="text-center">
                                <Link
                                    href="/resetPassword"
                                    className="text-blue-600 hover:text-blue-800 font-semibold text-sm transition-colors"
                                >
                                    Forgot password?
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="relative my-6">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-300"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-4 bg-gray-50 text-gray-500">or</span>
                        </div>
                    </div>

                    {/* Sign Up Section */}
                    <div className="text-center">
                        <p className="text-gray-600 mb-4">
                            New to Nexus?
                        </p>
                        <Link href="/signup">
                            <Button
                                variant="outline"
                                className="w-full h-12 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold text-base rounded-full transition-colors duration-200"
                            >
                                signup
                            </Button>
                        </Link>
                    </div>

                 
                  
                </div>
            </div>
        </div>
    );
}