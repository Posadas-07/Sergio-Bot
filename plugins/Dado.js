const handler = async (msg, { conn }) => {
  const chatId = msg.key.remoteJid;

  // Reacción inicial
  await conn.sendMessage(chatId, { react: { text: "🎲", key: msg.key } });

  // Enviar dado animado (dice)
  await conn.sendMessage(chatId, {
    dice: { type: 'dice' }
  }, { quoted: msg });
};

handler.command = ['dado'];
handler.help = ['dado'];
handler.tags = ['juegos', 'diversión'];

module.exports = handler;