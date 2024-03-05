import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Detail() {
  const params = useParams();
  const [mascotaDetails, setMascotaDetails] = useState(null);

  useEffect(() => {
    const URL =
      "https://gist.githubusercontent.com/josejbocanegra/829a853c6c68880477697acd0490cecc/raw/99c31372b4d419a855e53f0e891246f313a71b20/mascotas.json";

    fetch(URL)
      .then((data) => data.json())
      .then((data) => {
        const mascotaDetail = data.find(
          (mascota) => mascota.id === parseInt(params.mascotaId)
        );
        setMascotaDetails(mascotaDetail);
      });
  }, [params.mascotaId]);

  if (!mascotaDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{mascotaDetails.nombre}</h1>
      <img src={mascotaDetails.foto} alt={mascotaDetails.descripcion} />
      <p>{mascotaDetails.raza}</p>
    </div>
  );
}