const {html} = require('common-tags');

function Demo(content, lang, title) {
    //codeDisplay = this.highlight(lang, content);

    console.log( this);

    return html`
    <div class="card">
        <div class="card-header">${title}</div>
        <div class="card-body">
            ${this.log()}

            <hr>

            ${content}
        </div>
    </div>
    `;
}

module.exports = Demo;