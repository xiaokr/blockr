/**
 * @license
 * Visual Blocks Language
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
 * @fileoverview Generating Python for math blocks.
 * @author q.neutron@gmail.com (Quynh Neutron)
 */
'use strict';

goog.provide('Blockly.Python.io');

goog.require('Blockly.Python');

Blockly.Python['io_buzzer'] = function(block) {
  var value_io_buzzer_pin = Blockly.Python.valueToCode(block, 'io_buzzer_pin', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  Blockly.Python.definitions_['import_time'] = 'import time';
  Blockly.Python.definitions_['pyupm_buzzer'] = 'import pyupm_buzzer as upmBuzzer';
  // TODO: Assemble Python into code variable.
  var code = 'buzzer = upmBuzzer.Buzzer(' + value_io_buzzer_pin  + ')\nbuzzer.playSound(upmBuzzer.RE, 1000000)\ntime.sleep(1)\ndel buzzer';
  return code;
};

Blockly.Python['io_led'] = function(block) {
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  var dropdown_name = block.getFieldValue('NAME');
  // TODO: Assemble Python into code variable.
  var code = 'x = mraa.Gpio(' + value_name + ')\nx.dir(mraa.DIR_OUT)\n';
  if ( dropdown_name == 1 ){
    code = code + 'x.write(1)\n';
  }
  if ( dropdown_name == 0 ){
    code = code + 'x.write(0)\n';
  }
  code = code + 'del x\n';
  return code;
};

Blockly.Python['sleep'] = function(block) {
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_time'] = 'import time';
  var code = 'time.sleep(' + value_name + ')\n';
  return code;
};

Blockly.Python['io_lcd'] = function(block) {
  Blockly.Python.definitions_['import_pyump_i2c'] = 'import pyupm_i2clcd as lcd';
  var value_name = Blockly.Python.valueToCode(block, 'NAME', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'myLcd = lcd.Jhd1313m1(0, 0x3E, 0x62)\nmyLcd.setCursor(0,0)\nmyLcd.setColor(255, 0, 0)\nmyLcd.write(' + value_name + ')\n';
  return code;
};

Blockly.Python['io_car_control'] = function(block) {
  var dropdown_name = block.getFieldValue('NAME');
  Blockly.Python.definitions_['import_mraa'] = 'import mraa';
  // TODO: Assemble Python into code variable.
  var code = '';
  if ( dropdown_name == "s" ){
	  code = 'x1= mraa.Gpio(10)\nx2= mraa.Gpio(3)\nx3= mraa.Gpio(4)\nx4= mraa.Gpio(2)\nx5= mraa.Gpio(6)\nx6= mraa.Gpio(7)\nx7= mraa.Gpio(8)\nx8= mraa.Gpio(9)\nx1.dir(mraa.DIR_OUT)\nx2.dir(mraa.DIR_OUT)\nx3.dir(mraa.DIR_OUT)\nx4.dir(mraa.DIR_OUT)\nx5.dir(mraa.DIR_OUT)\nx6.dir(mraa.DIR_OUT)\nx7.dir(mraa.DIR_OUT)\nx8.dir(mraa.DIR_OUT)\nx1.write(0)\nx2.write(0)\nx3.write(0)\nx4.write(0)\nx5.write(0)\nx6.write(0)\nx7.write(0)\nx8.write(0)\ndel x1\ndel x2\ndel x3\ndel x4\ndel x5\ndel x6\ndel x7\ndel x8\n';
  } 
  if ( dropdown_name == "f" ){
    code = 'x1= mraa.Gpio(10)\nx2= mraa.Gpio(3)\nx3= mraa.Gpio(4)\nx4= mraa.Gpio(2)\nx5= mraa.Gpio(6)\nx6= mraa.Gpio(7)\nx7= mraa.Gpio(8)\nx8= mraa.Gpio(9)\nx1.dir(mraa.DIR_OUT)\nx2.dir(mraa.DIR_OUT)\nx3.dir(mraa.DIR_OUT)\nx4.dir(mraa.DIR_OUT)\nx5.dir(mraa.DIR_OUT)\nx6.dir(mraa.DIR_OUT)\nx7.dir(mraa.DIR_OUT)\nx8.dir(mraa.DIR_OUT)\nx1.write(0)\nx2.write(0)\nx3.write(0)\nx4.write(1)\nx5.write(1)\nx6.write(0)\nx7.write(1)\nx8.write(0)\ndel x1\ndel x2\ndel x3\ndel x4\ndel x5\ndel x6\ndel x7\ndel x8\n';
  } 
  return code;
};
