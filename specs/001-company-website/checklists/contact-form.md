# Contact Form and Email Requirements Checklist: Coxcel Company Website

**Purpose**: Unit tests for the requirements covering the enquiry flow, spam protection and email
**Created**: 2026-10-30
**Feature**: [spec.md](../spec.md) | Depth: Standard | Audience: Reviewer

## Requirement Completeness

- [ ] CHK001 Are validation rules (required, length, format) specified for every field? [Completeness, data-model Enquiry]
- [ ] CHK002 Are the contents of the team notification and visitor confirmation emails specified? [Completeness, Spec FR-028]
- [ ] CHK003 Are all environment variables, defaults and required/optional status documented? [Completeness, contracts]
- [ ] CHK004 Is the service preselection via link parameter specified, including unknown values? [Completeness, US2, Edge Cases]

## Requirement Clarity

- [ ] CHK005 Is the rate limit expressed with a number and window, and its per-instance limitation stated? [Clarity, Spec FR-027]
- [ ] CHK006 Is the user-facing wording for each error code defined? [Clarity, contracts]
- [ ] CHK007 Is "branded" for emails defined in terms of colours, type stack and logo usage? [Clarity, research R6]

## Scenario Coverage

- [ ] CHK008 Are primary, validation-failure, rate-limited, not-configured and send-failure flows all defined? [Coverage, contracts]
- [ ] CHK009 Is the outcome defined when the notification succeeds but the confirmation fails? [Recovery, Edge Cases]
- [ ] CHK010 Is the honeypot outcome defined so bots receive no signal? [Exception Flow, Edge Cases]
- [ ] CHK011 Is focus management after submit (error focus, success announcement) specified? [Coverage, US1]

## Non-Functional Requirements

- [ ] CHK012 Is it stated that enquiry data is not stored beyond sending the emails? [Privacy, data-model]
- [ ] CHK013 Is the Privacy Policy required to describe form data processing and the email provider? [Privacy, Gap]
- [ ] CHK014 Are secrets restricted to environment variables with no client exposure? [Security, Constitution VII]
- [ ] CHK015 Is server-side re-validation required independently of client validation? [Security, Spec FR-026]

## Dependencies and Assumptions

- [ ] CHK016 Is domain verification in the email provider recorded as a launch dependency for the sender address? [Dependency, contracts]
