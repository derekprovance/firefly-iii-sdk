/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InsightTransferEntry = {
    properties: {
        id: {
            type: 'string',
            description: `This ID is a reference to the original object.`,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `This is the name of the object.`,
            format: 'string',
        },
        difference: {
            type: 'string',
            description: `The total amount transferred between start date and end date, a number defined as a string, for this asset account.`,
            format: 'string',
        },
        difference_float: {
            type: 'number',
            description: `The total amount transferred between start date and end date, a number as a float, for this asset account. May have rounding errors.`,
            format: 'double',
        },
        in: {
            type: 'string',
            description: `The total amount transferred TO this account between start date and end date, a number defined as a string, for this asset account.`,
            format: 'string',
        },
        in_float: {
            type: 'number',
            description: `The total amount transferred FROM this account between start date and end date, a number as a float, for this asset account. May have rounding errors.`,
            format: 'double',
        },
        out: {
            type: 'string',
            description: `The total amount transferred FROM this account between start date and end date, a number defined as a string, for this asset account.`,
            format: 'string',
        },
        out_float: {
            type: 'number',
            description: `The total amount transferred TO this account between start date and end date, a number as a float, for this asset account. May have rounding errors.`,
            format: 'double',
        },
        currency_id: {
            type: 'string',
            description: `The currency ID of the expenses listed for this account.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `The currency code of the expenses listed for this account.`,
            format: 'string',
        },
    },
} as const;
