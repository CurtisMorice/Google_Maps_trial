import React from 'react';
import FaIconPack from 'react-icons';
const FaAnchor = require("react-icons/lib/fa/anchor");

/* eslint-disable no-undef */
const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} = require("react-google-maps");
const MapWithAMarkedInfoWindow = compose(
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
      defaultZoom={12}
      defaultCenter={{ lat: 44.9778, lng: -93.258133}}
    >
      <Marker
        position={{ lat: 44.9778, lng: -93.258133 }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
          <FaAnchor />
        </InfoWindow>}
      </Marker>
    </GoogleMap>
  );







class MarkerMap extends React.PureComponent {
      componentWillMount() {
        this.setState({ markers: [] })
      }
    
      componentDidMount() {
        const url = [
          // Length issue
          `https://gist.githubusercontent.com`,
          `/farrrr/dfda7dd7fccfec5474d3`,
          `/raw/758852bbc1979f6c4522ab4e92d1c92cba8fb0dc/data.json`
        ].join("")
    
        fetch(url)
          .then(res => res.json())
          .then(data => {
            this.setState({ markers: data.photos });
          }); 
      }
    
      render( ) {

        return (
            <MapWithAMakredInfoWindow
            googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4R6AN7SmujjPUIGKdyao2Kqitzr1kiRg&v=3.exp&libraries=geometry,drawing,places"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `800px`, position:"relative", left: '500px' }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          
        )
      }
    }
    
    
    

export default MarkerMap;
