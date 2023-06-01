import { useState } from "react";
import { uid } from "uid";
import "./App.css";
import ContactPage from "../components/ContactPage";

function ContactPageContainer() {
  const [contacts, setContacts] = useState([
    {
      id: uid(),
      name: "Marcell Andreas",
      telp: "08214184186",
      comple: true,
    },
  ]);

  const [isUpdate, setIsUpdate] = useState({ id: null, status: false });

  const [formData, setFormData] = useState({
    name: "",
    telp: "",
  });

  const handleChange = (event) => {
    let data = { ...formData }; //belum ada data
    data[event.target.name] = event.target.value; //mengambil data yang kita isi pada form
    setFormData(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let data = [...contacts];

    if (formData.name === "" && formData.telp === "") {
      return false;
    }

    if (isUpdate.status === true) {
      data.forEach((contact) => {
        if (contact.id === isUpdate.id) {
          contact.name = formData.name;
          contact.telp = formData.telp;
        }
      });
    } else {
      data.push({
        id: uid(),
        name: formData.name,
        telp: formData.telp,
        comple: false,
      });
    }
    setContacts(data);
    setFormData({ name: "", telp: "" });
  };

  const handleEdit = (id) => {
    let data = [...contacts];
    let foundData = data.find((contact) => contact.id === id);
    setFormData({ name: foundData.name, telp: foundData.telp });
    setIsUpdate({ id: id, status: true });
  };

  const handleDelete = (id) => {
    let data = [...contacts];
    let filterData = data.filter((contact) => contact.id !== id);
    setContacts(filterData);
  };

  return (
    <div className="App">
      <h1 className="px-3 py-3">My Contact List</h1>

      <form className="px-3 py-4" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={formData.name}
            name="name"
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="">No. Telp</label>
          <input
            type="text"
            className="form-control"
            onChange={handleChange}
            value={formData.telp}
            name="telp"
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Save
          </button>
        </div>
      </form>

      <ContactPage
        data={contacts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default ContactPageContainer;
