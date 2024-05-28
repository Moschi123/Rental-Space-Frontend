import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';
import 'leaflet/dist/leaflet.css';
import Pin from '../pin/Pin';

interface Item {
  id: string;
  latitude: number;
  longitude: number;
  img: string;
  title: string;
  bedroom: number;
  price: number;
}

interface MapProps {
  items: Item[];
}

function Map({ items }: MapProps) {
  return (
    <MapContainer center={[52.4797, -1.90269]} zoom={7} scrollWheelZoom={false} className='map'>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items.map(item => (
        <Pin item={item} key={item.id} />
      ))}
    </MapContainer>
  );
}

export default Map;
