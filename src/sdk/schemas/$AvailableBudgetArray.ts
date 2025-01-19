/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AvailableBudgetArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'AvailableBudgetRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
    },
} as const;
