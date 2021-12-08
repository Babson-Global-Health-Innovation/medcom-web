# Codename MEDCOM: Technical Documentation

Medical Communication between deaf patients and their providers. Website version of [medcom-mobile](https://github.com/Babson-Global-Health-Innovation/medcom-mobile)

| Author                 | Project Documentation                                                                                          |
| ---------------------- | -------------------------------------------------------------------------------------------------------------- |
| Pujit Mehrotra @pujitm | [Google Doc](https://docs.google.com/document/d/16ROadBl7y1eWteVPUeHejW2OV5tgC0HuGxhGBRTrgR0/edit?usp=sharing) |

The Project Documentation Google Doc contains history and thought process that led to this project.

## Team

| Name | Email | Phone Number | Github Handle |
| ---- | ----- | ------------ | ------------- |

Put your team & Github handles/emails/numbers here

## Purpose & Need

Illiterate deaf patients in rural Rwanda need to convey and receive information
to make decisions about medical treatment and increase their standard of living.

## What the app does

Presents large images of medical symptoms and two buttons beneath it: a green checkmark for “yes, i have this symptom” and a red cross for “no, this doesn’t apply”.

A user must press one of these buttons to continue. When they do, another image will be shown, with the same buttons.

Once all of the images have been shown, a list of symptoms that the patient has will appear on the screen. This screen can be screenshot or copied to the clipboard.

Then, the user can return to the home screen and start the process all over again.

## Building and delivering application

1. Ideally, every push/merge to the `main` branch should trigger a deployment. So wait a few minutes.
2. And refresh [the website](https://babson-ughe-medcom.onrender.com). If the build was successful, you'll see the new version.

## Important files

Source code is located in `src` directory.

- `./src/pages/index.tsx` is the homepage
- `./src/config.ts` defines images of symptoms that will be shown to users. Make changes to image set and interface here.

See in-code comments for additional documentation.

## Setting Up the Project

Prerequisites: Node.js & Git (see sections below if you're confused). Note that all commands are for \*nix terminals/shells.

1. Join the [Babson Global Health Innovation GitHub org](https://github.com/Babson-Global-Health-Innovation) and get Commit privileges
2. Clone the project: `git clone https://github.com/Babson-Global-Health-Innovation/medcom-web.git`
3. Navigate inside the project directory. (e.g. `cd medcom-web`)
4. Run `yarn` to install project dependencies.
5. Run `yarn dev` and navigate to [localhost](http://localhost:3000) or the url displayed in your terminal.
6. Create a branch for your own work, commit/push to it, and open a pull request.
7. Review pull-requests and merge if everything looks good.

(Optional) If you're using VS Code as your editor, go to the extensions tab in the sidebar and install the recommended extensions.
This will make working with Tailwind a breeze.

## Learning Next.js

Next.js is a framework built on top of React.js, which is a web application framework.

A few resources to get you started if this is your first Flutter project:

- [Learn Next.js](https://nextjs.org/learn/basics/create-nextjs-app?utm_source=next-site&utm_medium=nav-cta&utm_campaign=next-website)
- [Learn React](https://reactjs.org/tutorial/tutorial.html)

For help getting started with Next.js, view the
[online documentation](https://nextjs.org/docs/getting-started), which offers tutorials,
samples, and a full API reference.

You may also find React's [online documentation](https://reactjs.org/docs/getting-started.html) helpful.

## Learning Git

Git is a source code versioning system.

A few resources to get you started if this is your first time using git:

- [Using Git for the first time](https://docs.github.com/en/get-started/quickstart/set-up-git)
- [Learning Git Basics](https://learngitbranching.js.org/)

For help getting started with Git and Github, follow
[Introduction to GitHub](https://lab.github.com/githubtraining/introduction-to-github), which will teach you how to

- Communicate in issues
- Manage notifications
- Create branches
- Make commits
- Introduce changes with pull requests

All of which are relevant to this project.
