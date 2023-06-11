import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import './screen-divisions.scss';

interface Zona {
    id: number;
    nombre: string;
    datos: number[];
}

const ScreenDivisions: FC = () => {
    const [zonas, setZonas] = useState<Zona[] | null>(null);

    useEffect(() => {
        // Función para obtener los datos de la API
        const fetchData = async () => {
            try {
                const response = await axios.get<Zona[]>('https://esp32api.azurewebsites.net/api/Zona');
                const data = response.data;
                setZonas(data);
            } catch (error) {
                console.error('Error al obtener los datos de la API: ', error);
            }
        };

        // Llamada inicial a la API
        fetchData();

        // Actualizar los datos cada 5 segundos (ajusta el intervalo según tus necesidades)
        const interval = setInterval(fetchData, 5000);

        // Limpieza del intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="container">
            <h2 className="tittle">Ubicación Zonal de Órdenes</h2>
            <div className="row">
                {zonas &&
                    zonas.slice(0, 2).map((zona, index) => (
                        <div key={zona.id} className={`section section--${index % 2 === 0 ? 'primary' : 'secondary'}`}>
                            <p className="zone-title">{zona.nombre}</p>
                            <ul className="data">
                                {zona.datos.map((valor, index) => (
                                    <li key={index} className="data-item">
                                        {valor}-
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
            <div className="row">
                {zonas &&
                    zonas.slice(-2).map((zona, index) => (
                        <div key={zona.id} className={`section section--${index % 2 === 0 ? 'gray' : 'cyan'}`}>
                            <p className="zone-title">{zona.nombre}</p>
                            <ul className="data">
                                {zona.datos.map((valor, index) => (
                                    <li key={index} className="data-item">
                                        {valor}-
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default ScreenDivisions;
