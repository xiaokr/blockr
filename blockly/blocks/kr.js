/**
 * @license
 * Visual Blocks Editor
 *
 * Copyright 2012 Google Inc.
 * https://developers.google.com/blockly/
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @fileoverview Math blocks for Blockly.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Blocks.io');

goog.require('Blockly.Blocks');


/**
 * Common HSV hue for all blocks in this category.
 */
Blockly.Blocks.io.HUE = 230;

Blockly.Blocks['blockr_led'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LED")
        .appendField(new Blockly.FieldDropdown([["on", "1"], ["off", "0"]]), "led_switch");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockr_lcd'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("LCD");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["on", "1"], ["off", "0"]]), "lcd_switch");
    this.appendValueInput("lcd_r")
        .setCheck("Number")
        .appendField("R");
    this.appendValueInput("lcd_g")
        .setCheck("Number")
        .appendField("G");
    this.appendValueInput("lcd_b")
        .setCheck("Number")
        .appendField("B");
    this.appendValueInput("lcd_content")
        .setCheck(["Number", "String"])
        .appendField("Content");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['blockr_buzzer'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Buzzer")
        .appendField(new Blockly.FieldDropdown([["1", "1"], ["2", "2"], ["3", "3"], ["4", "4"], ["5", "5"], ["6", "6"], ["7", "7"]]), "buzzer_tone");
    this.appendValueInput("buzzer_time")
        .setCheck("Number");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_button'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ifclicked");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_touch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("iftouched");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_pir'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("ifpeople");
    this.setInputsInline(true);
    this.setOutput(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_wheel'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("wheel")
        .appendField(new Blockly.FieldDropdown([["forward", "f"], ["backward", "b"], ["left", "l"],["stop", "s"], ["right", "r"]]), "wheel_direction");
    this.appendValueInput("wheel_speed")
        .setCheck("Number")
        .appendField("wheel_speed");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_sleep'] = {
  init: function() {
    this.appendValueInput("sleep_time_second")
        .setCheck("Number")
        .appendField("sleep");
    this.setInputsInline(true);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_sound'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("value of sound");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
Blockly.Blocks['blockr_light'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("value of light");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
