"use client";
import { useState } from "react";
import { Ubuntu } from "next/font/google";
const ubuntu = Ubuntu({ weight: "500", subsets: ["latin"] });
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(true);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Form data submitted:", formData);

    const { name, email, password } = formData;

    if (!name || !email || !password) {
      setError("All fields are mandatory !");
      return;
    }

    try {
      setLoading(true);

      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists !");
        setLoading(false);
        return;
      }

      const res = await fetch("api/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });
      router.push("login");
    } catch (error) {
      console.log(`Error during registration : ${error}`);
    }
  };

  return (
    <section className="flex flex-col items-center mt-28 h-[110vh]">
      <h1 className={`${ubuntu.className} text-3xl text-gray-900 mb-2`}>
        Create your account
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col w-72">
        <input
          type="text"
          name="name"
          placeholder="Name"
          className="border-2 rounded-sm outline-none py-2 px-3 my-2 placeholder:text-sm text-sm"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email address"
          className="border-2 rounded-sm outline-none py-2 px-3 my-2 placeholder:text-sm text-sm"
          value={formData.email}
          onChange={handleChange}
        />
        <div className="flex items-center justify-between border-2 rounded-sm my-2">
          <input
            type={passwordVisible ? "text" : "password"}
            name="password"
            placeholder="Password"
            autocomplete="off"
            className=" py-2 px-3 outline-none w-full placeholder:text-sm text-sm"
            value={formData.password}
            onChange={handleChange}
          />
          {passwordVisible ? (
            <FontAwesomeIcon
              icon={faLock}
              className="h-4 mr-2 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          ) : (
            <FontAwesomeIcon
              icon={faLockOpen}
              className="h-4 mr-2 text-gray-500"
              onClick={() => setPasswordVisible(!passwordVisible)}
            />
          )}
        </div>
        {error && (
          <div>
            <span className="text-red-600 text-xs pl-1">{error}</span>
          </div>
        )}
        <button
          type="submit"
          className={`${ubuntu.className} py-2 my-2 rounded-sm text-white bg-gray-900`}
          disabled={loading}
        >
          {loading ? "Signing up..." : "Sign up"}
        </button>
      </form>

      <div className="my-2">
        <span className="text-sm text-gray-500">Already have an account ?</span>
        <span className="underline text-sm pl-2">
          <Link href={"login"}>Log in</Link>
        </span>
      </div>
      <div className="my-2 w-72 flex justify-center items-center">
        <hr className="w-28" />
        <span className="text-gray-900 text-xs mx-2">OR</span>
        <hr className="w-28" />
      </div>
      <div className="my-2">
        <button
          className={`flex justify-center border-2 w-72 py-2 rounded-sm text-sm text-gray-900`}
          onClick={() => signIn("google")}
        >
          <span className="pr-3">
            <Image
              src="/images/googleLogo.png"
              height={20}
              width={20}
              alt="Empty cart image not found"
            />
          </span>
          Sign up with Google
        </button>
      </div>
    </section>
  );
};

export default SignUpForm;
