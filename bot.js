const mineflayer = require('mineflayer');

// Configuration
const config = {
  host: 'localhost',
  port: 25565,
  username: 'AFKBot',
  version: '1.20.1'
};

// Create bot
const bot = mineflayer.createBot(config);

bot.on('login', () => {
  console.log('Bot logged in!');
  startAFKMode();
});

bot.on('error', (err) => {
  console.error('Error:', err);
});

bot.on('end', () => {
  console.log('Bot disconnected');
});

function startAFKMode() {
  console.log('Starting AFK mode...');
  
  // Simple movement pattern to prevent AFK timeout
  setInterval(() => {
    bot.setControlState('forward', true);
    setTimeout(() => {
      bot.setControlState('forward', false);
    }, 1000);
  }, 3000);
}

console.log('AFK Bot starting...');