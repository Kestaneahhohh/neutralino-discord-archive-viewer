# neutralino-discord-archive-viewer
A work-in-progress [neutralinojs](https://github.com/neutralinojs/neutralinojs) application for viewing Discord chat logs exported through [DiscordChatExporter.](https://github.com/Tyrrrz/DiscordChatExporter)
This project takes heavy inspiration from [DiscordChatExporter's](https://github.com/Tyrrrz/DiscordChatExporter) "HTML Dark" export feature in terms of generated content structure and appearance.

# Features
- parse exported json files and generate content dynamically
- ability to load and display image/video/audio/miscellaneous file attachments in the chatlog
- infinite scroll to render content progressively

# ToDo (by order of importance)
- optimize infinite scroll further by destroying elements a certain distance from the index of the last generated message (regenerate when needed)
- convert message timestamps to useful strings
- file handling API
- advanced message search (string; has: link/embed/file; before/after/during date; from: user;)
