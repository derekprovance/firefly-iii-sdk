/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleGroupStore = {
    properties: {
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
            format: 'int32',
        },
        active: {
            type: 'boolean',
            format: 'boolean',
        },
    },
} as const;
