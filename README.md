# Grow and Get Better

At Liferay, one of our core principles is "Grow and Get Better" &mdash; but as we've been building out our Design Team, we realized that we didn't know exactly how to do that. Of course we all have ideas about what personal and professional growth looks like, but that was part of the problem &mdash; they were all our own ideas, in our own heads &mdash; what we needed to do was to come together, combine our ideas and experiences, and share it so we could actually have a clear idea of how you grow and get better as a designer here at Liferay.

To read more about this process, check out our [growth framework documentation](TODO:write-growth-blogpost).

Our growth tool is hosted [publicly](https://grow.liferay.design).

## Thanks

- Thanks to [Medium](https://github.com/Medium/snowflake) for sharing their original Snowflake model and repo, it really helped us out!
- Huge thanks to @protoevangelion for all his work on generating the tracks from Google Docs

## Updating Content

Note that this app is pulling content from Google Docs that are private to the Liferay Design Team. If you're part of the team and don't have access, please reach out to your manager or regional lead.

## Installation

Get yarn if you don’t have it already:

`npm install -g yarn`

Install dependencies:

`yarn`

### Running the dev server

`yarn dev`

### Building

`yarn export`

This will put a static version of the site in `out/`.

_Note that this site is hosted on $hostname, you will need to be a member of the $hostname team to deploy it._

## How It Works

`generateTracks.js` pulls tracks from a variety of Google Docs.

1. [Transversal Design](#TODO:add-transversal-link) — these are skills that are at the department level, skills that any designer has.
1. [Communication Design](#TODO:add-comm-link) — skills that Communication Designers specialize in
1. [Product Design](#TODO:add-prod-link) — skills that Product Designers specialize in

The tool always shows #1 — but toggles between #2 and #3.
