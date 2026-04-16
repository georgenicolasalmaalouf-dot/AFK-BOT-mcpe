// Bot Configuration
module.exports = {
  // Server settings
  server: {
    host: 'localhost',
    port: 25565
  },

  // Bot credentials
  bot: {
    username: 'AFKBot',
    password: null, // Leave null for offline mode
    auth: 'offline'
  },

  // AFK Settings
  afk: {
    enabled: true,
    moveInterval: 3000, // milliseconds between movements
    moveDuration: 1000   // how long each movement lasts
  },

  // Logging
  logging: {
    enabled: true,
    level: 'info' // 'debug', 'info', 'warn', 'error'
  }
};