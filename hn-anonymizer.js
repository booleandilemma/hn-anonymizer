// ==UserScript==
// @name         HN Anonymizer
// @author       booleandilemma
// @description  Anonymize your Hacker News username
// @homepageURL  https://github.com/booleandilemma/hn-anonymizer
// @include      https://news.ycombinator.com/*
// @version      1.0.0
// @grant        none
// @license      GPL-3.0
// ==/UserScript==

const UserScriptName = 'HN Anonymizer';

/**
 * Logs an info message to the console.
 * @param {string} message - Specifies the message to log.
 */
function logInfo(message) {
  console.info(`${UserScriptName}: ${message}`);
}

/**
 * Logs a warning message to the console.
 * @param {string} message - Specifies the message to log.
 */
function logWarning(message) {
  console.warn(`${UserScriptName}: ${message}`);
}

function main() {

  // Customize your username with this variable, or leave it empty for asterisks.
  const customUsername = "b****";

  // Customize your profile url with this variable.
  const customProfileUrl = "https://example.com";

  const usernameElement = document.getElementById("me");

  if (usernameElement == null) {
    logWarning("No username element found.");
    return;
  }

  if (customUsername !== "") {
    usernameElement.innerHTML = customUsername;
  } else {
    usernameElement.innerHTML = "*****";
  }

  if (customProfileUrl !== "") {
    usernameElement.setAttribute("href", customProfileUrl);
  }

  logInfo("Username anonymized");
}

main();
