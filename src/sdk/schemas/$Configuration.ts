/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Configuration = {
    properties: {
        title: {
            type: 'ConfigValueFilter',
            isRequired: true,
        },
        value: {
            type: 'PolymorphicProperty',
            isRequired: true,
        },
        editable: {
            type: 'boolean',
            description: `If this config variable can be edited by the user`,
            isRequired: true,
            format: 'boolean',
        },
    },
} as const;
