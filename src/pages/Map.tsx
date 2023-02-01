import React, { useState } from 'react';
import { MapContainer, GeoJSON, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../app/indonesia.json'

const Map = () => {
  const mapStyle = {
    height: '90vh',
    width: '100%',
    margin: '0 auto',
  }

  return (
    <div className='p-4'>
      <MapContainer className='z-10' center={[-6.200000, 106.816666]}
        zoom={11} scrollWheelZoom={false} style={mapStyle}>
        <TileLayer
          attribution="Map tiles by Carto, under CC BY 3.0. Data by OpenStreetMap, under ODbL."
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png"
        />
        {data.features && (
          <GeoJSON data={data.features}
          />)}
      </MapContainer>
    </div>
  )
}
export default Map;