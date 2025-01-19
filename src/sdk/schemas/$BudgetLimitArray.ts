/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $BudgetLimitArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'BudgetLimitRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
    },
} as const;
