import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ latitude, longitude }) => {
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
      <GoogleMap mapContainerStyle={{ width: '400px', height: '400px' }} center={{ lat: latitude, lng: longitude }} zoom={10}>
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
