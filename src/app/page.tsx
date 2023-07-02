"use client";
import { Inter } from "next/font/google";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input, Button, Alert } from "@/components/elements";
import { useLogin } from "@/service/login";
import { ToastContainer, toast } from "react-toastify";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const { mutateAsync, data, isSuccess, isLoading } = useLogin();

  const [errorMessage, setErrorMessage] = useState<string>("");
  const [error, setError] = useState<boolean>(false);

  const submitHandler = async (e: any) => {
    e.preventDefault();

    const credential = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    await mutateAsync(credential).then(() => {
      console.log(isSuccess, credential, data);
      if (isSuccess) {
        toast.success("Login Success");
        router.refresh();
        router.push("/dashboard");
      } else {
        toast.error("Check Your Email or Password Again");
      }
    });
  };

  const handleCloseAlert = () => {
    setError(false);
    setErrorMessage("");
  };

  return (
    <main className="flex justify-center items-center h-screen">
      {/* <SwitchTheme /> */}
      <form
        onSubmit={submitHandler}
        className="bg-base-200 rounded flex flex-col py-10 px-5 gap-5"
      >
        <h1 className="text-light text-center text-2xl font-bold">
          Rhesas Personal Dashboard
        </h1>
        <Input
          defaultValue="rhesadav@gmail.com"
          type="email"
          label="Username"
        />
        <Input defaultValue="123456" type="password" label="Password" />
        <div className="flex items-center justify-center">
          {isLoading && <h1>Loading ....</h1>}
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </div>
      </form>

      {error && (
        <Alert
          variant="error"
          message={errorMessage}
          onClose={handleCloseAlert}
        />
      )}
    </main>
  );
}
