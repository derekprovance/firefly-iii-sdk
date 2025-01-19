/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $WebhookMessage = {
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
        sent: {
            type: 'boolean',
            description: `If this message is sent yet.`,
            format: 'boolean',
        },
        errored: {
            type: 'boolean',
            description: `If this message has errored out.`,
            format: 'boolean',
        },
        webhook_id: {
            type: 'string',
            description: `The ID of the webhook this message belongs to.`,
            format: 'string',
        },
        uuid: {
            type: 'string',
            description: `Long UUID string for identification of this webhook message.`,
            format: 'string',
        },
        message: {
            type: 'string',
            description: `The actual message that is sent or will be sent as JSON string.`,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
