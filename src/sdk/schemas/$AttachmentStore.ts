/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $AttachmentStore = {
    properties: {
        filename: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        attachable_type: {
            type: 'AttachableType',
            isRequired: true,
        },
        attachable_id: {
            type: 'string',
            description: `ID of the model this attachment is linked to.`,
            isRequired: true,
            format: 'string',
        },
        title: {
            type: 'string',
            format: 'string',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
    },
} as const;
