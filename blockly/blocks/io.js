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

Blockly.Blocks['io_led'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("io_led");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["on", "1"], ["off", "0"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_temperature'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("temperature");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_motor'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("motor")
        .appendField("pin1");
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("pin2");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["forward", "f"], ["back", "b"]]), "NAME");
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};


Blockly.Blocks['io_pir'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("pir");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_touch'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("touch");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_car_control'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("car_control")
        .appendField(new Blockly.FieldDropdown([["forward", "f"], ["back", "b"], ["right", "r"], ["stop", "s"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_potentiometer'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("potentiometer");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_button'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("buttom");
    this.setInputsInline(true);
    this.setOutput(true, "Number");
    this.setColour(260);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_buzzer'] = {
  init: function() {
    this.appendValueInput("io_buzzer_pin")
        .appendField("io_buzzer_pin");
    this.appendDummyInput()
        .appendField(new Blockly.FieldDropdown([["on", "1"], ["off", "0"]]), "NAME");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['io_lcd'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("String")
        .appendField("lcd");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};

Blockly.Blocks['sleep'] = {
  init: function() {
    this.appendValueInput("NAME")
        .setCheck("Number")
        .appendField("sleep");
    this.setInputsInline(true);
    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(290);
    this.setTooltip('');
    this.setHelpUrl('http://www.example.com/');
  }
};
