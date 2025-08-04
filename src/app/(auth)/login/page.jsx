"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import { api, ENDPOINT } from "@/lib/api";
import { LucideLoader2 } from "lucide-react";
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
    if (!email || !password) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      setLoading(true);
      const res = await api.post(ENDPOINT.login, { email, password });
      if (res.data.status === "success") {
        dispatch(userLoggedInDetails(res.data.user));
        toast.success("Logged in!");
        router.push("/");
      }
    } catch (err) {
      toast.error("Invalid email or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-sm p-6 bg-white border rounded-md shadow-sm">
        <h2 className="text-xl font-semibold text-center mb-4">Login</h2>
        <div className="space-y-4">
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              className="mt-1"
            />
          </div>
          <Button
            onClick={onSubmit}
            disabled={loading}
            className="w-full cursor-pointer bg-blue-600 hover:bg-blue-500"
          >
            {loading ? (
              <>
                <LucideLoader2 className="animate-spin mr-2 w-4 h-4" />
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </Button>
          <p className="text-sm text-center text-gray-600">
            Forgot your password?{" "}
            <Link href="/resetPassword" className="text-blue-600 hover:underline">
              Reset
            </Link>
          </p>
          <p className="text-sm text-center text-gray-600">
            Don’t have an account?{" "}
            <Link href="/signup" className="text-blue-600 hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
