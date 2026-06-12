"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

type Mode = "login" | "register";

export default function LoginPage() {
    const router = useRouter();

    const API_URL =
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:5050/api/v1";

    const [mode, setMode] = useState<Mode>("login");

    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const resetMessages = () => {
        setMessage("");
        setError("");
    };

    const handleLogin = async () => {
        const res = await fetch(`${API_URL}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email,
                password,
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Login failed");
        }

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        setMessage("Login successful");

        // Change this route to your dashboard/home route
        router.push("/adminview");
    };

    const handleRegister = async () => {
        const res = await fetch(`${API_URL}/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fname,
                lname,
                phone,
                image: null,
                email,
                address,
                password,
                isAdmin: "false",
            }),
        });

        const data = await res.json();

        if (!res.ok) {
            throw new Error(data.message || "Registration failed");
        }

        setMessage("Registration successful. Please login now.");
        setMode("login");

        setFname("");
        setLname("");
        setPhone("");
        setAddress("");
        setPassword("");
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        resetMessages();
        setLoading(true);

        try {
            if (mode === "login") {
                await handleLogin();
            } else {
                await handleRegister();
            }
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message);
            } else {
                setError("Something went wrong");
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 px-4">
            <form
                onSubmit={handleSubmit}
                className="w-full max-w-[390px] bg-white p-8 rounded-2xl shadow-xl flex flex-col gap-4"
            >
                <div className="flex bg-gray-100 rounded-xl p-1 mb-2">
                    <button
                        type="button"
                        onClick={() => {
                            setMode("login");
                            resetMessages();
                        }}
                        className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${mode === "login"
                            ? "bg-indigo-600 text-white shadow"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        Login
                    </button>

                    <button
                        type="button"
                        onClick={() => {
                            setMode("register");
                            resetMessages();
                        }}
                        className={`w-1/2 py-2 rounded-lg text-sm font-semibold transition ${mode === "register"
                            ? "bg-indigo-600 text-white shadow"
                            : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        Register
                    </button>
                </div>

                <div>
                    <h1 className="text-2xl font-bold text-center text-gray-800">
                        {mode === "login" ? "Welcome Back" : "Create Account"}
                    </h1>

                    <p className="text-sm text-center text-gray-500 mt-1">
                        {mode === "login"
                            ? "Please login to continue"
                            : "Register to create your account"}
                    </p>
                </div>

                {message && (
                    <div className="rounded-lg bg-green-50 border border-green-200 px-3 py-2 text-sm text-green-700">
                        {message}
                    </div>
                )}

                {error && (
                    <div className="rounded-lg bg-red-50 border border-red-200 px-3 py-2 text-sm text-red-700">
                        {error}
                    </div>
                )}

                {mode === "register" && (
                    <>
                        <div className="grid grid-cols-2 gap-3">
                            <input
                                type="text"
                                placeholder="First name"
                                value={fname}
                                onChange={(e) => setFname(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />

                            <input
                                type="text"
                                placeholder="Last name"
                                value={lname}
                                onChange={(e) => setLname(e.target.value)}
                                className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                required
                            />
                        </div>

                        <input
                            type="text"
                            placeholder="Phone"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />

                        <input
                            type="text"
                            placeholder="Address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            required
                        />
                    </>
                )}

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />

                <input
                    type="password"
                    placeholder={mode === "login" ? "Password" : "Create password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    required
                />

                <button
                    type="submit"
                    disabled={loading}
                    className="bg-indigo-600 text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition disabled:opacity-60 disabled:cursor-not-allowed"
                >
                    {loading
                        ? mode === "login"
                            ? "Signing in..."
                            : "Creating account..."
                        : mode === "login"
                            ? "Sign In"
                            : "Register"}
                </button>

                {mode === "login" && (
                    <div className="flex justify-between text-sm text-gray-500">
                        <span className="cursor-pointer hover:underline">
                            Forgot password?
                        </span>
                    </div>
                )}

                <p className="text-center text-sm text-gray-500">
                    {mode === "login" ? "Don’t have an account?" : "Already registered?"}{" "}
                    <button
                        type="button"
                        onClick={() => {
                            setMode(mode === "login" ? "register" : "login");
                            resetMessages();
                        }}
                        className="font-semibold text-indigo-600 hover:underline"
                    >
                        {mode === "login" ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </div>
    );
}