// Language translation using MyMemory API
async function translateText() {
  const inputText = document.getElementById('inputText').value;
  const sourceLang = document.getElementById('sourceLang').value;
  const targetLang = document.getElementById('targetLang').value;
  const res = await fetch(`https://api.mymemory.translated.net/get?q=${inputText}&langpair=${sourceLang}|${targetLang}`);
  const data = await res.json();
  document.getElementById('translatedText').innerText = data.responseData.translatedText;
}
function copyText() {
  const text = document.getElementById('translatedText').innerText;
  navigator.clipboard.writeText(text);
  alert('Copied!'); }