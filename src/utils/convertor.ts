export interface FvSchema {
  [x: string]: FvArrayAttribute | FvBooleanAttribute | FvClassAttribute | FvCurrencyAttribute | FvDateAttribute |
  FvEmailAttribute | FvEnumAttribute | FvEqualAttribute | FvForbiddenAttribute | FvMultiAttribute |
  FvNumberAttribute | FvObjectAttribute | FvObjectIdAttribute | FvSpecialAttribute | FvStringAttribute
}

export type FvType = 'array' | 'boolean' | 'class' | 'currency' | 'date' | 'email' | 'enum' | 'equal' |
'forbidden' | 'multi' | 'number' | 'object' | 'objectID' | 'string' | 'any' | 'mac' | 'luhn' |
'url' | 'uuid'| 'reference' | 'datetime'

interface FvAttribute {
  type: FvType,
  optional?: boolean, // Every field in the schema will be required by default. If you'd like to define optional fields, set optional: true.
  nullable?: boolean, // If you want disallow undefined value but allow null value, use nullable instead of optional.
  default?: any,
  rbac?: any,
}

export interface FvArrayAttribute extends FvAttribute {
  type: 'array',
  empty?: boolean, 	// If true, the validator accepts an empty array [].
  min?: number, // Minimum count of elements.
  max?: number, // Maximum count of elements.
  length?: number, // Fix count of elements.
  contains?: any, // The array must contain this element too.
  unique?: boolean, // The array must be unique (array of objects is always unique).
  enum?: any[], // 	Every element must be an element of the enum array.
  items?: FvSchema, // Schema for array items.
}

export interface FvBooleanAttribute extends FvAttribute {
  type: 'boolean',
  convert?: boolean, // If true and the type is not Boolean, it will be converted. 1, "true", "1", "on" will be true. 0, "false", "0", "off" will be false. It's a sanitizer, it will change the value in the original object.
}

export interface FvClassAttribute extends FvAttribute {
  type: 'class',
  instanceOf: any, // Checked Class.
}

export interface FvCurrencyAttribute extends FvAttribute {
  type: 'currency',
  currencySymbol?: string, // The currency symbol expected in string (as prefix).
  symboloptional?: boolean, // Toggle to make the symbol optional in string, although, if present it would only allow the currencySymbol.
  thousandSeparator?: string, // Thousand place separator character.
  decimalSeparator?: string, // Decimal place character.
  customRegex?: string, // Custom regular expression, to validate currency strings (For eg: /[0-9]*/g).
}

export interface FvDateAttribute extends FvAttribute {
  type: 'date',
  convert: boolean, // If true and the type is not Date, try to convert with new Date(). It's a sanitizer, it will change the value in the original object.
}

export interface FvEmailAttribute extends FvAttribute {
  type: 'email',
  empty?: boolean, // If true, the validator accepts an empty array "".
  mode?: 'quick' | 'precise', // Checker method. Can be quick or precise.
  normalize?: boolean, // Normalize the e-mail address (trim & lower-case). It's a sanitizer, it will change the value in the original object.
  min?: number, // Minimum value length.
  max?: number, // Maximum value length.
}

export interface FvEnumAttribute extends FvAttribute {
  type: 'enum',
  values: any[], // The valid values.
}

export interface FvEqualAttribute extends FvAttribute {
  type: 'equal',
  value: any, // The expected value. It can be any primitive types.
}

export interface FvForbiddenAttribute extends FvAttribute {
  type: 'forbidden',
  remove?: boolean, // If true, the value will be removed in the original object. It's a sanitizer, it will change the value in the original object.
}

export interface FvSpecialAttribute extends FvAttribute {
  type: 'any' | 'mac' | 'luhn' | 'url' | 'uuid'
}

export interface FvMultiAttribute extends FvAttribute {
  type: 'multi',
  rules: FvSchema[]
}

export interface FvNumberAttribute extends FvAttribute {
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

export interface FvObjectAttribute extends FvAttribute {
  type: 'object',
  strict?: boolean | 'remove', // If true any properties which are not defined on the schema will throw an error. If remove all additional properties will be removed from the original object. It's a sanitizer, it will change the original object.
  minProps?: number, // If set to a number N, will throw an error if the object has fewer than N properties.
  maxProps?: number, // If set to a number N, will throw an error if the object has more than N properties.
}

export interface FvStringAttribute extends FvAttribute {
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

export interface FvObjectIdAttribute extends FvAttribute {
  type: 'objectID',
  convert: boolean, // If true, the validator converts ObjectID HexString representation to ObjectID instance, if hexString the validator converts to HexString
}

const convertor = () => {

}

export default convertor