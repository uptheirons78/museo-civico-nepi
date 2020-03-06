import React from "react";
import {
  GoogleMap,
  withScriptjs,
  withGoogleMap,
  Marker,
} from "react-google-maps";
import styled from "styled-components";

function Map({ coordinate }) {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 42.242757, lng: 12.348116 }}
    >
      {coordinate.map((item, index) => (
        <Marker
          key={index}
          position={{
            lat: item.lat,
            lng: item.lng,
          }}
        />
      ))}
    </GoogleMap>
  );
}

const WrappedMap = withScriptjs(withGoogleMap(Map));

const Mappa = props => {
  return (
    <MapSection className="mappa mt-2">
      <div className="map-container">
        <WrappedMap
          googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.GATSBY_GMAPS_KEY}`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `100%` }} />}
          mapElement={<div style={{ height: `100%` }} />}
          coordinate={props.coordinate}
        />
      </div>
    </MapSection>
  );
};

export default Mappa;

const MapSection = styled.section`
  .map-container {
    max-width: 1200px;
    width: 100%;
    height: 420px;
  }
`;
