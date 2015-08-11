'use strict';

var React = require('react');
var ReactCSS = require('reactcss');
var tinycolor = require('tinycolor2');

var Saturation = require('../common/Saturation');
var Hue = require('../common/Hue');
var Alpha = require('../common/Alpha');
var Checkboard = require('../common/Checkboard');
var ChromeFields = require('./ChromeFields');

class Chrome extends ReactCSS.Component {

  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
  }

  classes() {
    var rgb = tinycolor(this.props).toRgb();

    return {
      'default': {
        picker: {
          background: '#fff',
          borderRadius: '2px',
          boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
          width: '225px',
          fontFamily: 'Menlo',
        },
        saturation: {
          width: '100%',
          paddingBottom: '55%',
          position: 'relative',
          borderRadius: '2px 2px 0 0',
          overflow: 'hidden',
        },

        body: {
          padding: '16px 16px 12px',
        },
        controls: {
          display: 'flex',
        },
        color: {
          width: '32px',
        },
        swatch: {
          marginTop: '6px',
          width: '16px',
          height: '16px',
          borderRadius: '8px',
          position: 'relative',
          overflow: 'hidden',
        },
        active: {
          Absolute: '0 0 0 0',
          zIndex: 2,
          borderRadius: '8px',
          boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
          background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + (this.props.a / 100) + ')',
        },
        toggles: {
          flex: '1',
        },
        hue: {
          height: '10px',
          position: 'relative',
          marginBottom: '8px',
        },
        Hue: {
          radius: '2px',
        },
        alpha: {
          height: '10px',
          position: 'relative',
          overflow: 'hidden',
        },
        Alpha: {
          radius: '2px',
        },
      },
    };
  }

  handleChange(data) {
    this.props.onChange(data);
  }

  render() {
    return (
      <div is="picker">
        <div is="saturation">
          <Saturation is="Saturation" {...this.props} onChange={ this.handleChange }/>
        </div>
        <div is="body">
          <div is="controls">
            <div is="color">
              <div is="swatch">
                <div is="active" />
                <Checkboard />
              </div>
            </div>
            <div is="toggles">
              <div is="hue">
                <Hue is="Hue" value={ this.props.h } onChange={ this.handleChange } />
              </div>
              <div is="alpha">
                <Alpha is="Alpha" {...this.props} onChange={ this.handleChange } />
              </div>
            </div>
          </div>
          <ChromeFields {...this.props} />
        </div>
      </div>
    );
  }

}

module.exports = Chrome;