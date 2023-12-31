import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        {
            name: 'css-inject-dev',
            enforce: 'post',
            apply: 'serve',
            transform: (code, id) => {
                if (id.indexOf('.css') === -1) return code
                console.log('\n\ntransform', id.substring(id.lastIndexOf('/')), code)
                return code + `
    ${injectStyle.toString()}
    const shadowDom__vite__css = ''+__vite__css
    setTimeout(function() {
        injectStyle(__vite__css, '${id}')
    })
    
                `
            },
        }
    ],
})

function injectStyle(styleString: string, id: string) {
    try {
        if (typeof document != 'undefined') {
            const shadowRoot = document.getElementById('shadow-root').shadowRoot

            const existingStyleEl = shadowRoot.getElementById(`data-style-${id}`)
            if (existingStyleEl) {
                // replace this style
                existingStyleEl.replaceChildren(document.createTextNode(styleString))
            } else {
                const elementStyle = document.createElement('style');
                elementStyle.setAttribute('id', `data-style-${id}`)
                elementStyle.appendChild(document.createTextNode(styleString));
                shadowRoot.appendChild(elementStyle);
            }

        } else {
            console.log('document not found')
        }
    } catch (e) {
        console.error('vite-plugin-css-injected-by-js', e);
    }

}
