# HN Anonymizer

Want to keep your HN profile anonymous, even with coworkers snooping over your shoulder?

HN Anonymizer is for you.

HN Anonymizer is a [userscript](https://en.wikipedia.org/wiki/Userscript) which can be run with tools like Greasemonkey and Tampermonkey right in your browser.

HN Anonymizer lets you anonymize your:

* Username
* Profile URL
* Karma
* Comments

## Username

By default, your username will be replaced with asterisks, like so:

<img width="161" alt="anonymized" src="https://github.com/user-attachments/assets/64d80811-7c50-4351-b246-d6a69ffe7c36" />

But asterisks will let observers know your username is being hidden, so it's better to replace your username with a fake value, this way they don't become suspicious.

A config variable is provided for you to set a custom username for this purpose.

## Comments

In comments, your username will remain as-is, but the red asterisk HN applies to your comments will be removed, so they'll blend in with all of the other comments on the page.

Without anonymization:

<img width="89" alt="anonymized_comment_before" src="https://github.com/user-attachments/assets/773defa8-e1d8-44a8-afd7-623310f1f829" />

With anonymization:

<img width="91" alt="anonymized_comment_after" src="https://github.com/user-attachments/assets/92926cd4-7135-4945-92d4-7471c2523c54" />


