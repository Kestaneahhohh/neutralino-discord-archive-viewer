# neutralino-discord-archive-viewer
A work-in-progress [neutralinojs](https://github.com/neutralinojs/neutralinojs) application for viewing Discord chat logs exported through [DiscordChatExporter.](https://github.com/Tyrrrz/DiscordChatExporter)
This project takes heavy inspiration from [DiscordChatExporter's](https://github.com/Tyrrrz/DiscordChatExporter) "HTML Dark" export feature in terms of generated content structure and appearance.

# Features
- parse exported json files and generate content dynamically
- ability to load and display image/video/audio/miscellaneous file attachments in the chatlog
- infinite scroll to render content progressively

# ToDo
- reverse infinite scroll where most recent message is displayed at bottom and content is generated facing up
- preamble and postamble elements
- file selection dialog
- ability to bookmark/favorite message logs
- landing page
- favorited/bookmarked page
- backwards infinite scroll that removes elements from either side based on scroll direction after specified element limit is reached
