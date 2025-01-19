/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleActionUpdate = {
    properties: {
        type: {
            type: 'RuleActionKeyword',
        },
        value: {
            type: 'string',
            description: `The accompanying value the action will set, change or update. Can be empty, but for some types this value is mandatory.`,
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
            description: `If the action is active.`,
            format: 'boolean',
        },
        stop_processing: {
            type: 'boolean',
            description: `When true, other actions will not be fired after this action has fired.`,
            format: 'boolean',
        },
    },
} as const;
