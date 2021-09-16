export enum AttributeType {
    Number = 'number',
    String = 'string',
    Boolean = 'boolean',
    Time = 'string',
    Datetime = 'datetime',
    Image = 'image',
    Relation = 'relation',
    Barcode = 'barcode',
    Eancode = 'eancode',
    Enum = 'enum'
}

export type AttributeSettings = {
    name: string,
    type: AttributeType,
    typeSetting?: { [x: string]: any }
}

export type ArticleTypeSettings = {
    name: string,
    attributes: AttributeSettings[],
    permissionRequirements?: {
        requiredRole?: string[],
        requiredPermission?: string[]
    }
}

export type CommonAttributeTypeSettings = {
    validation?: {
        minLength?: number,
        maxLength?: number,
        min?: number,
        max?: number
    }
}

const pitiTypeSetting: ArticleTypeSettings = {
    name: 'piti',
    attributes: [
        {
            name: 'nazev',
            type: AttributeType.String,
            typeSetting: {
                validation: {
                    maxLength: 50
                }
            }
        }, {
            name: 'pocet',
            type: AttributeType.Number,
            typeSetting: {
                validation: {
                    min: 0
                }
            }
        }, {
            name: 'datum_porizeni',
            type: AttributeType.Datetime,
            typeSetting: {
                format: 'DD_MM_YYYY'
            }
        }, {
            name: 'vyrazeno', 
            type: AttributeType.Boolean
        }
    ]
}

const startTypeSetting: ArticleTypeSettings = {
    name: 'start',
    attributes: [
        {
            name: 'nazev',
            type: AttributeType.String,
            typeSetting: {
                validation: {
                    maxLength: 50
                }
            }
        }, {
            name: 'pocet',
            type: AttributeType.Number,
            typeSetting: {
                validation: {
                    min: 0
                }
            }
        }, {
            name: 'datum_porizeni',
            type: AttributeType.Datetime,
            typeSetting: {
                format: 'DD.MM.YYYY'
            }
        }, {
            name: 'vyrazeno', 
            type: AttributeType.Boolean,
            typeSetting: {
                validation: {
                    required: true
                }
            }
        }
    ]
}

export const typeSettings = [
    pitiTypeSetting,
    startTypeSetting
]

export const articles: any[] = [
    {
        id: 1,
        type: 'piti',
        nazev: 'Kanystr s kohoutkem 20l',
        pocet: 3,
        datum_porizeni: null,
        vyrazeno: false,
    },{
        id: 2,
        type: 'piti',
        nazev: 'Bandaska na vodu 20l',
        pocet: 5,
        datum_porizeni: null,
        vyrazeno: true
    },{
        id: 3,
        type: 'start',
        nazev: 'Cedule start',
        pocet: 1,
        datum_porizeni: null,
        vyrazeno: true
    },{
        id: 4,
        type: 'start',
        nazev: 'Boxy na mapy',
        pocet: 40,
        datum_porizeni: '01.01.2000',
        vyrazeno: false
    }
]