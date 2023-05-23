---
title: 'Sermon Document Export'
date: '2023-03-14'
---

![A screen capture showing someone exporting a sermon document to Proclaim presentation software](/images/export-to-proclaim.gif)

## What I did
Added a feature that allows users to export documents from our word processing tool to our presentation tool.

## Context
This feature previously existed for our desktop apps, which are written in C#, but I added it to our web app, which is primarily TypeScript and React. I accomplished this by making some API calls through our backend-for-frontend as well as adding some additional React UI.

While exporting it was possible with the tools that I had, I wanted to also provide a button that allows the user to open the presentation software to the presentation with just one click. On Desktop, this is possible, but on the web, there's (rightfully) no great way to detect what software someone has on their computer.

My solution was to add URIs to our presentation software, with a specific route to open presentations given an ID. That product is owned by another team, so I submitted a Jira case and communicated with the team's technical lead and product manager. Then I created a follow-up Jira case for myself. After that team added the URI, I added the "Open in Proclaim" button.

## Business impact
This change helped increase our daily exports by 18%. It also works toward the company's goal of gaining feature parity between our desktop and web apps.

I'd also argue that it increased the goodwill of two adjacent teams, since we were able to work together on a common goal that benefits both teams and our mutual users.
