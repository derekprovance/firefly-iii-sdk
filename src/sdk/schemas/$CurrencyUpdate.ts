/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CurrencyUpdate = {
    properties: {
        enabled: {
            type: 'boolean',
            description: `If the currency is enabled`,
            format: 'boolean',
        },
        default: {
            type: 'boolean',
            description: `If the currency must be the default for the user. You can only submit TRUE. Submitting FALSE will not drop this currency as the default currency, because then the system would be without one.`,
            format: 'boolean',
        },
        code: {
            type: 'string',
            description: `The currency code`,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `The currency name`,
            format: 'string',
        },
        symbol: {
            type: 'string',
            description: `The currency symbol`,
            format: 'string',
        },
        decimal_places: {
            type: 'number',
            description: `How many decimals to use when displaying this currency. Between 0 and 16.`,
            format: 'int32',
        },
    },
} as const;
