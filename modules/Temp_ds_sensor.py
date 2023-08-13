import ds18x20
import onewire
import machine
import time



def read_temp(ds_sensor):

    roms = ds_sensor.scan()
    ds_sensor.convert_temp()
    time.sleep_ms(100)
    for rom in roms:
        t_ds_sensor = ds_sensor.read_temp(rom)
    return (t_ds_sensor)
