import React from 'react';
import BaseMap from 'pigeon-maps'
// import {Map as BaseMap} from 'pigeon-maps'
import Marker from 'pigeon-marker'
// import Overlay from 'pigeon-overlay'
import constants from '../constants/constants'

const Map = () => {
  return (
    <BaseMap center={[-12.1975, -77.0257]} zoom={12} width={600} height={400} provider={constants.providers.osm}>
      <Marker anchor={[-12.1975, -77.0257]} payload={1} onClick={({ event, anchor, payload }) => {}} />
    </BaseMap>
  );
}

export default Map