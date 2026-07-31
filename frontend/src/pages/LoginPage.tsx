import { useState } from "react";
import { useAuthStore } from "@/store/authStore";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = useAuthStore((s) => s.signIn);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white">
      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        <div className="mb-4 text-center text-xl font-medium text-slate-500">Welcome to</div>
        <svg className="mx-auto mb-3 h-12" viewBox="0 0 560 90" fill="none">
          <defs><style>{`.brand{font-family:Inter,"SF Pro Display",Poppins,Arial,sans-serif;font-size:64px;font-weight:800;letter-spacing:-3px}`}</style></defs>
          <text x="12" y="64" className="brand" fill="#0F172A">m</text>
          <text x="72" y="64" className="brand" fill="#2563EB">e</text>
          <text x="112" y="64" className="brand" fill="#2563EB">e</text>
          <circle cx="95" cy="20" r="3.5" fill="#2563EB"/>
          <circle cx="135" cy="20" r="3.5" fill="#2563EB"/>
          <text x="145" y="64" className="brand" fill="#0F172A">Music</text>
        </svg>
        <div className="mb-6 text-center text-sm text-slate-500">Sign in with your mee Account</div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
            <input type="email" placeholder="you@mee.com" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </div>
          <div>
            <label className="mb-1 block text-sm font-medium text-slate-700">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full rounded-lg border border-slate-300 px-4 py-2.5 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-100" value={password} onChange={(e) => setPassword(e.target.value)} required minLength={6} />
          </div>
          <button type="submit" className="w-full rounded-lg bg-blue-600 py-2.5 font-semibold text-white transition hover:bg-blue-700">Sign in</button>
        </form>
        <div className="mt-6 text-center text-sm text-slate-500">
          Don't have a mee Account?{" "}
          <a href="https://mee-co.github.io/meeMail/" className="font-medium text-blue-600 hover:underline">Be a meeian first</a>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
