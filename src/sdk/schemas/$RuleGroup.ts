/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleGroup = {
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
        description: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        order: {
            type: 'number',
            isReadOnly: true,
            format: 'int32',
        },
        active: {
            type: 'boolean',
            format: 'boolean',
        },
    },
} as const;
