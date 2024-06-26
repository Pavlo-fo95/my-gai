import React from 'react';
import './CarCard.css';

// Тип для данных автомобиля
type CarData = {
  make: string;
  model: string;
  year: number;
  vin: string;
  owner: string;
  engine: string;
  displacement: string;
  power: string;
  torque: string;
  weight: string;
  transmission: string;
  body: string;
  drivetrain: string;
  country: string;
};

const CarCard: React.FC<{ carData: CarData }> = ({ carData }) => {
  return (
    <div className="car-card">
      <h2>{carData.make} {carData.model} ({carData.year})</h2>
      <p className="detail"><span className="label">VIN:</span> {carData.vin}</p>
      <p className="detail"><span className="label">Owner:</span> {carData.owner}</p>
      <p className="detail"><span className="label">Двигатель:</span> {carData.engine}</p>
      <p className="detail"><span className="label">Объем:</span> {carData.displacement}</p>
      <p className="detail"><span className="label">Мощность:</span> {carData.power}</p>
      <p className="detail"><span className="label">Крутящий момент:</span> {carData.torque}</p>
      <p className="detail"><span className="label">Снаряжённая масса:</span> {carData.weight}</p>
      <p className="detail"><span className="label">Трансмиссия:</span> {carData.transmission}</p>
      <p className="detail"><span className="label">Кузов:</span> {carData.body}</p>
      <p className="detail"><span className="label">Привод:</span> {carData.drivetrain}</p>
      <p className="detail"><span className="label">Страна:</span> {carData.country}</p>
    </div>
  );
};

export default CarCard;

export {};