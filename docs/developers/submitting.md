---
order: 5
description: Quick submission guide.
---

# Submitting Addons

Submissions are handled through the [BetterDiscord website](https://betterdiscord.app).

## Steps

1. Go to the BetterDiscord website.
2. Select `Connect` at the top-right of the page.

![Connect Button](./img/connect.png)

3. Connect your Discord account.
4. Go to either the `Plugins` or `Themes` page and select the button `+ Submit a XXXXX`.

![Submit an Addon](./img/submit.png)

1. Wait for your account to be authorized.
   - If you have no plugins or themes detected on GitHub you may be automatically declined.
   - The verification process can take up to 2 days.
1. When approved, you can finish the submission forms for either a plugin or theme.
1. Wait for the submission to be approved.


## Approval Process

Due to our small team size, we have no guarantees for how long a review can take. Typically, they take no more than a month, but they can be as quick as a day.

### Review 

1. After submitting an addon, you'll get a notification that the submission was properly submitted. 
2. The review team gets a notification that there is a new submission.
3. Your code is reviewed by the review team.
4. A decision is made on your submission.

### Denial

1. You'll get a notification that your submission was denied along with a reason message.
2. Check your GitHub for any issues opened by the review team.
2. Make any necessary changes and resubmit.

### Approval

1. You'll get a notification that your submission was accepted.
2. Your submission will be immediately available on the website.
2. If you didn't already have a developer role, you'll be given one in the Discord server.


## Updating

::: danger

Due to GitHub's limitations, the site is very sensitive to your changes. If you force-push and break history, the site will not be able to keep track of the plugin. The same goes if you change your GitHub username.

:::

### Your Addon

Updating your addon on the website is pretty simple, just update your addon on GitHub. The webhook will automatically send the update to the website where it will once again go through the approval process. This is done to prevent malicious updates from making it through, whether by a compromised developer account, or by a disgruntled developer.

### Your README

Your README for your plugin updates separately from your plugin and can be updated at any time by updating it in your GitHub repository. Unlike addons, this has no review system so you don't have to wait for someone to approve of it to see it update on the website.