<a name="root"></a>
# osiota application onewire

*Osiota* is a software platform capable of running *distributed IoT applications* written in JavaScript to enable any kind of IoT tasks. See [osiota](https://github.com/osiota/osiota).

## Configuration: onewire


This application collects temperature values (and other data) from 1-Wire devices.

**Properties**

|Name|Description|Type|
|----|-----------|----|
|[map](#map[])|Device mapping<br/>|object\[\]|
|bus\_id|Bus number of the 1-Wire port<br/><br/>Default: `1`|number|

**Example**

```json
{
    "map": [
        {
            "map": "28-0123456789ab",
            "node": "/Außen/Außentemperatur",
            "metadata": {
                "type": "temperature.data",
                "unit": "C",
                "unit_long": "Celsius"
            }
        }
    ],
    "bus_id": 1
}
```

<a name="map[]"></a>
### map\[\]:

Device mapping


**Items**


Debug output text

**Item Properties**

|Name|Description|Type|
|----|-----------|----|
|map|1-Wire device id<br/>|string|
|node|Node name to publish data to<br/>|string|
|[metadata](#map[].metadata)|Metadata for that device<br/><br/>Default: `{"type":"temperature.data","unit":"C","unit_long":"Celsius"}`|object|

**Example**

```json
[
    {
        "map": "28-0123456789ab",
        "node": "/Außen/Außentemperatur",
        "metadata": {
            "type": "temperature.data",
            "unit": "C",
            "unit_long": "Celsius"
        }
    }
]
```

<a name="map[].metadata"></a>
#### map\[\]\.metadata:

Metadata for that device


**Additional Properties:** `true`<br/>
**Example**

```json
{
    "type": "temperature.data",
    "unit": "C",
    "unit_long": "Celsius"
}
```


## How to setup

Add a configuration object for this application, see [osiota configuration](https://github.com/osiota/osiota/blob/master/doc/configuration.md):

```json
{
    "name": "onewire",
    "config": CONFIG
}
```

## License

Osiota and this application are released under the MIT license.

Please note that this project is released with a [Contributor Code of Conduct](https://github.com/osiota/osiota/blob/master/CODE_OF_CONDUCT.md). By participating in this project you agree to abide by its terms.
