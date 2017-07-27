import * as React from "react";

declare enum MapTypeId {
  HYBRID = "HYBRID",
  ROADMAP = "ROADMAP",
  SATELITE = "SATELITE",
  TERRAIN = "TERRAIN",
}

declare interface LatLngLiteral {
  lat: number;
  lng: number;
}

type LatLng = LatLngLiteral | any;

declare interface GoogleMapProps {
  center: LatLng;
  heading: number;
  mapTypeId: MapTypeId | string;
  tilt: number;
  zoom: number;
}

export class GoogleMap extends React.Component<GoogleMapProps, any> {}
