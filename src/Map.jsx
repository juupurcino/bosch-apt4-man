import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import App from './App.jsx'

export default function Map(){

    const position = [-25.4249069, -49.2749302]

    return(

        <>
      <App/>
      <h2>Mapa</h2>
          <div>
              <MapContainer center={position} zoom={13} scrollWheelZoom={false} style={{width:'100vw', height:'100vh'}}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                      <a target='_blank' href="https://www.google.com/maps/place/Col%C3%A9gio+SESI+Celso+Charuri/@-25.4249069,-49.2749302,17z/data=!4m10!1m2!2m1!1ssesi+celso+!3m6!1s0x94dce55e3000a6f1:0xc52cd0912ecfc2bd!8m2!3d-25.4248519!4d-49.2724046!15sCgpzZXNpIGNlbHNvIgOIAQFaDCIKc2VzaSBjZWxzb5IBC2hpZ2hfc2Nob29smgEkQ2hkRFNVaE5NRzluUzBWSlEwRm5TVVJxZEY5aFgzTlJSUkFC4AEA!16s%2Fg%2F11vd8tbjfz?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D">Senai Google Maps</a>
                  </Popup>
                </Marker>
              </MapContainer>
          </div>
         </>
    )
}
