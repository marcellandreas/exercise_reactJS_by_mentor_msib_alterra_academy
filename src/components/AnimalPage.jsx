import React from "react";
import { Link } from "react-router-dom";

const AnimalPage = (
  {
    animalList,
    searchWords,
    setSearchWords
  }
) => {

  return (
    <div className="d-flex flex-column justify-content-start align-items-center">
      <input className="form-control mb-3"
             value={searchWords}
             style={{width: "30rem"}}
             onChange={(ev) => setSearchWords(ev.currentTarget.value)}/>
      <div className="container-fluid d-flex flex-row justify-content-center align-content-between align-items-center flex-wrap">
        {
          animalList.length > 0
          ?
            animalList.map((animal) => {
              return (
                <Link to={`/animal/${animal.id}`} key={animal.id}>
                <div className="card m-2 align-items-center shadow" key={animal.id} style={{width: "18rem"}}>
                  <img src={animal.imageLink} alt={animal.name}
                       className="card-img-top" style={{width: "10rem", height: "10rem", objectFit: "cover"}}/>
                  <div className="card-body">
                    <p className="card-text"><b>{animal.name}</b></p>
                  </div>
                </div>
                </Link>
              );
            })
            :
            <div>Kosong</div>
        }
      </div>
    </div>
  );
};


export default AnimalPage;