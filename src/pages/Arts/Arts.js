import OverReact from 'overreact';

import { ROUTES } from 'constants';

import './Arts.scss';

function Arts() {
  return (
    <div id="fullscreen_container">
      <div class="command_palette">
        <div class="colour_picker command_item">
          <div id="colour_picker">
            <button class="command_item" data-colour="red">Red</button>
            <button class="command_item" data-colour="yellow">Yellow</button>
            <button class="command_item" data-colour="pink">Pink</button>
            <button class="command_item" data-colour="green">Green</button>
            <button class="command_item" data-colour="purple">Purple</button>
            <button class="command_item" data-colour="orange">Orange</button>
            <button class="command_item" data-colour="blue">Blue</button>
            <div class="selected_colour command_item">
              Selected Colour: <span id="current_colour"></span>
            </div>
          </div>
        </div>
        
        <input type="range" name="thickness" class="line_thickness command_item" min="10" max="100" step="5" value="10" />
        <span id="current_thickness" class="command_item">Size: 10</span>

        <button class="clear command_item">Clear</button>
        <button class="fullscreen command_item">Fullscreen</button>
      </div>
      <canvas id="draw" width="800" height="800"></canvas>
    </div>
  );
}

export default Arts;
