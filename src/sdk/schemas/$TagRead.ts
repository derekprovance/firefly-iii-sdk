/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TagRead = {
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
            type: 'TagModel',
            isRequired: true,
        },
        links: {
            type: 'ObjectLink',
            isRequired: true,
        },
    },
} as const;
