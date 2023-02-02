import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setCookie } from "typescript-cookie";
import LoginForm from "../../components/Form/Login";
import Layout from "../../components/Layout";
import { ILoginFailed, LoginRequest } from "../../interfaces/ILogin";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "../../components/Navbar";

export default function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const api = process.env.REACT_APP_API;
  const [request, setRequest] = useState<LoginRequest>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<ILoginFailed>({
    email: "",
    password: "",
  });

  const handleChangeRequest = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRequest({ ...request, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (request.email === "") {
      setError({ ...error, email: "this field is required" });
      return;
    } else if (!request.email.includes("@")) {
      setError({ ...error, email: "invalid email" });
      return;
    }

    if (request.password === "") {
      setError({ ...error, password: "this field is required" });
      return;
    } else if (request.password.length < 8) {
      setError({
        ...error,
        password: "password must be at least 8 characters",
      });
      return;
    }

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request),
    };

    fetch(api + "/login", requestOptions)
      .then(async (response) => {
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message);
        }
        return data;
      })
      .then((res) => {
        if (res.data) {
          setCookie("token", res.data.access_token, {
            path: "/",
            expires: new Date(Date.now() + 86400000),
          });
          navigate(from, { replace: true });
        }
      })
      .catch((err) => {
        toast.error(err.message, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      });
  };

  return (
    <div className="bg-light text-dark bg-opacity-25">
      <Navbar />

      <Layout title="Welcome Back" subtitle="Please enter your details.">
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
        <LoginForm
          request={request}
          setRequest={handleChangeRequest}
          error={error}
          setError={setError}
          handleSubmit={handleSubmit}
        />
      </Layout>
    </div>
  );
}
