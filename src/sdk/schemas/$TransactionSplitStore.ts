/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export const $TransactionSplitStore = {
    properties: {
        type: {
            type: 'TransactionTypeProperty',
            isRequired: true,
        },
        date: {
            type: 'string',
            description: `Date of the transaction`,
            isRequired: true,
            format: 'date-time',
        },
        amount: {
            type: 'string',
            description: `Amount of the transaction.`,
            isRequired: true,
            format: 'amount',
        },
        description: {
            type: 'string',
            description: `Description of the transaction.`,
            isRequired: true,
            format: 'string',
        },
        order: {
            type: 'number',
            description: `Order of this entry in the list of transactions.`,
            isNullable: true,
            format: 'int32',
        },
        currency_id: {
            type: 'string',
            description: `Currency ID. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.`,
            isNullable: true,
            format: 'string',
        },
        currency_code: {
            type: 'string',
            description: `Currency code. Default is the source account's currency, or the user's default currency. The value you submit may be overruled by the source or destination account.`,
            isNullable: true,
            format: 'string',
        },
        foreign_amount: {
            type: 'string',
            description: `The amount in a foreign currency.`,
            isNullable: true,
            format: 'amount',
        },
        foreign_currency_id: {
            type: 'string',
            description: `Currency ID of the foreign currency. Default is null. Is required when you submit a foreign amount.`,
            isNullable: true,
            format: 'string',
        },
        foreign_currency_code: {
            type: 'string',
            description: `Currency code of the foreign currency. Default is NULL. Can be used instead of the foreign_currency_id, but this or the ID is required when submitting a foreign amount.`,
            isNullable: true,
            format: 'string',
        },
        budget_id: {
            type: 'string',
            description: `The budget ID for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        budget_name: {
            type: 'string',
            description: `The name of the budget to be used. If the budget name is unknown, the ID will be used or the value will be ignored.`,
            isReadOnly: true,
            isNullable: true,
            format: 'string',
        },
        category_id: {
            type: 'string',
            description: `The category ID for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        category_name: {
            type: 'string',
            description: `The name of the category to be used. If the category is unknown, it will be created. If the ID and the name point to different categories, the ID overrules the name.`,
            isNullable: true,
            format: 'string',
        },
        source_id: {
            type: 'string',
            description: `ID of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account.`,
            isNullable: true,
            format: 'string',
        },
        source_name: {
            type: 'string',
            description: `Name of the source account. For a withdrawal or a transfer, this must always be an asset account. For deposits, this must be a revenue account. Can be used instead of the source_id. If the transaction is a deposit, the source_name can be filled in freely: the account will be created based on the name.`,
            isNullable: true,
            format: 'string',
        },
        destination_id: {
            type: 'string',
            description: `ID of the destination account. For a deposit or a transfer, this must always be an asset account. For withdrawals this must be an expense account.`,
            isNullable: true,
            format: 'string',
        },
        destination_name: {
            type: 'string',
            description: `Name of the destination account. You can submit the name instead of the ID. For everything except transfers, the account will be auto-generated if unknown, so submitting a name is enough.`,
            isNullable: true,
            format: 'string',
        },
        reconciled: {
            type: 'boolean',
            description: `If the transaction has been reconciled already. When you set this, the amount can no longer be edited by the user.`,
            format: 'boolean',
        },
        piggy_bank_id: {
            type: 'number',
            description: `Optional. Use either this or the piggy_bank_name`,
            isNullable: true,
            format: 'int32',
        },
        piggy_bank_name: {
            type: 'string',
            description: `Optional. Use either this or the piggy_bank_id`,
            isNullable: true,
            format: 'string',
        },
        bill_id: {
            type: 'string',
            description: `Optional. Use either this or the bill_name`,
            isNullable: true,
            format: 'string',
        },
        bill_name: {
            type: 'string',
            description: `Optional. Use either this or the bill_id`,
            isNullable: true,
            format: 'string',
        },
        tags: {
            type: 'array',
            contains: {
                type: 'string',
                description: `Tag.`,
                format: 'string',
            },
            isNullable: true,
        },
        notes: {
            type: 'string',
            isNullable: true,
            format: 'string',
        },
        internal_reference: {
            type: 'string',
            description: `Reference to internal reference of other systems.`,
            isNullable: true,
            format: 'string',
        },
        external_id: {
            type: 'string',
            description: `Reference to external ID in other systems.`,
            isNullable: true,
            format: 'string',
        },
        external_url: {
            type: 'string',
            description: `External, custom URL for this transaction.`,
            isNullable: true,
            format: 'string',
        },
        bunq_payment_id: {
            type: 'string',
            description: `Internal ID of bunq transaction. Field is no longer used but still works.`,
            isNullable: true,
            format: 'string',
        },
        sepa_cc: {
            type: 'string',
            description: `SEPA Clearing Code`,
            isNullable: true,
            format: 'string',
        },
        sepa_ct_op: {
            type: 'string',
            description: `SEPA Opposing Account Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_ct_id: {
            type: 'string',
            description: `SEPA end-to-end Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_db: {
            type: 'string',
            description: `SEPA mandate identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_country: {
            type: 'string',
            description: `SEPA Country`,
            isNullable: true,
            format: 'string',
        },
        sepa_ep: {
            type: 'string',
            description: `SEPA External Purpose indicator`,
            isNullable: true,
            format: 'string',
        },
        sepa_ci: {
            type: 'string',
            description: `SEPA Creditor Identifier`,
            isNullable: true,
            format: 'string',
        },
        sepa_batch_id: {
            type: 'string',
            description: `SEPA Batch ID`,
            isNullable: true,
            format: 'string',
        },
        interest_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        book_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        process_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        due_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        payment_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
        invoice_date: {
            type: 'string',
            isNullable: true,
            format: 'date-time',
        },
    },
} as const;
