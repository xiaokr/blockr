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

Blockly.Python['blockr_led'] = function(block) {
  var dropdown_led_switch = block.getFieldValue('led_switch');
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_led_control(' + dropdown_led_switch + ')\n';
  return code;
};
Blockly.Python['blockr_lcd'] = function(block) {
  var dropdown_lcd_switch = block.getFieldValue('lcd_switch');
  var value_lcd_r = Blockly.Python.valueToCode(block, 'lcd_r', Blockly.Python.ORDER_ATOMIC);
  var value_lcd_g = Blockly.Python.valueToCode(block, 'lcd_g', Blockly.Python.ORDER_ATOMIC);
  var value_lcd_b = Blockly.Python.valueToCode(block, 'lcd_b', Blockly.Python.ORDER_ATOMIC);
  var value_lcd_content = Blockly.Python.valueToCode(block, 'lcd_content', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_lcd_control(' + value_lcd_content + ', ' +  dropdown_lcd_switch + ', ' +  value_lcd_r + ', ' + value_lcd_g + ',' + value_lcd_b + ')\n';
  return code;
};
Blockly.Python['blockr_buzzer'] = function(block) {
  var dropdown_buzzer_tone = block.getFieldValue('buzzer_tone');
  var value_buzzer_time = Blockly.Python.valueToCode(block, 'buzzer_time', Blockly.Python.ORDER_ATOMIC);
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_buzzer_control(' + dropdown_buzzer_tone + ', ' +  value_buzzer_time + ')\n';
  return code;
};
Blockly.Python['blockr_button'] = function(block) {
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_button_control()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['blockr_touch'] = function(block) {
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  var code = 'kc.kr_touch_control()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['blockr_pir'] = function(block) {
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_pir_control()\n'
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['blockr_wheel'] = function(block) {
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  var dropdown_wheel_direction = block.getFieldValue('wheel_direction');
  var value_wheel_speed = Blockly.Python.valueToCode(block, 'wheel_speed', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_car_control("' + dropdown_wheel_direction + '", ' + value_wheel_speed + ')\n';
  return code;
};
Blockly.Python['blockr_sleep'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';
  var value_sleep_time_second = Blockly.Python.valueToCode(block, 'sleep_time_second', Blockly.Python.ORDER_ATOMIC);
  // TODO: Assemble Python into code variable.
  var code = 'time.sleep(' + value_sleep_time_second + ')\n';
  return code;
};
Blockly.Python['blockr_sound'] = function(block) {
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_sound_value()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
Blockly.Python['blockr_light'] = function(block) {
  Blockly.Python.definitions_['import_kr_control'] = 'import kr_control as kc';
  // TODO: Assemble Python into code variable.
  var code = 'kc.kr_light_value()\n';
  // TODO: Change ORDER_NONE to the correct strength.
  return [code, Blockly.Python.ORDER_NONE];
};
