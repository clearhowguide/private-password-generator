# 🔐 Private Password Generator

**A privacy-first password generator used by [ClearHowGuide](https://clearhowguide.com).**

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
![Privacy First](https://img.shields.io/badge/privacy-first-brightgreen.svg)
![No Tracking](https://img.shields.io/badge/tracking-none-success.svg)
![Password Storage](https://img.shields.io/badge/password%20storage-none-success.svg)
![Secure Random](https://img.shields.io/badge/random-crypto.getRandomValues-success.svg)

---

## ✨ Live demo

Try the generator here:

👉 **https://clearhowguide.com/en/security/create-a-strong-password/#private-password-generator**

---

## 🧭 What is this?

**Private Password Generator** is a small, privacy-first password generator.

It helps users create strong passwords directly in the browser, without sending, saving, or tracking the generated password.

The tool can generate:

- 🎲 random passwords;
- 🧠 memorable passphrases;
- 🛠️ strengthened user ideas;
- 🔢 passwords from 8 to 128 characters;
- ⚡ Easy, Strong, and Maximum presets;
- 🔡 uppercase and lowercase letters;
- 🔢 numbers;
- 🔣 symbols;
- 🌐 website-friendly symbols;
- 👁️ ambiguous-character-safe passwords;
- ⏳ educational offline crack-time estimates;
- ✅ practical safety reminders.

---

## 🔒 Privacy promise

This project is designed around one simple promise:

> **Your generated password should not leave your browser.**

The generator is designed to avoid:

- ❌ sending generated passwords to ClearHowGuide;
- ❌ saving generated passwords in `localStorage`;
- ❌ saving generated passwords in `sessionStorage`;
- ❌ using `IndexedDB`;
- ❌ using cookies;
- ❌ calling `fetch()` from the generator component;
- ❌ using `navigator.sendBeacon`;
- ❌ sending analytics events with generated passwords;
- ❌ logging generated passwords to the console;
- ❌ using `Math.random()` for password generation.

The generated password exists only in the current browser page.

When the user refreshes or closes the page, the generated password is gone unless the user saved it somewhere else.

---

## 🧠 Why this exists

Many people still create passwords from names, dates, places, favorite words, or small changes to old passwords.

That is risky.

A password like this can still be weak:

<pre><code>Summer2026!</code></pre>

It looks more complex than a plain word, but it is still predictable.

This generator is designed to encourage better habits:

- ✅ create long passwords;
- ✅ use a different password for every important account;
- ✅ prefer random passwords for normal website logins;
- ✅ use passphrases only when memorability matters;
- ✅ save generated passwords in a trusted password manager;
- ✅ enable MFA or 2FA when available.

---

## 🧪 Generator modes

| Mode | What it does |
|---|---|
| **Random password** | Generates a random password with the browser cryptographic API |
| **Memorable passphrase** | Generates a longer phrase made from random words |
| **Strengthen my idea** | Turns user-provided words or numbers into a stronger password-like result |

For most accounts, **Random password** is the best default choice.

For master passwords or passwords you must type manually, **Memorable passphrase** can be easier to use.

For maximum safety, avoid putting names, birthdays, addresses, company names, or personal details into **Strengthen my idea**.

---

## ⚙️ Technology

This project uses:

- ⚡ Astro component source;
- 🧩 vanilla browser JavaScript;
- 🔐 `crypto.getRandomValues()` for secure random generation;
- 📊 `zxcvbn-ts` for educational strength estimation.

Main source file:

<pre><code>src/PasswordGenerator.astro</code></pre>

---

## 📦 Install

Run:

<pre><code>npm install</code></pre>

---

## ✅ Run checks

Run:

<pre><code>npm run check</code></pre>

This runs:

- `npm run source:check`
- `npm run privacy:check`

The privacy check verifies that the generator component does not contain direct usage of:

- storage APIs;
- cookies;
- network calls;
- beacon calls;
- analytics calls;
- debug logging patterns;
- weak random generation with `Math.random`.

---

## 🧾 Current privacy check

The repository includes a simple privacy check script:

<pre><code>scripts/privacy-check.mjs</code></pre>

It checks the component source for these forbidden patterns:

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

## 🚧 Important limitation

This generator provides an educational tool, not a security guarantee.

Real account security depends on many factors:

- whether the password is unique;
- how the website stores passwords;
- hashing algorithm;
- salting and key stretching;
- rate limits;
- account lockout protections;
- MFA or 2FA;
- phishing resistance;
- breach exposure;
- attacker hardware;
- whether the password is reused elsewhere.

> Do not treat any generated password as **unhackable**.

---

## 🗂️ Repository structure

<pre><code>private-password-generator/
├─ .github/
│  ├─ ISSUE_TEMPLATE/
│  │  ├─ bug_report.md
│  │  ├─ config.yml
│  │  └─ feature_request.md
│  └─ PULL_REQUEST_TEMPLATE.md
├─ scripts/
│  └─ privacy-check.mjs
├─ src/
│  └─ PasswordGenerator.astro
├─ CHANGELOG.md
├─ CODE_OF_CONDUCT.md
├─ CONTRIBUTING.md
├─ LICENSE
├─ PRIVACY.md
├─ README.md
├─ SECURITY.md
├─ SUPPORT.md
├─ package-lock.json
└─ package.json</code></pre>

---

## 🤝 Contributing

Contributions are welcome if they improve:

- 🔒 privacy;
- 🛡️ security;
- ♿ accessibility;
- 🧠 generation quality;
- 🧾 documentation clarity;
- 🧹 maintainability.

Please read:

👉 **[CONTRIBUTING.md](CONTRIBUTING.md)**

before opening a pull request.

---

## 🛡️ Security

Please do not report vulnerabilities in public issues.

Read:

👉 **[SECURITY.md](SECURITY.md)**

for responsible disclosure instructions.

---

## 🌿 Code of Conduct

This project follows a contributor code of conduct.

Read:

👉 **[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)**

before participating.

---

## 💬 Support

Need help or want to ask a non-sensitive question?

Read:

👉 **[SUPPORT.md](SUPPORT.md)**

---

## 📜 License

MIT License.

See:

👉 **[LICENSE](LICENSE)**

---

## 🧩 Used by

This generator is used by ClearHowGuide in the guide:

**How to Create a Strong Password**

Demo:

👉 **https://clearhowguide.com/en/security/create-a-strong-password/#private-password-generator**
