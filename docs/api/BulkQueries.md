# Type Alias: BulkQueries

> **BulkQueries** = [`Options`](Options.md) & `object`

## Type Declaration

### all?

> `optional` **all?**: `boolean`

Whether an array of all matching modules should be returned

### filter

> **filter**: [`ModuleFilter`](ModuleFilter.md)

The filter to use to find the module

### map?

> `optional` **map?**: `Record`\<`string`, [`ExportedOnlyFilter`](ExportedOnlyFilter.md)\>

A mapper to transform the matched module's exports

### mapDeclarations?

> `optional` **mapDeclarations?**: `boolean`

Whether the mapper should apply to the module's declarations instead of exports
