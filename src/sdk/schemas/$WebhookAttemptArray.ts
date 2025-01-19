/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookAttemptArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'WebhookAttemptRead',
            },
            isRequired: true,
        },
        meta: {
            type: 'Meta',
            isRequired: true,
        },
    },
} as const;
