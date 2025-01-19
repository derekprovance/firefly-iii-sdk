/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteRule = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Name of the rule found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        description: {
            type: 'string',
            description: `Description of the rule found by auto-complete.`,
            format: 'string',
        },
    },
} as const;
