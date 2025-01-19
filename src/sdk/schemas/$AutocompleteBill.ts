/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AutocompleteBill = {
    properties: {
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        name: {
            type: 'string',
            description: `Name of the bill found by an auto-complete search.`,
            isRequired: true,
            format: 'string',
        },
        active: {
            type: 'boolean',
            description: `Is the bill active or not?`,
            format: 'boolean',
        },
    },
} as const;
