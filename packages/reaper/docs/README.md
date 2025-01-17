[Documentation](README.md)

# Documentation

## Index

### Classes

* [Reaper](classes/reaper.md)

### Interfaces

* [Callbacks](interfaces/callbacks.md)
* [ConstructorOptions](interfaces/constructoroptions.md)
* [Options](interfaces/options.md)

### Type aliases

* [DeleteCallback](README.md#deletecallback)
* [Init](README.md#init)
* [MetadataCallback](README.md#metadatacallback)

### Functions

* [init](README.md#init)

## Type aliases

###  DeleteCallback

Ƭ **DeleteCallback**: *function*

*Defined in [types.ts:15](https://github.com/badbatch/cachemap/blob/141407d/packages/reaper/src/types.ts#L15)*

#### Type declaration:

▸ (`key`: string, `tags?`: any[]): *Promise‹void›*

**Parameters:**

Name | Type |
------ | ------ |
`key` | string |
`tags?` | any[] |

___

###  Init

Ƭ **Init**: *function*

*Defined in [types.ts:17](https://github.com/badbatch/cachemap/blob/141407d/packages/reaper/src/types.ts#L17)*

#### Type declaration:

▸ (`callbacks`: [Callbacks](interfaces/callbacks.md)): *[Reaper](classes/reaper.md)*

**Parameters:**

Name | Type |
------ | ------ |
`callbacks` | [Callbacks](interfaces/callbacks.md) |

___

###  MetadataCallback

Ƭ **MetadataCallback**: *function*

*Defined in [types.ts:19](https://github.com/badbatch/cachemap/blob/141407d/packages/reaper/src/types.ts#L19)*

#### Type declaration:

▸ (): *Metadata[]*

## Functions

###  init

▸ **init**(`options`: [Options](interfaces/options.md)): *[Init](README.md#init)*

*Defined in [main/index.ts:65](https://github.com/badbatch/cachemap/blob/141407d/packages/reaper/src/main/index.ts#L65)*

**Parameters:**

Name | Type | Default |
------ | ------ | ------ |
`options` | [Options](interfaces/options.md) | {} |

**Returns:** *[Init](README.md#init)*
