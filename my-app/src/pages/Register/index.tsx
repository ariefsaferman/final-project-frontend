import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { IRegisterFailed, RegisterRequest } from "../../interfaces/IRegister";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RegisterForm from "../../components/Form/Register";
import Navbar from "../../components/Navbar";

export default function RegisterPage() {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const api = process.env.REACT_APP_API;
  const [request, setRequest] = useState<RegisterRequest>({
    email: "",
    password: "",
    full_name: "",
    address: "",
    city_id: 1,
  });
  const [error, setError] = useState<IRegisterFailed>({
    email: "",
    password: "",
    full_name: "",
    address: "",
    city_id: "",
  });

  const handleChangeRequest = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    e.preventDefault();
    setRequest({ ...request, [e.target.name]: e.target.value });
    console.log(request.city_id);
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

    if (request.full_name === "") {
      setError({ ...error, full_name: "this field is required" });
      return;
    } else if (request.full_name.length < 3) {
      setError({
        ...error,
        full_name: "full name must be at least 3 characters",
      });
      return;
    }

    if (request.address === "") {
      setError({ ...error, address: "this field is required" });
      return;
    }

    if (request.city_id === 0) {
      setError({ ...error, city_id: "this field is required" });
      return;
    }

    console.log(request);
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: request.email,
        password: request.password,
        full_name: request.full_name,
        address: request.address,
        city_id: Number(request.city_id),
      }),
    };

    fetch(api + "/register", requestOptions)
      .then(async (response) => {
        const data = await response.json();
        if (!response.ok) {
          throw new Error(data.message);
        }
        toast.success("register successfuly", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        window.setTimeout(() => {
          navigate("/login");
        }, 3000);
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
      <Layout title="Register" subtitle="Register to our website">
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
        <RegisterForm
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
