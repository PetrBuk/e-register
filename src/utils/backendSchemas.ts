//import { ObjectId } from 'mongoose'

export interface FvSchema {
  [x: string]: FvAttribute
}

export type FvType = 'array' | 'boolean' | 'class' | 'currency' | 'date' | 'email' | 'enum' | 'equal' |
'forbidden' | 'multi' | 'number' | 'object' | 'objectID' | 'string' | 'any' | 'mac' | 'luhn' |
'url' | 'uuid'| 'reference' | 'time' | 'plainDate' | 'attribute'

export type FvAttribute = FvArrayAttribute | FvBooleanAttribute | FvClassAttribute | FvCurrencyAttribute | FvDateAttribute |
  FvEmailAttribute | FvEnumAttribute | FvEqualAttribute | FvForbiddenAttribute | FvMultiAttribute | ReferenceAttribute |
  FvNumberAttribute | FvObjectAttribute | FvObjectIdAttribute | FvSpecialAttribute | FvStringAttribute

interface FvAttributeProps {
  type: FvType,
  optional?: boolean, // Every field in the schema will be required by default. If you'd like to define optional fields, set optional: true.
  nullable?: boolean, // If you want disallow undefined value but allow null value, use nullable instead of optional.
  default?: any,
}

export interface FvArrayAttribute extends FvAttributeProps {
  type: 'array',
  empty?: boolean, 	// If true, the validator accepts an empty array [].
  min?: number, // Minimum count of elements.
  max?: number, // Maximum count of elements.
  length?: number, // Fix count of elements.
  contains?: any, // The array must contain this element too.
  unique?: boolean, // The array must be unique (array of objects is always unique).
  enum?: any[], // 	Every element must be an element of the enum array.
  items?: FvAttribute, // Schema for array items.
}

export interface FvBooleanAttribute extends FvAttributeProps {
  type: 'boolean',
  convert?: boolean, // If true and the type is not Boolean, it will be converted. 1, "true", "1", "on" will be true. 0, "false", "0", "off" will be false. It's a sanitizer, it will change the value in the original object.
}

export interface FvClassAttribute extends FvAttributeProps {
  type: 'class',
  instanceOf: any, // Checked Class.
}

export interface FvCurrencyAttribute extends FvAttributeProps {
  type: 'currency',
  currencySymbol?: string, // The currency symbol expected in string (as prefix).
  symboloptional?: boolean, // Toggle to make the symbol optional in string, although, if present it would only allow the currencySymbol.
  thousandSeparator?: string, // Thousand place separator character.
  decimalSeparator?: string, // Decimal place character.
  customRegex?: string, // Custom regular expression, to validate currency strings (For eg: /[0-9]*/g).
}

export interface FvDateAttribute extends FvAttributeProps {
  type: 'date',
  convert?: boolean, // If true and the type is not Date, try to convert with new Date(). It's a sanitizer, it will change the value in the original object.
}

export interface FvEmailAttribute extends FvAttributeProps {
  type: 'email',
  empty?: boolean, // If true, the validator accepts an empty array "".
  mode?: 'quick' | 'precise', // Checker method. Can be quick or precise.
  normalize?: boolean, // Normalize the e-mail address (trim & lower-case). It's a sanitizer, it will change the value in the original object.
  min?: number, // Minimum value length.
  max?: number, // Maximum value length.
}

export interface FvEnumAttribute extends FvAttributeProps {
  type: 'enum',
  values: any[], // The valid values.
}

export interface FvEqualAttribute extends FvAttributeProps {
  type: 'equal',
  value: any, // The expected value. It can be any primitive types.
}

export interface FvForbiddenAttribute extends FvAttributeProps {
  type: 'forbidden',
  remove?: boolean, // If true, the value will be removed in the original object. It's a sanitizer, it will change the value in the original object.
}

export interface FvSpecialAttribute extends FvAttributeProps {
  type: 'any' | 'mac' | 'luhn' | 'url' | 'uuid' | 'attribute'
}

export interface FvMultiAttribute extends FvAttributeProps {
  type: 'multi',
  rules: {
    type: 'array' | 'boolean' | 'class' | 'currency' | 'date' | 'email' | 'enum' | 'equal' |
      'forbidden' | 'multi' | 'number' | 'object' | 'objectID' | 'string' | 'any' | 'mac' | 'luhn' |
      'url' | 'uuid'| 'reference' | 'time' | 'plainDate' | 'attribute'
    }[]
}

export interface FvNumberAttribute extends FvAttributeProps {
  type: 'number',
  min?: number, // Minimum value.
  max?: number, // Maximum value.
  equal?: number, // Fixed value.
  notEqual?: number,
  integer?: boolean, // The value must be a non-decimal value.
  positive?: boolean, // The value must be greater than zero.
  negative?: boolean, // The value must be less than zero.
  convert?: boolean, // If true and the type is not Number, it's converted with Number(). It's a sanitizer, it will change the value in the original object.
}

export interface FvObjectAttribute extends FvAttributeProps {
  type: 'object',
  strict?: boolean | 'remove', // If true any properties which are not defined on the schema will throw an error. If remove all additional properties will be removed from the original object. It's a sanitizer, it will change the original object.
  minProps?: number, // If set to a number N, will throw an error if the object has fewer than N properties.
  maxProps?: number, // If set to a number N, will throw an error if the object has more than N properties.
  props?: FvSchema
}

export interface FvStringAttribute extends FvAttributeProps {
  type: 'string',
  empty?: boolean, // If true, the validator accepts an empty string "".
  min?: number, // Minimum value length.
  max?: number, // Maximum value length.
  length?: number, // Fixed value length.
  pattern?: string, // Regex pattern.
  contains?: string, // The value must contain this text.
  enum?: string[], // The value must be an element of the enum array.
  alpha?: boolean, // The value must be an alphabetic string.
  numeric?: boolean, // The value must be a numeric string.
  alphanum?: boolean, // The value must be an alphanumeric string.
  alphadash?: boolean, // The value must be an alphabetic string that contains dashes.
  hex?: boolean, // The value must be a hex string.
  singleLine?: boolean, // The value must be a single line string.
  base64?: boolean, // The value must be a base64 string.
  trim?: boolean, // If true, the value will be trimmed. It's a sanitizer, it will change the value in the original object.
  padStart?: number, // If it's a number, the value will be left padded. It's a sanitizer, it will change the value in the original object.
  padEnd?: number, // If it's a number, the value will be right padded. It's a sanitizer, it will change the value in the original object.
  padChar?: string, // The padding character for the padStart and padEnd.
  lowercase?: boolean, // If true, the value will be lower-cased. It's a sanitizer, it will change the value in the original object.
  uppercase?: boolean, // If true, the value will be upper-cased. It's a sanitizer, it will change the value in the original object.
  convert?: boolean, // If true and the type is not a String, it's converted with String(). It's a sanitizer, it will change the value in the original object.
}

export interface FvObjectIdAttribute extends FvAttributeProps {
  type: 'objectID',
  //objectID?: ObjectId, // The ObjectId object
  convert?: boolean, // If true, the validator converts ObjectID HexString representation to ObjectID instance, if hexString the validator converts to HexString
}

export interface TimeAttribute extends FvAttributeProps {
  type: 'time',
  format?: 'hh:mm' | 'hh:mm:ss',
}

export interface PlainDateAttribute extends FvAttributeProps {
  type: 'plainDate',
  format?: 'dd:mm:yyyy' | 'yyyy:mm:dd',
}

export interface ReferenceAttribute extends FvAttributeProps {
  type: 'reference',
  model: string, // Name of referenced model
  field: string, // Name of referenced field - id as default
  multiple?: boolean, // Wheter to reference sigle or multiple records
  min?: number, // Minimum count of elements.
  max?: number, // Maximum count of elements.
  length?: number, // Fix count of elements.
  unique?: boolean, // The array must be unique (array of objects is always unique).
}

export const fvLedgerSchema: FvSchema = {
  ident: {
    type: 'string',
    length: 3
  },
  name: {
    type: 'string',
    max: 50
  },
  description: {
    type: 'string',
    optional: true
  },
  shortcut: {
    type: 'string',
    length: 3,
    optional: true
  },
  type: {
    type: 'string',
    enum: ['assets', 'liabilities', 'earnings', 'expenses']
  },
  ledgerClass: {
    type: 'reference',
    model: 'LedgerClass',
    field: 'id'
  }
}

export const fvLedgerClassSchema: FvSchema = {
  name: {
    type: 'string',
    max: 50,
  },
  description: {
    type: 'string',
    max: 250,
    optional: true,
  },
  shortcut: {
    type: 'string',
    length: 3,
    optional: true
  },
  parentClass: {
    type: 'reference',
    model: 'LedgerClass',
    field: 'id',
    optional: true
  }
}

export const fvTransactionSchema: FvSchema = {
  name: {
    type: 'string',
    max: 50,
  },
  description: {
    type: 'string',
    max: 255,
    optional: true
  },
  amount: {
    type: 'number',
  },
  date: {
    type: 'date',
    convert: true
  },
  debitLedger: {
    type: 'reference',
    model: 'Ledger',
    field: 'id'
  },
  creditLedger: {
    type: 'reference',
    model: 'Ledger',
    field: 'id'
  }
}

export const fvTransactionTemplateSchema: FvSchema = {
  name: {
    type: 'string',
    max: 50
  },
  description: {
    type: 'string',
    max: 255
  },
  debitLedger: {
    type: 'reference',
    model: 'Ledger',
    field: 'id'
  },
  creditLedger: {
    type: 'reference',
    model: 'Ledger',
    field: 'id'
  },
  parentTemplate: {
    type: 'reference',
    model: 'TransactionTemplate',
    field: 'id',
    optional: true
  }
}