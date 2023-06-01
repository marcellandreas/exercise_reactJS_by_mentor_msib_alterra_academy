import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AnimalDetailPage from "../components/AnimalDetailPage";
import { animals } from "../data";

const AnimalDetailPageContainer = () => {
  const { id } = useParams();
  // const history = useHistory();

  const [animalData, setAnimalData] = useState("");
  useEffect(() => {
    const animal = animals.find((anml) => anml.id === +id);
    if (animal) {
      setAnimalData(animal);
    }
  }, [id]);

  // const handleGoBack =() =>{
  //    history.goBack();
  // }
  return <AnimalDetailPage animalData={animalData} />;
};

export default AnimalDetailPageContainer;
