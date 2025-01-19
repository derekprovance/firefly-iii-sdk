/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookMessageArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'WebhookMessageRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
    },
} as const;
