const handler = async (msg, { conn }) => {
  const chatId = msg.key.remoteJid;

  // Reacciona al mensaje con el emoji de dado
  await conn.sendMessage(chatId, { react: { text: "🎲", key: msg.key } });

  // Elegir número aleatorio entre 1 y 6
  const numero = Math.floor(Math.random() * 6) + 1;

  // Opcional: Emojis según el número
  const emojis = {
    1: "①",
    2: "②",
    3: "③",
    4: "④",
    5: "⑤",
    6: "⑥"
  };

  const texto = `🎲 *Lanzando el dado...*\n\n🌀 *Resultado:* ${emojis[numero]} *( ${numero} )*`;

  await conn.sendMessage(chatId, {
    text: texto
  }, { quoted: msg });
};

handler.command = ['dado'];
handler.help = ['dado'];
handler.tags = ['diversión', 'juegos'];

module.exports = handler;