import React from "react";

function ContactPage({ data, handleDelete, handleEdit }) {
  {
    data.map((contact) => {
      return <li>{contact.name}</li>;
    });
  }
}

export default ContactPage;
