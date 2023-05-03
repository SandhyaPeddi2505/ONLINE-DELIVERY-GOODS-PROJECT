// import React, { useEffect, useRef } from "react";

// const Map1=(props)=> {
//   const { location, handleLocationChange } = props;
//   const mapRef = useRef(null);
//   const markerRef = useRef(null);

//   useEffect(() => {
//     // Initialize map
//     const mapOptions = {
//       center: location,
//       zoom: 15,
//     };
//     const map = new window.google.maps.Map(mapRef.current, mapOptions);

//     // Add marker
//     const markerOptions = {
//       position: location,
//       map: map,
//     };
//     const marker = new window.google.maps.Marker(markerOptions);
//     markerRef.current = marker;

//     // Update location on map click
//     const mapClickListener = map.addListener("click", (event) => {
//       const newLocation = {
//         lat: event.latLng.lat(),
//         lng: event.latLng.lng(),
//       };
//       handleLocationChange(newLocation);
//       marker.setPosition(newLocation);
//     });

//     return () => {
//       window.google.maps.event.removeListener(mapClickListener);
//     };
//   }, [location, handleLocationChange]);

//   return <div className="map" ref={mapRef} />;
// }

// export default Map1;






// import React, { useState } from "react";
// import PlacesAutocomplete, {
//   geocodeByAddress,
//   getLatLng
// } from "react-places-autocomplete";

// const Map1 = (props) => {
//   const [address, setAddress] = useState("");
//   const handleChange = (address) => {
//     setAddress(address);
//     console.log({ address });
//   };

//   const handleSelect = async (address) => {
//     try {
//       const results = await geocodeByAddress(address);
//       const latLng = await getLatLng(results[0]);
//       console.log("Successfully got latitude and longitude", latLng);
//       props.map(latLng);
//     } catch (error) {
//       console.error("Error", error);
//     }
//   };

//   const hydBounds = {
//     south: 17.385044,
//     west: 78.486671,
//     north: 17,
//     east: 78
//   };

//   const searchOptions = {
//     componentRestrictions: { country: "in" },
//     bounds: hydBounds,
//     radius: 2000
//   };

//   return (
//     <div className="canvas" height="">
//       <PlacesAutocomplete
//         value={address}
//         onChange={handleChange}
//         onSelect={handleSelect}
//         searchOptions={searchOptions}
//       >
//         {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
//           <div>
//             <input
//               {...getInputProps({
//                 placeholder: "Search Places ...",
//                 className: "location-search-input"
//               })}
//               style={{
//                 width: "180px",
//                 height: "40px",
//                 borderRadius: "10px",
//                 Autocomplete: "on"
//               }}
//             />
//             <div
//               className="autocomplete-dropdown-container"
//               style={{ height: "40px", width: "180px" }}
//             >
//               {loading && <div>Loading...</div>}
//               {suggestions.map((suggestion) => {
//                 const className = suggestion.active
//                   ? "suggestion-item--active"
//                   : "suggestion-item";
//                 // inline style for demonstration purpose
//                 const style = suggestion.active
//                   ? { backgroundColor: "#fafafa", cursor: "pointer" }
//                   : { backgroundColor: "#ffffff", cursor: "pointer" };
//                 return (
//                   <div
//                     className="input-suggestion"
//                     {...getSuggestionItemProps(suggestion, {
//                       style
//                     })}
//                   >
//                     {suggestion.description.includes("Hyderabad") && (
//                       <>
//                         <i className="material-icons">location_on</i>

//                         <span>{suggestion.description}</span>
//                       </>
//                     )}
//                   </div>
//                 );
//               })}
//             </div>
//           </div>
//         )}
//       </PlacesAutocomplete>
//     </div>
//   );
// };

// export default Map1;




import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";
// import {

//   geocodeByAddress,

//   geocodeByPlaceId,

//   getLatLng,

// } from 'react-places-autocomplete';

const Map1 = (props) => {
  const [address, setAddress] = useState("");
  const handleChange = (address) => {
    setAddress(address);
    console.log({ address });
  };
  const google = window.google;

  const hydBounds = new google.maps.LatLngBounds(
    new google.maps.LatLng(17.385044, 78.486671),

    new google.maps.LatLng(17, 78)
  );
  const searchOptions = {
    componentRestrictions: { country: ["in"] },

    bounds: hydBounds,

    radius: 2000
  };
  // geocodeByAddress(address)

  //   .then(results => getLatLng(results[0]))

  //   .then(({ lat, lng }) =>

  //     console.log('Successfully got latitude and longitude', { lat, lng })

  //   );
  props.maper(address);
  // props.maper1(address)
  return (
    <div className="canvas" height="">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleChange}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div >
            <fieldset>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input"
              })}
              // style={{
              //   width: "180px",
              //   height: "40px",
              //   borderRadius: "10px",
              //   Autocomplete: "on"
              // }}
            />
            </fieldset>
            {/* <div>
            <input>
            </input>
            </div> */}

            <div
              className="autocomplete-dropdown-container"
              style={{ height: "40px", width: "350px" }}
            >
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const className = suggestion.active
                  ? "suggestion-item--active"
                  : "suggestion-item";
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#fafafa", cursor: "pointer" }
                  : { backgroundColor: "#ffffff", cursor: "pointer" };
                return (
                  <div
                    className="input-suggestion"
                    {...getSuggestionItemProps(suggestion, {
                      style
                    })}
                  >
                    {/* {suggestion.description.includes("Hyderabad") && ( */}
                      <>
                        <i className="material-icons">location_on</i>{" "}

                        <span>{suggestion.description}</span>
                      </>
                    {/* )} */}
                    {/* <i class="material-icons">location_on</i>{" "}
                    <span>{suggestion.description}</span> */}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div>
  );
};

export default Map1;
