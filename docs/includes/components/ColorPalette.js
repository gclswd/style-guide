// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2yasS":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0c134a454c3cd30f";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"6icC2":[function(require,module,exports) {
const { html  } = require("common-tags");
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

},{"common-tags":"dGSM8"}],"dGSM8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TemplateTag", ()=>(0, _templateTagDefault.default));
parcelHelpers.export(exports, "trimResultTransformer", ()=>(0, _trimResultTransformerDefault.default));
parcelHelpers.export(exports, "stripIndentTransformer", ()=>(0, _stripIndentTransformerDefault.default));
parcelHelpers.export(exports, "replaceResultTransformer", ()=>(0, _replaceResultTransformerDefault.default));
parcelHelpers.export(exports, "replaceSubstitutionTransformer", ()=>(0, _replaceSubstitutionTransformerDefault.default));
parcelHelpers.export(exports, "replaceStringTransformer", ()=>(0, _replaceStringTransformerDefault.default));
parcelHelpers.export(exports, "inlineArrayTransformer", ()=>(0, _inlineArrayTransformerDefault.default));
parcelHelpers.export(exports, "splitStringTransformer", ()=>(0, _splitStringTransformerDefault.default));
parcelHelpers.export(exports, "removeNonPrintingValuesTransformer", ()=>(0, _removeNonPrintingValuesTransformerDefault.default));
parcelHelpers.export(exports, "commaLists", ()=>(0, _commaListsDefault.default));
parcelHelpers.export(exports, "commaListsAnd", ()=>(0, _commaListsAndDefault.default));
parcelHelpers.export(exports, "commaListsOr", ()=>(0, _commaListsOrDefault.default));
parcelHelpers.export(exports, "html", ()=>(0, _htmlDefault.default));
parcelHelpers.export(exports, "codeBlock", ()=>(0, _codeBlockDefault.default));
parcelHelpers.export(exports, "source", ()=>(0, _sourceDefault.default));
parcelHelpers.export(exports, "safeHtml", ()=>(0, _safeHtmlDefault.default));
parcelHelpers.export(exports, "oneLine", ()=>(0, _oneLineDefault.default));
parcelHelpers.export(exports, "oneLineTrim", ()=>(0, _oneLineTrimDefault.default));
parcelHelpers.export(exports, "oneLineCommaLists", ()=>(0, _oneLineCommaListsDefault.default));
parcelHelpers.export(exports, "oneLineCommaListsOr", ()=>(0, _oneLineCommaListsOrDefault.default));
parcelHelpers.export(exports, "oneLineCommaListsAnd", ()=>(0, _oneLineCommaListsAndDefault.default));
parcelHelpers.export(exports, "inlineLists", ()=>(0, _inlineListsDefault.default));
parcelHelpers.export(exports, "oneLineInlineLists", ()=>(0, _oneLineInlineListsDefault.default));
parcelHelpers.export(exports, "stripIndent", ()=>(0, _stripIndentDefault.default));
parcelHelpers.export(exports, "stripIndents", ()=>(0, _stripIndentsDefault.default));
// core
var _templateTag = require("./TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
// transformers
var _trimResultTransformer = require("./trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _stripIndentTransformer = require("./stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _replaceResultTransformer = require("./replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var _replaceSubstitutionTransformer = require("./replaceSubstitutionTransformer");
var _replaceSubstitutionTransformerDefault = parcelHelpers.interopDefault(_replaceSubstitutionTransformer);
var _replaceStringTransformer = require("./replaceStringTransformer");
var _replaceStringTransformerDefault = parcelHelpers.interopDefault(_replaceStringTransformer);
var _inlineArrayTransformer = require("./inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _splitStringTransformer = require("./splitStringTransformer");
var _splitStringTransformerDefault = parcelHelpers.interopDefault(_splitStringTransformer);
var _removeNonPrintingValuesTransformer = require("./removeNonPrintingValuesTransformer");
var _removeNonPrintingValuesTransformerDefault = parcelHelpers.interopDefault(_removeNonPrintingValuesTransformer);
// tags
var _commaLists = require("./commaLists");
var _commaListsDefault = parcelHelpers.interopDefault(_commaLists);
var _commaListsAnd = require("./commaListsAnd");
var _commaListsAndDefault = parcelHelpers.interopDefault(_commaListsAnd);
var _commaListsOr = require("./commaListsOr");
var _commaListsOrDefault = parcelHelpers.interopDefault(_commaListsOr);
var _html = require("./html");
var _htmlDefault = parcelHelpers.interopDefault(_html);
var _codeBlock = require("./codeBlock");
var _codeBlockDefault = parcelHelpers.interopDefault(_codeBlock);
var _source = require("./source");
var _sourceDefault = parcelHelpers.interopDefault(_source);
var _safeHtml = require("./safeHtml");
var _safeHtmlDefault = parcelHelpers.interopDefault(_safeHtml);
var _oneLine = require("./oneLine");
var _oneLineDefault = parcelHelpers.interopDefault(_oneLine);
var _oneLineTrim = require("./oneLineTrim");
var _oneLineTrimDefault = parcelHelpers.interopDefault(_oneLineTrim);
var _oneLineCommaLists = require("./oneLineCommaLists");
var _oneLineCommaListsDefault = parcelHelpers.interopDefault(_oneLineCommaLists);
var _oneLineCommaListsOr = require("./oneLineCommaListsOr");
var _oneLineCommaListsOrDefault = parcelHelpers.interopDefault(_oneLineCommaListsOr);
var _oneLineCommaListsAnd = require("./oneLineCommaListsAnd");
var _oneLineCommaListsAndDefault = parcelHelpers.interopDefault(_oneLineCommaListsAnd);
var _inlineLists = require("./inlineLists");
var _inlineListsDefault = parcelHelpers.interopDefault(_inlineLists);
var _oneLineInlineLists = require("./oneLineInlineLists");
var _oneLineInlineListsDefault = parcelHelpers.interopDefault(_oneLineInlineLists);
var _stripIndent = require("./stripIndent");
var _stripIndentDefault = parcelHelpers.interopDefault(_stripIndent);
var _stripIndents = require("./stripIndents");
var _stripIndentsDefault = parcelHelpers.interopDefault(_stripIndents);

},{"./TemplateTag":"hQZgi","./trimResultTransformer":"4UEN9","./stripIndentTransformer":"26Yjm","./replaceResultTransformer":"7uyZk","./replaceSubstitutionTransformer":"cesLA","./replaceStringTransformer":"4y6bo","./inlineArrayTransformer":"3z45r","./splitStringTransformer":"hQURf","./removeNonPrintingValuesTransformer":"6dq3J","./commaLists":"bpprs","./commaListsAnd":"5UlQ2","./commaListsOr":"4K7qA","./html":"1Wi6a","./codeBlock":"eJYuW","./source":"i8pgi","./safeHtml":"f0WXK","./oneLine":"gryL2","./oneLineTrim":"1c57c","./oneLineCommaLists":"gCVFR","./oneLineCommaListsOr":"i0oeL","./oneLineCommaListsAnd":"fOlYC","./inlineLists":"gVPzK","./oneLineInlineLists":"d2EMo","./stripIndent":"fm8yU","./stripIndents":"iyJ3d","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQZgi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _templateTagDefault.default));
var _templateTag = require("./TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);

},{"./TemplateTag":"aIH6H","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aIH6H":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ("value" in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
var _templateObject = _taggedTemplateLiteral([
    "",
    ""
], [
    "",
    ""
]);
function _taggedTemplateLiteral(strings, raw) {
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
/**
 * @class TemplateTag
 * @classdesc Consumes a pipeline of composable transformer plugins and produces a template tag.
 */ var TemplateTag = function() {
    /**
   * constructs a template tag
   * @constructs TemplateTag
   * @param  {...Object} [...transformers] - an array or arguments list of transformers
   * @return {Function}                    - a template tag
   */ function TemplateTag() {
        var _this = this;
        for(var _len = arguments.length, transformers = Array(_len), _key = 0; _key < _len; _key++)transformers[_key] = arguments[_key];
        _classCallCheck(this, TemplateTag);
        this.tag = function(strings) {
            for(var _len2 = arguments.length, expressions = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)expressions[_key2 - 1] = arguments[_key2];
            if (typeof strings === "function") // if the first argument passed is a function, assume it is a template tag and return
            // an intermediary tag that processes the template using the aforementioned tag, passing the
            // result to our tag
            return _this.interimTag.bind(_this, strings);
            if (typeof strings === "string") // if the first argument passed is a string, just transform it
            return _this.transformEndResult(strings);
            // else, return a transformed end result of processing the template with our tag
            strings = strings.map(_this.transformString.bind(_this));
            return _this.transformEndResult(strings.reduce(_this.processSubstitutions.bind(_this, expressions)));
        };
        // if first argument is an array, extrude it as a list of transformers
        if (transformers.length > 0 && Array.isArray(transformers[0])) transformers = transformers[0];
        // if any transformers are functions, this means they are not initiated - automatically initiate them
        this.transformers = transformers.map(function(transformer) {
            return typeof transformer === "function" ? transformer() : transformer;
        });
        // return an ES2015 template tag
        return this.tag;
    }
    /**
   * Applies all transformers to a template literal tagged with this method.
   * If a function is passed as the first argument, assumes the function is a template tag
   * and applies it to the template, returning a template tag.
   * @param  {(Function|String|Array<String>)} strings        - Either a template tag or an array containing template strings separated by identifier
   * @param  {...*}                            ...expressions - Optional list of substitution values.
   * @return {(String|Function)}                              - Either an intermediary tag function or the results of processing the template.
   */ _createClass(TemplateTag, [
        {
            key: "interimTag",
            /**
     * An intermediary template tag that receives a template tag and passes the result of calling the template with the received
     * template tag to our own template tag.
     * @param  {Function}        nextTag          - the received template tag
     * @param  {Array<String>}   template         - the template to process
     * @param  {...*}            ...substitutions - `substitutions` is an array of all substitutions in the template
     * @return {*}                                - the final processed value
     */ value: function interimTag(previousTag, template) {
                for(var _len3 = arguments.length, substitutions = Array(_len3 > 2 ? _len3 - 2 : 0), _key3 = 2; _key3 < _len3; _key3++)substitutions[_key3 - 2] = arguments[_key3];
                return this.tag(_templateObject, previousTag.apply(undefined, [
                    template
                ].concat(substitutions)));
            }
        },
        {
            key: "processSubstitutions",
            value: function processSubstitutions(substitutions, resultSoFar, remainingPart) {
                var substitution = this.transformSubstitution(substitutions.shift(), resultSoFar);
                return "".concat(resultSoFar, substitution, remainingPart);
            }
        },
        {
            key: "transformString",
            value: function transformString(str) {
                var cb = function cb(res, transform) {
                    return transform.onString ? transform.onString(res) : res;
                };
                return this.transformers.reduce(cb, str);
            }
        },
        {
            key: "transformSubstitution",
            value: function transformSubstitution(substitution, resultSoFar) {
                var cb = function cb(res, transform) {
                    return transform.onSubstitution ? transform.onSubstitution(res, resultSoFar) : res;
                };
                return this.transformers.reduce(cb, substitution);
            }
        },
        {
            key: "transformEndResult",
            value: function transformEndResult(endResult) {
                var cb = function cb(res, transform) {
                    return transform.onEndResult ? transform.onEndResult(res) : res;
                };
                return this.transformers.reduce(cb, endResult);
            }
        }
    ]);
    return TemplateTag;
}();
exports.default = TemplateTag;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4UEN9":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _trimResultTransformerDefault.default));
var _trimResultTransformer = require("./trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);

},{"./trimResultTransformer":"lgwET","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgwET":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * TemplateTag transformer that trims whitespace on the end result of a tagged template
 * @param  {String} side = '' - The side of the string to trim. Can be 'start' or 'end' (alternatively 'left' or 'right')
 * @return {Object}           - a TemplateTag transformer
 */ var trimResultTransformer = function trimResultTransformer() {
    var side = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return {
        onEndResult: function onEndResult(endResult) {
            if (side === "") return endResult.trim();
            side = side.toLowerCase();
            if (side === "start" || side === "left") return endResult.replace(/^\s*/, "");
            if (side === "end" || side === "right") return endResult.replace(/\s*$/, "");
            throw new Error("Side not supported: " + side);
        }
    };
};
exports.default = trimResultTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"26Yjm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _stripIndentTransformerDefault.default));
var _stripIndentTransformer = require("./stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);

},{"./stripIndentTransformer":"gxQrP","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxQrP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
        for(var i = 0, arr2 = Array(arr.length); i < arr.length; i++)arr2[i] = arr[i];
        return arr2;
    } else return Array.from(arr);
}
/**
 * strips indentation from a template literal
 * @param  {String} type = 'initial' - whether to remove all indentation or just leading indentation. can be 'all' or 'initial'
 * @return {Object}                  - a TemplateTag transformer
 */ var stripIndentTransformer = function stripIndentTransformer() {
    var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "initial";
    return {
        onEndResult: function onEndResult(endResult) {
            if (type === "initial") {
                // remove the shortest leading indentation from each line
                var match = endResult.match(/^[^\S\n]*(?=\S)/gm);
                var indent = match && Math.min.apply(Math, _toConsumableArray(match.map(function(el) {
                    return el.length;
                })));
                if (indent) {
                    var regexp = new RegExp("^.{" + indent + "}", "gm");
                    return endResult.replace(regexp, "");
                }
                return endResult;
            }
            if (type === "all") // remove all indentation from each line
            return endResult.replace(/^[^\S\n]+/gm, "");
            throw new Error("Unknown type: " + type);
        }
    };
};
exports.default = stripIndentTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7uyZk":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _replaceResultTransformerDefault.default));
var _replaceResultTransformer = require("./replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);

},{"./replaceResultTransformer":"b7UnQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b7UnQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Replaces tabs, newlines and spaces with the chosen value when they occur in sequences
 * @param  {(String|RegExp)} replaceWhat - the value or pattern that should be replaced
 * @param  {*}               replaceWith - the replacement value
 * @return {Object}                      - a TemplateTag transformer
 */ var replaceResultTransformer = function replaceResultTransformer(replaceWhat, replaceWith) {
    return {
        onEndResult: function onEndResult(endResult) {
            if (replaceWhat == null || replaceWith == null) throw new Error("replaceResultTransformer requires at least 2 arguments.");
            return endResult.replace(replaceWhat, replaceWith);
        }
    };
};
exports.default = replaceResultTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cesLA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _replaceSubstitutionTransformerDefault.default));
var _replaceSubstitutionTransformer = require("./replaceSubstitutionTransformer");
var _replaceSubstitutionTransformerDefault = parcelHelpers.interopDefault(_replaceSubstitutionTransformer);

},{"./replaceSubstitutionTransformer":"kic0Y","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kic0Y":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var replaceSubstitutionTransformer = function replaceSubstitutionTransformer(replaceWhat, replaceWith) {
    return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
            if (replaceWhat == null || replaceWith == null) throw new Error("replaceSubstitutionTransformer requires at least 2 arguments.");
            // Do not touch if null or undefined
            if (substitution == null) return substitution;
            else return substitution.toString().replace(replaceWhat, replaceWith);
        }
    };
};
exports.default = replaceSubstitutionTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4y6bo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _replaceStringTransformerDefault.default));
var _replaceStringTransformer = require("./replaceStringTransformer");
var _replaceStringTransformerDefault = parcelHelpers.interopDefault(_replaceStringTransformer);

},{"./replaceStringTransformer":"4HIDs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HIDs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var replaceStringTransformer = function replaceStringTransformer(replaceWhat, replaceWith) {
    return {
        onString: function onString(str) {
            if (replaceWhat == null || replaceWith == null) throw new Error("replaceStringTransformer requires at least 2 arguments.");
            return str.replace(replaceWhat, replaceWith);
        }
    };
};
exports.default = replaceStringTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3z45r":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _inlineArrayTransformerDefault.default));
var _inlineArrayTransformer = require("./inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);

},{"./inlineArrayTransformer":"jUBzn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jUBzn":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var defaults = {
    separator: "",
    conjunction: "",
    serial: false
};
/**
 * Converts an array substitution to a string containing a list
 * @param  {String} [opts.separator = ''] - the character that separates each item
 * @param  {String} [opts.conjunction = '']  - replace the last separator with this
 * @param  {Boolean} [opts.serial = false] - include the separator before the conjunction? (Oxford comma use-case)
 *
 * @return {Object}                     - a TemplateTag transformer
 */ var inlineArrayTransformer = function inlineArrayTransformer() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaults;
    return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
            // only operate on arrays
            if (Array.isArray(substitution)) {
                var arrayLength = substitution.length;
                var separator = opts.separator;
                var conjunction = opts.conjunction;
                var serial = opts.serial;
                // join each item in the array into a string where each item is separated by separator
                // be sure to maintain indentation
                var indent = resultSoFar.match(/(\n?[^\S\n]+)$/);
                if (indent) substitution = substitution.join(separator + indent[1]);
                else substitution = substitution.join(separator + " ");
                // if conjunction is set, replace the last separator with conjunction, but only if there is more than one substitution
                if (conjunction && arrayLength > 1) {
                    var separatorIndex = substitution.lastIndexOf(separator);
                    substitution = substitution.slice(0, separatorIndex) + (serial ? separator : "") + " " + conjunction + substitution.slice(separatorIndex + 1);
                }
            }
            return substitution;
        }
    };
};
exports.default = inlineArrayTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hQURf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _splitStringTransformerDefault.default));
var _splitStringTransformer = require("./splitStringTransformer");
var _splitStringTransformerDefault = parcelHelpers.interopDefault(_splitStringTransformer);

},{"./splitStringTransformer":"4KWUE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KWUE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var splitStringTransformer = function splitStringTransformer(splitBy) {
    return {
        onSubstitution: function onSubstitution(substitution, resultSoFar) {
            if (splitBy != null && typeof splitBy === "string") {
                if (typeof substitution === "string" && substitution.includes(splitBy)) substitution = substitution.split(splitBy);
            } else throw new Error("You need to specify a string character to split by.");
            return substitution;
        }
    };
};
exports.default = splitStringTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6dq3J":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _removeNonPrintingValuesTransformerDefault.default));
var _removeNonPrintingValuesTransformer = require("./removeNonPrintingValuesTransformer");
var _removeNonPrintingValuesTransformerDefault = parcelHelpers.interopDefault(_removeNonPrintingValuesTransformer);

},{"./removeNonPrintingValuesTransformer":"lABq3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lABq3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var isValidValue = function isValidValue(x) {
    return x != null && !Number.isNaN(x) && typeof x !== "boolean";
};
var removeNonPrintingValuesTransformer = function removeNonPrintingValuesTransformer() {
    return {
        onSubstitution: function onSubstitution(substitution) {
            if (Array.isArray(substitution)) return substitution.filter(isValidValue);
            if (isValidValue(substitution)) return substitution;
            return "";
        }
    };
};
exports.default = removeNonPrintingValuesTransformer;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bpprs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _commaListsDefault.default));
var _commaLists = require("./commaLists");
var _commaListsDefault = parcelHelpers.interopDefault(_commaLists);

},{"./commaLists":"kuOgF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kuOgF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var commaLists = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ","
}), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = commaLists;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UlQ2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _commaListsAndDefault.default));
var _commaListsAnd = require("./commaListsAnd");
var _commaListsAndDefault = parcelHelpers.interopDefault(_commaListsAnd);

},{"./commaListsAnd":"jWFnm","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jWFnm":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var commaListsAnd = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ",",
    conjunction: "and"
}), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = commaListsAnd;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4K7qA":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _commaListsOrDefault.default));
var _commaListsOr = require("./commaListsOr");
var _commaListsOrDefault = parcelHelpers.interopDefault(_commaListsOr);

},{"./commaListsOr":"2Aoga","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2Aoga":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var commaListsOr = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ",",
    conjunction: "or"
}), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = commaListsOr;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Wi6a":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _htmlDefault.default));
var _html = require("./html");
var _htmlDefault = parcelHelpers.interopDefault(_html);

},{"./html":"9nQdf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9nQdf":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _splitStringTransformer = require("../splitStringTransformer");
var _splitStringTransformerDefault = parcelHelpers.interopDefault(_splitStringTransformer);
var _removeNonPrintingValuesTransformer = require("../removeNonPrintingValuesTransformer");
var _removeNonPrintingValuesTransformerDefault = parcelHelpers.interopDefault(_removeNonPrintingValuesTransformer);
var html = new (0, _templateTagDefault.default)((0, _splitStringTransformerDefault.default)("\n"), (0, _removeNonPrintingValuesTransformerDefault.default), (0, _inlineArrayTransformerDefault.default), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = html;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../splitStringTransformer":"hQURf","../removeNonPrintingValuesTransformer":"6dq3J","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eJYuW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _htmlDefault.default));
var _html = require("../html");
var _htmlDefault = parcelHelpers.interopDefault(_html);

},{"../html":"1Wi6a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i8pgi":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _htmlDefault.default));
var _html = require("../html");
var _htmlDefault = parcelHelpers.interopDefault(_html);

},{"../html":"1Wi6a","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f0WXK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _safeHtmlDefault.default));
var _safeHtml = require("./safeHtml");
var _safeHtmlDefault = parcelHelpers.interopDefault(_safeHtml);

},{"./safeHtml":"dA3zc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dA3zc":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _splitStringTransformer = require("../splitStringTransformer");
var _splitStringTransformerDefault = parcelHelpers.interopDefault(_splitStringTransformer);
var _replaceSubstitutionTransformer = require("../replaceSubstitutionTransformer");
var _replaceSubstitutionTransformerDefault = parcelHelpers.interopDefault(_replaceSubstitutionTransformer);
var safeHtml = new (0, _templateTagDefault.default)((0, _splitStringTransformerDefault.default)("\n"), (0, _inlineArrayTransformerDefault.default), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default), (0, _replaceSubstitutionTransformerDefault.default)(/&/g, "&amp;"), (0, _replaceSubstitutionTransformerDefault.default)(/</g, "&lt;"), (0, _replaceSubstitutionTransformerDefault.default)(/>/g, "&gt;"), (0, _replaceSubstitutionTransformerDefault.default)(/"/g, "&quot;"), (0, _replaceSubstitutionTransformerDefault.default)(/'/g, "&#x27;"), (0, _replaceSubstitutionTransformerDefault.default)(/`/g, "&#x60;"));
exports.default = safeHtml;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../splitStringTransformer":"hQURf","../replaceSubstitutionTransformer":"cesLA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gryL2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineDefault.default));
var _oneLine = require("./oneLine");
var _oneLineDefault = parcelHelpers.interopDefault(_oneLine);

},{"./oneLine":"kK7bw","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kK7bw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLine = new (0, _templateTagDefault.default)((0, _replaceResultTransformerDefault.default)(/(?:\n(?:\s*))+/g, " "), (0, _trimResultTransformerDefault.default));
exports.default = oneLine;

},{"../TemplateTag":"hQZgi","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1c57c":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineTrimDefault.default));
var _oneLineTrim = require("./oneLineTrim");
var _oneLineTrimDefault = parcelHelpers.interopDefault(_oneLineTrim);

},{"./oneLineTrim":"fol04","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fol04":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLineTrim = new (0, _templateTagDefault.default)((0, _replaceResultTransformerDefault.default)(/(?:\n\s*)/g, ""), (0, _trimResultTransformerDefault.default));
exports.default = oneLineTrim;

},{"../TemplateTag":"hQZgi","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCVFR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineCommaListsDefault.default));
var _oneLineCommaLists = require("./oneLineCommaLists");
var _oneLineCommaListsDefault = parcelHelpers.interopDefault(_oneLineCommaLists);

},{"./oneLineCommaLists":"iTWTs","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iTWTs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLineCommaLists = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ","
}), (0, _replaceResultTransformerDefault.default)(/(?:\s+)/g, " "), (0, _trimResultTransformerDefault.default));
exports.default = oneLineCommaLists;

},{"../TemplateTag":"hQZgi","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i0oeL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineCommaListsOrDefault.default));
var _oneLineCommaListsOr = require("./oneLineCommaListsOr");
var _oneLineCommaListsOrDefault = parcelHelpers.interopDefault(_oneLineCommaListsOr);

},{"./oneLineCommaListsOr":"egIcE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"egIcE":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLineCommaListsOr = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ",",
    conjunction: "or"
}), (0, _replaceResultTransformerDefault.default)(/(?:\s+)/g, " "), (0, _trimResultTransformerDefault.default));
exports.default = oneLineCommaListsOr;

},{"../TemplateTag":"hQZgi","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fOlYC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineCommaListsAndDefault.default));
var _oneLineCommaListsAnd = require("./oneLineCommaListsAnd");
var _oneLineCommaListsAndDefault = parcelHelpers.interopDefault(_oneLineCommaListsAnd);

},{"./oneLineCommaListsAnd":"fl3Yq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fl3Yq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLineCommaListsAnd = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default)({
    separator: ",",
    conjunction: "and"
}), (0, _replaceResultTransformerDefault.default)(/(?:\s+)/g, " "), (0, _trimResultTransformerDefault.default));
exports.default = oneLineCommaListsAnd;

},{"../TemplateTag":"hQZgi","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVPzK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _inlineListsDefault.default));
var _inlineLists = require("./inlineLists");
var _inlineListsDefault = parcelHelpers.interopDefault(_inlineLists);

},{"./inlineLists":"gxpbO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gxpbO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var inlineLists = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default), (0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = inlineLists;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d2EMo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _oneLineInlineListsDefault.default));
var _oneLineInlineLists = require("./oneLineInlineLists");
var _oneLineInlineListsDefault = parcelHelpers.interopDefault(_oneLineInlineLists);

},{"./oneLineInlineLists":"4uiKC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4uiKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _inlineArrayTransformer = require("../inlineArrayTransformer");
var _inlineArrayTransformerDefault = parcelHelpers.interopDefault(_inlineArrayTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var _replaceResultTransformer = require("../replaceResultTransformer");
var _replaceResultTransformerDefault = parcelHelpers.interopDefault(_replaceResultTransformer);
var oneLineInlineLists = new (0, _templateTagDefault.default)((0, _inlineArrayTransformerDefault.default), (0, _replaceResultTransformerDefault.default)(/(?:\s+)/g, " "), (0, _trimResultTransformerDefault.default));
exports.default = oneLineInlineLists;

},{"../TemplateTag":"hQZgi","../inlineArrayTransformer":"3z45r","../trimResultTransformer":"4UEN9","../replaceResultTransformer":"7uyZk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fm8yU":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _stripIndentDefault.default));
var _stripIndent = require("./stripIndent");
var _stripIndentDefault = parcelHelpers.interopDefault(_stripIndent);

},{"./stripIndent":"isbDx","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"isbDx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var stripIndent = new (0, _templateTagDefault.default)((0, _stripIndentTransformerDefault.default), (0, _trimResultTransformerDefault.default));
exports.default = stripIndent;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyJ3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>(0, _stripIndentsDefault.default));
var _stripIndents = require("./stripIndents");
var _stripIndentsDefault = parcelHelpers.interopDefault(_stripIndents);

},{"./stripIndents":"i6Y01","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i6Y01":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _templateTag = require("../TemplateTag");
var _templateTagDefault = parcelHelpers.interopDefault(_templateTag);
var _stripIndentTransformer = require("../stripIndentTransformer");
var _stripIndentTransformerDefault = parcelHelpers.interopDefault(_stripIndentTransformer);
var _trimResultTransformer = require("../trimResultTransformer");
var _trimResultTransformerDefault = parcelHelpers.interopDefault(_trimResultTransformer);
var stripIndents = new (0, _templateTagDefault.default)((0, _stripIndentTransformerDefault.default)("all"), (0, _trimResultTransformerDefault.default));
exports.default = stripIndents;

},{"../TemplateTag":"hQZgi","../stripIndentTransformer":"26Yjm","../trimResultTransformer":"4UEN9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["2yasS","6icC2"], "6icC2", "parcelRequire8370")

//# sourceMappingURL=ColorPalette.js.map
