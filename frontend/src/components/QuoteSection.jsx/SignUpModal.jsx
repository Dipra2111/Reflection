import { useState } from "react";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SignUpModal({ onClose }) {
  const [isLogin, setIsLogin] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const endpoint = isLogin ? "/api/login" : "/api/signup";
    const res = await axios.post(endpoint, form);

    const { message, userId, name, email } = res.data;
    alert(message);

    // ✅ Save user info to localStorage
    localStorage.setItem(
      "user",
      JSON.stringify({ userId, name, email })
    );

    // ✅ Close modal and navigate
    onClose();
    navigate(isLogin ? "/moodpage" : "/userinfopage");

  } catch (err) {
    alert(err.response?.data?.message || "Something went wrong");
  }
};


  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white/20 backdrop-blur-md p-6 rounded-xl w-[90%] max-w-md shadow-2xl border border-white/30 relative text-white">
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-2xl font-bold text-white hover:text-red-400"
        >
          ✕
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-center">
          {isLogin ? "Login" : "Sign Up"}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
              <FaUser className="text-white mr-2" />
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                value={form.name}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white placeholder-white"
              />
            </div>
          )}
          <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
            <FaEnvelope className="text-white mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              value={form.email}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-white placeholder-white"
            />
          </div>
          <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
            <FaLock className="text-white mr-2" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={form.password}
              onChange={handleChange}
              className="bg-transparent outline-none w-full text-white placeholder-white"
            />
          </div>
          {!isLogin && (
            <div className="flex items-center bg-white/10 px-3 py-2 rounded-lg">
              <FaLock className="text-white mr-2" />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                required
                value={form.confirmPassword}
                onChange={handleChange}
                className="bg-transparent outline-none w-full text-white placeholder-white"
              />
            </div>
          )}
          <button
            type="submit"
            className="w-full bg-lime-400 hover:bg-lime-500 text-black font-semibold py-2 rounded-lg transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
        <p className="text-sm text-center mt-4 text-white">
          {isLogin ? "New user?" : "Already have an account?"}{" "}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-300 underline"
          >
            {isLogin ? "Sign Up" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
