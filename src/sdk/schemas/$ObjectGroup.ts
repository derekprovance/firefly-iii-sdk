/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $ObjectGroup = {
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
        title: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        order: {
            type: 'number',
            description: `Order of the object group`,
            isRequired: true,
            format: 'int32',
        },
    },
} as const;
