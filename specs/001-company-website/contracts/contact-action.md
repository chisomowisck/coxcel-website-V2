# Contract: `submitContact` Server Action

`src/actions/contact.ts`

```ts
export async function submitContact(prev: ContactResult | null, formData: FormData): Promise<ContactResult>
```

## Input
`FormData` from the native form (works without JavaScript), parsed into `ContactInput` with
`contactSchema` (see data-model.md, Enquiry). The checkbox `consent` arrives as `"on"`.

## Output
```ts
type ContactResult =
  | { status: 'success' }
  | {
      status: 'error';
      code: 'validation' | 'rate_limited' | 'not_configured' | 'send_failed';
      message: string;                       // human-readable, safe to display
      fieldErrors?: Partial<Record<keyof ContactInput, string>>;
    };
```

## Behaviour
1. Parse with `contactSchema.safeParse`; on failure return `validation` with field errors.
2. If `website` (honeypot) is non-empty, return `success` without sending.
3. Rate limit by client IP (5 per 10 minutes). Exceeded: `rate_limited`.
4. If `RESEND_API_KEY` missing: `not_configured` with message naming info@coxcel.com.
5. Send notification to `CONTACT_TO_EMAIL` (default info@coxcel.com) from `CONTACT_FROM_EMAIL`
   with `replyTo` = visitor email, subject `New enquiry: <service> from <name>`.
   On error: `send_failed`.
6. Send confirmation to visitor (subject `We have received your enquiry`). Failure is logged
   and ignored.
7. Return `success`.

## Environment
| Variable | Required | Default |
|---|---|---|
| RESEND_API_KEY | yes for sending | none |
| CONTACT_TO_EMAIL | no | info@coxcel.com |
| CONTACT_FROM_EMAIL | no | `Coxcel <noreply@coxcel.com>` |
| NEXT_PUBLIC_SITE_URL | no | https://coxcel.com |
