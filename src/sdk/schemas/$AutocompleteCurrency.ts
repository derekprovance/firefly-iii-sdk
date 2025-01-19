/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteCurrency = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Currency name.`,
            isRequired: true,
            format: 'string',
        },
        code: {
            type: 'string',
            description: `Currency code.`,
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
            isRequired: true,
            format: 'int32',
        },
    },
} as const;
