# 🛡️ Security Policy

Thank you for helping keep **Private Password Generator** and ClearHowGuide users safe.

---

## ✅ Supported versions

This repository currently maintains the latest version of the generator source.

| Version | Supported |
|---|---|
| Latest main branch | Yes |
| Older copied versions | No |

---

## 🔐 Responsible disclosure

If you find a security issue, please do not publish it in a public GitHub issue.

Examples of security issues include:

- generated password values being sent over the network;
- generated password values being stored;
- generated password values being logged;
- generated password values being sent to analytics;
- weak or unsafe random generation;
- accidental use of `Math.random()` for password generation;
- unexpected analytics collection;
- cross-site scripting risk;
- unsafe dependency behavior;
- misleading privacy behavior;
- documentation that could encourage unsafe password habits.

---

## 📩 How to report a vulnerability

Please report security issues privately.

Use one of these methods:

1. If GitHub private vulnerability reporting is enabled for this repository, use it.
2. Otherwise, contact ClearHowGuide through the official website contact page.

Official website:

<pre><code>https://clearhowguide.com/en/contact/</code></pre>

Please include:

- a clear description of the issue;
- steps to reproduce;
- affected file or line if known;
- browser and operating system if relevant;
- proof of concept if safe to share;
- whether the issue is already public.

Do not include real passwords, generated passwords, account credentials, API keys, tokens, or private secrets in the report.

---

## 🚫 What not to do

Please do not:

- test with real passwords;
- include generated passwords that you actually use;
- publish exploit details before a fix is available;
- attack ClearHowGuide infrastructure;
- run automated scanning against ClearHowGuide without permission;
- attempt to access data that is not yours;
- submit reports containing credentials, private keys, tokens, or secrets.

---

## ⏳ Expected response

We aim to review valid security reports carefully and fix confirmed issues as soon as reasonably possible.

This is a small open-source project, so response times may vary.

---

## 🎯 Security design goals

The generator should not:

- store generated passwords;
- cache generated passwords;
- send generated passwords to ClearHowGuide;
- send generated passwords to analytics;
- log generated passwords;
- use cookies for generated password data;
- use `localStorage` for generated password data;
- use `sessionStorage` for generated password data;
- use `IndexedDB` for generated password data;
- use `Math.random()` for password generation.

The generator should:

- run locally in the browser;
- use `crypto.getRandomValues()` for password generation;
- generate unique, random passwords when possible;
- provide passphrases for cases where memorability matters;
- clearly explain that strengthened user ideas may be less safe than fully random passwords;
- give educational strength feedback;
- clearly explain its limitations;
- remind users to save generated passwords in a trusted password manager;
- remind users not to reuse generated passwords across accounts.

---

## 🚧 Important limitation

This project is educational. It does not guarantee that any generated password is impossible to crack.

Real account security also depends on:

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
