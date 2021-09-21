export enum AttributeType {
    Number = 'number',
    String = 'string',
    Boolean = 'boolean',
    Datetime = 'datetime',
    Reference = 'reference',
    Image = 'image',
    Barcode = 'barcode',
    Eancode = 'eancode',
    Enum = 'enum'
}

export interface BaseAuthSettings {
    requiredPermissions?: {
        [name: string]: 'and' | 'or'
    },
    requiredRoles?: {
        [name: string]: 'and' | 'or'
    }
}

export interface AuthSettings {
    base?: BaseAuthSettings,
    show?: BaseAuthSettings,
    create?: BaseAuthSettings,
    edit?: BaseAuthSettings,
    detele?: BaseAuthSettings
}

export interface AttributeSettings {
    name: string,
    type: AttributeType,
    typeSetting?: 
    TextAtributeSettings | NumberAttributeSettings | 
    BooleanAttributeSettings | DatetimeAttributeSettings | 
    ReferenceAttributeSettings,
    auth?: AuthSettings
}

// Each Attribute settings
export interface TextAtributeSettings {
    required?: boolean,
    unique?: boolean,
    defaultValue?: string,
    richText?: boolean,
    validation?: {
        minLength?: number,
        maxLength?: number,
        regExp?: string
    }
}

export interface NumberAttributeSettings {
    required?: boolean,
    unique?: boolean,
    defaultValue?: number,
    format?: any,
    validation?: {
        min?: number,
        max?: number
    }
}

export interface BooleanAttributeSettings {
    required?: boolean,
    defaultValue?: number,
}

export interface DatetimeAttributeSettings {
    required?: boolean,
    unique?: boolean,
    defaultValue?: number,
    type?: 'date' | 'time' | 'datetime',
    format?: any,
    validation?: {
        min?: number,
        max?: number
    }
}

export interface ReferenceAttributeSettings {
    reference: string | any,
    required?: boolean,
    unique?: boolean,
    defaultValue?: number,
}

export interface ArticleTypeSettings {
    name: string,
    attributes: AttributeSettings[],
    auth?: AuthSettings
}
