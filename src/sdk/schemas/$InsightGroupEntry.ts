/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InsightGroupEntry = {
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
            description: `The amount spent or earned between start date and end date, a number defined as a string, for this object and all asset accounts.`,
            format: 'string',
        },
        difference_float: {
            type: 'number',
            description: `The amount spent or earned between start date and end date, a number as a float, for this object and all asset accounts. May have rounding errors.`,
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
