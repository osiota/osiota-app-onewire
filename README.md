<!--
Auto generated documentation:
  * Adapt schema.json and
  * Run npm run doc

Please edit schema.json or
	https://github.com/simonwalz/osiota-dev/blob/master/partials/main.md
-->
<a name="root"></a>
# osiota application onewire

*Osiota* is a software platform capable of running *distributed IoT applications* written in JavaScript to enable any kind of IoT tasks. See [osiota](https://github.com/osiota/osiota).

## Configuration: onewire


This application collects temperature values (and other data) from 1-Wire devices.

**Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|[**map**](#map)<br/>(Device mappings)|`object[]`||no|
|**bus_id**|`number`|Bus number of the 1-Wire port<br/>Default: `1`<br/>|no|

**Additional Properties:** not allowed<br/>
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

<a name="map"></a>
### map\[\]: Device mappings

**Items: Device mapping**

**Item Properties**

|Name|Type|Description|Required|
|----|----|-----------|--------|
|**map**|`string`|1-Wire device id<br/>|yes|
|**node**|`string`|Node name to publish data to<br/>|no|
|[**metadata**](#mapmetadata)|`object`|Metadata for that device<br/>Default: `{"type":"temperature.data","unit":"C","unit_long":"Celsius"}`<br/>|no|

**Item Additional Properties:** not allowed<br/>
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

<a name="mapmetadata"></a>
#### map\[\]\.metadata:

Metadata for that device


**Additional Properties:** allowed<br/>
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
