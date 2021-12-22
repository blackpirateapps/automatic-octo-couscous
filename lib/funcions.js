const usedCommandRecently = new Set()

// Caso tenha sido usado muitas vezes
const isFiltered = (from) => !!usedCommandRecently.has(from)

// Anti Flood
const addFilter = (from) => {
	usedCommandRecently.add(from)
	setTimeout(() => usedCommandRecently.delete(from), Number(config.Anti_Flood * 1000)) // * 1000 - Transforma o valor do tempo de aposta em segundos
}
// Exporta os consts para a config.js
module.exports = { isFiltered, addFilter }