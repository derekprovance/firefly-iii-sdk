/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BasicSummaryEntry = {
    properties: {
        key: {
            type: 'string',
            description: `This is a reference to the type of info shared, not influenced by translations or user preferences. The EUR value is a reference to the currency code. Possibilities are: balance-in-ABC, spent-in-ABC, earned-in-ABC, bills-paid-in-ABC, bills-unpaid-in-ABC, left-to-spend-in-ABC and net-worth-in-ABC.`,
            format: 'string',
        },
        title: {
            type: 'string',
            description: `A translated title for the information shared.`,
            format: 'string',
        },
        monetary_value: {
            type: 'number',
            description: `The amount as a float.`,
            format: 'double',
        },
        currency_id: {
            type: 'string',
            description: `The currency ID of the associated currency.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            format: 'string',
        },
        currency_symbol: {
            type: 'string',
            format: 'string',
        },
        currency_decimal_places: {
            type: 'number',
            description: `Number of decimals for the associated currency.`,
            format: 'int32',
        },
        value_parsed: {
            type: 'string',
            description: `The amount formatted according to the users locale`,
            format: 'string',
        },
        local_icon: {
            type: 'string',
            description: `Reference to a font-awesome icon without the fa- part.`,
            format: 'string',
        },
        sub_title: {
            type: 'string',
            description: `A short explanation of the amounts origin. Already formatted according to the locale of the user or translated, if relevant.`,
            format: 'string',
        },
    },
} as const;
