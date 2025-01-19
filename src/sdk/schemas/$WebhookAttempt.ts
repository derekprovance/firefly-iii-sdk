/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookAttempt = {
    properties: {
        created_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        updated_at: {
            type: 'string',
            isReadOnly: true,
            format: 'date-time',
        },
        webhook_message_id: {
            type: 'string',
            description: `The ID of the webhook message this attempt belongs to.`,
            format: 'string',
        },
        status_code: {
            type: 'number',
            description: `The HTTP status code of the error, if any.`,
            isNullable: true,
            format: 'int32',
        },
        logs: {
            type: 'string',
            description: `Internal log for this attempt. May contain sensitive user data.`,
            isNullable: true,
            format: 'string',
        },
        response: {
            type: 'string',
            description: `Webhook receiver response for this attempt, if any. May contain sensitive user data.`,
            isNullable: true,
            format: 'amount',
        },
    },
} as const;
