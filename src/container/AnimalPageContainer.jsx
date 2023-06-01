import React, {useState, useEffect} from "react";
import  AnimalPage  from "../components/AnimalPage";
import { animals } from "../data.js";

const AnimalPageContainer = () => {
  const [animalList, setAnimalList] = useState(animals);
  const [searchWords, setSearchWords] = useState("");

  // useEffect(() => {
  //   fetch()
  //     .then((res) => res.json())
  //     .then((data) => setAnimalList(convertAnimal(data)))
  // },[]);

  // useEffect(() => {
  //   fetch("https://zoo-animal-api.herokuapp.com/animals/rand/10")
  //     .then((res) => res.json())
  //     .then((data) => setAnimalList(convertAnimal(data)))
  // },[])


  useEffect(() => {
    const loweredSearchedWords = searchWords.toLowerCase();
    const updatedAnimalList = [];
    if (searchWords !== "") {
      animals.forEach((animal) => {
        const loweredAnimalName = animal.name.toLowerCase();
        if (loweredAnimalName.includes(loweredSearchedWords)){
          updatedAnimalList.push(animal);
        }
      })
      setAnimalList(updatedAnimalList);
    } else {
      setAnimalList(animals);
    }
  },[animals, searchWords])

  // const handleSearchAnimal = (text) => {
  //   const loweredSearchedWords = text.toLowerCase();
  //   const updatedAnimalList = [];
  //   if (text !== "") {
  //     animals.forEach((animal) => {
  //       const loweredAnimalName = animal.name.toLowerCase();
  //       if (loweredAnimalName.includes(loweredSearchedWords)) {
  //         updatedAnimalList.push(animal);
  //       }
  //     });
  //     setAnimalList(updatedAnimalList);
  //   } else {
  //     setAnimalList(animals);
  //   }
  // };

  return(
    <AnimalPage animalList={animalList}
                searchWords={searchWords}
                setSearchWords={setSearchWords}/>
  )
}

export default AnimalPageContainer;
