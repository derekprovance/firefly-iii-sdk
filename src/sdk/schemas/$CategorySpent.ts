/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CategorySpent = {
    properties: {
        currency_id: {
            type: 'string',
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
            description: `Number of decimals supported by the currency`,
            format: 'int32',
        },
        sum: {
            type: 'string',
            description: `The amount spent.`,
            format: 'amount',
        },
    },
} as const;
