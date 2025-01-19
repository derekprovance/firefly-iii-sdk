/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $InsightTotalEntry = {
    properties: {
        difference: {
            type: 'string',
            description: `The amount spent between start date and end date, defined as a string, for this expense account and all asset accounts.`,
            format: 'string',
        },
        difference_float: {
            type: 'number',
            description: `The amount spent between start date and end date, defined as a string, for this expense account and all asset accounts. This number is a float (double) and may have rounding errors.`,
            format: 'double',
        },
        currency_id: {
            type: 'string',
            description: `The currency ID of the expenses listed for this expense account.`,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `The currency code of the expenses listed for this expense account.`,
            format: 'string',
        },
    },
} as const;
