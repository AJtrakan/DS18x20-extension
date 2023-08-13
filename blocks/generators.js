Blockly.Python['DS18x20_PIN'] = function(block) {
  Blockly.Python.definitions_['import_DS18x20'] = 'import ds18x20';
  Blockly.Python.definitions_['from_onewire'] = 'import onewire';
  Blockly.Python.definitions_['from_machine'] = 'import machine';

  var dropdown_value = block.getFieldValue('value');

  var code = `ds_pin = machine.Pin(${dropdown_value})\nds_sensor = ds18x20.DS18X20(onewire.OneWire(ds_pin))\n`;
  return code;
};

Blockly.Python['ds_sensor_scan'] = function (block) {
  Blockly.Python.definitions_['ds_sensor'] = '';

  var code = 'ds_sensor.scan()';
  return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Python['ds_Delay'] = function(block) {
  Blockly.Python.definitions_['import_time'] = 'import time';


  var value_value = Blockly.Python.valueToCode(block, 'value', Blockly.Python.ORDER_ATOMIC);

  var code = `time.sleep_ms(${value_value})\n`;
  return code;
};

Blockly.Python['ds_sensor_read_temp'] = function (block) {
  Blockly.Python.definitions_['import_temp'] = 'import Temp_ds_sensor';

  var code = 'Temp_ds_sensor.read_temp(ds_sensor)';
  return [code, Blockly.Python.ORDER_NONE];
};