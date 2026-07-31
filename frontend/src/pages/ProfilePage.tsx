import { useAuthStore } from "@/store/authStore";

const ProfilePage = () => {
  const user = useAuthStore((s) => s.user);
  return (
    <div>
      <h1 className="text-2xl font-bold text-slate-900">Profile</h1>
      <p className="mt-2 text-slate-500">{user?.email}</p>
    </div>
  );
};
export default ProfilePage;
