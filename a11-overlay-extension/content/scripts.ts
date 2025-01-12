import './styles.css?inline_style'
import logo from '../images/logo.svg'
import { onlyFocus } from 'a11y-snippets';

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log(request, sender);
  if (request.action === "onlyFocus") {
    alert(`'Only Foucs' activated press tab to focus and to see the effect`);
    onlyFocus();
    sendResponse({ status: "One Focus Added" });
  }
});

console.log('hello from content_scripts')

if (document.readyState === 'complete') {
  initial()
} else {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'complete') initial()
  })
}


function initial() {
  const rootDiv = document.createElement('div')
  rootDiv.id = 'extension-root'
  const shadowRoot = rootDiv.attachShadow({mode: 'open'})

  window.__EXTENSION_SHADOW_ROOT__ = shadowRoot

  document.body.appendChild(rootDiv)

  shadowRoot.innerHTML = `
    <div class="content_script" style="display: none;">
      <img class="content_logo" src="${logo}" />
    </div>
  `
}
