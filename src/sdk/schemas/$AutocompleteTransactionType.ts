/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteTransactionType = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Type of the object found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        type: {
            type: 'string',
            description: `Name of the object found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
    },
} as const;
