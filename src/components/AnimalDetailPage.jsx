const AnimalDetailPage = ({ animalData }) => {
  const renderData = () => (
    <div>
      <img
        src={animalData.imageLink}
        alt={animalData.id}
        style={{ width: "300px" }}
      />
      <span>name: {animalData.name}</span>
      <span>diet: {animalData.diet}</span>
    </div>
  );

  return <div>{animalData ? renderData() : <div>Data Kosong</div>}</div>;
};

export default AnimalDetailPage;
