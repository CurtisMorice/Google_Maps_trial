import React, {Component } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { compose, withProps, withStateHandlers , lifecycle} from "recompose";
import _ from "lodash";
/* eslint-disable no-undef */
// const FaAnchor = "@fortawesome/react-fontawesome";
import  {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
  InfoWindow,
} from "react-google-maps";
import { SearchBox } from"react-google-maps/lib/components/places/SearchBox";
import Geosuggest from 'react-geosuggest';
import PropTypes from 'prop-types';
import SpeechRecognition from '../SpeechRecognition/SpeechRecognition';







const MapWithAMarkedInfoWindow = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyDHHRhTzzE5wUoHuZKmTJdTzD7sBFxvXB0&v=3.exp&libraries=geometry,drawing,places",
        loadingElement:<div style={{ height: `100%` }} />,
        containerElement:<div style={{ height: `800px`, width: `1000px`, position:"relative", left: '500px' }} />,
        mapElement:<div style={{ height: `100%` }} />,
      }),
    withStateHandlers(() => ({
      isOpen: false,
    }), {
      onToggleOpen: ({ isOpen }) => () => ({
        isOpen: !isOpen,
      })
    }),
    lifecycle({
        componentWillMount() {
          const refs = {}
    
          this.setState({
            bounds: null,
            center: {
              lat: 44.9778, lng: -93.2650
            },
            markers: [],
            onMapMounted: ref => {
              refs.map = ref;
            },
            onBoundsChanged: () => {
              this.setState({
                bounds: refs.map.getBounds(),
                center: refs.map.getCenter(),
              })
            },
            onSearchBoxMounted: ref => {
              refs.searchBox = ref;
            },
            onPlacesChanged: () => {
              const places = refs.searchBox.getPlaces();
              const bounds = new google.maps.LatLngBounds();
    
              places.forEach(place => {
                if (place.geometry.viewport) {
                  bounds.union(place.geometry.viewport)
                } else {
                  bounds.extend(place.geometry.location)
                }
              });
              const nextMarkers = places.map(place => ({
                position: place.geometry.location,
              }));
              const nextCenter = _.get(nextMarkers, '0.position', this.state.center);
    
              this.setState({
                center: nextCenter,
                markers: nextMarkers,
              });
              refs.map.fitBounds(bounds);
            },
          })
        },
    }),
    withScriptjs,
    withGoogleMap
  )(props =>
    <GoogleMap
    ref={props.onMapMounted}
    defaultZoom={15}
    center={props.center}
    onBoundsChanged={props.onBoundsChanged}
    defaultCenter={{ lat: 44.9778, lng: -93.258133}}
    >
     
          {console.log('from SearchBox',props.markers)}
      <Marker
        position={{ lat: 44.9778, lng: -93.258133 }}
        onClick={props.onToggleOpen}
      >
        {props.isOpen && 
        <InfoWindow onCloseClick={props.onToggleOpen}>
         <div>This is the are to put some stuff like <br/> for the love of god display soe more</div> 
        </InfoWindow>}
        <Geosuggest/>
      </Marker>
   
      
    </GoogleMap>
  );
  const propTypes = {
    // Props injected by SpeechRecognition
    transcript: PropTypes.string,
    resetTranscript: PropTypes.func,
    browserSupportsSpeechRecognition: PropTypes.bool
  }

class MarkerMap extends Component {
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

    
      render() {
        const { transcript, resetTranscript, browserSupportsSpeechRecognition } = this.props

        // if (!browserSupportsSpeechRecognition) {
        //   return null
        // }

        return (
          <div>
            <SpeechRecognition/>
          <button onClick={resetTranscript}>Reset</button>
          <span>{transcript}</span>
        
     
         <div>
         
            <MapWithAMarkedInfoWindow   
            // googleMapURL="https://maps.googleapis.com/maps/api/js?
            // key=AIzaSyDHHRhTzzE5wUoHuZKmTJdTzD7sBFxvXB0&v=3.exp&libraries=geometry,drawing,places"
            // loadingElement  = {<div style={{ height: `100%` }} />}
            // containerElement = {<div style={{ height: `800px`, width: `1000px`, position:"relative", left: '500px' }} />}
            //  mapElement = {<div style={{ height: `100%` }} />}
     
          />
          </div>
                
          </div>
       
        )
      }
    }
    
    
    

export default MarkerMap;
