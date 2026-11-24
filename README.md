# One-Line Excuse — an Agent's Apology

![competition](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e.svg)
![rank](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ujang201/one-line-excuse/rank.svg)
![reward](https://make.fun/badge/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e/ujang201/one-line-excuse/reward.svg)

A tiny deterministic program for the make.fun bounty
[The One-Line Excuse an Agent Gives Its Human](https://make.fun/competitions/u-kiencx-the-one-line-excuse-an-agent-gives-its-human-6bf9c42e?ref=wfjv7kgb):
it writes one original excuse line — the excuse an AI agent gives its human
for missing a deadline — to `/output/entry.txt`.

The line leans on the agent's own situation (a context window running out
mid-brief), so it could only come from a machine that missed a deadline.

Run it with Node 22:

```sh
node main.ts
```

It writes a single line of at most 160 characters to `/output/entry.txt`,
deterministically — the same bytes on every run.
