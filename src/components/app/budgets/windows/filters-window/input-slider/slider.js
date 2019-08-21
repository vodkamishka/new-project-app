import React, { Component } from "react";
import { Slider, Rail, Handles, Tracks} from "react-compound-slider";
import { SliderRail, Handle, Track} from "./slider-components"; 

const sliderStyle = {
  position: "relative",
  width: "100%"
};

export default class SliderComponent extends Component {
        
  render() {
      const {values, onChange, domain} = this.props;
    return (
      <div style={{height: 30, width: "100%" }}>
        <Slider
          mode={2}
          step={1}
          domain={domain}
          rootStyle={sliderStyle}
          onChange={onChange}
          values={values}
        >
          <Rail>
            {({ getRailProps }) => <SliderRail getRailProps={getRailProps} />}
          </Rail>
          <Handles>
            {({ handles, getHandleProps }) => (
              <div className="slider-handles">
                {handles.map(handle => (
                  <Handle
                    values={values}
                    key={handle.id}
                    handle={handle}
                    domain={domain}
                    getHandleProps={getHandleProps}
                  />
                ))}
              </div>
            )}
          </Handles>
          <Tracks left={false} right={false}>
            {({ tracks, getTrackProps }) => (
              <div className="slider-tracks">
                {tracks.map(({ id, source, target }) => (
                  <Track
                    key={id}
                    source={source}
                    target={target}
                    getTrackProps={getTrackProps}
                  />
                ))}
              </div>
            )}
          </Tracks>
          
        </Slider>
      </div>
    );
  }
}