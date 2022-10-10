const { ActivityType} = require('discord.js')
module.exports = {
    name: "ready",
    once: true,
    async execute(client) {
        client.user.setPresence({
            activities: [{ name: `subscribe to 0hVqnom`, type: ActivityType.Playing }],
            status: 'idle'
          });
    }
}