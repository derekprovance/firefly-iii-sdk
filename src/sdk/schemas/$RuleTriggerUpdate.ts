/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleTriggerUpdate = {
    properties: {
        type: {
            type: 'RuleTriggerKeyword',
        },
        value: {
            type: 'string',
            description: `The accompanying value the trigger responds to. This value is often mandatory, but this depends on the trigger. If the rule trigger is something like 'has any tag', submit the string 'true'.`,
            format: 'string',
        },
        order: {
            type: 'number',
            description: `Order of the trigger`,
            format: 'int32',
        },
        active: {
            type: 'boolean',
            description: `If the trigger is active.`,
            format: 'boolean',
        },
        stop_processing: {
            type: 'boolean',
            description: `When true, other triggers will not be checked if this trigger was triggered.`,
            format: 'boolean',
        },
    },
} as const;
