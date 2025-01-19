/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookArray = {
    properties: {
        data: {
            type: 'array',
            contains: {
                type: 'WebhookRead',
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
