---
layout: post
author: Pavlenex
---

We contribute to open-source because it’s fun, unstructured, and requires no commitment. Unlike our 9-5 job, open-source thrives from chaos. Even though a roadmap in open-source may sound like wishful thinking, depending on the phase in which your project is, a roadmap can be a foundation for efficient software building.

This post tends to explain roadmaps practically by using only free tools. I know plenty of project managers may disagree, but everything you need to create a roadmap is available for free on GitHub. No fancy tools are needed. How we're going to develop a roadmap won't require mental stress or too much coordination. It'll be fun and help you learn more about the project, users, and yourself. Remember that this post is just a quick guide to provide a framework. I'll write a bit more in-depth on specific steps in the future.

You probably think creating a roadmap means 2-3 weeks of work so that you can plan your entire year. Don't think of a roadmap as a strict set of rules. Think of it as a tool that will help you determine the direction. It will provide better transparency to other contributors and the community.

In reality, roadmaps are built on the go. They're flexible and iterated constantly. A perfect roadmap is never really perfect!

TLDR: To create a roadmap on GitHub, I suggest that you:

1. Define goals
2. Break goals into tasks
3. Groups tasks in milestones
4. Put milestones on the project board (GitHub beta)

Let's go! 🚀

---

## Defining goals 🎯

Roadmaps contain a set of goals that we'd like to reach. That means we'll have to determine what we'd like to achieve. The easiest way to approach this is by asking questions and talking about it. Whether it's a group call with contributors or a group text chat, the most effective way to define goals is to ask questions.

- What do we want to achieve?
- How do we intend to achieve it?
- When would we like to reach it?
- What are obstacles to achieving those goals?
- What can we do to overcome the obstacles?
- What are some exciting things we'd like to work on?
- What are some of the most common things our users (community) ask from us?

Start asking these questions. Ask yourself. Ask your fellow maintainers or contributors. Reach out to them and try to learn how they see the project direction. You may get some fascinating replies. Use a Google Doc or any other text editor to take notes on answers. Another way to approach ideas collecting on goals is to create a [Figma board](https://www.figma.com/file/WFBkftUt6nj7ItIuj28RZq/BTCPay-Server-2021-Retrospective-%26-2022) where people can add their replies. I recommend Figma for projects that are less protocol and more user-driven.

As long as you ask the questions, note them and structure them, the tools you'll use are up to you.

Once that is done, you'll probably end up with a giant list of unstructured notes and comments. Try to structure them. Here's an example of a Google Doc I created for the Stratum project.

![Defining project goals](/images/defining-goals-doc.png)

---

## Breaking goals into tasks 📝

Once you define the primary goals, try to think of smaller tasks needed to achieve the goals. Consult your community and contributors. These can be discussed in follow-up calls or async. To better track tasks, it’s good practice to [create a GitHub issue](https://docs.github.com/en/issues) for every task.

Think of a GitHub issue as a ticket that allows you to keep track of a task. Sometimes an issue can be a bug report you need to address or a feature request you’d like to work on. A good Github issue provides a well-defined task, outlines the potential solution, and contains a proper label. In case of a bug report, it should contain detailed information about the environment, steps to replicate, and log output. You can even have a group of small tasks [within a single issue](https://docs.github.com/en/issues/tracking-your-work-with-issues/about-task-lists).

![Defining project goals](/images/github-issue.png)

Think of GitHub issues as your project to-do. I'll provide some tips on managing issues in a follow-up post. A well-defined and adequately labeled task as a GitHub issue is more likely to attract new contributors to your project and provide clarity to existing contributors. Use the `good first issue` label for simple tasks any newcomer can tackle.

---

## Grouping tasks into milestones 🏆

A [milestone](https://docs.github.com/en/issues/using-labels-and-milestones-to-track-work/about-milestones) is a group of tasks that together marks a significant achievement within a time frame. It can be a new feature or a release version. I think of `milestones` as `sprints.` Those are 2-4 weeks where we group a series of tasks that would allow us to reach an important goal. For most projects I worked on, a new software `version` is great for milestones. A milestone can also be an existing feature, but if you're working on multiple features simultaneously, it's better to introduce a milestone that will keep those grouped.

Now that you have a list of tasks in the form of GitHub issues, you should group issues into the `milestones.` You can provide a time frame for the milestone. Having a target date helps with productivity.

![Defining project goals](/images/github-milestones.png)

In the image above you can see how GitHub issues look within a milestone.

---

## Creating a GitHub project board 🥳

We started with goals, turned them into smaller tasks, and then grouped tasks into a milestone(s) with a target date. Now, it's time to outline all the tasks, their status, the assignees, etc. This is where the latest GitHub feature, GitHub Project Beta, shines. It allows us to easily add tasks to a project and customize the board according to our needs. To get started, check out the [quickguide](https://docs.github.com/en/issues/trying-out-the-new-projects-experience/quickstart). After you've created a project board, I recommend you group the `view by milestone.` This will visually make tasks more transparent.

![Project board](/images/github-beta-project.png)

Managing and customizing a GitHub project board is a broad topic, that I intend to cover in a follow up post. For now, just a take a look at how we structured roadmaps over at [BTCPay Server](https://github.com/orgs/btcpayserver/projects/16) or [Bitcoin Design](https://github.com/orgs/BitcoinDesign/projects/2).

---

## Summary 🧙

Remember that no matter how corporate a "roadmap" sounds, it doesn't have to be a year-long plan for your project. Start small. Define a goal or two, determine the tasks to achieve them, group them into a milestone and let you and your team focus on reaching that milestone. Over time, you'll perfect the skill and start planning further ahead in the future. For now, think of a roadmap as a tool that will help you as a maintainer, the contributors, and the community communicate more efficiently and focus on the goals that will make everyone happy. Make sure to link to the roadmap from the project's readme or website and let the community know about it. Having a single place of truth will help everyone better understand where you as a project are heading.

Once you reach a milestone, don't forget to celebrate it. Having a celebratory moment means a lot for the chemistry within a community. And once that is done, repeat the process. Roadmaps aren't one-way maps. It's constantly reflected, improved, and iterated.

If you found this post useful or have suggestions on how to improve it, please [let me know on Twitter](https://twitter.com/pavlenex). This is just my workflow, and I hope it will help you create the flow that works best for you and your team.
