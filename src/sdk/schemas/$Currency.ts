/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Currency = {
    properties: {
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        enabled: {
            type: 'boolean',
            description: `Defaults to true`,
            format: 'boolean',
        },
        default: {
            type: 'boolean',
            description: `Make this currency the default currency.`,
            format: 'boolean',
        },
        code: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        symbol: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        decimal_places: {
            type: 'number',
            description: `Supports 0-16 decimals.`,
            format: 'int32',
        },
    },
} as const;
