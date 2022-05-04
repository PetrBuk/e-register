export enum AttributeType {
    Number = 'number',
    String = 'string',
    Boolean = 'boolean',
    Datetime = 'datetime',
    Image = 'image',
    Reference = 'reference',
    Barcode = 'barcode',
    Eancode = 'eancode',
    Enum = 'enum'
}

export type AttributeSettings = {
    name: string,
    typeField: AttributeType,
    settings: { [x: string]: any }
}

export type ArticleTypeSettings = {
    name: string,
    attributes: AttributeSettings[],
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
            typeField: AttributeType.String,
            settings: {
                validation: {
                    maxLength: 50
                }
            }
        }, {
            name: 'pocet',
            typeField: AttributeType.Number,
            settings: {
                validation: {
                    min: 0
                }
            }
        }, {
            name: 'datum_porizeni',
            typeField: AttributeType.Datetime,
            settings: {
                format: 'DD_MM_YYYY'
            }
        }, {
            name: 'vyrazeno',
            typeField: AttributeType.Boolean,
            settings: {}
        }
    ]
}

const startTypeSetting: ArticleTypeSettings = {
    name: 'start',
    attributes: [
        {
            name: 'nazev',
            typeField: AttributeType.String,
            settings: {
                validation: {
                    maxLength: 50
                }
            }
        }, {
            name: 'pocet',
            typeField: AttributeType.Number,
            settings: {
                validation: {
                    min: 0
                }
            }
        }, {
            name: 'datum_porizeni',
            typeField: AttributeType.Datetime,
            settings: {
                format: 'DD.MM.YYYY'
            }
        }, {
            name: 'vyrazeno',
            typeField: AttributeType.Boolean,
            settings: {
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