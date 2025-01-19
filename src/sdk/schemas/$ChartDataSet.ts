/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ChartDataSet = {
    properties: {
        label: {
            type: 'string',
            description: `This is the title of the current set. It can refer to an account, a budget or another object (by name).`,
            format: 'string',
        },
        currency_id: {
            type: 'string',
            description: `The currency ID of the currency associated to the data in the entries.`,
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
            description: `Number of decimals for the currency associated to the data in the entries.`,
            format: 'int32',
        },
        start_date: {
            type: 'string',
            format: 'date-time',
        },
        end_date: {
            type: 'string',
            format: 'date-time',
        },
        type: {
            type: 'string',
            description: `Indicated the type of chart that is expected to be rendered. You can safely ignore this if you want.`,
            format: 'string',
        },
        yAxisID: {
            type: 'number',
            description: `Used to indicate the Y axis for this data set. Is usually between 0 and 1 (left and right side of the chart).`,
            format: 'int32',
        },
        entries: {
            type: 'dictionary',
            contains: {
                properties: {
                },
            },
        },
    },
} as const;
