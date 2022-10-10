# Data

`Data` is a simple utility class for the management of plugin data. An instance is available on [BdApi](./bdapi).

## Properties



## Methods

### delete
Deletes a piece of stored data, this is different than saving as null or undefined.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin deleting data
key|string|Which piece of data to delete

**Returns:** `void`
___

### load
Loads previously stored data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin loading data
key|string|Which piece of data to load

**Returns:** `any` - The stored data
___

### save
Saves JSON-serializable data.

| Parameter |  Type  |       Description      |
|:----------|:------:|:----------------------:|
pluginName|string|Name of the plugin saving data
key|string|Which piece of data to store
data|any|The data to be saved

**Returns:** `void`
___
