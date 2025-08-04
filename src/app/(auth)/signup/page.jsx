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

            if (err.response?.data?.message) {
                toast(err.response.data.message);
            } else {
                toast("Something went wrong");
            }
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
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex flex-col items-center justify-center px-4 pt-10">
          
            <div className="text-center mb-10 max-w-xl pt-5">
                <h1 className="text-4xl font-light text-gray-900">Make the most of your professional life</h1>
                <p className="mt-3 text-gray-600 text-lg">
                    Join your professional community today
                </p>
            </div>

           
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl font-light text-gray-900">Join Nexus</h2>
                    <p className="text-gray-600 mt-1 text-base">
                        Create your professional profile
                    </p>
                </div>
                <div className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</Label>
                        <Input
                            id="name"
                            placeholder="Your name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
                        <Input
                            id="password"
                            type="password"
                            placeholder="Password (6+ characters)"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="confirm-password" className="text-sm font-medium text-gray-700">Confirm Password</Label>
                        <Input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirm password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            onKeyPress={handleKeyPress}
                            className="h-12 text-base border-gray-300 focus:border-blue-600 focus:ring-blue-600 rounded-md"
                            required
                        />
                    </div>
                    <Button
                        onClick={onSubmit}
                        className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base rounded-full transition-colors duration-200 disabled:opacity-50"
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                Creating...
                                <LucideLoader2 className="animate-spin ml-2 w-4 h-4" />
                            </>
                        ) : (
                            "Agree & Join"
                        )}
                    </Button>
                </div>
                <div className="mt-6 text-center text-sm text-gray-600">
                    Already on Nexus?{" "}
                    <Link href="/login" className="font-semibold text-blue-600 hover:text-blue-800 transition-colors">
                        login
                    </Link>
                </div>
            </div>
        </div>
    );
}