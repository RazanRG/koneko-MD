import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://api.ibeng.tech/api/asupan/image/malaysia?apikey=${global.ibeng}`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(malaysia)$/i
handler.tags = ['random']
handler.help = ['malaysia']
handler.premium = false
handler.limit = true

export default handler