/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleAction = {
    properties: {
        id: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
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
        type: {
            type: 'RuleActionKeyword',
            isRequired: true,
        },
        value: {
            type: 'string',
            description: `The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.`,
            isRequired: true,
            isNullable: true,
            format: 'string',
        },
        order: {
            type: 'number',
            description: `Order of the action`,
            format: 'int32',
        },
        active: {
            type: 'boolean',
            description: `If the action is active. Defaults to true.`,
            format: 'boolean',
        },
        stop_processing: {
            type: 'boolean',
            description: `When true, other actions will not be fired after this action has fired. Defaults to false.`,
            format: 'boolean',
        },
    },
} as const;
