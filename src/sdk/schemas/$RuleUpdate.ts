/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleUpdate = {
    properties: {
        title: {
            type: 'string',
            format: 'string',
        },
        description: {
            type: 'string',
            format: 'string',
        },
        rule_group_id: {
            type: 'string',
            description: `ID of the rule group under which the rule must be stored. Either this field or rule_group_title is mandatory.`,
            format: 'string',
        },
        order: {
            type: 'number',
            format: 'int32',
        },
        trigger: {
            type: 'RuleTriggerType',
        },
        active: {
            type: 'boolean',
            description: `Whether or not the rule is even active. Default is true.`,
            format: 'boolean',
        },
        strict: {
            type: 'boolean',
            description: `If the rule is set to be strict, ALL triggers must hit in order for the rule to fire. Otherwise, just one is enough. Default value is true.`,
            format: 'boolean',
        },
        stop_processing: {
            type: 'boolean',
            description: `If this value is true and the rule is triggered, other rules  after this one in the group will be skipped. Default value is false.`,
            format: 'boolean',
        },
        triggers: {
            type: 'array',
            contains: {
                type: 'RuleTriggerUpdate',
            },
        },
        actions: {
            type: 'array',
            contains: {
                type: 'RuleActionUpdate',
            },
        },
    },
} as const;
