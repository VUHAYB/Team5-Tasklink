import { useState } from "react";
// Make sure to install lucide-react if you haven't: npm i lucide-react
import { Command } from "lucide-react"; 

export default function LoginPage() {
  // 1. State variables holding user input
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent form submission reload
    console.log("Logging in with:", email, password);
    // Connect to FastAPI backend here later
  };

  return (
    // Changed background to a cleaner, lighter gray (zinc-50)
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 px-4">
      <div className="w-full max-w-md space-y-8">
        
        {/* Header Section */}
        <div className="text-center">
          {/* Added a minimalist icon placeholder */}
          <div className="mx-auto h-12 w-12 items-center justify-center rounded-xl bg-black text-white flex mb-4">
              <Command size={24} />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-zinc-900">
            Sign in to TaskLink
          </h2>
          <p className="mt-2 text-sm text-zinc-600">
            Welcome back. Please enter your details.
          </p>
        </div>

        {/* Form Section - Removed shadow, added subtle border for flatter look */}
        <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 border border-zinc-200 shadow-sm">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-zinc-700">
                Email address
              </label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  // Updated Input styles: Lighter border, black focus ring instead of blue
                  className="block w-full appearance-none rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-zinc-700">
                Password
              </label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  // Same monochrome input styles
                  className="block w-full appearance-none rounded-md border border-zinc-300 px-3 py-2 placeholder-zinc-400 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black sm:text-sm"
                  placeholder="••••••••"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  // Black checkbox accent
                  className="h-4 w-4 rounded border-zinc-300 text-black focus:ring-black"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-zinc-700">
                  Remember me
                </label>
              </div>

              <div className="text-sm">
                <a href="#" className="font-medium text-zinc-700 hover:text-black">
                  Forgot your password?
                </a>
              </div>
            </div>

            <div>
              {/* Changed button from blue to solid black */}
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-black px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-800 focus:outline-none focus:ring-2 focus:ring-black focus:ring-offset-2 transition-colors"
              >
                Sign in
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-zinc-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-2 text-zinc-500">New to TaskLink?</span>
              </div>
            </div>

            <div className="mt-6 flex justify-center text-sm">
                {/* Changed register link from blue to black */}
              <a href="/register" className="font-medium text-zinc-900 hover:underline">
                Create an account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
