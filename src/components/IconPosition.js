import L from 'leaflet';
import lot from '../static/icon.svg';

 export const IconPosition = L.icon({
    iconUrl: lot,
    iconRetinaUrl: lot,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [35, 35],
    className: "leaflet-venue-icon",
 });
