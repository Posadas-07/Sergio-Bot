const handler = async (msg, { conn }) => {
  const chatId = msg.key.remoteJid;

  // Lista de stickers animados del dado (1-5 de momento)
  const dados = [
    "https://cdn.russellxz.click/211d4944.webp", // 1
    "https://cdn.russellxz.click/c90c9809.webp", // 2
    "https://cdn.russellxz.click/1c8300d6.webp", // 3
    "https://cdn.russellxz.click/3355226c.webp", // 4
    "https://cdn.russellxz.click/76fc6155.webp", // 5
    // "https://tu-enlace.com/dado6.webp", // ← Aquí pondrás el #6 cuando lo tengas
  ];

  // Elegir uno al azar
  const dadoUrl = dados[Math.floor(Math.random() * dados.length)];

  await conn.sendMessage(chatId, {
    sticker: { url: dadoUrl }
  }, { quoted: msg });
};

handler.command = ['dado'];
handler.tags = ['juegos'];
handler.help = ['dado'];
module.exports = handler;