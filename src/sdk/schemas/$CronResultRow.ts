/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $CronResultRow = {
    properties: {
        job_fired: {
            type: 'boolean',
            description: `This value tells you if this specific cron job actually fired. It may not fire. Some cron jobs
            only fire every 24 hours, for example.
            `,
            isNullable: true,
            format: 'boolean',
        },
        job_succeeded: {
            type: 'boolean',
            description: `This value tells you if this specific cron job actually did something. The job may fire but not
            change anything.
            `,
            isNullable: true,
            format: 'boolean',
        },
        job_errored: {
            type: 'boolean',
            description: `If the cron job ran into some kind of an error, this value will be true.`,
            isNullable: true,
            format: 'boolean',
        },
        message: {
            type: 'string',
            description: `If the cron job ran into some kind of an error, this value will be the error message. The success message
            if the job actually ran OK.
            `,
            isNullable: true,
            format: 'string',
        },
    },
} as const;
