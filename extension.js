({
    name: "DS18x20", // Category Name
    description: "DS18x20 temperature sensor",
    author: "AJ.TAY",
    category: "Sensors",
    version: "1.0.1",
    icon: "/static/icon.png", // Category icon
    color: "#0f3058", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
	"DS18x20_PIN",
	"ds_sensor_read_temp",
        {
            xml: `
                <block type="ds_Delay">
                    <value name="value">
                        <shadow type="math_number">
                            <field name="NUM">1000</field>
                        </shadow>
                    </value>
                </block>
            `
        }
    ]
});
