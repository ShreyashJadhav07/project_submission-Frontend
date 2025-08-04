// "use client";

// import { Button } from "@/components/ui/button";
// import {
//     Card,
//     CardContent,
//     CardDescription,
//     CardHeader,
//     CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import { api, ENDPOINT } from "@/lib/api";

// import { userLoggedInDetails } from "@/redux/userSlice";
// import { LucideLoader2 } from "lucide-react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useState } from "react";
// import { useDispatch } from "react-redux";
// import { toast } from "sonner";

// export default function LoginForm() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [confirmPassword, setConfirmPassword] = useState("");
//     const [loading, setLoading] = useState(false);
//     const router = useRouter();
//     const dispatch = useDispatch();

//     const onSubmit = async () => {
//         setLoading(true);

//         if (password !== confirmPassword) {
//             toast("Password does not match");
//             setLoading(false);
//             return;
//         }

//         try {
//             const res = await api.post(ENDPOINT.signup, {
//                 name,
//                 email,
//                 password,
//                 confirmPassword,
//             });

           

//             if (res.data?.user) {
//                 dispatch(userLoggedInDetails(res.data.user));
//                 toast("Account Created");
//                 router.push("/");
//             } else {
//                 toast(res.data?.message || "Signup failed");
//             }

//         } catch (err) {
//             console.error("Signup error:", err);

//             if (err.response?.data?.message) {
//                 toast(err.response.data.message);
//             } else {
//                 toast("Something went wrong");
//             }
//         } finally {
//             setLoading(false);
//         }
//     };

//     return (
//         <div className="min-h-screen bg-[#f4f4f4] flex flex-col items-center justify-center px-4 pt-10">
          
//             <div className="text-center mb-10 max-w-xl pt-5">
//                 <h1 className="text-4xl font-bold text-gray-800">Create Your Account</h1>
//                 <p className="mt-3 text-gray-600 text-base">
//                     Join House Renting Website to list or explore rental properties with ease.
//                 </p>
//             </div>

           
//             <div className="w-full max-w-md bg-white rounded-3xl shadow-xl p-8">
//                 <div className="text-center mb-6">
//                     <h2 className="text-2xl font-semibold text-gray-800">Sign Up</h2>
//                     <p className="text-gray-600 mt-1">
//                         Enter your information to create an account
//                     </p>
//                 </div>
//                 <div className="space-y-4">
//                     <div>
//                         <Label htmlFor="name" className="text-gray-700">Full Name</Label>
//                         <Input
//                             id="name"
//                             placeholder="Your name"
//                             value={name}
//                             onChange={(e) => setName(e.target.value)}
//                             className="mt-1 text-black"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <Label htmlFor="email" className="text-gray-700">Email</Label>
//                         <Input
//                             id="email"
//                             type="email"
//                             placeholder="m@example.com"
//                             value={email}
//                             onChange={(e) => setEmail(e.target.value)}
//                             className="mt-1 text-black"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <Label htmlFor="password" className="text-gray-700">Password</Label>
//                         <Input
//                             id="password"
//                             type="password"
//                             value={password}
//                             onChange={(e) => setPassword(e.target.value)}
//                             className="mt-1 text-black"
//                             required
//                         />
//                     </div>
//                     <div>
//                         <Label htmlFor="confirm-password" className="text-gray-700">Confirm Password</Label>
//                         <Input
//                             id="confirm-password"
//                             type="password"
//                             value={confirmPassword}
//                             onChange={(e) => setConfirmPassword(e.target.value)}
//                             className="mt-1 text-black"
//                             required
//                         />
//                     </div>
//                     <Button
//                         onClick={onSubmit}
//                         className="w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-2 rounded-full hover:opacity-90 transition cursor-pointer"
//                         disabled={loading}
//                     >
//                         {loading ? (
//                             <>
//                                 Creating...
//                                 <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
//                             </>
//                         ) : (
//                             "Create an account"
//                         )}
//                     </Button>
//                 </div>
//                 <div className="mt-6 text-center text-sm text-gray-600">
//                     Already have an account?{" "}
//                     <Link href="/login" className="underline font-medium text-purple-600">
//                         Login
//                     </Link>
//                 </div>
//             </div>
//         </div>
//     );
// }

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
                            placeholder="6+ characters"
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
