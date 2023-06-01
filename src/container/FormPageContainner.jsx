import React, { useState } from "react";
import FormPage from "../components/FormPage";
import { useDispatch, useSelector } from "react-redux";
import { setUserEmail } from "../features/userSlice";
import { useNavigate } from "react-router-dom";

const FormPageContainer = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    noHandphone: "",
    name: "",
    gender: "",
    hobby: [],
    kelas: "",
    surat: "",
  });

  const [isPasswordError, setIsPasswordError] = useState(false);

  const handleChangeFormData = (e) => {
    if (e.target.name === "hobby") {
      setFormData({
        ...formData,
        [e.target.name]: [...formData.hobby, e.target.value],
      });
      return;
    }
    if (e.target.name === "noHandphone") {
      setFormData({
        ...formData,
        [e.target.name]: [...formData.hobby, e.target.value],
      });
      return;
    }
    if (e.target.name === "password") {
      if (e.target.value.length < 5) {
        setIsPasswordError(true);
      } else {
        setIsPasswordError(false);
      }
    }
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (ev) => {
    const form = ev.currentTarget;
    if (form.checkValidity() === false) {
      ev.preventDefault();
      ev.stopPropagation();
    }
    alert("Data Pendaftar" + " " + formData.name + " " + "Berhasil Diterima");
    dispatch(setUserEmail(formData.email));
    navigate("/");

    resetData();
    ev.preventDefault();
  };

  const resetData = () => {
    setFormData(formData);
    setIsPasswordError("");
  };

  return (
    <FormPage
      email={formData.email}
      name={formData.name}
      count={count}
      noHandphone={formData.noHandphone}
      isPasswordError={isPasswordError}
      handleSubmit={handleSubmit}
      handleChange={handleChangeFormData}
    />
  );
};

export default FormPageContainer;
