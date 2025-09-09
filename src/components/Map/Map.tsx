import Cars from './Cars';

const Map = () => {
  const filteredCars = Cars.filter((car) => car.price >= 20000 && car.price);
  return (
    <div>
      <h2>Map Component</h2>
      <div>
        {filteredCars.map((car) => (
          <ul key={car.id} style={{ listStyle: 'none' }}>
            <li style={{ fontWeight: 'bold' }}>{`Car: ${car.brand}`}</li>
            <li>{`Model: ${car.model}`}</li>
            <li>{`Year: ${car.year}`}</li>
            <li>{`Color: ${car.color}`}</li>
            <li>{`Price: ${car.price}`}</li>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Map;
