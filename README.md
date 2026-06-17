# Private Password Generator

**A privacy-first password generator used by [ClearHowGuide](https://clearhowguide.com).**

![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)
![Privacy First](https://img.shields.io/badge/privacy-first-brightgreen.svg)
![No Tracking](https://img.shields.io/badge/tracking-none-success.svg)
![Password Storage](https://img.shields.io/badge/password%20storage-none-success.svg)

---

## Live demo

Try the generator here:

<pre><code>https://clearhowguide.com/en/security/create-a-strong-password/#private-password-generator</code></pre>

---

## What is this?

**Private Password Generator** is a privacy-first password generator.

It helps users create strong passwords directly in the browser, without sending, saving, or tracking the generated password.

The tool supports:

- random passwords;
- memorable passphrases;
- strengthened user ideas;
- adjustable length from 8 to 128 characters;
- Easy, Strong, and Maximum presets;
- uppercase letters;
- lowercase letters;
- numbers;
- symbols;
- website-friendly symbols;
- ambiguous character avoidance;
- educational strength scoring;
- educational offline crack-time estimates.

---

## Privacy promise

This project is designed around one simple promise:

> Your generated password should not leave your browser.

The generator is designed to avoid:

- sending generated passwords to ClearHowGuide;
- saving generated passwords in `localStorage`;
- saving generated passwords in `sessionStorage`;
- using `IndexedDB`;
- using cookies;
- calling `fetch()` from the generator component;
- using `navigator.sendBeacon`;
- sending analytics events with generated passwords;
- logging generated passwords to the console;
- using `Math.random()` for password generation.

The generator uses the browser cryptographic API:

<pre><code>crypto.getRandomValues()</code></pre>

---

## Why this exists

Many users still create passwords manually from names, dates, places, or small variations of old passwords.

That is risky.

This generator is designed to help users create better passwords:

- long;
- unique;
- random;
- saved in a trusted password manager;
- not reused across accounts.

---

## Generator modes

| Mode | Purpose |
|---|---|
| Random password | Best default option for most online accounts |
| Memorable passphrase | Useful when a password must be typed manually |
| Strengthen my idea | Turns user-provided words or numbers into a stronger password-like result |

A fully random password is usually safer than a password based on personal words.

---

## Technology

This project uses:

- Astro component source;
- vanilla browser JavaScript;
- `crypto.getRandomValues()` for secure random generation;
- `zxcvbn-ts` for educational strength estimation.

Main source file:

<pre><code>src/PasswordGenerator.astro</code></pre>

---

## Install

Run:

<pre><code>npm install</code></pre>

---

## Run checks

Run:

<pre><code>npm run check</code></pre>

This runs:

<pre><code>npm run source:check
npm run privacy:check</code></pre>

---

## Current privacy check

The repository includes a simple privacy check script:

<pre><code>scripts/privacy-check.mjs</code></pre>

It checks the component source for forbidden patterns such as:

<pre><code>localStorage
sessionStorage
indexedDB
document.cookie
fetch(
navigator.sendBeacon
umami.track
console.log
Math.random</code></pre>

It also checks that the source uses:

<pre><code>crypto.getRandomValues</code></pre>

This does not replace a full security audit, but it helps prevent accidental regressions.

---

## Important limitation

This generator provides an educational tool, not a security guarantee.

Real account security depends on many factors:

- password uniqueness;
- website password handling;
- hashing method;
- rate limits;
- MFA or 2FA;
- phishing resistance;
- breach exposure;
- attacker resources;
- whether the password is reused elsewhere.

Do not treat any generated password as "unhackable."

---

## Repository structure

<pre><code>private-password-generator/
  .github/
    ISSUE_TEMPLATE/
      bug_report.md
      config.yml
      feature_request.md
    PULL_REQUEST_TEMPLATE.md
  src/
    PasswordGenerator.astro
  scripts/
    privacy-check.mjs
  README.md
  PRIVACY.md
  SECURITY.md
  CONTRIBUTING.md
  CODE_OF_CONDUCT.md
  SUPPORT.md
  CHANGELOG.md
  LICENSE
  package.json</code></pre>

---

## Contributing

Contributions are welcome if they improve privacy, accessibility, security, clarity, or maintainability.

Please read `CONTRIBUTING.md` before opening a pull request.

---

## Security

Please do not report vulnerabilities in public issues.

Read `SECURITY.md` for responsible disclosure instructions.

---

## License

MIT License.

See `LICENSE`.

---

## Used by

This generator is used by ClearHowGuide in the guide:

**How to Create a Strong Password**

Demo:

<pre><code>https://clearhowguide.com/en/security/create-a-strong-password/#private-password-generator</code></pre>
