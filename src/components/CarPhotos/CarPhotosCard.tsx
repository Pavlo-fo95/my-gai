import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CarPhotosCard.css';

type Photo = {
  img_path: string;
  thumb_path: string;
};

type Body = {
  id: number;
  name: string;
  photos: Photo[];
};

type Generation = {
  id: number;
  name: string;
  years: string;
  bodies: Body[];
};

type CarPhotosData = {
  title: string;
  vendor_slug: string;
  catalog_model_slug: string;
  generations: Generation[];
};

const CarPhotosCard: React.FC = () => {
  const [carPhotosData, setCarPhotosData] = useState<CarPhotosData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios.get('https://baza-gai.com.ua/catalog/lamborghini/aventador/photos', {
      headers: {
        'Accept': 'application/json',
        'X-Api-Key': '4be117af1dbedbd5ed4f49f8298805cb'
      }
    })
      .then((response) => {
        setCarPhotosData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  if (!carPhotosData) {
    return null;
  }

  return (
    <div className="car-photos-card">
      <h2>{carPhotosData.title}</h2>
      {carPhotosData.generations.map((generation) => (
        <div key={generation.id} className="generation">
          <h3>{generation.name} ({generation.years})</h3>
          {generation.bodies.map((body) => (
            <div key={body.id} className="body">
              <h4>{body.name}</h4>
              <div className="photos">
                {body.photos.map((photo, index) => (
                  <a href={photo.img_path} target="_blank" rel="noopener noreferrer" key={index}>
                    <img src={photo.thumb_path} alt={`${carPhotosData.title} ${body.name} ${index}`} />
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default CarPhotosCard;