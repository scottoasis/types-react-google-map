declare module "react-google-maps" {
  import * as React from "react";

  enum MapTypeId {
    HYBRID = "HYBRID",
    ROADMAP = "ROADMAP",
    SATELITE = "SATELITE",
    TERRAIN = "TERRAIN",
  }

 interface LatLngLiteral {
    lat: number;
    lng: number;
  }

  type LatLng = LatLngLiteral | any;

  interface GoogleMapProps {
    // Controlled properties
    center?: LatLng;
    heading?: number;
    mapTypeId?: MapTypeId | string;
    tilt?: number;
    zoom?: number;
    // Uncontrolled properties
    defaultCenter?: LatLng;
    defaultHeading?: number;
    defaultMapTypeId?: MapTypeId | string;
    defaultTilt?: number;
    defaultZoom?: number;
    // Event handlers
    onClick: (event: any) => void;
  }

  interface MarkerProps {
    key?: number|string;
    // Controlled properties
    animation?: any;
    attribution?: any;
    clickable?: boolean;
    cursor?:  string;
    draggable?: boolean;
    icon?: any;
    label?: any;
    noRedraw?: boolean;
    opacity?: number;
    options?: any;
    place?: any;
    position?: any;
    shape?: any;
    title?: string;
    visible?: boolean;
    visiable?: boolean;
    zIndex?: number;
    // Uncontrolled properties
    defaultAnimation?: any;
    defaultAttribution?: any;
    defaultClickable?: boolean;
    defaultCursor?:  string;
    defaultDraggable?: boolean;
    defaultIcon?: any;
    defaultLabel?: any;
    defaultNoRedraw?: boolean;
    defaultOpacity?: number;
    defaultOptions?: any;
    defaultPlace?: any;
    defaultPosition?: any;
    defaultShape?: any;
    defaultTitle?: string;
    defaultVisible?: boolean;
    defaultVisiable?: boolean;
    defaultZIndex?: number;
    // Event handlers
    onClick: () => void;
    onRightClick: () => void;
  }

  type ReactElement = any;
  interface MapProps {
    containerElement: ReactElement;
    mapElement: ReactElement;
  }

  function withGoogleMap(content: (props: any) => ReactElement): ReactElement;
  class GoogleMap extends React.Component<GoogleMapProps, any> {}
  class Marker extends React.Component<MarkerProps, any> {}

  export {
    GoogleMap,
    Marker,
    withGoogleMap,
  };
}
