import React, { useState } from "react";
import PlacesAutocomplete from "react-places-autocomplete";

const Map1 = (props) => {
  const [address, setAddress] = useState("");

  const handleChange = (address) => {
    setAddress(address);
    console.log({ address });
  };
props.map(address)
  return (
    <div className="canvas" height="">
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleChange}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: "Search Places ...",
                className: "location-search-input" ,
                
                
              })} style={{width:"180px",height:"40px", borderRadius:"10px", Autocomplete:"on"}}
            />
            {/* <div>
            <input>
            </input>
            </div> */}

            <div className="autocomplete-dropdown-container" style={{height:"40px",width:"180px"}}>
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
                    <i class="material-icons">location_on</i>{" "}
                    <span>{suggestion.description}</span>
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
