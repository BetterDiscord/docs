# Contributing to BetterDiscord

Thanks for taking the time to contribute!

The following is a set of guidelines for contributing to BetterDiscord. These are mostly guidelines, not rules. Use your best judgment, and feel free to propose changes to this document in a pull request. These guidelines have been adapted from [Atom](https://github.com/atom/atom/blob/master/CONTRIBUTING.md).


## Code of Conduct

See our [Code of Conduct](https://github.com/BetterDiscord/BetterDiscord/blob/main/CODE_OF_CONDUCT.md) page for details.

## What should I know before I get started?

Review the project architecture found on the [README](./README.md) and familiarize yourself with the layout. Then check the [`package.json`](./package.json) to get familiar with the tech stack in use.

## How Can I Contribute?

### Reporting Bugs

This section guides you through submitting a bug report for BetterDiscord. Following these guidelines helps maintainers and the community understand your report, reproduce the behavior, and find related reports.

Before creating bug reports, please check [this list](#before-submitting-a-bug-report) as you might find out that you don't need to create one.

#### Before Submitting A Bug Report

* **Perform a [search](https://github.com/BetterDiscord/docs/issues)** to see if the problem has already been reported. If it has **and the issue is still open**, add a :+1: to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Bug Report?

Bugs are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined this is a new bug using the steps from above, create an issue and provide the following information.

* **Use a clear and descriptive title** for the issue to identify the problem.
* **Describe the exact steps which reproduce the problem** in as many details as possible. For example, start by explaining how you started Discord, e.g. which addons exactly you used, and what actions were taken. When listing steps, **don't just say what you did, but explain how you did it**. For example, if you opened a menu, explain if you used the mouse, or a keyboard shortcut or something else entirely.
* **Provide specific examples to demonstrate the steps**. Include links to files or GitHub projects, or copy/pasteable snippets, which you use in those examples. If you're providing snippets in the issue, use [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the behavior you observed after following the steps** and point out what exactly is the problem with that behavior.
* **Explain which behavior you expected to see instead and why.**
* **Include screenshots and animated GIFs** which show you following the described steps and clearly demonstrate the problem.


### Suggesting Enhancements

This section guides you through submitting an enhancement suggestion for BetterDiscord, including completely new features and minor improvements to existing functionality. Following these guidelines helps maintainers and the community understand your suggestion and find related suggestions.

Before creating enhancement suggestions, please check [this list](#before-submitting-an-enhancement-suggestion) as you might find out that you don't need to create one. When you are creating an enhancement suggestion, please [include as many details as possible](#how-do-i-submit-a-good-enhancement-suggestion). Fill in the details including the steps that you imagine you would take if the feature you're requesting existed.

#### Before Submitting An Enhancement Suggestion

* **Check if there's already a plugin which provides that enhancement.**
* **Perform a [cursory search](https://guides.github.com/features/issues/)** to see if the enhancement has already been suggested. If it has, add a :+1: to the existing issue instead of opening a new one.

#### How Do I Submit A (Good) Enhancement Suggestion?

Enhancement suggestions are tracked as [GitHub issues](https://guides.github.com/features/issues/). After you've determined this is a new suggestion using the steps from above, create an issue and provide the following information:

* **Use a clear and descriptive title** for the issue to identify the suggestion.
* **Provide a step-by-step description of the suggested enhancement** in as many details as possible.
* **Provide specific examples to demonstrate the steps**. Include copy/pasteable snippets which you use in those examples, as [Markdown code blocks](https://help.github.com/articles/markdown-basics/#multiple-lines).
* **Describe the current behavior** and **explain which behavior you expected to see instead** and why.
* **Include screenshots and animated GIFs** which help you demonstrate the steps or point out the part of BetterDiscord which the suggestion is related to.
* **Explain why this enhancement would be useful** to most BetterDiscord users and isn't something that can or should be implemented as a plugin.

### Your First Code Contribution

> [!IMPORTANT]
> If you've found typos, it's preferred to just open an issue rather than a single character pull request!

Unsure where to begin contributing? You can start by looking through `help-wanted` issues or any issues labelled `can't reproduce`.

### Pull Requests

Please follow these steps to have your contribution considered by the maintainers:

1. Use a pull request template, if one exists.
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

### Translations

Currently, the documentation is only available in English.

## Styleguides

### Git Commit Messages

* Use the present tense ("Add feature" not "Added feature")
* Use the imperative mood ("Move cursor to..." not "Moves cursor to...")
* Limit the first line to 72 characters or less
* Reference issues and pull requests liberally after the first line
* When only changing documentation, include `[ci skip]` in the commit title

### TypeScript Styleguide

All TypeScript must adhere to the [ESLint rules](https://github.com/BetterDiscord/docs/blob/main/eslint.config.js) of the repo.

Some other style related points not covered by ESLint:

* Use verbose variable names
* Prefer to use react patches over DOM manipulation when possible
* Prefer to use separate components from Discord when possible
* Inline `export`s with expressions whenever possible
  ```js
  // Use this:
  export default class ClassName {
  
  }

  // Instead of:
  class ClassName {

  }
  export default ClassName
  ```
* Place class properties in the following order:
    * Class methods and properties (methods starting with `static`)
    * Instance methods and properties
* Place requires in the following order:
    * Built in Node Modules (such as `path`)
    * Repo level global imports (such as `modules`, `builtins`)
    * Local Modules (using relative paths)
* Prefer to import whole modules instead of singular functions
    * Keep modules namespaced and organized
    * This includes Node Modules (such as `fs`)
```js
const fs = require("fs"); // Use this
const {readFile, writeFile} = require("fs"); // Avoid this

import Utilities from "./utilities"; // Use this
import {deepclone, isEmpty} from "./utilties"; // Avoid this
```
