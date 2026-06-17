# 🤝 Contributing to Private Password Generator

Thank you for your interest in contributing to **Private Password Generator**.

This project is intentionally small, privacy-first, and educational. Contributions should preserve that spirit.

---

## ✅ What we welcome

We welcome contributions that improve:

- 🔐 privacy;
- 🛡️ security;
- ♿ accessibility;
- 🧠 password generation quality;
- 📊 password strength feedback quality;
- 🧾 documentation clarity;
- 🧪 test coverage;
- 🧹 code maintainability;
- 🌍 language clarity for non-expert users.

---

## ❌ What we do not want

Please avoid changes that:

- send generated passwords to a server;
- store generated passwords in browser storage;
- add analytics around generated passwords;
- log generated passwords;
- use `Math.random()` for password generation;
- weaken or remove `crypto.getRandomValues()` without strong security justification;
- add unnecessary dependencies;
- make the generator harder to understand;
- promote misleading “100% secure” claims;
- encourage users to reuse generated passwords across accounts;
- encourage users to enter personal information such as names, birthdays, addresses, or company names.

---

## 🧭 Project principles

This project follows these principles:

1. **Privacy first**  
   The generated password should not leave the browser.

2. **Secure randomness by default**  
   Password generation should use `crypto.getRandomValues()`, not weak random functions.

3. **Educational, not magical**  
   The generator should explain risk clearly, without pretending to guarantee security.

4. **Simple by default**  
   The project should stay lightweight, understandable, and easy to audit.

5. **No dark patterns**  
   The tool should not pressure users into sharing email addresses, installing unrelated products, or giving away sensitive data.

6. **Clear language**  
   Feedback should be understandable by normal users, not only security experts.

---

## 🛠️ Local setup

Clone the repository:

```bash
git clone https://github.com/clearhowguide/private-password-generator.git
cd private-password-generator
```

Install dependencies:

```bash
npm install
```

Run checks:

```bash
npm run check
```

---

## 🔍 Privacy check

Before submitting changes, run:

```bash
npm run privacy:check
```

The check should pass without forbidden patterns.

Forbidden patterns currently include:

```text
localStorage
sessionStorage
indexedDB
document.cookie
fetch(
navigator.sendBeacon
umami.track
console.log
Math.random
```

The check also expects the generator source to use:

```text
crypto.getRandomValues
```

This does not replace a full security audit, but it helps prevent accidental privacy and randomness regressions.

---

## 🌱 How to contribute

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Run the checks.
5. Open a pull request.

Example:

```bash
git checkout -b improve-generator-accessibility
npm run check
git add .
git commit -m "Improve generator accessibility"
git push origin improve-generator-accessibility
```

Then open a pull request on GitHub.

---

## 🧪 Pull request checklist

Before opening a pull request, confirm:

- [ ] I did not add generated password storage.
- [ ] I did not add generated password network submission.
- [ ] I did not add generated password analytics.
- [ ] I did not add generated password console logging.
- [ ] I did not use `Math.random()` for password generation.
- [ ] I kept `crypto.getRandomValues()` for password generation.
- [ ] I ran `npm run check`.
- [ ] I updated documentation if needed.
- [ ] I kept the language clear for non-expert users.

---

## 🐛 Reporting bugs

For normal bugs, open a GitHub issue.

Please include:

- what happened;
- what you expected;
- steps to reproduce;
- browser and operating system;
- screenshots if useful.

Do not include real passwords, generated passwords, credentials, API keys, tokens, or secrets in issues or screenshots.

---

## 🛡️ Reporting security issues

Do not report security vulnerabilities in public issues.

Please read:

```text
SECURITY.md
```

Security-sensitive reports may include:

- accidental password storage;
- accidental password transmission;
- unsafe random generation;
- privacy regressions;
- misleading security wording.

---

## 💬 Communication style

Please be kind, direct, and constructive.

This is a small open-source project. Clear reports, small pull requests, and respectful feedback are appreciated.
