const handler = async (msg, { conn }) => {
  const chatId = msg.key.remoteJid;

  const dados = [
    "https://cdn.russellxz.click/211d4944.webp",
    "https://cdn.russellxz.click/c90c9809.webp",
    "https://cdn.russellxz.click/1c8300d6.webp",
    "https://cdn.russellxz.click/3355226c.webp",
    "https://cdn.russellxz.click/76fc6155.webp"
    "https://cdn.russellxz.click/9e6dc2eb.webp"
  ];

  const dadoUrl = dados[Math.floor(Math.random() * dados.length)];

  await conn.sendMessage(chatId, {
    sticker: { url: dadoUrl }
  }, { quoted: msg });
};

handler.command = ['dado'];
module.exports = handler;