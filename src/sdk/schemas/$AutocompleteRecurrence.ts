/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteRecurrence = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Name of the recurrence found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        description: {
            type: 'string',
            description: `Description of the recurrence found by auto-complete.`,
            format: 'string',
        },
    },
} as const;
