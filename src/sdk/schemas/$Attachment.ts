/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $Attachment = {
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
        md5: {
            type: 'string',
            description: `MD5 hash of the file for basic duplicate detection.`,
            format: 'string',
        },
        filename: {
            type: 'string',
            isRequired: true,
            format: 'string',
        },
        download_url: {
            type: 'string',
            format: 'string',
        },
        upload_url: {
            type: 'string',
            format: 'string',
        },
        title: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        mime: {
            type: 'string',
            isReadOnly: true,
            format: 'string',
        },
        size: {
            type: 'number',
            isReadOnly: true,
            format: 'int32',
        },
    },
} as const;
