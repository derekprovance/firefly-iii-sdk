/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteTransaction = {
    properties: {
        id: {
            type: 'string',
            description: `The ID of a transaction journal (basically a single split).`,
            isRequired: true,
            format: 'string',
        },
        transaction_group_id: {
            type: 'string',
            description: `The ID of the underlying transaction group.`,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Transaction description`,
            isRequired: true,
            format: 'string',
        },
        description: {
            type: 'string',
            description: `Transaction description`,
            isRequired: true,
            format: 'string',
        },
    },
} as const;
