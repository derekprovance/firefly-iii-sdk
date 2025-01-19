/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $RuleGroupArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'RuleGroupRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
        links: {
            type: 'PageLink',
            isRequired: true,
        },
    },
} as const;
