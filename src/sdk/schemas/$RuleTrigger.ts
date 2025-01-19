/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleTrigger = {
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
            type: 'RuleTriggerKeyword',
            isRequired: true,
        },
        value: {
            type: 'string',
            description: `The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger.`,
            isRequired: true,
            format: 'string',
        },
        prohibited: {
            type: 'boolean',
            description: `If 'prohibited' is true, this rule trigger will be negated. 'Description is' will become 'Description is NOT' etc.`,
            format: 'boolean',
        },
        order: {
            type: 'number',
            description: `Order of the trigger`,
            isReadOnly: true,
            format: 'int32',
        },
        active: {
            type: 'boolean',
            description: `If the trigger is active. Defaults to true.`,
            format: 'boolean',
        },
        stop_processing: {
            type: 'boolean',
            description: `When true, other triggers will not be checked if this trigger was triggered. Defaults to false.`,
            format: 'boolean',
        },
    },
} as const;
