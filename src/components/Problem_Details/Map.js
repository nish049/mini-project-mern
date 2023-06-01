import React, { useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';

import './MapboxMap.css';

mapboxgl.accessToken = 'pk.eyJ1IjoicGhhbnRvbTg4NyIsImEiOiJjbGdnaHMxZzMwYnRyM2NsaWNoZWRhZDhzIn0.BrTFb4vZRzYbVEeSOfW80g';

const MapboxMap = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const map = new mapboxgl.Map({
            container: 'map-container',
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [-122.4376, 37.7577],
            zoom: 12,
        });

        setMap(map);
    }, []);

    return (
        <div className="map-container">
            <div id="map" className="map" />
        </div>
    );
};

export default MapboxMap;
