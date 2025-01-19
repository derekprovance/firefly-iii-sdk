/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CategoryRead = {
    properties: {
        type: {
            type: 'string',
            description: `Immutable value`,
            isRequired: true,
            format: 'string',
        },
        id: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        attributes: {
            type: 'Category',
            isRequired: true,
        },
    },
} as const;
