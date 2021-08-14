Blockly.defineBlocksWithJsonArray([
{
  "type": "DS18x20_PIN",
  "message0": "Set DS18x20 PIN %1",
  "args0": [
    {
      "type": "field_dropdown",
      "name": "value",
      "options": [
        [
          "23",
          "23"
        ],
        [
          "19",
          "19"
        ],
        [
          "18",
          "18"
        ],
        [
          "IN1",
          "32"
        ],
        [
          "IN2",
          "33"
        ]
      ]
    }
  ],
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds_sensor_scan",
  "message0": "ds_sensor_scan",
  "output": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
},
{
  "type": "ds_Delay",
  "message0": "Delay millisecond %1",
  "args0": [
    {
      "type": "input_value",
      "name": "value",
      "check": "Number"
    }
  ],
  "inputsInline": true,
  "previousStatement": null,
  "nextStatement": null,
  "colour": "#3498DB",
  "tooltip": "Dalay ms. (1 - 10000)",
  "helpUrl": ""
},
{
  "type": "ds_sensor_read_temp",
  "message0": "ds_sensor_read_temp",
  "output": null,
  "colour": "#3498DB",
  "tooltip": "",
  "helpUrl": ""
}
]);
