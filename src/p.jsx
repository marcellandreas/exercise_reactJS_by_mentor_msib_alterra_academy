useEffect (() => {
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
}, [animals, searchWords])
