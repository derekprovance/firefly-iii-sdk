/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $LinkType = {
    properties: {
        name: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        inward: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        outward: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        editable: {
            type: 'boolean',
            isReadOnly: true,
            format: 'boolean',
        },
    },
} as const;
