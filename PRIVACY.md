# Privacy

Private Password Generator is designed to run locally in the browser.

The generated password should not leave the user's device.

This project is designed to avoid:

- sending generated passwords to ClearHowGuide;
- saving generated passwords in localStorage;
- saving generated passwords in sessionStorage;
- using IndexedDB;
- using cookies;
- network calls from the generator component;
- beacon calls;
- analytics events containing generated passwords;
- console logging generated passwords;
- weak random generation with Math.random.

The tool displays the generated password on the page so the user can copy it and save it in a trusted password manager.
