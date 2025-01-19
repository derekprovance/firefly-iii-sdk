/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookStore = {
    properties: {
        active: {
            type: 'boolean',
            description: `Boolean to indicate if the webhook is active`,
            format: 'boolean',
        },
        title: {
            type: 'string',
            description: `A title for the webhook for easy recognition.`,
            isRequired: true,
            format: 'string',
        },
        trigger: {
            type: 'WebhookTrigger',
            isRequired: true,
        },
        response: {
            type: 'WebhookResponse',
            isRequired: true,
        },
        delivery: {
            type: 'WebhookDelivery',
            isRequired: true,
        },
        url: {
            type: 'string',
            description: `The URL of the webhook. Has to start with \`https\`.`,
            isRequired: true,
            format: 'string',
        },
    },
} as const;
