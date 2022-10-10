const {html} = require('common-tags');

function ColorPalette(color, sass) {

    return html`
    <div class="colorPalette colorPalette--padded d-flex flex-row justify-content-start align-items-center">
        <div class="colorPalette__color border" style="background-color: ${color}"></div>
        <div class="colorPalette__info d-flex flex-column">
            <div class="colorPalette__sass">${sass}</div>
            <div class="colorPalette__code">${color}</div>
        </div>
    </div>
    `;
}

module.exports = ColorPalette;