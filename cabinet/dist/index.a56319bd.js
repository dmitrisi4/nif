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
})({"cu6sN":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "cf6eb48aa56319bd";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
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
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
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
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
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
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
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
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
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
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
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
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bAabt":[function(require,module,exports) {
var _api = require("./api");
var _select = require("./select");
var _utilits = require("./utilits");
if (document) document.addEventListener("DOMContentLoaded", function() {
    const loginSection = document.getElementById("login-section");
    const registerSection = document.getElementById("register-section");
    const pageSection = document.getElementById("page-section");
    const btnExitWrapper = document.getElementById("btn-exit-wrapper");
    const btnExit = document.getElementById("btn-exit");
    // reg form
    const registrationForm = document.getElementById("form-registration");
    const registrationEmail = document.getElementById("registration-email");
    const registrationPassword = document.getElementById("registration-password");
    const regEmailErrorMessage = document.getElementById("email-message-error");
    const btnReturnLogin = document.getElementById("btn-return-login");
    const btnRegShowPass = document.getElementById("btn-show-reg-pass");
    // login form
    const loginForm = document.getElementById("form-login");
    const loginEmail = document.getElementById("login-email");
    const loginPassword = document.getElementById("login-password");
    const btnReturnReg = document.getElementById("btn-return-reg");
    const btnLoginShowPass = document.getElementById("btn-show-login-pass");
    const btnOrdersPage = document.getElementById("btn-orders-page");
    const btnContactsPage = document.getElementById("btn-contacts-page");
    const orderPage = document.getElementById("order-page");
    const contactPage = document.getElementById("contact-page");
    // contact form
    const modalEditContact = document.getElementById("modal-edit-contacts");
    const btnCloseEditContact = document.getElementById("close-contact-edit");
    const contactChangeForm = document.getElementById("form-edit-contacts");
    const formContactName = document.getElementById("contact-form-name");
    const formContactEmail = document.getElementById("contact-form-email");
    const formContactComment = document.getElementById("contact-form-comment");
    // order form
    const modalEditOrder = document.getElementById("modal-edit-order");
    const btnCloseEditOrder = document.getElementById("close-order-edit");
    const orderChangeForm = document.getElementById("form-edit-order");
    const formFirstName = document.getElementById("reg-form-name");
    const formLastName = document.getElementById("reg-form-lastname");
    const formSocial = document.getElementById("reg-form-social");
    const formEmail = document.getElementById("reg-form-email");
    const formTel = document.getElementById("reg-form-tel");
    const selectCountries = document.getElementById("js-choice");
    const oneDayDate = document.getElementById("oneDayDate");
    const sixDayDate = document.getElementById("sixDayDate");
    const elevenDayDate = document.getElementById("elevenDayDate");
    let ordersData;
    let contactsData;
    let createdTableOrder = false;
    let createdTableContacts = false;
    const svgEdit = `<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M18.52 4l-1 1H2V4zM2 8v1h11.52l1-1zm4.52 8H2v1h3.655a1.477 1.477 0 0 1 .282-.417zM2 12v1h7.52l1-1zm20.95-6.066a.965.965 0 0 1 .03 1.385L9.825 20.471 5.73 22.227a.371.371 0 0 1-.488-.487l1.756-4.097L20.15 4.491a.965.965 0 0 1 1.385.03zM9.02 19.728l-1.28-1.28-.96 2.24zM20.093 8.79L18.68 7.376 8.382 17.674l1.413 1.414zm1.865-2.445l-.804-.838a.42.42 0 0 0-.6-.007l-1.167 1.17L20.8 8.083l1.152-1.151a.42.42 0 0 0 .006-.587z"></path><path fill="none" d="M0 0h24v24H0z"></path></g></svg>`;
    const svgHiddenPassword = `<svg width="25px" height="25px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye_close_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="System" transform="translate(-384.000000, 0.000000)" fill-rule="nonzero"> <g id="eye_close_line" transform="translate(384.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M3.04923,9.31077 C3.01728,9.21295 3,9.10849 3,9 C3,8.44772 3.44772,8 4,8 C4.4597,8 4.84695,8.31019 4.96387,8.73268 C7.04968,15.7186 16.9456,15.7202 19.0348,8.73735 C19.1502,8.31248 19.5386,8 20,8 C20.5523,8 21,8.44772 21,9 C21,9.10681 20.9833,9.2097 20.9522,9.30621 C20.5515,10.6482 19.9241,11.7876 19.1387,12.7244 L20.4143,14 C20.8048,14.3905 20.8048,15.0237 20.4143,15.4142 C20.0238,15.8047 19.3906,15.8047 19.0001,15.4142 L17.6887,14.1028 C16.9745,14.6426 16.1912,15.0655 15.3686,15.3716 L15.7264,16.7071 C15.8694,17.2406 15.5528,17.7889 15.0193,17.9318 C14.4858,18.0748 13.9375,17.7582 13.7946,17.2247 L13.4311,15.8682 C12.4836,16.0084 11.5164,16.0084 10.5689,15.8682 L10.2054,17.2247 C10.0625,17.7582 9.51416,18.0748 8.9807,17.9318 C8.44723,17.7889 8.13065,17.2406 8.27359,16.7071 L8.63144,15.3716 C7.80891,15.0655 7.0256,14.6426 6.31146,14.1029 L5.00017,15.4142 C4.60964,15.8047 3.97648,15.8047 3.58596,15.4142 C3.19543,15.0237 3.19543,14.3905 3.58596,14 L4.86147,12.7245 C4.07689,11.7887 3.45009,10.6508 3.04923,9.31077 Z" id="路径" fill="#09244B"> </path> </g> </g> </g> </g></svg>`;
    const svgShownPassword = `<svg width="25px" height="25px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>eye_2_line</title> <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Part" transform="translate(-144.000000, 0.000000)"> <g id="eye_2_line" transform="translate(144.000000, 0.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M4.00052,12.0012 L4.00032,12 L4.00052,11.9988 C4.00297,11.9832 4.01691,11.895 4.09488,11.7217 C4.18067,11.5309 4.31982,11.2905 4.51892,11.0138 C4.91667,10.4611 5.5116,9.82208 6.26352,9.21614 C7.77713,7.99636 9.81228,7 12,7 C14.1877,7 16.2229,7.99636 17.7365,9.21614 C18.4884,9.82208 19.0833,10.4611 19.4811,11.0138 C19.6802,11.2905 19.8193,11.5309 19.9051,11.7217 C19.9831,11.895 19.997,11.9832 19.9995,11.9988 L19.9997,12 L19.9995,12.0012 C19.997,12.0168 19.9831,12.105 19.9051,12.2783 C19.8193,12.4691 19.6802,12.7095 19.4811,12.9862 C19.0833,13.5389 18.4884,14.1779 17.7365,14.7839 C16.2229,16.0036 14.1877,17 12,17 C9.81228,17 7.77713,16.0036 6.26352,14.7839 C5.5116,14.1779 4.91667,13.5389 4.51892,12.9862 C4.31982,12.7095 4.18067,12.4691 4.09488,12.2783 C4.01691,12.105 4.00297,12.0168 4.00052,12.0012 Z M12,5 C9.21715,5 6.7523,6.25364 5.00856,7.65886 C4.13179,8.36542 3.40871,9.1326 2.89561,9.84555 C2.63928,10.2017 2.4248,10.559 2.27082,10.9014 C2.12348,11.229 2,11.6119 2,12 C2,12.3881 2.12348,12.771 2.27082,13.0986 C2.4248,13.441 2.63928,13.7983 2.89561,14.1544 C3.40871,14.8674 4.13179,15.6346 5.00856,16.3411 C6.7523,17.7464 9.21715,19 12,19 C14.7828,19 17.2477,17.7464 18.9914,16.3411 C19.8682,15.6346 20.5913,14.8674 21.1044,14.1544 C21.3607,13.7983 21.5752,13.441 21.7292,13.0986 C21.8765,12.771 22,12.3881 22,12 C22,11.6119 21.8765,11.229 21.7292,10.9014 C21.5752,10.559 21.3607,10.2017 21.1044,9.84555 C20.5913,9.1326 19.8682,8.36542 18.9914,7.65886 C17.2477,6.25364 14.7828,5 12,5 Z M11,12 C11,11.4477 11.4477,11 12,11 C12.5523,11 13,11.4477 13,12 C13,12.5523 12.5523,13 12,13 C11.4477,13 11,12.5523 11,12 Z M12,9 C10.3431,9 9,10.3431 9,12 C9,13.6569 10.3431,15 12,15 C13.6569,15 15,13.6569 15,12 C15,10.3431 13.6569,9 12,9 Z" id="形状" fill="#09244B"> </path> </g> </g> </g> </g></svg>`;
    // Init
    Authorization();
    // login listener
    loginForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        login((0, _api.LOGIN_URL), {
            email: loginEmail.value,
            password: loginPassword.value
        });
    });
    // exit
    btnExit.addEventListener("click", ()=>{
        eraseCookie("tokenAuth");
        window.location.pathname = "/";
    });
    btnContactsPage.addEventListener("click", ()=>{
        getContacts();
    });
    btnOrdersPage.addEventListener("click", ()=>{
        showOrderPage();
    });
    // date in modal
    const bodyDateString = (day)=>`${String(day.getDate()).padStart(2, "0")}.${String(day.getMonth() + 1).padStart(2, "0")}.${day.getFullYear()}`;
    const oneDay = new Date();
    oneDay.setDate(oneDay.getDate() + 1);
    oneDayDate.innerHTML = bodyDateString(oneDay);
    const sixDay = new Date();
    sixDay.setDate(sixDay.getDate() + 6);
    sixDayDate.innerHTML = bodyDateString(sixDay);
    const elevenDay = new Date();
    elevenDay.setDate(elevenDay.getDate() + 11);
    elevenDayDate.innerHTML = bodyDateString(elevenDay);
    //
    async function login(url, data) {
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.status === 200) {
                const result = await response.json();
                setCookie("tokenAuth", result.token, 60);
                location.reload();
            } else {
                alert("There was a problem with the request");
                throw await response.json();
            }
        } catch (error) {
            console.error("Error:", error.message ? error.message : error);
        }
    }
    function registrationWrapper(e) {
        e.preventDefault();
        const url = (0, _api.REGISTER_URL);
        const data = {
            email: registrationEmail.value,
            password: registrationPassword.value
        };
        registration(url, data);
    }
    async function registration(url, data) {
        try {
            const response = await fetch(url, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            if (response.status === 201) {
                const result = await response.json();
                setCookie("tokenAuth", result.token, 60);
                login((0, _api.LOGIN_URL), data);
            } else throw await response.json();
        } catch (error) {
            regEmailErrorMessage.style.display = "block";
            regEmailErrorMessage.innerHTML = error.message ? error.message : error;
            console.error("Error:", error);
        }
    }
    // cookie
    function setCookie(name, value, minutesToExpire) {
        let expires = "";
        if (minutesToExpire) {
            const date = new Date();
            date.setTime(date.getTime() + minutesToExpire * 60000);
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }
    function getCookie(name) {
        const nameEQ = name + "=";
        const ca = document.cookie.split(";");
        for(let i = 0; i < ca.length; i++){
            let c = ca[i];
            while(c.charAt(0) == " ")c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function eraseCookie(name) {
        document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    async function getOrders() {
        const tokenAuth = getCookie("tokenAuth");
        const response = await fetch((0, _api.ORDERS_URL), {
            headers: {
                "Authorization": tokenAuth
            }
        });
        if (response.status === 200) {
            ordersData = await response.json();
            authShowPageContent(ordersData);
        } else throw await response.text();
    }
    async function Authorization() {
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            await getOrders();
        } catch (error) {
            console.error("Error:", error.message ? error.message : error);
            showLoginOrReg();
        }
        else showLoginOrReg();
    }
    function showLoginOrReg() {
        if (window.location.pathname.slice(1) === "register") showRegister();
        else {
            btnReturnReg.addEventListener("click", returnRegPage);
            btnLoginShowPass.addEventListener("click", showHidePassword.bind({
                btn: btnLoginShowPass,
                input: loginPassword
            }));
        }
    }
    function showRegister() {
        loginSection.style.display = "none";
        registerSection.style.display = "block";
        registrationForm.addEventListener("submit", registrationWrapper);
        btnReturnLogin.addEventListener("click", returnLoginPage);
        btnRegShowPass.addEventListener("click", showHidePassword.bind({
            btn: btnRegShowPass,
            input: registrationPassword
        }));
    }
    function showHidePassword() {
        const nodeEl = this.input;
        const nodeBtn = this.btn;
        const type = nodeEl.getAttribute("type") === "password" ? "text" : "password";
        nodeEl.setAttribute("type", type);
        nodeBtn.innerHTML = type === "password" ? svgHiddenPassword : svgShownPassword;
    }
    function returnRegPage(e) {
        e.preventDefault();
        window.location.pathname = "/register";
    }
    function returnLoginPage(e) {
        e.preventDefault();
        window.location.pathname = "/";
    }
    async function removeOrder(id) {
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            const response = await fetch(`${(0, _api.ORDERS_URL)}${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": tokenAuth
                }
            });
            ordersData = await response.json();
            if (response.status === 200) {
                createdTableOrder = false;
                removeTable("order-table");
                getOrders();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    // order edit patch method
    async function editOrderSend(e) {
        const id = Number(this.id);
        e.preventDefault();
        if (!id) return;
        const body = {
            name: formFirstName.value,
            last_name: formLastName.value,
            email: formEmail.value,
            phone_number: formTel.value,
            social_network: formSocial.value,
            country: (0, _select.COUNTRIES).find((val)=>val.value === selectCountries.value).label,
            plan: document.querySelector("input[name=plan]:checked").value
        };
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            const response = await fetch(`${(0, _api.ORDERS_URL)}${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": tokenAuth
                },
                body: JSON.stringify(body)
            });
            ordersData = await response.json();
            if (response.status === 200) {
                createdTableOrder = false;
                removeTable("order-table");
                getOrders();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    // edit order methods
    function modalEditOrderShow() {
        const body = this.body;
        if (!body) return;
        modalEditOrder.style.transform = "scale(1)";
        formFirstName.value = body.name;
        formLastName.value = body.last_name;
        formSocial.value = body.social_network;
        formEmail.value = body.email;
        formTel.value = body.phone_number;
        const findValueCountry = (0, _select.COUNTRIES).find((val)=>val.label === body.country);
        (0, _select.choiseByValue)(findValueCountry ? findValueCountry.value : (0, _select.COUNTRIES)[0].value);
        const checkRadioButtons = Object.values(document.querySelectorAll("input[name=plan]")).find((el)=>el.value === body.plan);
        checkRadioButtons.checked = true;
        // patch edit event
        orderChangeForm.addEventListener("submit", editOrderSend.bind({
            id: body.id
        }));
        // close modal edit order
        btnCloseEditOrder.addEventListener("click", closeOrderEditor);
        document.addEventListener("click", clickOutsideEditor);
    }
    function clickOutsideEditor(e) {
        if (e.target === modalEditOrder) closeOrderEditor();
    }
    function closeOrderEditor() {
        modalEditOrder.style.transform = "scale(0)";
        btnCloseEditOrder.removeEventListener("click", closeOrderEditor);
        document.removeEventListener("click", clickOutsideEditor);
    }
    //edit contacts modalEditContact
    function clickOutsideContactEditor(e) {
        if (e.target === modalEditContact) closeContactEditor();
    }
    function closeContactEditor() {
        modalEditContact.style.transform = "scale(0)";
        btnCloseEditContact.removeEventListener("click", closeContactEditor);
        document.removeEventListener("click", clickOutsideContactEditor);
    }
    async function editContactSend(e) {
        const id = Number(this.id);
        if (!id) return;
        e.preventDefault();
        const body = {
            name: formContactName.value,
            email: formContactEmail.value,
            comment: formContactComment.value
        };
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            const response = await fetch(`${(0, _api.CONTACTS_URL)}${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": tokenAuth
                },
                body: JSON.stringify(body)
            });
            contactsData = await response.json();
            if (response.status === 200) {
                createdTableContacts = false;
                removeTable("contact-table");
                getContacts();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    function modalEditContactShow() {
        const body = this.body;
        if (!body) return;
        modalEditContact.style.transform = "scale(1)";
        formContactName.value = body.name;
        formContactEmail.value = body.email;
        formContactComment.value = body.comment;
        // patch edit event
        contactChangeForm.addEventListener("submit", editContactSend.bind({
            id: body.id
        }));
        // close modal edit order
        btnCloseEditContact.addEventListener("click", closeContactEditor);
        document.addEventListener("click", clickOutsideContactEditor);
    }
    // getContacts
    async function getContacts() {
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            const response = await fetch((0, _api.CONTACTS_URL), {
                headers: {
                    "Authorization": tokenAuth
                }
            });
            contactsData = await response.json();
            if (response.status === 200) showContactPage();
        } catch (error) {
            console.error("Error:", error);
        }
    }
    // removeContacts
    async function removeContacts(id) {
        const tokenAuth = getCookie("tokenAuth");
        if (tokenAuth) try {
            const response = await fetch(`${(0, _api.CONTACTS_URL)}${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": tokenAuth
                }
            });
            ordersData = await response.json();
            if (response.status === 200) {
                createdTableContacts = false;
                removeTable("contact-table");
                getContacts();
            }
        } catch (error) {
            console.error("Error:", error);
        }
    }
    // set query params
    function addQueryParams(queryParams) {
        // Get the current URL
        const currentUrl = window.location.href;
        // Create a new URL object
        const newUrl = new URL(currentUrl);
        // Add the query parameters to the new URL object
        for(const key in queryParams)newUrl.searchParams.set(key, queryParams[key]);
        // Set the new URL as the current URL without reloading the page
        window.history.pushState(null, null, newUrl.href);
    }
    function getQueryParams(name) {
        const query = window.location.search.slice(1);
        const params = new URLSearchParams(query);
        return params.get(name);
    }
    // content show section
    function authShowPageContent() {
        loginSection.style.display = "none";
        pageSection.style.display = "flex";
        btnExitWrapper.style.display = "flex";
        if (!getQueryParams("page") || getQueryParams("page") !== "contacts") showOrderPage();
        if (getQueryParams("page") === "contacts") getContacts();
    }
    function showContactPage() {
        orderPage.style.display = "none";
        contactPage.style.display = "block";
        if (!createdTableContacts) createTableContacts(contactsData);
        addQueryParams({
            page: "contacts"
        });
        btnOrdersPage.style.borderColor = "transparent";
        btnContactsPage.style.borderColor = "black";
    }
    function showOrderPage() {
        orderPage.style.display = "block";
        contactPage.style.display = "none";
        if (!createdTableOrder) createTable(ordersData);
        addQueryParams({
            page: "orders"
        });
        btnOrdersPage.style.borderColor = "black";
        btnContactsPage.style.borderColor = "transparent";
    }
    // create element function
    function dom(tag, className, ...nodes) {
        const node = document.createElement(tag);
        if (className.length > 0) node.classList.add(className);
        node.append(...nodes);
        return node;
    }
    // create btn
    function domBtn(id, text, event) {
        const node = document.createElement("button");
        node.classList.add("btn-table");
        node.addEventListener("click", ()=>{
            event(id);
        });
        node.innerHTML = text;
        return node;
    }
    // create table
    function createTable(ordersData) {
        // title table header
        const tableHeaders = [
            "ID",
            "Name",
            "Last name",
            "Email",
            "Phone number",
            "WhatsApp/ Telegramm",
            "Country",
            "Plan",
            "created",
            "updated"
        ];
        const headerRowArr = tableHeaders.map((colTitle)=>{
            return dom("div", "", colTitle);
        });
        const bodyRowArr = ordersData.map((rowData)=>{
            const colData = Object.values(rowData).map((data)=>{
                const dataFormated = rowData.createdAt === data || rowData.updatedAt === data ? (0, _utilits.formatToCommonDate)(data) : data;
                return dom("div", "", dataFormated);
            });
            colData.push(dom("div", "table-btns-wrap", ...[
                domBtn(rowData.id, svgEdit, modalEditOrderShow.bind({
                    body: rowData
                })),
                domBtn(rowData.id, "X", removeOrder)
            ]));
            return dom("div", "table-row-wrapper", ...colData);
        });
        const rows = [
            dom("div", "table-row-header", ...headerRowArr),
            dom("div", "", ...bodyRowArr)
        ];
        // get table container
        const tableContainer = document.getElementById("table-container");
        // add table
        tableContainer.append(dom("div", "", ...rows));
        createdTableOrder = true;
    }
    // removeTable
    function removeTable(name) {
        const tableContainer = document.getElementById("table-container");
        const tableContactContainer = document.getElementById("table-contacts-container");
        if (name === "order-table") tableContainer.innerHTML = "";
        if (name === "contact-table") tableContactContainer.innerHTML = "";
    }
    // create table
    function createTableContacts(contactsData) {
        // title table header
        const tableHeaders = [
            "ID",
            "Name",
            "Email",
            "Comment",
            "created",
            "updated"
        ];
        const headerRowArr = tableHeaders.map((colTitle)=>{
            return dom("div", "", colTitle);
        });
        const bodyRowArr = contactsData.map((rowData)=>{
            const colData = Object.values(rowData).map((data)=>{
                const dataFormated = rowData.createdAt === data || rowData.updatedAt === data ? (0, _utilits.formatToCommonDate)(data) : data;
                return dom("div", "", dataFormated);
            });
            colData.push(dom("div", "table-btns-wrap", ...[
                domBtn(rowData.id, svgEdit, modalEditContactShow.bind({
                    body: rowData
                })),
                domBtn(rowData.id, "X", removeContacts)
            ]));
            return dom("div", "contacts-row-wrapper", ...colData);
        });
        const rows = [
            dom("div", "contacts-row-header", ...headerRowArr),
            dom("div", "", ...bodyRowArr)
        ];
        // get table container
        const tableContainer = document.getElementById("table-contacts-container");
        // add table
        tableContainer.append(dom("div", "", ...rows));
        createdTableContacts = true;
    }
}, false);

},{"./api":"kcudQ","./select":"hRSfJ","./utilits":"fWCLx"}],"kcudQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LOGIN_URL", ()=>LOGIN_URL);
parcelHelpers.export(exports, "ORDERS_URL", ()=>ORDERS_URL);
parcelHelpers.export(exports, "CONTACTS_URL", ()=>CONTACTS_URL);
parcelHelpers.export(exports, "REGISTER_URL", ()=>REGISTER_URL);
var _env = require("../../../env");
const API_URL = (0, _env.keys).api_url;
const LOGIN_URL = `${API_URL}api/auth/login`;
const REGISTER_URL = `${API_URL}api/auth/registration`;
const ORDERS_URL = `${API_URL}api/order/`;
const CONTACTS_URL = `${API_URL}api/contacts/`;

},{"../../../env":"dS1nW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dS1nW":[function(require,module,exports) {
module.exports.dbConfig = {
    HOST: "127.0.0.1",
    USER: "root",
    PASSWORD: "",
    DB: "nifdb_orders",
    dialect: "mysql"
};
module.exports.keys = {
    jwt: "dev-jwt",
    cors: "http://localhost:1234",
    port: 4000,
    api_url: "http://localhost:4000/"
};

},{}],"gkKU3":[function(require,module,exports) {
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

},{}],"hRSfJ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "choiseByValue", ()=>choiseByValue);
parcelHelpers.export(exports, "getValue", ()=>getValue);
parcelHelpers.export(exports, "COUNTRIES", ()=>COUNTRIES);
var _choicesJs = require("choices.js");
var _choicesJsDefault = parcelHelpers.interopDefault(_choicesJs);
const COUNTRIES = [
    {
        label: "Afghanistan",
        value: "AF"
    },
    {
        label: "\xc5land Islands",
        value: "AX"
    },
    {
        label: "Albania",
        value: "AL"
    },
    {
        label: "Algeria",
        value: "DZ"
    },
    {
        label: "American Samoa",
        value: "AS"
    },
    {
        label: "AndorrA",
        value: "AD"
    },
    {
        label: "Angola",
        value: "AO"
    },
    {
        label: "Anguilla",
        value: "AI"
    },
    {
        label: "Antarctica",
        value: "AQ"
    },
    {
        label: "Antigua and Barbuda",
        value: "AG"
    },
    {
        label: "Argentina",
        value: "AR"
    },
    {
        label: "Armenia",
        value: "AM"
    },
    {
        label: "Aruba",
        value: "AW"
    },
    {
        label: "Australia",
        value: "AU"
    },
    {
        label: "Austria",
        value: "AT"
    },
    {
        label: "Azerbaijan",
        value: "AZ"
    },
    {
        label: "Bahamas",
        value: "BS"
    },
    {
        label: "Bahrain",
        value: "BH"
    },
    {
        label: "Bangladesh",
        value: "BD"
    },
    {
        label: "Barbados",
        value: "BB"
    },
    {
        label: "Belarus",
        value: "BY"
    },
    {
        label: "Belgium",
        value: "BE"
    },
    {
        label: "Belize",
        value: "BZ"
    },
    {
        label: "Benin",
        value: "BJ"
    },
    {
        label: "Bermuda",
        value: "BM"
    },
    {
        label: "Bhutan",
        value: "BT"
    },
    {
        label: "Bolivia",
        value: "BO"
    },
    {
        label: "Bosnia and Herzegovina",
        value: "BA"
    },
    {
        label: "Botswana",
        value: "BW"
    },
    {
        label: "Bouvet Island",
        value: "BV"
    },
    {
        label: "Brazil",
        value: "BR"
    },
    {
        label: "British Indian Ocean Territory",
        value: "IO"
    },
    {
        label: "Brunei Darussalam",
        value: "BN"
    },
    {
        label: "Bulgaria",
        value: "BG"
    },
    {
        label: "Burkina Faso",
        value: "BF"
    },
    {
        label: "Burundi",
        value: "BI"
    },
    {
        label: "Cambodia",
        value: "KH"
    },
    {
        label: "Cameroon",
        value: "CM"
    },
    {
        label: "Canada",
        value: "CA"
    },
    {
        label: "Cape Verde",
        value: "CV"
    },
    {
        label: "Cayman Islands",
        value: "KY"
    },
    {
        label: "Central African Republic",
        value: "CF"
    },
    {
        label: "Chad",
        value: "TD"
    },
    {
        label: "Chile",
        value: "CL"
    },
    {
        label: "China",
        value: "CN"
    },
    {
        label: "Christmas Island",
        value: "CX"
    },
    {
        label: "Cocos (Keeling) Islands",
        value: "CC"
    },
    {
        label: "Colombia",
        value: "CO"
    },
    {
        label: "Comoros",
        value: "KM"
    },
    {
        label: "Congo",
        value: "CG"
    },
    {
        label: "Congo, The Democratic Republic of the",
        value: "CD"
    },
    {
        label: "Cook Islands",
        value: "CK"
    },
    {
        label: "Costa Rica",
        value: "CR"
    },
    {
        label: "Cote D'Ivoire",
        value: "CI"
    },
    {
        label: "Croatia",
        value: "HR"
    },
    {
        label: "Cuba",
        value: "CU"
    },
    {
        label: "Cyprus",
        value: "CY"
    },
    {
        label: "Czech Republic",
        value: "CZ"
    },
    {
        label: "Denmark",
        value: "DK"
    },
    {
        label: "Djibouti",
        value: "DJ"
    },
    {
        label: "Dominica",
        value: "DM"
    },
    {
        label: "Dominican Republic",
        value: "DO"
    },
    {
        label: "Ecuador",
        value: "EC"
    },
    {
        label: "Egypt",
        value: "EG"
    },
    {
        label: "El Salvador",
        value: "SV"
    },
    {
        label: "Equatorial Guinea",
        value: "GQ"
    },
    {
        label: "Eritrea",
        value: "ER"
    },
    {
        label: "Estonia",
        value: "EE"
    },
    {
        label: "Ethiopia",
        value: "ET"
    },
    {
        label: "Falkland Islands (Malvinas)",
        value: "FK"
    },
    {
        label: "Faroe Islands",
        value: "FO"
    },
    {
        label: "Fiji",
        value: "FJ"
    },
    {
        label: "Finland",
        value: "FI"
    },
    {
        label: "France",
        value: "FR"
    },
    {
        label: "French Guiana",
        value: "GF"
    },
    {
        label: "French Polynesia",
        value: "PF"
    },
    {
        label: "French Southern Territories",
        value: "TF"
    },
    {
        label: "Gabon",
        value: "GA"
    },
    {
        label: "Gambia",
        value: "GM"
    },
    {
        label: "Georgia",
        value: "GE"
    },
    {
        label: "Germany",
        value: "DE"
    },
    {
        label: "Ghana",
        value: "GH"
    },
    {
        label: "Gibraltar",
        value: "GI"
    },
    {
        label: "Greece",
        value: "GR"
    },
    {
        label: "Greenland",
        value: "GL"
    },
    {
        label: "Grenada",
        value: "GD"
    },
    {
        label: "Guadeloupe",
        value: "GP"
    },
    {
        label: "Guam",
        value: "GU"
    },
    {
        label: "Guatemala",
        value: "GT"
    },
    {
        label: "Guernsey",
        value: "GG"
    },
    {
        label: "Guinea",
        value: "GN"
    },
    {
        label: "Guinea-Bissau",
        value: "GW"
    },
    {
        label: "Guyana",
        value: "GY"
    },
    {
        label: "Haiti",
        value: "HT"
    },
    {
        label: "Heard Island and Mcdonald Islands",
        value: "HM"
    },
    {
        label: "Holy See (Vatican City State)",
        value: "VA"
    },
    {
        label: "Honduras",
        value: "HN"
    },
    {
        label: "Hong Kong",
        value: "HK"
    },
    {
        label: "Hungary",
        value: "HU"
    },
    {
        label: "Iceland",
        value: "IS"
    },
    {
        label: "India",
        value: "IN"
    },
    {
        label: "Indonesia",
        value: "ID"
    },
    {
        label: "Iran, Islamic Republic Of",
        value: "IR"
    },
    {
        label: "Iraq",
        value: "IQ"
    },
    {
        label: "Ireland",
        value: "IE"
    },
    {
        label: "Isle of Man",
        value: "IM"
    },
    {
        label: "Israel",
        value: "IL"
    },
    {
        label: "Italy",
        value: "IT"
    },
    {
        label: "Jamaica",
        value: "JM"
    },
    {
        label: "Japan",
        value: "JP"
    },
    {
        label: "Jersey",
        value: "JE"
    },
    {
        label: "Jordan",
        value: "JO"
    },
    {
        label: "Kazakhstan",
        value: "KZ"
    },
    {
        label: "Kenya",
        value: "KE"
    },
    {
        label: "Kiribati",
        value: "KI"
    },
    {
        label: "Korea, Democratic People'S Republic of",
        value: "KP"
    },
    {
        label: "Korea, Republic of",
        value: "KR"
    },
    {
        label: "Kuwait",
        value: "KW"
    },
    {
        label: "Kyrgyzstan",
        value: "KG"
    },
    {
        label: "Lao People'S Democratic Republic",
        value: "LA"
    },
    {
        label: "Latvia",
        value: "LV"
    },
    {
        label: "Lebanon",
        value: "LB"
    },
    {
        label: "Lesotho",
        value: "LS"
    },
    {
        label: "Liberia",
        value: "LR"
    },
    {
        label: "Libyan Arab Jamahiriya",
        value: "LY"
    },
    {
        label: "Liechtenstein",
        value: "LI"
    },
    {
        label: "Lithuania",
        value: "LT"
    },
    {
        label: "Luxembourg",
        value: "LU"
    },
    {
        label: "Macao",
        value: "MO"
    },
    {
        label: "Macedonia, The Former Yugoslav Republic of",
        value: "MK"
    },
    {
        label: "Madagascar",
        value: "MG"
    },
    {
        label: "Malawi",
        value: "MW"
    },
    {
        label: "Malaysia",
        value: "MY"
    },
    {
        label: "Maldives",
        value: "MV"
    },
    {
        label: "Mali",
        value: "ML"
    },
    {
        label: "Malta",
        value: "MT"
    },
    {
        label: "Marshall Islands",
        value: "MH"
    },
    {
        label: "Martinique",
        value: "MQ"
    },
    {
        label: "Mauritania",
        value: "MR"
    },
    {
        label: "Mauritius",
        value: "MU"
    },
    {
        label: "Mayotte",
        value: "YT"
    },
    {
        label: "Mexico",
        value: "MX"
    },
    {
        label: "Micronesia, Federated States of",
        value: "FM"
    },
    {
        label: "Moldova, Republic of",
        value: "MD"
    },
    {
        label: "Monaco",
        value: "MC"
    },
    {
        label: "Mongolia",
        value: "MN"
    },
    {
        label: "Montserrat",
        value: "MS"
    },
    {
        label: "Morocco",
        value: "MA"
    },
    {
        label: "Mozambique",
        value: "MZ"
    },
    {
        label: "Myanmar",
        value: "MM"
    },
    {
        label: "Namibia",
        value: "NA"
    },
    {
        label: "Nauru",
        value: "NR"
    },
    {
        label: "Nepal",
        value: "NP"
    },
    {
        label: "Netherlands",
        value: "NL"
    },
    {
        label: "Netherlands Antilles",
        value: "AN"
    },
    {
        label: "New Caledonia",
        value: "NC"
    },
    {
        label: "New Zealand",
        value: "NZ"
    },
    {
        label: "Nicaragua",
        value: "NI"
    },
    {
        label: "Niger",
        value: "NE"
    },
    {
        label: "Nigeria",
        value: "NG"
    },
    {
        label: "Niue",
        value: "NU"
    },
    {
        label: "Norfolk Island",
        value: "NF"
    },
    {
        label: "Northern Mariana Islands",
        value: "MP"
    },
    {
        label: "Norway",
        value: "NO"
    },
    {
        label: "Oman",
        value: "OM"
    },
    {
        label: "Pakistan",
        value: "PK"
    },
    {
        label: "Palau",
        value: "PW"
    },
    {
        label: "Palestinian Territory, Occupied",
        value: "PS"
    },
    {
        label: "Panama",
        value: "PA"
    },
    {
        label: "Papua New Guinea",
        value: "PG"
    },
    {
        label: "Paraguay",
        value: "PY"
    },
    {
        label: "Peru",
        value: "PE"
    },
    {
        label: "Philippines",
        value: "PH"
    },
    {
        label: "Pitcairn",
        value: "PN"
    },
    {
        label: "Poland",
        value: "PL"
    },
    {
        label: "Portugal",
        value: "PT"
    },
    {
        label: "Puerto Rico",
        value: "PR"
    },
    {
        label: "Qatar",
        value: "QA"
    },
    {
        label: "Reunion",
        value: "RE"
    },
    {
        label: "Romania",
        value: "RO"
    },
    {
        label: "Russian Federation",
        value: "RU"
    },
    {
        label: "RWANDA",
        value: "RW"
    },
    {
        label: "Saint Helena",
        value: "SH"
    },
    {
        label: "Saint Kitts and Nevis",
        value: "KN"
    },
    {
        label: "Saint Lucia",
        value: "LC"
    },
    {
        label: "Saint Pierre and Miquelon",
        value: "PM"
    },
    {
        label: "Saint Vincent and the Grenadines",
        value: "VC"
    },
    {
        label: "Samoa",
        value: "WS"
    },
    {
        label: "San Marino",
        value: "SM"
    },
    {
        label: "Sao Tome and Principe",
        value: "ST"
    },
    {
        label: "Saudi Arabia",
        value: "SA"
    },
    {
        label: "Senegal",
        value: "SN"
    },
    {
        label: "Serbia and Montenegro",
        value: "CS"
    },
    {
        label: "Seychelles",
        value: "SC"
    },
    {
        label: "Sierra Leone",
        value: "SL"
    },
    {
        label: "Singapore",
        value: "SG"
    },
    {
        label: "Slovakia",
        value: "SK"
    },
    {
        label: "Slovenia",
        value: "SI"
    },
    {
        label: "Solomon Islands",
        value: "SB"
    },
    {
        label: "Somalia",
        value: "SO"
    },
    {
        label: "South Africa",
        value: "ZA"
    },
    {
        label: "South Georgia and the South Sandwich Islands",
        value: "GS"
    },
    {
        label: "Spain",
        value: "ES"
    },
    {
        label: "Sri Lanka",
        value: "LK"
    },
    {
        label: "Sudan",
        value: "SD"
    },
    {
        label: "Suriname",
        value: "SR"
    },
    {
        label: "Svalbard and Jan Mayen",
        value: "SJ"
    },
    {
        label: "Swaziland",
        value: "SZ"
    },
    {
        label: "Sweden",
        value: "SE"
    },
    {
        label: "Switzerland",
        value: "CH"
    },
    {
        label: "Syrian Arab Republic",
        value: "SY"
    },
    {
        label: "Taiwan, Province of China",
        value: "TW"
    },
    {
        label: "Tajikistan",
        value: "TJ"
    },
    {
        label: "Tanzania, United Republic of",
        value: "TZ"
    },
    {
        label: "Thailand",
        value: "TH"
    },
    {
        label: "Timor-Leste",
        value: "TL"
    },
    {
        label: "Togo",
        value: "TG"
    },
    {
        label: "Tokelau",
        value: "TK"
    },
    {
        label: "Tonga",
        value: "TO"
    },
    {
        label: "Trinidad and Tobago",
        value: "TT"
    },
    {
        label: "Tunisia",
        value: "TN"
    },
    {
        label: "Turkey",
        value: "TR"
    },
    {
        label: "Turkmenistan",
        value: "TM"
    },
    {
        label: "Turks and Caicos Islands",
        value: "TC"
    },
    {
        label: "Tuvalu",
        value: "TV"
    },
    {
        label: "Uganda",
        value: "UG"
    },
    {
        label: "Ukraine",
        value: "UA"
    },
    {
        label: "United Arab Emirates",
        value: "AE"
    },
    {
        label: "United Kingdom",
        value: "GB"
    },
    {
        label: "United States",
        value: "US"
    },
    {
        label: "United States Minor Outlying Islands",
        value: "UM"
    },
    {
        label: "Uruguay",
        value: "UY"
    },
    {
        label: "Uzbekistan",
        value: "UZ"
    },
    {
        label: "Vanuatu",
        value: "VU"
    },
    {
        label: "Venezuela",
        value: "VE"
    },
    {
        label: "Viet Nam",
        value: "VN"
    },
    {
        label: "Virgin Islands, British",
        value: "VG"
    },
    {
        label: "Virgin Islands, U.S.",
        value: "VI"
    },
    {
        label: "Wallis and Futuna",
        value: "WF"
    },
    {
        label: "Western Sahara",
        value: "EH"
    },
    {
        label: "Yemen",
        value: "YE"
    },
    {
        label: "Zambia",
        value: "ZM"
    },
    {
        label: "Zimbabwe",
        value: "ZW"
    }
];
let choise;
const regFormBtn = document.querySelector("#reg-form-btn");
const selectActivePlaceholder = document.querySelector(".selectActivePlaceholder");
// create counries select
const selectCounties = document.querySelector("#js-choice");
const element = selectCounties;
choise = new (0, _choicesJsDefault.default)(element, {
    allowHTML: true,
    placeholderValue: "This is a placeholder set in the config",
    searchPlaceholderValue: "This is a search placeholder"
});
choise.setChoices(COUNTRIES);
choise.passedElement.element.addEventListener("hideDropdown", function(event) {
    regFormBtn.disabled = false;
    const choiceValue = choise.getValue(true);
    selectActivePlaceholder.classList.add("active");
    if (choiceValue === "Country of residence") selectActivePlaceholder.classList.remove("active");
});
const choiseByValue = (val)=>choise.setChoiceByValue(val);
const getValue = ()=>choise.getValue(true);

},{"choices.js":"7bdLf","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7bdLf":[function(require,module,exports) {
/*! choices.js v10.2.0 | © 2022 Josh Johnson | https://github.com/jshjohnson/Choices#readme */ (function webpackUniversalModuleDefinition(root, factory) {
    module.exports = factory();
})(window, function() {
    return /******/ function() {
        /******/ "use strict";
        /******/ var __webpack_modules__ = {
            /***/ 282: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.clearChoices = exports.activateChoices = exports.filterChoices = exports.addChoice = void 0;
                var constants_1 = __webpack_require__(883);
                var addChoice = function(_a) {
                    var value = _a.value, label = _a.label, id = _a.id, groupId = _a.groupId, disabled = _a.disabled, elementId = _a.elementId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_CHOICE,
                        value: value,
                        label: label,
                        id: id,
                        groupId: groupId,
                        disabled: disabled,
                        elementId: elementId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                exports.addChoice = addChoice;
                var filterChoices = function(results) {
                    return {
                        type: constants_1.ACTION_TYPES.FILTER_CHOICES,
                        results: results
                    };
                };
                exports.filterChoices = filterChoices;
                var activateChoices = function(active) {
                    if (active === void 0) active = true;
                    return {
                        type: constants_1.ACTION_TYPES.ACTIVATE_CHOICES,
                        active: active
                    };
                };
                exports.activateChoices = activateChoices;
                var clearChoices = function() {
                    return {
                        type: constants_1.ACTION_TYPES.CLEAR_CHOICES
                    };
                };
                exports.clearChoices = clearChoices;
            /***/ },
            /***/ 783: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.addGroup = void 0;
                var constants_1 = __webpack_require__(883);
                var addGroup = function(_a) {
                    var value = _a.value, id = _a.id, active = _a.active, disabled = _a.disabled;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_GROUP,
                        value: value,
                        id: id,
                        active: active,
                        disabled: disabled
                    };
                };
                exports.addGroup = addGroup;
            /***/ },
            /***/ 464: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.highlightItem = exports.removeItem = exports.addItem = void 0;
                var constants_1 = __webpack_require__(883);
                var addItem = function(_a) {
                    var value = _a.value, label = _a.label, id = _a.id, choiceId = _a.choiceId, groupId = _a.groupId, customProperties = _a.customProperties, placeholder = _a.placeholder, keyCode = _a.keyCode;
                    return {
                        type: constants_1.ACTION_TYPES.ADD_ITEM,
                        value: value,
                        label: label,
                        id: id,
                        choiceId: choiceId,
                        groupId: groupId,
                        customProperties: customProperties,
                        placeholder: placeholder,
                        keyCode: keyCode
                    };
                };
                exports.addItem = addItem;
                var removeItem = function(id, choiceId) {
                    return {
                        type: constants_1.ACTION_TYPES.REMOVE_ITEM,
                        id: id,
                        choiceId: choiceId
                    };
                };
                exports.removeItem = removeItem;
                var highlightItem = function(id, highlighted) {
                    return {
                        type: constants_1.ACTION_TYPES.HIGHLIGHT_ITEM,
                        id: id,
                        highlighted: highlighted
                    };
                };
                exports.highlightItem = highlightItem;
            /***/ },
            /***/ 137: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.setIsLoading = exports.resetTo = exports.clearAll = void 0;
                var constants_1 = __webpack_require__(883);
                var clearAll = function() {
                    return {
                        type: constants_1.ACTION_TYPES.CLEAR_ALL
                    };
                };
                exports.clearAll = clearAll;
                var resetTo = function(state) {
                    return {
                        type: constants_1.ACTION_TYPES.RESET_TO,
                        state: state
                    };
                };
                exports.resetTo = resetTo;
                var setIsLoading = function(isLoading) {
                    return {
                        type: constants_1.ACTION_TYPES.SET_IS_LOADING,
                        isLoading: isLoading
                    };
                };
                exports.setIsLoading = setIsLoading;
            /***/ },
            /***/ 373: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var deepmerge_1 = __importDefault(__webpack_require__(996));
                /* eslint-disable @typescript-eslint/no-explicit-any */ var fuse_js_1 = __importDefault(__webpack_require__(221));
                var choices_1 = __webpack_require__(282);
                var groups_1 = __webpack_require__(783);
                var items_1 = __webpack_require__(464);
                var misc_1 = __webpack_require__(137);
                var components_1 = __webpack_require__(520);
                var constants_1 = __webpack_require__(883);
                var defaults_1 = __webpack_require__(789);
                var utils_1 = __webpack_require__(799);
                var reducers_1 = __webpack_require__(655);
                var store_1 = __importDefault(__webpack_require__(744));
                var templates_1 = __importDefault(__webpack_require__(686));
                /** @see {@link http://browserhacks.com/#hack-acea075d0ac6954f275a70023906050c} */ var IS_IE11 = "-ms-scroll-limit" in document.documentElement.style && "-ms-ime-align" in document.documentElement.style;
                var USER_DEFAULTS = {};
                /**
 * Choices
 * @author Josh Johnson<josh@joshuajohnson.co.uk>
 */ var Choices = /** @class */ function() {
                    function Choices(element, userConfig) {
                        if (element === void 0) element = "[data-choice]";
                        if (userConfig === void 0) userConfig = {};
                        var _this = this;
                        if (userConfig.allowHTML === undefined) console.warn("Deprecation warning: allowHTML will default to false in a future release. To render HTML in Choices, you will need to set it to true. Setting allowHTML will suppress this message.");
                        this.config = deepmerge_1.default.all([
                            defaults_1.DEFAULT_CONFIG,
                            Choices.defaults.options,
                            userConfig
                        ], // When merging array configs, replace with a copy of the userConfig array,
                        // instead of concatenating with the default array
                        {
                            arrayMerge: function(_, sourceArray) {
                                return __spreadArray([], sourceArray, true);
                            }
                        });
                        var invalidConfigOptions = (0, utils_1.diff)(this.config, defaults_1.DEFAULT_CONFIG);
                        if (invalidConfigOptions.length) console.warn("Unknown config option(s) passed", invalidConfigOptions.join(", "));
                        var passedElement = typeof element === "string" ? document.querySelector(element) : element;
                        if (!(passedElement instanceof HTMLInputElement || passedElement instanceof HTMLSelectElement)) throw TypeError("Expected one of the following types text|select-one|select-multiple");
                        this._isTextElement = passedElement.type === constants_1.TEXT_TYPE;
                        this._isSelectOneElement = passedElement.type === constants_1.SELECT_ONE_TYPE;
                        this._isSelectMultipleElement = passedElement.type === constants_1.SELECT_MULTIPLE_TYPE;
                        this._isSelectElement = this._isSelectOneElement || this._isSelectMultipleElement;
                        this.config.searchEnabled = this._isSelectMultipleElement || this.config.searchEnabled;
                        if (![
                            "auto",
                            "always"
                        ].includes("".concat(this.config.renderSelectedChoices))) this.config.renderSelectedChoices = "auto";
                        if (userConfig.addItemFilter && typeof userConfig.addItemFilter !== "function") {
                            var re = userConfig.addItemFilter instanceof RegExp ? userConfig.addItemFilter : new RegExp(userConfig.addItemFilter);
                            this.config.addItemFilter = re.test.bind(re);
                        }
                        if (this._isTextElement) this.passedElement = new components_1.WrappedInput({
                            element: passedElement,
                            classNames: this.config.classNames,
                            delimiter: this.config.delimiter
                        });
                        else this.passedElement = new components_1.WrappedSelect({
                            element: passedElement,
                            classNames: this.config.classNames,
                            template: function(data) {
                                return _this._templates.option(data);
                            }
                        });
                        this.initialised = false;
                        this._store = new store_1.default();
                        this._initialState = reducers_1.defaultState;
                        this._currentState = reducers_1.defaultState;
                        this._prevState = reducers_1.defaultState;
                        this._currentValue = "";
                        this._canSearch = !!this.config.searchEnabled;
                        this._isScrollingOnIe = false;
                        this._highlightPosition = 0;
                        this._wasTap = true;
                        this._placeholderValue = this._generatePlaceholderValue();
                        this._baseId = (0, utils_1.generateId)(this.passedElement.element, "choices-");
                        /**
     * setting direction in cases where it's explicitly set on passedElement
     * or when calculated direction is different from the document
     */ this._direction = this.passedElement.dir;
                        if (!this._direction) {
                            var elementDirection = window.getComputedStyle(this.passedElement.element).direction;
                            var documentDirection = window.getComputedStyle(document.documentElement).direction;
                            if (elementDirection !== documentDirection) this._direction = elementDirection;
                        }
                        this._idNames = {
                            itemChoice: "item-choice"
                        };
                        if (this._isSelectElement) {
                            // Assign preset groups from passed element
                            this._presetGroups = this.passedElement.optionGroups;
                            // Assign preset options from passed element
                            this._presetOptions = this.passedElement.options;
                        }
                        // Assign preset choices from passed object
                        this._presetChoices = this.config.choices;
                        // Assign preset items from passed object first
                        this._presetItems = this.config.items;
                        // Add any values passed from attribute
                        if (this.passedElement.value && this._isTextElement) {
                            var splitValues = this.passedElement.value.split(this.config.delimiter);
                            this._presetItems = this._presetItems.concat(splitValues);
                        }
                        // Create array of choices from option elements
                        if (this.passedElement.options) this.passedElement.options.forEach(function(option) {
                            _this._presetChoices.push({
                                value: option.value,
                                label: option.innerHTML,
                                selected: !!option.selected,
                                disabled: option.disabled || option.parentNode.disabled,
                                placeholder: option.value === "" || option.hasAttribute("placeholder"),
                                customProperties: (0, utils_1.parseCustomProperties)(option.dataset.customProperties)
                            });
                        });
                        this._render = this._render.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                        this._onKeyUp = this._onKeyUp.bind(this);
                        this._onKeyDown = this._onKeyDown.bind(this);
                        this._onClick = this._onClick.bind(this);
                        this._onTouchMove = this._onTouchMove.bind(this);
                        this._onTouchEnd = this._onTouchEnd.bind(this);
                        this._onMouseDown = this._onMouseDown.bind(this);
                        this._onMouseOver = this._onMouseOver.bind(this);
                        this._onFormReset = this._onFormReset.bind(this);
                        this._onSelectKey = this._onSelectKey.bind(this);
                        this._onEnterKey = this._onEnterKey.bind(this);
                        this._onEscapeKey = this._onEscapeKey.bind(this);
                        this._onDirectionKey = this._onDirectionKey.bind(this);
                        this._onDeleteKey = this._onDeleteKey.bind(this);
                        // If element has already been initialised with Choices, fail silently
                        if (this.passedElement.isActive) {
                            if (!this.config.silent) console.warn("Trying to initialise Choices on element already initialised", {
                                element: element
                            });
                            this.initialised = true;
                            return;
                        }
                        // Let's go
                        this.init();
                    }
                    Object.defineProperty(Choices, "defaults", {
                        get: function() {
                            return Object.preventExtensions({
                                get options () {
                                    return USER_DEFAULTS;
                                },
                                get templates () {
                                    return templates_1.default;
                                }
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Choices.prototype.init = function() {
                        if (this.initialised) return;
                        this._createTemplates();
                        this._createElements();
                        this._createStructure();
                        this._store.subscribe(this._render);
                        this._render();
                        this._addEventListeners();
                        var shouldDisable = !this.config.addItems || this.passedElement.element.hasAttribute("disabled");
                        if (shouldDisable) this.disable();
                        this.initialised = true;
                        var callbackOnInit = this.config.callbackOnInit;
                        // Run callback if it is a function
                        if (callbackOnInit && typeof callbackOnInit === "function") callbackOnInit.call(this);
                    };
                    Choices.prototype.destroy = function() {
                        if (!this.initialised) return;
                        this._removeEventListeners();
                        this.passedElement.reveal();
                        this.containerOuter.unwrap(this.passedElement.element);
                        this.clearStore();
                        if (this._isSelectElement) this.passedElement.options = this._presetOptions;
                        this._templates = templates_1.default;
                        this.initialised = false;
                    };
                    Choices.prototype.enable = function() {
                        if (this.passedElement.isDisabled) this.passedElement.enable();
                        if (this.containerOuter.isDisabled) {
                            this._addEventListeners();
                            this.input.enable();
                            this.containerOuter.enable();
                        }
                        return this;
                    };
                    Choices.prototype.disable = function() {
                        if (!this.passedElement.isDisabled) this.passedElement.disable();
                        if (!this.containerOuter.isDisabled) {
                            this._removeEventListeners();
                            this.input.disable();
                            this.containerOuter.disable();
                        }
                        return this;
                    };
                    Choices.prototype.highlightItem = function(item, runEvent) {
                        if (runEvent === void 0) runEvent = true;
                        if (!item || !item.id) return this;
                        var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch((0, items_1.highlightItem)(id, true));
                        if (runEvent) this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                            id: id,
                            value: value,
                            label: label,
                            groupValue: group && group.value ? group.value : null
                        });
                        return this;
                    };
                    Choices.prototype.unhighlightItem = function(item) {
                        if (!item || !item.id) return this;
                        var id = item.id, _a = item.groupId, groupId = _a === void 0 ? -1 : _a, _b = item.value, value = _b === void 0 ? "" : _b, _c = item.label, label = _c === void 0 ? "" : _c;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        this._store.dispatch((0, items_1.highlightItem)(id, false));
                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightItem, {
                            id: id,
                            value: value,
                            label: label,
                            groupValue: group && group.value ? group.value : null
                        });
                        return this;
                    };
                    Choices.prototype.highlightAll = function() {
                        var _this = this;
                        this._store.items.forEach(function(item) {
                            return _this.highlightItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.unhighlightAll = function() {
                        var _this = this;
                        this._store.items.forEach(function(item) {
                            return _this.unhighlightItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeActiveItemsByValue = function(value) {
                        var _this = this;
                        this._store.activeItems.filter(function(item) {
                            return item.value === value;
                        }).forEach(function(item) {
                            return _this._removeItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeActiveItems = function(excludedId) {
                        var _this = this;
                        this._store.activeItems.filter(function(_a) {
                            var id = _a.id;
                            return id !== excludedId;
                        }).forEach(function(item) {
                            return _this._removeItem(item);
                        });
                        return this;
                    };
                    Choices.prototype.removeHighlightedItems = function(runEvent) {
                        var _this = this;
                        if (runEvent === void 0) runEvent = false;
                        this._store.highlightedActiveItems.forEach(function(item) {
                            _this._removeItem(item);
                            // If this action was performed by the user
                            // trigger the event
                            if (runEvent) _this._triggerChange(item.value);
                        });
                        return this;
                    };
                    Choices.prototype.showDropdown = function(preventInputFocus) {
                        var _this = this;
                        if (this.dropdown.isActive) return this;
                        requestAnimationFrame(function() {
                            _this.dropdown.show();
                            _this.containerOuter.open(_this.dropdown.distanceFromTopWindow);
                            if (!preventInputFocus && _this._canSearch) _this.input.focus();
                            _this.passedElement.triggerEvent(constants_1.EVENTS.showDropdown, {});
                        });
                        return this;
                    };
                    Choices.prototype.hideDropdown = function(preventInputBlur) {
                        var _this = this;
                        if (!this.dropdown.isActive) return this;
                        requestAnimationFrame(function() {
                            _this.dropdown.hide();
                            _this.containerOuter.close();
                            if (!preventInputBlur && _this._canSearch) {
                                _this.input.removeActiveDescendant();
                                _this.input.blur();
                            }
                            _this.passedElement.triggerEvent(constants_1.EVENTS.hideDropdown, {});
                        });
                        return this;
                    };
                    Choices.prototype.getValue = function(valueOnly) {
                        if (valueOnly === void 0) valueOnly = false;
                        var values = this._store.activeItems.reduce(function(selectedItems, item) {
                            var itemValue = valueOnly ? item.value : item;
                            selectedItems.push(itemValue);
                            return selectedItems;
                        }, []);
                        return this._isSelectOneElement ? values[0] : values;
                    };
                    Choices.prototype.setValue = function(items) {
                        var _this = this;
                        if (!this.initialised) return this;
                        items.forEach(function(value) {
                            return _this._setChoiceOrItem(value);
                        });
                        return this;
                    };
                    Choices.prototype.setChoiceByValue = function(value) {
                        var _this = this;
                        if (!this.initialised || this._isTextElement) return this;
                        // If only one value has been passed, convert to array
                        var choiceValue = Array.isArray(value) ? value : [
                            value
                        ];
                        // Loop through each value and
                        choiceValue.forEach(function(val) {
                            return _this._findAndSelectChoiceByValue(val);
                        });
                        return this;
                    };
                    /**
   * Set choices of select input via an array of objects (or function that returns array of object or promise of it),
   * a value field name and a label field name.
   * This behaves the same as passing items via the choices option but can be called after initialising Choices.
   * This can also be used to add groups of choices (see example 2); Optionally pass a true `replaceChoices` value to remove any existing choices.
   * Optionally pass a `customProperties` object to add additional data to your choices (useful when searching/filtering etc).
   *
   * **Input types affected:** select-one, select-multiple
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([
   *   {value: 'One', label: 'Label One', disabled: true},
   *   {value: 'Two', label: 'Label Two', selected: true},
   *   {value: 'Three', label: 'Label Three'},
   * ], 'value', 'label', false);
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices(async () => {
   *   try {
   *      const items = await fetch('/items');
   *      return items.json()
   *   } catch(err) {
   *      console.error(err)
   *   }
   * });
   * ```
   *
   * @example
   * ```js
   * const example = new Choices(element);
   *
   * example.setChoices([{
   *   label: 'Group one',
   *   id: 1,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child One', label: 'Child One', selected: true},
   *     {value: 'Child Two', label: 'Child Two',  disabled: true},
   *     {value: 'Child Three', label: 'Child Three'},
   *   ]
   * },
   * {
   *   label: 'Group two',
   *   id: 2,
   *   disabled: false,
   *   choices: [
   *     {value: 'Child Four', label: 'Child Four', disabled: true},
   *     {value: 'Child Five', label: 'Child Five'},
   *     {value: 'Child Six', label: 'Child Six', customProperties: {
   *       description: 'Custom description about child six',
   *       random: 'Another random custom property'
   *     }},
   *   ]
   * }], 'value', 'label', false);
   * ```
   */ Choices.prototype.setChoices = function(choicesArrayOrFetcher, value, label, replaceChoices) {
                        var _this = this;
                        if (choicesArrayOrFetcher === void 0) choicesArrayOrFetcher = [];
                        if (value === void 0) value = "value";
                        if (label === void 0) label = "label";
                        if (replaceChoices === void 0) replaceChoices = false;
                        if (!this.initialised) throw new ReferenceError("setChoices was called on a non-initialized instance of Choices");
                        if (!this._isSelectElement) throw new TypeError("setChoices can't be used with INPUT based Choices");
                        if (typeof value !== "string" || !value) throw new TypeError("value parameter must be a name of 'value' field in passed objects");
                        // Clear choices if needed
                        if (replaceChoices) this.clearChoices();
                        if (typeof choicesArrayOrFetcher === "function") {
                            // it's a choices fetcher function
                            var fetcher_1 = choicesArrayOrFetcher(this);
                            if (typeof Promise === "function" && fetcher_1 instanceof Promise) // that's a promise
                            // eslint-disable-next-line no-promise-executor-return
                            return new Promise(function(resolve) {
                                return requestAnimationFrame(resolve);
                            }).then(function() {
                                return _this._handleLoadingState(true);
                            }).then(function() {
                                return fetcher_1;
                            }).then(function(data) {
                                return _this.setChoices(data, value, label, replaceChoices);
                            }).catch(function(err) {
                                if (!_this.config.silent) console.error(err);
                            }).then(function() {
                                return _this._handleLoadingState(false);
                            }).then(function() {
                                return _this;
                            });
                            // function returned something else than promise, let's check if it's an array of choices
                            if (!Array.isArray(fetcher_1)) throw new TypeError(".setChoices first argument function must return either array of choices or Promise, got: ".concat(typeof fetcher_1));
                            // recursion with results, it's sync and choices were cleared already
                            return this.setChoices(fetcher_1, value, label, false);
                        }
                        if (!Array.isArray(choicesArrayOrFetcher)) throw new TypeError(".setChoices must be called either with array of choices with a function resulting into Promise of array of choices");
                        this.containerOuter.removeLoadingState();
                        this._startLoading();
                        choicesArrayOrFetcher.forEach(function(groupOrChoice) {
                            if (groupOrChoice.choices) _this._addGroup({
                                id: groupOrChoice.id ? parseInt("".concat(groupOrChoice.id), 10) : null,
                                group: groupOrChoice,
                                valueKey: value,
                                labelKey: label
                            });
                            else {
                                var choice = groupOrChoice;
                                _this._addChoice({
                                    value: choice[value],
                                    label: choice[label],
                                    isSelected: !!choice.selected,
                                    isDisabled: !!choice.disabled,
                                    placeholder: !!choice.placeholder,
                                    customProperties: choice.customProperties
                                });
                            }
                        });
                        this._stopLoading();
                        return this;
                    };
                    Choices.prototype.clearChoices = function() {
                        this._store.dispatch((0, choices_1.clearChoices)());
                        return this;
                    };
                    Choices.prototype.clearStore = function() {
                        this._store.dispatch((0, misc_1.clearAll)());
                        return this;
                    };
                    Choices.prototype.clearInput = function() {
                        var shouldSetInputWidth = !this._isSelectOneElement;
                        this.input.clear(shouldSetInputWidth);
                        if (!this._isTextElement && this._canSearch) {
                            this._isSearching = false;
                            this._store.dispatch((0, choices_1.activateChoices)(true));
                        }
                        return this;
                    };
                    Choices.prototype._render = function() {
                        if (this._store.isLoading()) return;
                        this._currentState = this._store.state;
                        var stateChanged = this._currentState.choices !== this._prevState.choices || this._currentState.groups !== this._prevState.groups || this._currentState.items !== this._prevState.items;
                        var shouldRenderChoices = this._isSelectElement;
                        var shouldRenderItems = this._currentState.items !== this._prevState.items;
                        if (!stateChanged) return;
                        if (shouldRenderChoices) this._renderChoices();
                        if (shouldRenderItems) this._renderItems();
                        this._prevState = this._currentState;
                    };
                    Choices.prototype._renderChoices = function() {
                        var _this = this;
                        var _a = this._store, activeGroups = _a.activeGroups, activeChoices = _a.activeChoices;
                        var choiceListFragment = document.createDocumentFragment();
                        this.choiceList.clear();
                        if (this.config.resetScrollPosition) requestAnimationFrame(function() {
                            return _this.choiceList.scrollToTop();
                        });
                        // If we have grouped options
                        if (activeGroups.length >= 1 && !this._isSearching) {
                            // If we have a placeholder choice along with groups
                            var activePlaceholders = activeChoices.filter(function(activeChoice) {
                                return activeChoice.placeholder === true && activeChoice.groupId === -1;
                            });
                            if (activePlaceholders.length >= 1) choiceListFragment = this._createChoicesFragment(activePlaceholders, choiceListFragment);
                            choiceListFragment = this._createGroupsFragment(activeGroups, activeChoices, choiceListFragment);
                        } else if (activeChoices.length >= 1) choiceListFragment = this._createChoicesFragment(activeChoices, choiceListFragment);
                        // If we have choices to show
                        if (choiceListFragment.childNodes && choiceListFragment.childNodes.length > 0) {
                            var activeItems = this._store.activeItems;
                            var canAddItem = this._canAddItem(activeItems, this.input.value);
                            // ...and we can select them
                            if (canAddItem.response) {
                                // ...append them and highlight the first choice
                                this.choiceList.append(choiceListFragment);
                                this._highlightChoice();
                            } else {
                                var notice = this._getTemplate("notice", canAddItem.notice);
                                this.choiceList.append(notice);
                            }
                        } else {
                            // Otherwise show a notice
                            var dropdownItem = void 0;
                            var notice = void 0;
                            if (this._isSearching) {
                                notice = typeof this.config.noResultsText === "function" ? this.config.noResultsText() : this.config.noResultsText;
                                dropdownItem = this._getTemplate("notice", notice, "no-results");
                            } else {
                                notice = typeof this.config.noChoicesText === "function" ? this.config.noChoicesText() : this.config.noChoicesText;
                                dropdownItem = this._getTemplate("notice", notice, "no-choices");
                            }
                            this.choiceList.append(dropdownItem);
                        }
                    };
                    Choices.prototype._renderItems = function() {
                        var activeItems = this._store.activeItems || [];
                        this.itemList.clear();
                        // Create a fragment to store our list items
                        // (so we don't have to update the DOM for each item)
                        var itemListFragment = this._createItemsFragment(activeItems);
                        // If we have items to add, append them
                        if (itemListFragment.childNodes) this.itemList.append(itemListFragment);
                    };
                    Choices.prototype._createGroupsFragment = function(groups, choices, fragment) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        var getGroupChoices = function(group) {
                            return choices.filter(function(choice) {
                                if (_this._isSelectOneElement) return choice.groupId === group.id;
                                return choice.groupId === group.id && (_this.config.renderSelectedChoices === "always" || !choice.selected);
                            });
                        };
                        // If sorting is enabled, filter groups
                        if (this.config.shouldSort) groups.sort(this.config.sorter);
                        groups.forEach(function(group) {
                            var groupChoices = getGroupChoices(group);
                            if (groupChoices.length >= 1) {
                                var dropdownGroup = _this._getTemplate("choiceGroup", group);
                                fragment.appendChild(dropdownGroup);
                                _this._createChoicesFragment(groupChoices, fragment, true);
                            }
                        });
                        return fragment;
                    };
                    Choices.prototype._createChoicesFragment = function(choices, fragment, withinGroup) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        if (withinGroup === void 0) withinGroup = false;
                        // Create a fragment to store our list items (so we don't have to update the DOM for each item)
                        var _a = this.config, renderSelectedChoices = _a.renderSelectedChoices, searchResultLimit = _a.searchResultLimit, renderChoiceLimit = _a.renderChoiceLimit;
                        var filter = this._isSearching ? utils_1.sortByScore : this.config.sorter;
                        var appendChoice = function(choice) {
                            var shouldRender = renderSelectedChoices === "auto" ? _this._isSelectOneElement || !choice.selected : true;
                            if (shouldRender) {
                                var dropdownItem = _this._getTemplate("choice", choice, _this.config.itemSelectText);
                                fragment.appendChild(dropdownItem);
                            }
                        };
                        var rendererableChoices = choices;
                        if (renderSelectedChoices === "auto" && !this._isSelectOneElement) rendererableChoices = choices.filter(function(choice) {
                            return !choice.selected;
                        });
                        // Split array into placeholders and "normal" choices
                        var _b = rendererableChoices.reduce(function(acc, choice) {
                            if (choice.placeholder) acc.placeholderChoices.push(choice);
                            else acc.normalChoices.push(choice);
                            return acc;
                        }, {
                            placeholderChoices: [],
                            normalChoices: []
                        }), placeholderChoices = _b.placeholderChoices, normalChoices = _b.normalChoices;
                        // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort || this._isSearching) normalChoices.sort(filter);
                        var choiceLimit = rendererableChoices.length;
                        // Prepend placeholeder
                        var sortedChoices = this._isSelectOneElement ? __spreadArray(__spreadArray([], placeholderChoices, true), normalChoices, true) : normalChoices;
                        if (this._isSearching) choiceLimit = searchResultLimit;
                        else if (renderChoiceLimit && renderChoiceLimit > 0 && !withinGroup) choiceLimit = renderChoiceLimit;
                        // Add each choice to dropdown within range
                        for(var i = 0; i < choiceLimit; i += 1)if (sortedChoices[i]) appendChoice(sortedChoices[i]);
                        return fragment;
                    };
                    Choices.prototype._createItemsFragment = function(items, fragment) {
                        var _this = this;
                        if (fragment === void 0) fragment = document.createDocumentFragment();
                        // Create fragment to add elements to
                        var _a = this.config, shouldSortItems = _a.shouldSortItems, sorter = _a.sorter, removeItemButton = _a.removeItemButton;
                        // If sorting is enabled, filter items
                        if (shouldSortItems && !this._isSelectOneElement) items.sort(sorter);
                        if (this._isTextElement) // Update the value of the hidden input
                        this.passedElement.value = items.map(function(_a) {
                            var value = _a.value;
                            return value;
                        }).join(this.config.delimiter);
                        else // Update the options of the hidden input
                        this.passedElement.options = items;
                        var addItemToFragment = function(item) {
                            // Create new list element
                            var listItem = _this._getTemplate("item", item, removeItemButton);
                            // Append it to list
                            fragment.appendChild(listItem);
                        };
                        // Add each list item to list
                        items.forEach(addItemToFragment);
                        return fragment;
                    };
                    Choices.prototype._triggerChange = function(value) {
                        if (value === undefined || value === null) return;
                        this.passedElement.triggerEvent(constants_1.EVENTS.change, {
                            value: value
                        });
                    };
                    Choices.prototype._selectPlaceholderChoice = function(placeholderChoice) {
                        this._addItem({
                            value: placeholderChoice.value,
                            label: placeholderChoice.label,
                            choiceId: placeholderChoice.id,
                            groupId: placeholderChoice.groupId,
                            placeholder: placeholderChoice.placeholder
                        });
                        this._triggerChange(placeholderChoice.value);
                    };
                    Choices.prototype._handleButtonAction = function(activeItems, element) {
                        if (!activeItems || !element || !this.config.removeItems || !this.config.removeItemButton) return;
                        var itemId = element.parentNode && element.parentNode.dataset.id;
                        var itemToRemove = itemId && activeItems.find(function(item) {
                            return item.id === parseInt(itemId, 10);
                        });
                        if (!itemToRemove) return;
                        // Remove item associated with button
                        this._removeItem(itemToRemove);
                        this._triggerChange(itemToRemove.value);
                        if (this._isSelectOneElement && this._store.placeholderChoice) this._selectPlaceholderChoice(this._store.placeholderChoice);
                    };
                    Choices.prototype._handleItemAction = function(activeItems, element, hasShiftKey) {
                        var _this = this;
                        if (hasShiftKey === void 0) hasShiftKey = false;
                        if (!activeItems || !element || !this.config.removeItems || this._isSelectOneElement) return;
                        var passedId = element.dataset.id;
                        // We only want to select one item with a click
                        // so we deselect any items that aren't the target
                        // unless shift is being pressed
                        activeItems.forEach(function(item) {
                            if (item.id === parseInt("".concat(passedId), 10) && !item.highlighted) _this.highlightItem(item);
                            else if (!hasShiftKey && item.highlighted) _this.unhighlightItem(item);
                        });
                        // Focus input as without focus, a user cannot do anything with a
                        // highlighted item
                        this.input.focus();
                    };
                    Choices.prototype._handleChoiceAction = function(activeItems, element) {
                        if (!activeItems || !element) return;
                        // If we are clicking on an option
                        var id = element.dataset.id;
                        var choice = id && this._store.getChoiceById(id);
                        if (!choice) return;
                        var passedKeyCode = activeItems[0] && activeItems[0].keyCode ? activeItems[0].keyCode : undefined;
                        var hasActiveDropdown = this.dropdown.isActive;
                        // Update choice keyCode
                        choice.keyCode = passedKeyCode;
                        this.passedElement.triggerEvent(constants_1.EVENTS.choice, {
                            choice: choice
                        });
                        if (!choice.selected && !choice.disabled) {
                            var canAddItem = this._canAddItem(activeItems, choice.value);
                            if (canAddItem.response) {
                                this._addItem({
                                    value: choice.value,
                                    label: choice.label,
                                    choiceId: choice.id,
                                    groupId: choice.groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder,
                                    keyCode: choice.keyCode
                                });
                                this._triggerChange(choice.value);
                            }
                        }
                        this.clearInput();
                        // We want to close the dropdown if we are dealing with a single select box
                        if (hasActiveDropdown && this._isSelectOneElement) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    Choices.prototype._handleBackspace = function(activeItems) {
                        if (!this.config.removeItems || !activeItems) return;
                        var lastItem = activeItems[activeItems.length - 1];
                        var hasHighlightedItems = activeItems.some(function(item) {
                            return item.highlighted;
                        });
                        // If editing the last item is allowed and there are not other selected items,
                        // we can edit the item value. Otherwise if we can remove items, remove all selected items
                        if (this.config.editItems && !hasHighlightedItems && lastItem) {
                            this.input.value = lastItem.value;
                            this.input.setWidth();
                            this._removeItem(lastItem);
                            this._triggerChange(lastItem.value);
                        } else {
                            if (!hasHighlightedItems) // Highlight last item if none already highlighted
                            this.highlightItem(lastItem, false);
                            this.removeHighlightedItems(true);
                        }
                    };
                    Choices.prototype._startLoading = function() {
                        this._store.dispatch((0, misc_1.setIsLoading)(true));
                    };
                    Choices.prototype._stopLoading = function() {
                        this._store.dispatch((0, misc_1.setIsLoading)(false));
                    };
                    Choices.prototype._handleLoadingState = function(setLoading) {
                        if (setLoading === void 0) setLoading = true;
                        var placeholderItem = this.itemList.getChild(".".concat(this.config.classNames.placeholder));
                        if (setLoading) {
                            this.disable();
                            this.containerOuter.addLoadingState();
                            if (this._isSelectOneElement) {
                                if (!placeholderItem) {
                                    placeholderItem = this._getTemplate("placeholder", this.config.loadingText);
                                    if (placeholderItem) this.itemList.append(placeholderItem);
                                } else placeholderItem.innerHTML = this.config.loadingText;
                            } else this.input.placeholder = this.config.loadingText;
                        } else {
                            this.enable();
                            this.containerOuter.removeLoadingState();
                            if (this._isSelectOneElement) {
                                if (placeholderItem) placeholderItem.innerHTML = this._placeholderValue || "";
                            } else this.input.placeholder = this._placeholderValue || "";
                        }
                    };
                    Choices.prototype._handleSearch = function(value) {
                        if (!this.input.isFocussed) return;
                        var choices = this._store.choices;
                        var _a = this.config, searchFloor = _a.searchFloor, searchChoices = _a.searchChoices;
                        var hasUnactiveChoices = choices.some(function(option) {
                            return !option.active;
                        });
                        // Check that we have a value to search and the input was an alphanumeric character
                        if (value !== null && typeof value !== "undefined" && value.length >= searchFloor) {
                            var resultCount = searchChoices ? this._searchChoices(value) : 0;
                            // Trigger search event
                            this.passedElement.triggerEvent(constants_1.EVENTS.search, {
                                value: value,
                                resultCount: resultCount
                            });
                        } else if (hasUnactiveChoices) {
                            // Otherwise reset choices to active
                            this._isSearching = false;
                            this._store.dispatch((0, choices_1.activateChoices)(true));
                        }
                    };
                    Choices.prototype._canAddItem = function(activeItems, value) {
                        var canAddItem = true;
                        var notice = typeof this.config.addItemText === "function" ? this.config.addItemText(value) : this.config.addItemText;
                        if (!this._isSelectOneElement) {
                            var isDuplicateValue = (0, utils_1.existsInArray)(activeItems, value);
                            if (this.config.maxItemCount > 0 && this.config.maxItemCount <= activeItems.length) {
                                // If there is a max entry limit and we have reached that limit
                                // don't update
                                canAddItem = false;
                                notice = typeof this.config.maxItemText === "function" ? this.config.maxItemText(this.config.maxItemCount) : this.config.maxItemText;
                            }
                            if (!this.config.duplicateItemsAllowed && isDuplicateValue && canAddItem) {
                                canAddItem = false;
                                notice = typeof this.config.uniqueItemText === "function" ? this.config.uniqueItemText(value) : this.config.uniqueItemText;
                            }
                            if (this._isTextElement && this.config.addItems && canAddItem && typeof this.config.addItemFilter === "function" && !this.config.addItemFilter(value)) {
                                canAddItem = false;
                                notice = typeof this.config.customAddItemText === "function" ? this.config.customAddItemText(value) : this.config.customAddItemText;
                            }
                        }
                        return {
                            response: canAddItem,
                            notice: notice
                        };
                    };
                    Choices.prototype._searchChoices = function(value) {
                        var newValue = typeof value === "string" ? value.trim() : value;
                        var currentValue = typeof this._currentValue === "string" ? this._currentValue.trim() : this._currentValue;
                        if (newValue.length < 1 && newValue === "".concat(currentValue, " ")) return 0;
                        // If new value matches the desired length and is not the same as the current value with a space
                        var haystack = this._store.searchableChoices;
                        var needle = newValue;
                        var options = Object.assign(this.config.fuseOptions, {
                            keys: __spreadArray([], this.config.searchFields, true),
                            includeMatches: true
                        });
                        var fuse = new fuse_js_1.default(haystack, options);
                        var results = fuse.search(needle); // see https://github.com/krisk/Fuse/issues/303
                        this._currentValue = newValue;
                        this._highlightPosition = 0;
                        this._isSearching = true;
                        this._store.dispatch((0, choices_1.filterChoices)(results));
                        return results.length;
                    };
                    Choices.prototype._addEventListeners = function() {
                        var documentElement = document.documentElement;
                        // capture events - can cancel event processing or propagation
                        documentElement.addEventListener("touchend", this._onTouchEnd, true);
                        this.containerOuter.element.addEventListener("keydown", this._onKeyDown, true);
                        this.containerOuter.element.addEventListener("mousedown", this._onMouseDown, true);
                        // passive events - doesn't call `preventDefault` or `stopPropagation`
                        documentElement.addEventListener("click", this._onClick, {
                            passive: true
                        });
                        documentElement.addEventListener("touchmove", this._onTouchMove, {
                            passive: true
                        });
                        this.dropdown.element.addEventListener("mouseover", this._onMouseOver, {
                            passive: true
                        });
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.addEventListener("focus", this._onFocus, {
                                passive: true
                            });
                            this.containerOuter.element.addEventListener("blur", this._onBlur, {
                                passive: true
                            });
                        }
                        this.input.element.addEventListener("keyup", this._onKeyUp, {
                            passive: true
                        });
                        this.input.element.addEventListener("focus", this._onFocus, {
                            passive: true
                        });
                        this.input.element.addEventListener("blur", this._onBlur, {
                            passive: true
                        });
                        if (this.input.element.form) this.input.element.form.addEventListener("reset", this._onFormReset, {
                            passive: true
                        });
                        this.input.addEventListeners();
                    };
                    Choices.prototype._removeEventListeners = function() {
                        var documentElement = document.documentElement;
                        documentElement.removeEventListener("touchend", this._onTouchEnd, true);
                        this.containerOuter.element.removeEventListener("keydown", this._onKeyDown, true);
                        this.containerOuter.element.removeEventListener("mousedown", this._onMouseDown, true);
                        documentElement.removeEventListener("click", this._onClick);
                        documentElement.removeEventListener("touchmove", this._onTouchMove);
                        this.dropdown.element.removeEventListener("mouseover", this._onMouseOver);
                        if (this._isSelectOneElement) {
                            this.containerOuter.element.removeEventListener("focus", this._onFocus);
                            this.containerOuter.element.removeEventListener("blur", this._onBlur);
                        }
                        this.input.element.removeEventListener("keyup", this._onKeyUp);
                        this.input.element.removeEventListener("focus", this._onFocus);
                        this.input.element.removeEventListener("blur", this._onBlur);
                        if (this.input.element.form) this.input.element.form.removeEventListener("reset", this._onFormReset);
                        this.input.removeEventListeners();
                    };
                    Choices.prototype._onKeyDown = function(event) {
                        var keyCode = event.keyCode;
                        var activeItems = this._store.activeItems;
                        var hasFocusedInput = this.input.isFocussed;
                        var hasActiveDropdown = this.dropdown.isActive;
                        var hasItems = this.itemList.hasChildren();
                        var keyString = String.fromCharCode(keyCode);
                        // eslint-disable-next-line no-control-regex
                        var wasPrintableChar = /[^\x00-\x1F]/.test(keyString);
                        var BACK_KEY = constants_1.KEY_CODES.BACK_KEY, DELETE_KEY = constants_1.KEY_CODES.DELETE_KEY, ENTER_KEY = constants_1.KEY_CODES.ENTER_KEY, A_KEY = constants_1.KEY_CODES.A_KEY, ESC_KEY = constants_1.KEY_CODES.ESC_KEY, UP_KEY = constants_1.KEY_CODES.UP_KEY, DOWN_KEY = constants_1.KEY_CODES.DOWN_KEY, PAGE_UP_KEY = constants_1.KEY_CODES.PAGE_UP_KEY, PAGE_DOWN_KEY = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                        if (!this._isTextElement && !hasActiveDropdown && wasPrintableChar) {
                            this.showDropdown();
                            if (!this.input.isFocussed) /*
          We update the input value with the pressed key as
          the input was not focussed at the time of key press
          therefore does not have the value of the key.
        */ this.input.value += event.key.toLowerCase();
                        }
                        switch(keyCode){
                            case A_KEY:
                                return this._onSelectKey(event, hasItems);
                            case ENTER_KEY:
                                return this._onEnterKey(event, activeItems, hasActiveDropdown);
                            case ESC_KEY:
                                return this._onEscapeKey(hasActiveDropdown);
                            case UP_KEY:
                            case PAGE_UP_KEY:
                            case DOWN_KEY:
                            case PAGE_DOWN_KEY:
                                return this._onDirectionKey(event, hasActiveDropdown);
                            case DELETE_KEY:
                            case BACK_KEY:
                                return this._onDeleteKey(event, activeItems, hasFocusedInput);
                            default:
                        }
                    };
                    Choices.prototype._onKeyUp = function(_a) {
                        var target = _a.target, keyCode = _a.keyCode;
                        var value = this.input.value;
                        var activeItems = this._store.activeItems;
                        var canAddItem = this._canAddItem(activeItems, value);
                        var backKey = constants_1.KEY_CODES.BACK_KEY, deleteKey = constants_1.KEY_CODES.DELETE_KEY;
                        // We are typing into a text input and have a value, we want to show a dropdown
                        // notice. Otherwise hide the dropdown
                        if (this._isTextElement) {
                            var canShowDropdownNotice = canAddItem.notice && value;
                            if (canShowDropdownNotice) {
                                var dropdownItem = this._getTemplate("notice", canAddItem.notice);
                                this.dropdown.element.innerHTML = dropdownItem.outerHTML;
                                this.showDropdown(true);
                            } else this.hideDropdown(true);
                        } else {
                            var wasRemovalKeyCode = keyCode === backKey || keyCode === deleteKey;
                            var userHasRemovedValue = wasRemovalKeyCode && target && !target.value;
                            var canReactivateChoices = !this._isTextElement && this._isSearching;
                            var canSearch = this._canSearch && canAddItem.response;
                            if (userHasRemovedValue && canReactivateChoices) {
                                this._isSearching = false;
                                this._store.dispatch((0, choices_1.activateChoices)(true));
                            } else if (canSearch) this._handleSearch(this.input.rawValue);
                        }
                        this._canSearch = this.config.searchEnabled;
                    };
                    Choices.prototype._onSelectKey = function(event, hasItems) {
                        var ctrlKey = event.ctrlKey, metaKey = event.metaKey;
                        var hasCtrlDownKeyPressed = ctrlKey || metaKey;
                        // If CTRL + A or CMD + A have been pressed and there are items to select
                        if (hasCtrlDownKeyPressed && hasItems) {
                            this._canSearch = false;
                            var shouldHightlightAll = this.config.removeItems && !this.input.value && this.input.element === document.activeElement;
                            if (shouldHightlightAll) this.highlightAll();
                        }
                    };
                    Choices.prototype._onEnterKey = function(event, activeItems, hasActiveDropdown) {
                        var target = event.target;
                        var enterKey = constants_1.KEY_CODES.ENTER_KEY;
                        var targetWasButton = target && target.hasAttribute("data-button");
                        if (this._isTextElement && target && target.value) {
                            var value = this.input.value;
                            var canAddItem = this._canAddItem(activeItems, value);
                            if (canAddItem.response) {
                                this.hideDropdown(true);
                                this._addItem({
                                    value: value
                                });
                                this._triggerChange(value);
                                this.clearInput();
                            }
                        }
                        if (targetWasButton) {
                            this._handleButtonAction(activeItems, target);
                            event.preventDefault();
                        }
                        if (hasActiveDropdown) {
                            var highlightedChoice = this.dropdown.getChild(".".concat(this.config.classNames.highlightedState));
                            if (highlightedChoice) {
                                // add enter keyCode value
                                if (activeItems[0]) activeItems[0].keyCode = enterKey; // eslint-disable-line no-param-reassign
                                this._handleChoiceAction(activeItems, highlightedChoice);
                            }
                            event.preventDefault();
                        } else if (this._isSelectOneElement) {
                            this.showDropdown();
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onEscapeKey = function(hasActiveDropdown) {
                        if (hasActiveDropdown) {
                            this.hideDropdown(true);
                            this.containerOuter.focus();
                        }
                    };
                    Choices.prototype._onDirectionKey = function(event, hasActiveDropdown) {
                        var keyCode = event.keyCode, metaKey = event.metaKey;
                        var downKey = constants_1.KEY_CODES.DOWN_KEY, pageUpKey = constants_1.KEY_CODES.PAGE_UP_KEY, pageDownKey = constants_1.KEY_CODES.PAGE_DOWN_KEY;
                        // If up or down key is pressed, traverse through options
                        if (hasActiveDropdown || this._isSelectOneElement) {
                            this.showDropdown();
                            this._canSearch = false;
                            var directionInt = keyCode === downKey || keyCode === pageDownKey ? 1 : -1;
                            var skipKey = metaKey || keyCode === pageDownKey || keyCode === pageUpKey;
                            var selectableChoiceIdentifier = "[data-choice-selectable]";
                            var nextEl = void 0;
                            if (skipKey) {
                                if (directionInt > 0) nextEl = this.dropdown.element.querySelector("".concat(selectableChoiceIdentifier, ":last-of-type"));
                                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                            } else {
                                var currentEl = this.dropdown.element.querySelector(".".concat(this.config.classNames.highlightedState));
                                if (currentEl) nextEl = (0, utils_1.getAdjacentEl)(currentEl, selectableChoiceIdentifier, directionInt);
                                else nextEl = this.dropdown.element.querySelector(selectableChoiceIdentifier);
                            }
                            if (nextEl) {
                                // We prevent default to stop the cursor moving
                                // when pressing the arrow
                                if (!(0, utils_1.isScrolledIntoView)(nextEl, this.choiceList.element, directionInt)) this.choiceList.scrollToChildElement(nextEl, directionInt);
                                this._highlightChoice(nextEl);
                            }
                            // Prevent default to maintain cursor position whilst
                            // traversing dropdown options
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onDeleteKey = function(event, activeItems, hasFocusedInput) {
                        var target = event.target;
                        // If backspace or delete key is pressed and the input has no value
                        if (!this._isSelectOneElement && !target.value && hasFocusedInput) {
                            this._handleBackspace(activeItems);
                            event.preventDefault();
                        }
                    };
                    Choices.prototype._onTouchMove = function() {
                        if (this._wasTap) this._wasTap = false;
                    };
                    Choices.prototype._onTouchEnd = function(event) {
                        var target = (event || event.touches[0]).target;
                        var touchWasWithinContainer = this._wasTap && this.containerOuter.element.contains(target);
                        if (touchWasWithinContainer) {
                            var containerWasExactTarget = target === this.containerOuter.element || target === this.containerInner.element;
                            if (containerWasExactTarget) {
                                if (this._isTextElement) this.input.focus();
                                else if (this._isSelectMultipleElement) this.showDropdown();
                            }
                            // Prevents focus event firing
                            event.stopPropagation();
                        }
                        this._wasTap = true;
                    };
                    /**
   * Handles mousedown event in capture mode for containetOuter.element
   */ Choices.prototype._onMouseDown = function(event) {
                        var target = event.target;
                        if (!(target instanceof HTMLElement)) return;
                        // If we have our mouse down on the scrollbar and are on IE11...
                        if (IS_IE11 && this.choiceList.element.contains(target)) {
                            // check if click was on a scrollbar area
                            var firstChoice = this.choiceList.element.firstElementChild;
                            var isOnScrollbar = this._direction === "ltr" ? event.offsetX >= firstChoice.offsetWidth : event.offsetX < firstChoice.offsetLeft;
                            this._isScrollingOnIe = isOnScrollbar;
                        }
                        if (target === this.input.element) return;
                        var item = target.closest("[data-button],[data-item],[data-choice]");
                        if (item instanceof HTMLElement) {
                            var hasShiftKey = event.shiftKey;
                            var activeItems = this._store.activeItems;
                            var dataset = item.dataset;
                            if ("button" in dataset) this._handleButtonAction(activeItems, item);
                            else if ("item" in dataset) this._handleItemAction(activeItems, item, hasShiftKey);
                            else if ("choice" in dataset) this._handleChoiceAction(activeItems, item);
                        }
                        event.preventDefault();
                    };
                    /**
   * Handles mouseover event over this.dropdown
   * @param {MouseEvent} event
   */ Choices.prototype._onMouseOver = function(_a) {
                        var target = _a.target;
                        if (target instanceof HTMLElement && "choice" in target.dataset) this._highlightChoice(target);
                    };
                    Choices.prototype._onClick = function(_a) {
                        var target = _a.target;
                        var clickWasWithinContainer = this.containerOuter.element.contains(target);
                        if (clickWasWithinContainer) {
                            if (!this.dropdown.isActive && !this.containerOuter.isDisabled) {
                                if (this._isTextElement) {
                                    if (document.activeElement !== this.input.element) this.input.focus();
                                } else {
                                    this.showDropdown();
                                    this.containerOuter.focus();
                                }
                            } else if (this._isSelectOneElement && target !== this.input.element && !this.dropdown.element.contains(target)) this.hideDropdown();
                        } else {
                            var hasHighlightedItems = this._store.highlightedActiveItems.length > 0;
                            if (hasHighlightedItems) this.unhighlightAll();
                            this.containerOuter.removeFocusState();
                            this.hideDropdown(true);
                        }
                    };
                    Choices.prototype._onFocus = function(_a) {
                        var _b;
                        var _this = this;
                        var target = _a.target;
                        var focusWasWithinContainer = target && this.containerOuter.element.contains(target);
                        if (!focusWasWithinContainer) return;
                        var focusActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                            if (target === _this.input.element) _this.containerOuter.addFocusState();
                        }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                            _this.containerOuter.addFocusState();
                            if (target === _this.input.element) _this.showDropdown(true);
                        }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                            if (target === _this.input.element) {
                                _this.showDropdown(true);
                                // If element is a select box, the focused element is the container and the dropdown
                                // isn't already open, focus and show dropdown
                                _this.containerOuter.addFocusState();
                            }
                        }, _b);
                        focusActions[this.passedElement.element.type]();
                    };
                    Choices.prototype._onBlur = function(_a) {
                        var _b;
                        var _this = this;
                        var target = _a.target;
                        var blurWasWithinContainer = target && this.containerOuter.element.contains(target);
                        if (blurWasWithinContainer && !this._isScrollingOnIe) {
                            var activeItems = this._store.activeItems;
                            var hasHighlightedItems_1 = activeItems.some(function(item) {
                                return item.highlighted;
                            });
                            var blurActions = (_b = {}, _b[constants_1.TEXT_TYPE] = function() {
                                if (target === _this.input.element) {
                                    _this.containerOuter.removeFocusState();
                                    if (hasHighlightedItems_1) _this.unhighlightAll();
                                    _this.hideDropdown(true);
                                }
                            }, _b[constants_1.SELECT_ONE_TYPE] = function() {
                                _this.containerOuter.removeFocusState();
                                if (target === _this.input.element || target === _this.containerOuter.element && !_this._canSearch) _this.hideDropdown(true);
                            }, _b[constants_1.SELECT_MULTIPLE_TYPE] = function() {
                                if (target === _this.input.element) {
                                    _this.containerOuter.removeFocusState();
                                    _this.hideDropdown(true);
                                    if (hasHighlightedItems_1) _this.unhighlightAll();
                                }
                            }, _b);
                            blurActions[this.passedElement.element.type]();
                        } else {
                            // On IE11, clicking the scollbar blurs our input and thus
                            // closes the dropdown. To stop this, we refocus our input
                            // if we know we are on IE *and* are scrolling.
                            this._isScrollingOnIe = false;
                            this.input.element.focus();
                        }
                    };
                    Choices.prototype._onFormReset = function() {
                        this._store.dispatch((0, misc_1.resetTo)(this._initialState));
                    };
                    Choices.prototype._highlightChoice = function(el) {
                        var _this = this;
                        if (el === void 0) el = null;
                        var choices = Array.from(this.dropdown.element.querySelectorAll("[data-choice-selectable]"));
                        if (!choices.length) return;
                        var passedEl = el;
                        var highlightedChoices = Array.from(this.dropdown.element.querySelectorAll(".".concat(this.config.classNames.highlightedState)));
                        // Remove any highlighted choices
                        highlightedChoices.forEach(function(choice) {
                            choice.classList.remove(_this.config.classNames.highlightedState);
                            choice.setAttribute("aria-selected", "false");
                        });
                        if (passedEl) this._highlightPosition = choices.indexOf(passedEl);
                        else {
                            // Highlight choice based on last known highlight location
                            if (choices.length > this._highlightPosition) // If we have an option to highlight
                            passedEl = choices[this._highlightPosition];
                            else // Otherwise highlight the option before
                            passedEl = choices[choices.length - 1];
                            if (!passedEl) passedEl = choices[0];
                        }
                        passedEl.classList.add(this.config.classNames.highlightedState);
                        passedEl.setAttribute("aria-selected", "true");
                        this.passedElement.triggerEvent(constants_1.EVENTS.highlightChoice, {
                            el: passedEl
                        });
                        if (this.dropdown.isActive) {
                            // IE11 ignores aria-label and blocks virtual keyboard
                            // if aria-activedescendant is set without a dropdown
                            this.input.setActiveDescendant(passedEl.id);
                            this.containerOuter.setActiveDescendant(passedEl.id);
                        }
                    };
                    Choices.prototype._addItem = function(_a) {
                        var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.choiceId, choiceId = _c === void 0 ? -1 : _c, _d = _a.groupId, groupId = _d === void 0 ? -1 : _d, _e = _a.customProperties, customProperties = _e === void 0 ? {} : _e, _f = _a.placeholder, placeholder = _f === void 0 ? false : _f, _g = _a.keyCode, keyCode = _g === void 0 ? -1 : _g;
                        var passedValue = typeof value === "string" ? value.trim() : value;
                        var items = this._store.items;
                        var passedLabel = label || passedValue;
                        var passedOptionId = choiceId || -1;
                        var group = groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        var id = items ? items.length + 1 : 1;
                        // If a prepended value has been passed, prepend it
                        if (this.config.prependValue) passedValue = this.config.prependValue + passedValue.toString();
                        // If an appended value has been passed, append it
                        if (this.config.appendValue) passedValue += this.config.appendValue.toString();
                        this._store.dispatch((0, items_1.addItem)({
                            value: passedValue,
                            label: passedLabel,
                            id: id,
                            choiceId: passedOptionId,
                            groupId: groupId,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        }));
                        if (this._isSelectOneElement) this.removeActiveItems(id);
                        // Trigger change event
                        this.passedElement.triggerEvent(constants_1.EVENTS.addItem, {
                            id: id,
                            value: passedValue,
                            label: passedLabel,
                            customProperties: customProperties,
                            groupValue: group && group.value ? group.value : null,
                            keyCode: keyCode
                        });
                    };
                    Choices.prototype._removeItem = function(item) {
                        var id = item.id, value = item.value, label = item.label, customProperties = item.customProperties, choiceId = item.choiceId, groupId = item.groupId;
                        var group = groupId && groupId >= 0 ? this._store.getGroupById(groupId) : null;
                        if (!id || !choiceId) return;
                        this._store.dispatch((0, items_1.removeItem)(id, choiceId));
                        this.passedElement.triggerEvent(constants_1.EVENTS.removeItem, {
                            id: id,
                            value: value,
                            label: label,
                            customProperties: customProperties,
                            groupValue: group && group.value ? group.value : null
                        });
                    };
                    Choices.prototype._addChoice = function(_a) {
                        var value = _a.value, _b = _a.label, label = _b === void 0 ? null : _b, _c = _a.isSelected, isSelected = _c === void 0 ? false : _c, _d = _a.isDisabled, isDisabled = _d === void 0 ? false : _d, _e = _a.groupId, groupId = _e === void 0 ? -1 : _e, _f = _a.customProperties, customProperties = _f === void 0 ? {} : _f, _g = _a.placeholder, placeholder = _g === void 0 ? false : _g, _h = _a.keyCode, keyCode = _h === void 0 ? -1 : _h;
                        if (typeof value === "undefined" || value === null) return;
                        // Generate unique id
                        var choices = this._store.choices;
                        var choiceLabel = label || value;
                        var choiceId = choices ? choices.length + 1 : 1;
                        var choiceElementId = "".concat(this._baseId, "-").concat(this._idNames.itemChoice, "-").concat(choiceId);
                        this._store.dispatch((0, choices_1.addChoice)({
                            id: choiceId,
                            groupId: groupId,
                            elementId: choiceElementId,
                            value: value,
                            label: choiceLabel,
                            disabled: isDisabled,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        }));
                        if (isSelected) this._addItem({
                            value: value,
                            label: choiceLabel,
                            choiceId: choiceId,
                            customProperties: customProperties,
                            placeholder: placeholder,
                            keyCode: keyCode
                        });
                    };
                    Choices.prototype._addGroup = function(_a) {
                        var _this = this;
                        var group = _a.group, id = _a.id, _b = _a.valueKey, valueKey = _b === void 0 ? "value" : _b, _c = _a.labelKey, labelKey = _c === void 0 ? "label" : _c;
                        var groupChoices = (0, utils_1.isType)("Object", group) ? group.choices : Array.from(group.getElementsByTagName("OPTION"));
                        var groupId = id || Math.floor(new Date().valueOf() * Math.random());
                        var isDisabled = group.disabled ? group.disabled : false;
                        if (groupChoices) {
                            this._store.dispatch((0, groups_1.addGroup)({
                                value: group.label,
                                id: groupId,
                                active: true,
                                disabled: isDisabled
                            }));
                            var addGroupChoices = function(choice) {
                                var isOptDisabled = choice.disabled || choice.parentNode && choice.parentNode.disabled;
                                _this._addChoice({
                                    value: choice[valueKey],
                                    label: (0, utils_1.isType)("Object", choice) ? choice[labelKey] : choice.innerHTML,
                                    isSelected: choice.selected,
                                    isDisabled: isOptDisabled,
                                    groupId: groupId,
                                    customProperties: choice.customProperties,
                                    placeholder: choice.placeholder
                                });
                            };
                            groupChoices.forEach(addGroupChoices);
                        } else this._store.dispatch((0, groups_1.addGroup)({
                            value: group.label,
                            id: group.id,
                            active: false,
                            disabled: group.disabled
                        }));
                    };
                    Choices.prototype._getTemplate = function(template) {
                        var _a;
                        var args = [];
                        for(var _i = 1; _i < arguments.length; _i++)args[_i - 1] = arguments[_i];
                        return (_a = this._templates[template]).call.apply(_a, __spreadArray([
                            this,
                            this.config
                        ], args, false));
                    };
                    Choices.prototype._createTemplates = function() {
                        var callbackOnCreateTemplates = this.config.callbackOnCreateTemplates;
                        var userTemplates = {};
                        if (callbackOnCreateTemplates && typeof callbackOnCreateTemplates === "function") userTemplates = callbackOnCreateTemplates.call(this, utils_1.strToEl);
                        this._templates = (0, deepmerge_1.default)(templates_1.default, userTemplates);
                    };
                    Choices.prototype._createElements = function() {
                        this.containerOuter = new components_1.Container({
                            element: this._getTemplate("containerOuter", this._direction, this._isSelectElement, this._isSelectOneElement, this.config.searchEnabled, this.passedElement.element.type, this.config.labelId),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.containerInner = new components_1.Container({
                            element: this._getTemplate("containerInner"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            position: this.config.position
                        });
                        this.input = new components_1.Input({
                            element: this._getTemplate("input", this._placeholderValue),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type,
                            preventPaste: !this.config.paste
                        });
                        this.choiceList = new components_1.List({
                            element: this._getTemplate("choiceList", this._isSelectOneElement)
                        });
                        this.itemList = new components_1.List({
                            element: this._getTemplate("itemList", this._isSelectOneElement)
                        });
                        this.dropdown = new components_1.Dropdown({
                            element: this._getTemplate("dropdown"),
                            classNames: this.config.classNames,
                            type: this.passedElement.element.type
                        });
                    };
                    Choices.prototype._createStructure = function() {
                        // Hide original element
                        this.passedElement.conceal();
                        // Wrap input in container preserving DOM ordering
                        this.containerInner.wrap(this.passedElement.element);
                        // Wrapper inner container with outer container
                        this.containerOuter.wrap(this.containerInner.element);
                        if (this._isSelectOneElement) this.input.placeholder = this.config.searchPlaceholderValue || "";
                        else if (this._placeholderValue) {
                            this.input.placeholder = this._placeholderValue;
                            this.input.setWidth();
                        }
                        this.containerOuter.element.appendChild(this.containerInner.element);
                        this.containerOuter.element.appendChild(this.dropdown.element);
                        this.containerInner.element.appendChild(this.itemList.element);
                        if (!this._isTextElement) this.dropdown.element.appendChild(this.choiceList.element);
                        if (!this._isSelectOneElement) this.containerInner.element.appendChild(this.input.element);
                        else if (this.config.searchEnabled) this.dropdown.element.insertBefore(this.input.element, this.dropdown.element.firstChild);
                        if (this._isSelectElement) {
                            this._highlightPosition = 0;
                            this._isSearching = false;
                            this._startLoading();
                            if (this._presetGroups.length) this._addPredefinedGroups(this._presetGroups);
                            else this._addPredefinedChoices(this._presetChoices);
                            this._stopLoading();
                        }
                        if (this._isTextElement) this._addPredefinedItems(this._presetItems);
                    };
                    Choices.prototype._addPredefinedGroups = function(groups) {
                        var _this = this;
                        // If we have a placeholder option
                        var placeholderChoice = this.passedElement.placeholderOption;
                        if (placeholderChoice && placeholderChoice.parentNode && placeholderChoice.parentNode.tagName === "SELECT") this._addChoice({
                            value: placeholderChoice.value,
                            label: placeholderChoice.innerHTML,
                            isSelected: placeholderChoice.selected,
                            isDisabled: placeholderChoice.disabled,
                            placeholder: true
                        });
                        groups.forEach(function(group) {
                            return _this._addGroup({
                                group: group,
                                id: group.id || null
                            });
                        });
                    };
                    Choices.prototype._addPredefinedChoices = function(choices) {
                        var _this = this;
                        // If sorting is enabled or the user is searching, filter choices
                        if (this.config.shouldSort) choices.sort(this.config.sorter);
                        var hasSelectedChoice = choices.some(function(choice) {
                            return choice.selected;
                        });
                        var firstEnabledChoiceIndex = choices.findIndex(function(choice) {
                            return choice.disabled === undefined || !choice.disabled;
                        });
                        choices.forEach(function(choice, index) {
                            var _a = choice.value, value = _a === void 0 ? "" : _a, label = choice.label, customProperties = choice.customProperties, placeholder = choice.placeholder;
                            if (_this._isSelectElement) {
                                // If the choice is actually a group
                                if (choice.choices) _this._addGroup({
                                    group: choice,
                                    id: choice.id || null
                                });
                                else {
                                    /**
           * If there is a selected choice already or the choice is not the first in
           * the array, add each choice normally.
           *
           * Otherwise we pre-select the first enabled choice in the array ("select-one" only)
           */ var shouldPreselect = _this._isSelectOneElement && !hasSelectedChoice && index === firstEnabledChoiceIndex;
                                    var isSelected = shouldPreselect ? true : choice.selected;
                                    var isDisabled = choice.disabled;
                                    _this._addChoice({
                                        value: value,
                                        label: label,
                                        isSelected: !!isSelected,
                                        isDisabled: !!isDisabled,
                                        placeholder: !!placeholder,
                                        customProperties: customProperties
                                    });
                                }
                            } else _this._addChoice({
                                value: value,
                                label: label,
                                isSelected: !!choice.selected,
                                isDisabled: !!choice.disabled,
                                placeholder: !!choice.placeholder,
                                customProperties: customProperties
                            });
                        });
                    };
                    Choices.prototype._addPredefinedItems = function(items) {
                        var _this = this;
                        items.forEach(function(item) {
                            if (typeof item === "object" && item.value) _this._addItem({
                                value: item.value,
                                label: item.label,
                                choiceId: item.id,
                                customProperties: item.customProperties,
                                placeholder: item.placeholder
                            });
                            if (typeof item === "string") _this._addItem({
                                value: item
                            });
                        });
                    };
                    Choices.prototype._setChoiceOrItem = function(item) {
                        var _this = this;
                        var itemType = (0, utils_1.getType)(item).toLowerCase();
                        var handleType = {
                            object: function() {
                                if (!item.value) return;
                                // If we are dealing with a select input, we need to create an option first
                                // that is then selected. For text inputs we can just add items normally.
                                if (!_this._isTextElement) _this._addChoice({
                                    value: item.value,
                                    label: item.label,
                                    isSelected: true,
                                    isDisabled: false,
                                    customProperties: item.customProperties,
                                    placeholder: item.placeholder
                                });
                                else _this._addItem({
                                    value: item.value,
                                    label: item.label,
                                    choiceId: item.id,
                                    customProperties: item.customProperties,
                                    placeholder: item.placeholder
                                });
                            },
                            string: function() {
                                if (!_this._isTextElement) _this._addChoice({
                                    value: item,
                                    label: item,
                                    isSelected: true,
                                    isDisabled: false
                                });
                                else _this._addItem({
                                    value: item
                                });
                            }
                        };
                        handleType[itemType]();
                    };
                    Choices.prototype._findAndSelectChoiceByValue = function(value) {
                        var _this = this;
                        var choices = this._store.choices;
                        // Check 'value' property exists and the choice isn't already selected
                        var foundChoice = choices.find(function(choice) {
                            return _this.config.valueComparer(choice.value, value);
                        });
                        if (foundChoice && !foundChoice.selected) this._addItem({
                            value: foundChoice.value,
                            label: foundChoice.label,
                            choiceId: foundChoice.id,
                            groupId: foundChoice.groupId,
                            customProperties: foundChoice.customProperties,
                            placeholder: foundChoice.placeholder,
                            keyCode: foundChoice.keyCode
                        });
                    };
                    Choices.prototype._generatePlaceholderValue = function() {
                        if (this._isSelectElement && this.passedElement.placeholderOption) {
                            var placeholderOption = this.passedElement.placeholderOption;
                            return placeholderOption ? placeholderOption.text : null;
                        }
                        var _a = this.config, placeholder = _a.placeholder, placeholderValue = _a.placeholderValue;
                        var dataset = this.passedElement.element.dataset;
                        if (placeholder) {
                            if (placeholderValue) return placeholderValue;
                            if (dataset.placeholder) return dataset.placeholder;
                        }
                        return null;
                    };
                    return Choices;
                }();
                exports["default"] = Choices;
            /***/ },
            /***/ 613: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var constants_1 = __webpack_require__(883);
                var Container = /** @class */ function() {
                    function Container(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames, position = _a.position;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.position = position;
                        this.isOpen = false;
                        this.isFlipped = false;
                        this.isFocussed = false;
                        this.isDisabled = false;
                        this.isLoading = false;
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    Container.prototype.addEventListeners = function() {
                        this.element.addEventListener("focus", this._onFocus);
                        this.element.addEventListener("blur", this._onBlur);
                    };
                    Container.prototype.removeEventListeners = function() {
                        this.element.removeEventListener("focus", this._onFocus);
                        this.element.removeEventListener("blur", this._onBlur);
                    };
                    /**
   * Determine whether container should be flipped based on passed
   * dropdown position
   */ Container.prototype.shouldFlip = function(dropdownPos) {
                        if (typeof dropdownPos !== "number") return false;
                        // If flip is enabled and the dropdown bottom position is
                        // greater than the window height flip the dropdown.
                        var shouldFlip = false;
                        if (this.position === "auto") shouldFlip = !window.matchMedia("(min-height: ".concat(dropdownPos + 1, "px)")).matches;
                        else if (this.position === "top") shouldFlip = true;
                        return shouldFlip;
                    };
                    Container.prototype.setActiveDescendant = function(activeDescendantID) {
                        this.element.setAttribute("aria-activedescendant", activeDescendantID);
                    };
                    Container.prototype.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant");
                    };
                    Container.prototype.open = function(dropdownPos) {
                        this.element.classList.add(this.classNames.openState);
                        this.element.setAttribute("aria-expanded", "true");
                        this.isOpen = true;
                        if (this.shouldFlip(dropdownPos)) {
                            this.element.classList.add(this.classNames.flippedState);
                            this.isFlipped = true;
                        }
                    };
                    Container.prototype.close = function() {
                        this.element.classList.remove(this.classNames.openState);
                        this.element.setAttribute("aria-expanded", "false");
                        this.removeActiveDescendant();
                        this.isOpen = false;
                        // A dropdown flips if it does not have space within the page
                        if (this.isFlipped) {
                            this.element.classList.remove(this.classNames.flippedState);
                            this.isFlipped = false;
                        }
                    };
                    Container.prototype.focus = function() {
                        if (!this.isFocussed) this.element.focus();
                    };
                    Container.prototype.addFocusState = function() {
                        this.element.classList.add(this.classNames.focusState);
                    };
                    Container.prototype.removeFocusState = function() {
                        this.element.classList.remove(this.classNames.focusState);
                    };
                    Container.prototype.enable = function() {
                        this.element.classList.remove(this.classNames.disabledState);
                        this.element.removeAttribute("aria-disabled");
                        if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "0");
                        this.isDisabled = false;
                    };
                    Container.prototype.disable = function() {
                        this.element.classList.add(this.classNames.disabledState);
                        this.element.setAttribute("aria-disabled", "true");
                        if (this.type === constants_1.SELECT_ONE_TYPE) this.element.setAttribute("tabindex", "-1");
                        this.isDisabled = true;
                    };
                    Container.prototype.wrap = function(element) {
                        (0, utils_1.wrap)(element, this.element);
                    };
                    Container.prototype.unwrap = function(element) {
                        if (this.element.parentNode) {
                            // Move passed element outside this element
                            this.element.parentNode.insertBefore(element, this.element);
                            // Remove this element
                            this.element.parentNode.removeChild(this.element);
                        }
                    };
                    Container.prototype.addLoadingState = function() {
                        this.element.classList.add(this.classNames.loadingState);
                        this.element.setAttribute("aria-busy", "true");
                        this.isLoading = true;
                    };
                    Container.prototype.removeLoadingState = function() {
                        this.element.classList.remove(this.classNames.loadingState);
                        this.element.removeAttribute("aria-busy");
                        this.isLoading = false;
                    };
                    Container.prototype._onFocus = function() {
                        this.isFocussed = true;
                    };
                    Container.prototype._onBlur = function() {
                        this.isFocussed = false;
                    };
                    return Container;
                }();
                exports["default"] = Container;
            /***/ },
            /***/ 217: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var Dropdown = /** @class */ function() {
                    function Dropdown(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        this.type = type;
                        this.isActive = false;
                    }
                    Object.defineProperty(Dropdown.prototype, "distanceFromTopWindow", {
                        /**
     * Bottom position of dropdown in viewport coordinates
     */ get: function() {
                            return this.element.getBoundingClientRect().bottom;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Dropdown.prototype.getChild = function(selector) {
                        return this.element.querySelector(selector);
                    };
                    /**
   * Show dropdown to user by adding active state class
   */ Dropdown.prototype.show = function() {
                        this.element.classList.add(this.classNames.activeState);
                        this.element.setAttribute("aria-expanded", "true");
                        this.isActive = true;
                        return this;
                    };
                    /**
   * Hide dropdown from user
   */ Dropdown.prototype.hide = function() {
                        this.element.classList.remove(this.classNames.activeState);
                        this.element.setAttribute("aria-expanded", "false");
                        this.isActive = false;
                        return this;
                    };
                    return Dropdown;
                }();
                exports["default"] = Dropdown;
            /***/ },
            /***/ 520: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.WrappedSelect = exports.WrappedInput = exports.List = exports.Input = exports.Container = exports.Dropdown = void 0;
                var dropdown_1 = __importDefault(__webpack_require__(217));
                exports.Dropdown = dropdown_1.default;
                var container_1 = __importDefault(__webpack_require__(613));
                exports.Container = container_1.default;
                var input_1 = __importDefault(__webpack_require__(11));
                exports.Input = input_1.default;
                var list_1 = __importDefault(__webpack_require__(624));
                exports.List = list_1.default;
                var wrapped_input_1 = __importDefault(__webpack_require__(541));
                exports.WrappedInput = wrapped_input_1.default;
                var wrapped_select_1 = __importDefault(__webpack_require__(982));
                exports.WrappedSelect = wrapped_select_1.default;
            /***/ },
            /***/ 11: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var constants_1 = __webpack_require__(883);
                var Input = /** @class */ function() {
                    function Input(_a) {
                        var element = _a.element, type = _a.type, classNames = _a.classNames, preventPaste = _a.preventPaste;
                        this.element = element;
                        this.type = type;
                        this.classNames = classNames;
                        this.preventPaste = preventPaste;
                        this.isFocussed = this.element.isEqualNode(document.activeElement);
                        this.isDisabled = element.disabled;
                        this._onPaste = this._onPaste.bind(this);
                        this._onInput = this._onInput.bind(this);
                        this._onFocus = this._onFocus.bind(this);
                        this._onBlur = this._onBlur.bind(this);
                    }
                    Object.defineProperty(Input.prototype, "placeholder", {
                        set: function(placeholder) {
                            this.element.placeholder = placeholder;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Input.prototype, "value", {
                        get: function() {
                            return (0, utils_1.sanitise)(this.element.value);
                        },
                        set: function(value) {
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Input.prototype, "rawValue", {
                        get: function() {
                            return this.element.value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Input.prototype.addEventListeners = function() {
                        this.element.addEventListener("paste", this._onPaste);
                        this.element.addEventListener("input", this._onInput, {
                            passive: true
                        });
                        this.element.addEventListener("focus", this._onFocus, {
                            passive: true
                        });
                        this.element.addEventListener("blur", this._onBlur, {
                            passive: true
                        });
                    };
                    Input.prototype.removeEventListeners = function() {
                        this.element.removeEventListener("input", this._onInput);
                        this.element.removeEventListener("paste", this._onPaste);
                        this.element.removeEventListener("focus", this._onFocus);
                        this.element.removeEventListener("blur", this._onBlur);
                    };
                    Input.prototype.enable = function() {
                        this.element.removeAttribute("disabled");
                        this.isDisabled = false;
                    };
                    Input.prototype.disable = function() {
                        this.element.setAttribute("disabled", "");
                        this.isDisabled = true;
                    };
                    Input.prototype.focus = function() {
                        if (!this.isFocussed) this.element.focus();
                    };
                    Input.prototype.blur = function() {
                        if (this.isFocussed) this.element.blur();
                    };
                    Input.prototype.clear = function(setWidth) {
                        if (setWidth === void 0) setWidth = true;
                        if (this.element.value) this.element.value = "";
                        if (setWidth) this.setWidth();
                        return this;
                    };
                    /**
   * Set the correct input width based on placeholder
   * value or input value
   */ Input.prototype.setWidth = function() {
                        // Resize input to contents or placeholder
                        var _a = this.element, style = _a.style, value = _a.value, placeholder = _a.placeholder;
                        style.minWidth = "".concat(placeholder.length + 1, "ch");
                        style.width = "".concat(value.length + 1, "ch");
                    };
                    Input.prototype.setActiveDescendant = function(activeDescendantID) {
                        this.element.setAttribute("aria-activedescendant", activeDescendantID);
                    };
                    Input.prototype.removeActiveDescendant = function() {
                        this.element.removeAttribute("aria-activedescendant");
                    };
                    Input.prototype._onInput = function() {
                        if (this.type !== constants_1.SELECT_ONE_TYPE) this.setWidth();
                    };
                    Input.prototype._onPaste = function(event) {
                        if (this.preventPaste) event.preventDefault();
                    };
                    Input.prototype._onFocus = function() {
                        this.isFocussed = true;
                    };
                    Input.prototype._onBlur = function() {
                        this.isFocussed = false;
                    };
                    return Input;
                }();
                exports["default"] = Input;
            /***/ },
            /***/ 624: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var constants_1 = __webpack_require__(883);
                var List = /** @class */ function() {
                    function List(_a) {
                        var element = _a.element;
                        this.element = element;
                        this.scrollPos = this.element.scrollTop;
                        this.height = this.element.offsetHeight;
                    }
                    List.prototype.clear = function() {
                        this.element.innerHTML = "";
                    };
                    List.prototype.append = function(node) {
                        this.element.appendChild(node);
                    };
                    List.prototype.getChild = function(selector) {
                        return this.element.querySelector(selector);
                    };
                    List.prototype.hasChildren = function() {
                        return this.element.hasChildNodes();
                    };
                    List.prototype.scrollToTop = function() {
                        this.element.scrollTop = 0;
                    };
                    List.prototype.scrollToChildElement = function(element, direction) {
                        var _this = this;
                        if (!element) return;
                        var listHeight = this.element.offsetHeight;
                        // Scroll position of dropdown
                        var listScrollPosition = this.element.scrollTop + listHeight;
                        var elementHeight = element.offsetHeight;
                        // Distance from bottom of element to top of parent
                        var elementPos = element.offsetTop + elementHeight;
                        // Difference between the element and scroll position
                        var destination = direction > 0 ? this.element.scrollTop + elementPos - listScrollPosition : element.offsetTop;
                        requestAnimationFrame(function() {
                            _this._animateScroll(destination, direction);
                        });
                    };
                    List.prototype._scrollDown = function(scrollPos, strength, destination) {
                        var easing = (destination - scrollPos) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos + distance;
                    };
                    List.prototype._scrollUp = function(scrollPos, strength, destination) {
                        var easing = (scrollPos - destination) / strength;
                        var distance = easing > 1 ? easing : 1;
                        this.element.scrollTop = scrollPos - distance;
                    };
                    List.prototype._animateScroll = function(destination, direction) {
                        var _this = this;
                        var strength = constants_1.SCROLLING_SPEED;
                        var choiceListScrollTop = this.element.scrollTop;
                        var continueAnimation = false;
                        if (direction > 0) {
                            this._scrollDown(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop < destination) continueAnimation = true;
                        } else {
                            this._scrollUp(choiceListScrollTop, strength, destination);
                            if (choiceListScrollTop > destination) continueAnimation = true;
                        }
                        if (continueAnimation) requestAnimationFrame(function() {
                            _this._animateScroll(destination, direction);
                        });
                    };
                    return List;
                }();
                exports["default"] = List;
            /***/ },
            /***/ 730: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var utils_1 = __webpack_require__(799);
                var WrappedElement = /** @class */ function() {
                    function WrappedElement(_a) {
                        var element = _a.element, classNames = _a.classNames;
                        this.element = element;
                        this.classNames = classNames;
                        if (!(element instanceof HTMLInputElement) && !(element instanceof HTMLSelectElement)) throw new TypeError("Invalid element passed");
                        this.isDisabled = false;
                    }
                    Object.defineProperty(WrappedElement.prototype, "isActive", {
                        get: function() {
                            return this.element.dataset.choice === "active";
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedElement.prototype, "dir", {
                        get: function() {
                            return this.element.dir;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedElement.prototype, "value", {
                        get: function() {
                            return this.element.value;
                        },
                        set: function(value) {
                            // you must define setter here otherwise it will be readonly property
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    WrappedElement.prototype.conceal = function() {
                        // Hide passed input
                        this.element.classList.add(this.classNames.input);
                        this.element.hidden = true;
                        // Remove element from tab index
                        this.element.tabIndex = -1;
                        // Backup original styles if any
                        var origStyle = this.element.getAttribute("style");
                        if (origStyle) this.element.setAttribute("data-choice-orig-style", origStyle);
                        this.element.setAttribute("data-choice", "active");
                    };
                    WrappedElement.prototype.reveal = function() {
                        // Reinstate passed element
                        this.element.classList.remove(this.classNames.input);
                        this.element.hidden = false;
                        this.element.removeAttribute("tabindex");
                        // Recover original styles if any
                        var origStyle = this.element.getAttribute("data-choice-orig-style");
                        if (origStyle) {
                            this.element.removeAttribute("data-choice-orig-style");
                            this.element.setAttribute("style", origStyle);
                        } else this.element.removeAttribute("style");
                        this.element.removeAttribute("data-choice");
                        // Re-assign values - this is weird, I know
                        // @todo Figure out why we need to do this
                        this.element.value = this.element.value; // eslint-disable-line no-self-assign
                    };
                    WrappedElement.prototype.enable = function() {
                        this.element.removeAttribute("disabled");
                        this.element.disabled = false;
                        this.isDisabled = false;
                    };
                    WrappedElement.prototype.disable = function() {
                        this.element.setAttribute("disabled", "");
                        this.element.disabled = true;
                        this.isDisabled = true;
                    };
                    WrappedElement.prototype.triggerEvent = function(eventType, data) {
                        (0, utils_1.dispatchEvent)(this.element, eventType, data);
                    };
                    return WrappedElement;
                }();
                exports["default"] = WrappedElement;
            /***/ },
            /***/ 541: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __extends = this && this.__extends || function() {
                    var extendStatics = function(d, b) {
                        extendStatics = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(d, b) {
                            d.__proto__ = b;
                        } || function(d, b) {
                            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                        };
                        return extendStatics(d, b);
                    };
                    return function(d, b) {
                        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var wrapped_element_1 = __importDefault(__webpack_require__(730));
                var WrappedInput = /** @class */ function(_super) {
                    __extends(WrappedInput, _super);
                    function WrappedInput(_a) {
                        var element = _a.element, classNames = _a.classNames, delimiter = _a.delimiter;
                        var _this = _super.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.delimiter = delimiter;
                        return _this;
                    }
                    Object.defineProperty(WrappedInput.prototype, "value", {
                        get: function() {
                            return this.element.value;
                        },
                        set: function(value) {
                            this.element.setAttribute("value", value);
                            this.element.value = value;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    return WrappedInput;
                }(wrapped_element_1.default);
                exports["default"] = WrappedInput;
            /***/ },
            /***/ 982: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __extends = this && this.__extends || function() {
                    var extendStatics = function(d, b) {
                        extendStatics = Object.setPrototypeOf || ({
                            __proto__: []
                        }) instanceof Array && function(d, b) {
                            d.__proto__ = b;
                        } || function(d, b) {
                            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
                        };
                        return extendStatics(d, b);
                    };
                    return function(d, b) {
                        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
                        extendStatics(d, b);
                        function __() {
                            this.constructor = d;
                        }
                        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
                    };
                }();
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var wrapped_element_1 = __importDefault(__webpack_require__(730));
                var WrappedSelect = /** @class */ function(_super) {
                    __extends(WrappedSelect, _super);
                    function WrappedSelect(_a) {
                        var element = _a.element, classNames = _a.classNames, template = _a.template;
                        var _this = _super.call(this, {
                            element: element,
                            classNames: classNames
                        }) || this;
                        _this.template = template;
                        return _this;
                    }
                    Object.defineProperty(WrappedSelect.prototype, "placeholderOption", {
                        get: function() {
                            return this.element.querySelector('option[value=""]') || // Backward compatibility layer for the non-standard placeholder attribute supported in older versions.
                            this.element.querySelector("option[placeholder]");
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedSelect.prototype, "optionGroups", {
                        get: function() {
                            return Array.from(this.element.getElementsByTagName("OPTGROUP"));
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(WrappedSelect.prototype, "options", {
                        get: function() {
                            return Array.from(this.element.options);
                        },
                        set: function(options) {
                            var _this = this;
                            var fragment = document.createDocumentFragment();
                            var addOptionToFragment = function(data) {
                                // Create a standard select option
                                var option = _this.template(data);
                                // Append it to fragment
                                fragment.appendChild(option);
                            };
                            // Add each list item to list
                            options.forEach(function(optionData) {
                                return addOptionToFragment(optionData);
                            });
                            this.appendDocFragment(fragment);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    WrappedSelect.prototype.appendDocFragment = function(fragment) {
                        this.element.innerHTML = "";
                        this.element.appendChild(fragment);
                    };
                    return WrappedSelect;
                }(wrapped_element_1.default);
                exports["default"] = WrappedSelect;
            /***/ },
            /***/ 883: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.SCROLLING_SPEED = exports.SELECT_MULTIPLE_TYPE = exports.SELECT_ONE_TYPE = exports.TEXT_TYPE = exports.KEY_CODES = exports.ACTION_TYPES = exports.EVENTS = void 0;
                exports.EVENTS = {
                    showDropdown: "showDropdown",
                    hideDropdown: "hideDropdown",
                    change: "change",
                    choice: "choice",
                    search: "search",
                    addItem: "addItem",
                    removeItem: "removeItem",
                    highlightItem: "highlightItem",
                    highlightChoice: "highlightChoice",
                    unhighlightItem: "unhighlightItem"
                };
                exports.ACTION_TYPES = {
                    ADD_CHOICE: "ADD_CHOICE",
                    FILTER_CHOICES: "FILTER_CHOICES",
                    ACTIVATE_CHOICES: "ACTIVATE_CHOICES",
                    CLEAR_CHOICES: "CLEAR_CHOICES",
                    ADD_GROUP: "ADD_GROUP",
                    ADD_ITEM: "ADD_ITEM",
                    REMOVE_ITEM: "REMOVE_ITEM",
                    HIGHLIGHT_ITEM: "HIGHLIGHT_ITEM",
                    CLEAR_ALL: "CLEAR_ALL",
                    RESET_TO: "RESET_TO",
                    SET_IS_LOADING: "SET_IS_LOADING"
                };
                exports.KEY_CODES = {
                    BACK_KEY: 46,
                    DELETE_KEY: 8,
                    ENTER_KEY: 13,
                    A_KEY: 65,
                    ESC_KEY: 27,
                    UP_KEY: 38,
                    DOWN_KEY: 40,
                    PAGE_UP_KEY: 33,
                    PAGE_DOWN_KEY: 34
                };
                exports.TEXT_TYPE = "text";
                exports.SELECT_ONE_TYPE = "select-one";
                exports.SELECT_MULTIPLE_TYPE = "select-multiple";
                exports.SCROLLING_SPEED = 4;
            /***/ },
            /***/ 789: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.DEFAULT_CONFIG = exports.DEFAULT_CLASSNAMES = void 0;
                var utils_1 = __webpack_require__(799);
                exports.DEFAULT_CLASSNAMES = {
                    containerOuter: "choices",
                    containerInner: "choices__inner",
                    input: "choices__input",
                    inputCloned: "choices__input--cloned",
                    list: "choices__list",
                    listItems: "choices__list--multiple",
                    listSingle: "choices__list--single",
                    listDropdown: "choices__list--dropdown",
                    item: "choices__item",
                    itemSelectable: "choices__item--selectable",
                    itemDisabled: "choices__item--disabled",
                    itemChoice: "choices__item--choice",
                    placeholder: "choices__placeholder",
                    group: "choices__group",
                    groupHeading: "choices__heading",
                    button: "choices__button",
                    activeState: "is-active",
                    focusState: "is-focused",
                    openState: "is-open",
                    disabledState: "is-disabled",
                    highlightedState: "is-highlighted",
                    selectedState: "is-selected",
                    flippedState: "is-flipped",
                    loadingState: "is-loading",
                    noResults: "has-no-results",
                    noChoices: "has-no-choices"
                };
                exports.DEFAULT_CONFIG = {
                    items: [],
                    choices: [],
                    silent: false,
                    renderChoiceLimit: -1,
                    maxItemCount: -1,
                    addItems: true,
                    addItemFilter: null,
                    removeItems: true,
                    removeItemButton: false,
                    editItems: false,
                    allowHTML: true,
                    duplicateItemsAllowed: true,
                    delimiter: ",",
                    paste: true,
                    searchEnabled: true,
                    searchChoices: true,
                    searchFloor: 1,
                    searchResultLimit: 4,
                    searchFields: [
                        "label",
                        "value"
                    ],
                    position: "auto",
                    resetScrollPosition: true,
                    shouldSort: true,
                    shouldSortItems: false,
                    sorter: utils_1.sortByAlpha,
                    placeholder: true,
                    placeholderValue: null,
                    searchPlaceholderValue: null,
                    prependValue: null,
                    appendValue: null,
                    renderSelectedChoices: "auto",
                    loadingText: "Loading...",
                    noResultsText: "No results found",
                    noChoicesText: "No choices to choose from",
                    itemSelectText: "Press to select",
                    uniqueItemText: "Only unique values can be added",
                    customAddItemText: "Only values matching specific conditions can be added",
                    addItemText: function(value) {
                        return 'Press Enter to add <b>"'.concat((0, utils_1.sanitise)(value), '"</b>');
                    },
                    maxItemText: function(maxItemCount) {
                        return "Only ".concat(maxItemCount, " values can be added");
                    },
                    valueComparer: function(value1, value2) {
                        return value1 === value2;
                    },
                    fuseOptions: {
                        includeScore: true
                    },
                    labelId: "",
                    callbackOnInit: null,
                    callbackOnCreateTemplates: null,
                    classNames: exports.DEFAULT_CLASSNAMES
                };
            /***/ },
            /***/ 18: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 978: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 948: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 359: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 285: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 533: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 187: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __createBinding = this && this.__createBinding || (Object.create ? function(o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    var desc = Object.getOwnPropertyDescriptor(m, k);
                    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) desc = {
                        enumerable: true,
                        get: function() {
                            return m[k];
                        }
                    };
                    Object.defineProperty(o, k2, desc);
                } : function(o, m, k, k2) {
                    if (k2 === undefined) k2 = k;
                    o[k2] = m[k];
                });
                var __exportStar = this && this.__exportStar || function(m, exports) {
                    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                __exportStar(__webpack_require__(18), exports);
                __exportStar(__webpack_require__(978), exports);
                __exportStar(__webpack_require__(948), exports);
                __exportStar(__webpack_require__(359), exports);
                __exportStar(__webpack_require__(285), exports);
                __exportStar(__webpack_require__(533), exports);
                __exportStar(__webpack_require__(287), exports);
                __exportStar(__webpack_require__(132), exports);
                __exportStar(__webpack_require__(837), exports);
                __exportStar(__webpack_require__(598), exports);
                __exportStar(__webpack_require__(369), exports);
                __exportStar(__webpack_require__(37), exports);
                __exportStar(__webpack_require__(47), exports);
                __exportStar(__webpack_require__(923), exports);
                __exportStar(__webpack_require__(876), exports);
            /***/ },
            /***/ 287: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 132: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 837: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 598: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 37: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 369: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 47: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 923: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 876: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /***/ },
            /***/ 799: /***/ function(__unused_webpack_module, exports) {
                /* eslint-disable @typescript-eslint/no-explicit-any */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.parseCustomProperties = exports.diff = exports.cloneObject = exports.existsInArray = exports.dispatchEvent = exports.sortByScore = exports.sortByAlpha = exports.strToEl = exports.sanitise = exports.isScrolledIntoView = exports.getAdjacentEl = exports.wrap = exports.isType = exports.getType = exports.generateId = exports.generateChars = exports.getRandomNumber = void 0;
                var getRandomNumber = function(min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                };
                exports.getRandomNumber = getRandomNumber;
                var generateChars = function(length) {
                    return Array.from({
                        length: length
                    }, function() {
                        return (0, exports.getRandomNumber)(0, 36).toString(36);
                    }).join("");
                };
                exports.generateChars = generateChars;
                var generateId = function(element, prefix) {
                    var id = element.id || element.name && "".concat(element.name, "-").concat((0, exports.generateChars)(2)) || (0, exports.generateChars)(4);
                    id = id.replace(/(:|\.|\[|\]|,)/g, "");
                    id = "".concat(prefix, "-").concat(id);
                    return id;
                };
                exports.generateId = generateId;
                var getType = function(obj) {
                    return Object.prototype.toString.call(obj).slice(8, -1);
                };
                exports.getType = getType;
                var isType = function(type, obj) {
                    return obj !== undefined && obj !== null && (0, exports.getType)(obj) === type;
                };
                exports.isType = isType;
                var wrap = function(element, wrapper) {
                    if (wrapper === void 0) wrapper = document.createElement("div");
                    if (element.parentNode) {
                        if (element.nextSibling) element.parentNode.insertBefore(wrapper, element.nextSibling);
                        else element.parentNode.appendChild(wrapper);
                    }
                    return wrapper.appendChild(element);
                };
                exports.wrap = wrap;
                var getAdjacentEl = function(startEl, selector, direction) {
                    if (direction === void 0) direction = 1;
                    var prop = "".concat(direction > 0 ? "next" : "previous", "ElementSibling");
                    var sibling = startEl[prop];
                    while(sibling){
                        if (sibling.matches(selector)) return sibling;
                        sibling = sibling[prop];
                    }
                    return sibling;
                };
                exports.getAdjacentEl = getAdjacentEl;
                var isScrolledIntoView = function(element, parent, direction) {
                    if (direction === void 0) direction = 1;
                    if (!element) return false;
                    var isVisible;
                    if (direction > 0) // In view from bottom
                    isVisible = parent.scrollTop + parent.offsetHeight >= element.offsetTop + element.offsetHeight;
                    else // In view from top
                    isVisible = element.offsetTop >= parent.scrollTop;
                    return isVisible;
                };
                exports.isScrolledIntoView = isScrolledIntoView;
                var sanitise = function(value) {
                    if (typeof value !== "string") return value;
                    return value.replace(/&/g, "&amp;").replace(/>/g, "&gt;").replace(/</g, "&lt;").replace(/"/g, "&quot;");
                };
                exports.sanitise = sanitise;
                exports.strToEl = function() {
                    var tmpEl = document.createElement("div");
                    return function(str) {
                        var cleanedInput = str.trim();
                        tmpEl.innerHTML = cleanedInput;
                        var firldChild = tmpEl.children[0];
                        while(tmpEl.firstChild)tmpEl.removeChild(tmpEl.firstChild);
                        return firldChild;
                    };
                }();
                var sortByAlpha = function(_a, _b) {
                    var value = _a.value, _c = _a.label, label = _c === void 0 ? value : _c;
                    var value2 = _b.value, _d = _b.label, label2 = _d === void 0 ? value2 : _d;
                    return label.localeCompare(label2, [], {
                        sensitivity: "base",
                        ignorePunctuation: true,
                        numeric: true
                    });
                };
                exports.sortByAlpha = sortByAlpha;
                var sortByScore = function(a, b) {
                    var _a = a.score, scoreA = _a === void 0 ? 0 : _a;
                    var _b = b.score, scoreB = _b === void 0 ? 0 : _b;
                    return scoreA - scoreB;
                };
                exports.sortByScore = sortByScore;
                var dispatchEvent = function(element, type, customArgs) {
                    if (customArgs === void 0) customArgs = null;
                    var event = new CustomEvent(type, {
                        detail: customArgs,
                        bubbles: true,
                        cancelable: true
                    });
                    return element.dispatchEvent(event);
                };
                exports.dispatchEvent = dispatchEvent;
                var existsInArray = function(array, value, key) {
                    if (key === void 0) key = "value";
                    return array.some(function(item) {
                        if (typeof value === "string") return item[key] === value.trim();
                        return item[key] === value;
                    });
                };
                exports.existsInArray = existsInArray;
                var cloneObject = function(obj) {
                    return JSON.parse(JSON.stringify(obj));
                };
                exports.cloneObject = cloneObject;
                /**
 * Returns an array of keys present on the first but missing on the second object
 */ var diff = function(a, b) {
                    var aKeys = Object.keys(a).sort();
                    var bKeys = Object.keys(b).sort();
                    return aKeys.filter(function(i) {
                        return bKeys.indexOf(i) < 0;
                    });
                };
                exports.diff = diff;
                var parseCustomProperties = function(customProperties) {
                    if (typeof customProperties !== "undefined") try {
                        return JSON.parse(customProperties);
                    } catch (e) {
                        return customProperties;
                    }
                    return {};
                };
                exports.parseCustomProperties = parseCustomProperties;
            /***/ },
            /***/ 273: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function choices(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_CHOICE":
                            var addChoiceAction = action;
                            var choice = {
                                id: addChoiceAction.id,
                                elementId: addChoiceAction.elementId,
                                groupId: addChoiceAction.groupId,
                                value: addChoiceAction.value,
                                label: addChoiceAction.label || addChoiceAction.value,
                                disabled: addChoiceAction.disabled || false,
                                selected: false,
                                active: true,
                                score: 9999,
                                customProperties: addChoiceAction.customProperties,
                                placeholder: addChoiceAction.placeholder || false
                            };
                            /*
          A disabled choice appears in the choice dropdown but cannot be selected
          A selected choice has been added to the passed input's value (added as an item)
          An active choice appears within the choice dropdown
        */ return __spreadArray(__spreadArray([], state, true), [
                                choice
                            ], false);
                        case "ADD_ITEM":
                            var addItemAction_1 = action;
                            // When an item is added and it has an associated choice,
                            // we want to disable it so it can't be chosen again
                            if (addItemAction_1.choiceId > -1) return state.map(function(obj) {
                                var choice = obj;
                                if (choice.id === parseInt("".concat(addItemAction_1.choiceId), 10)) choice.selected = true;
                                return choice;
                            });
                            return state;
                        case "REMOVE_ITEM":
                            var removeItemAction_1 = action;
                            // When an item is removed and it has an associated choice,
                            // we want to re-enable it so it can be chosen again
                            if (removeItemAction_1.choiceId && removeItemAction_1.choiceId > -1) return state.map(function(obj) {
                                var choice = obj;
                                if (choice.id === parseInt("".concat(removeItemAction_1.choiceId), 10)) choice.selected = false;
                                return choice;
                            });
                            return state;
                        case "FILTER_CHOICES":
                            var filterChoicesAction_1 = action;
                            return state.map(function(obj) {
                                var choice = obj;
                                // Set active state based on whether choice is
                                // within filtered results
                                choice.active = filterChoicesAction_1.results.some(function(_a) {
                                    var item = _a.item, score = _a.score;
                                    if (item.id === choice.id) {
                                        choice.score = score;
                                        return true;
                                    }
                                    return false;
                                });
                                return choice;
                            });
                        case "ACTIVATE_CHOICES":
                            var activateChoicesAction_1 = action;
                            return state.map(function(obj) {
                                var choice = obj;
                                choice.active = activateChoicesAction_1.active;
                                return choice;
                            });
                        case "CLEAR_CHOICES":
                            return exports.defaultState;
                        default:
                            return state;
                    }
                }
                exports["default"] = choices;
            /***/ },
            /***/ 871: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function groups(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_GROUP":
                            var addGroupAction = action;
                            return __spreadArray(__spreadArray([], state, true), [
                                {
                                    id: addGroupAction.id,
                                    value: addGroupAction.value,
                                    active: addGroupAction.active,
                                    disabled: addGroupAction.disabled
                                }
                            ], false);
                        case "CLEAR_CHOICES":
                            return [];
                        default:
                            return state;
                    }
                }
                exports["default"] = groups;
            /***/ },
            /***/ 655: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                var redux_1 = __webpack_require__(791);
                var items_1 = __importDefault(__webpack_require__(52));
                var groups_1 = __importDefault(__webpack_require__(871));
                var choices_1 = __importDefault(__webpack_require__(273));
                var loading_1 = __importDefault(__webpack_require__(502));
                var utils_1 = __webpack_require__(799);
                exports.defaultState = {
                    groups: [],
                    items: [],
                    choices: [],
                    loading: false
                };
                var appReducer = (0, redux_1.combineReducers)({
                    items: items_1.default,
                    groups: groups_1.default,
                    choices: choices_1.default,
                    loading: loading_1.default
                });
                var rootReducer = function(passedState, action) {
                    var state = passedState;
                    // If we are clearing all items, groups and options we reassign
                    // state and then pass that state to our proper reducer. This isn't
                    // mutating our actual state
                    // See: http://stackoverflow.com/a/35641992
                    if (action.type === "CLEAR_ALL") state = exports.defaultState;
                    else if (action.type === "RESET_TO") return (0, utils_1.cloneObject)(action.state);
                    return appReducer(state, action);
                };
                exports["default"] = rootReducer;
            /***/ },
            /***/ 52: /***/ function(__unused_webpack_module, exports) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = [];
                function items(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "ADD_ITEM":
                            var addItemAction = action;
                            // Add object to items array
                            var newState = __spreadArray(__spreadArray([], state, true), [
                                {
                                    id: addItemAction.id,
                                    choiceId: addItemAction.choiceId,
                                    groupId: addItemAction.groupId,
                                    value: addItemAction.value,
                                    label: addItemAction.label,
                                    active: true,
                                    highlighted: false,
                                    customProperties: addItemAction.customProperties,
                                    placeholder: addItemAction.placeholder || false,
                                    keyCode: null
                                }
                            ], false);
                            return newState.map(function(obj) {
                                var item = obj;
                                item.highlighted = false;
                                return item;
                            });
                        case "REMOVE_ITEM":
                            // Set item to inactive
                            return state.map(function(obj) {
                                var item = obj;
                                if (item.id === action.id) item.active = false;
                                return item;
                            });
                        case "HIGHLIGHT_ITEM":
                            var highlightItemAction_1 = action;
                            return state.map(function(obj) {
                                var item = obj;
                                if (item.id === highlightItemAction_1.id) item.highlighted = highlightItemAction_1.highlighted;
                                return item;
                            });
                        default:
                            return state;
                    }
                }
                exports["default"] = items;
            /***/ },
            /***/ 502: /***/ function(__unused_webpack_module, exports) {
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                exports.defaultState = void 0;
                exports.defaultState = false;
                var general = function(state, action) {
                    if (state === void 0) state = exports.defaultState;
                    if (action === void 0) action = {};
                    switch(action.type){
                        case "SET_IS_LOADING":
                            return action.isLoading;
                        default:
                            return state;
                    }
                };
                exports["default"] = general;
            /***/ },
            /***/ 744: /***/ function(__unused_webpack_module, exports, __webpack_require__) {
                var __spreadArray = this && this.__spreadArray || function(to, from, pack) {
                    if (pack || arguments.length === 2) {
                        for(var i = 0, l = from.length, ar; i < l; i++)if (ar || !(i in from)) {
                            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
                            ar[i] = from[i];
                        }
                    }
                    return to.concat(ar || Array.prototype.slice.call(from));
                };
                var __importDefault = this && this.__importDefault || function(mod) {
                    return mod && mod.__esModule ? mod : {
                        "default": mod
                    };
                };
                Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                /* eslint-disable @typescript-eslint/no-explicit-any */ var redux_1 = __webpack_require__(791);
                var index_1 = __importDefault(__webpack_require__(655));
                var Store = /** @class */ function() {
                    function Store() {
                        this._store = (0, redux_1.createStore)(index_1.default, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
                    }
                    /**
   * Subscribe store to function call (wrapped Redux method)
   */ Store.prototype.subscribe = function(onChange) {
                        this._store.subscribe(onChange);
                    };
                    /**
   * Dispatch event to store (wrapped Redux method)
   */ Store.prototype.dispatch = function(action) {
                        this._store.dispatch(action);
                    };
                    Object.defineProperty(Store.prototype, "state", {
                        /**
     * Get store object (wrapping Redux method)
     */ get: function() {
                            return this._store.getState();
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "items", {
                        /**
     * Get items from store
     */ get: function() {
                            return this.state.items;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeItems", {
                        /**
     * Get active items from store
     */ get: function() {
                            return this.items.filter(function(item) {
                                return item.active === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "highlightedActiveItems", {
                        /**
     * Get highlighted items from store
     */ get: function() {
                            return this.items.filter(function(item) {
                                return item.active && item.highlighted;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "choices", {
                        /**
     * Get choices from store
     */ get: function() {
                            return this.state.choices;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeChoices", {
                        /**
     * Get active choices from store
     */ get: function() {
                            return this.choices.filter(function(choice) {
                                return choice.active === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "selectableChoices", {
                        /**
     * Get selectable choices from store
     */ get: function() {
                            return this.choices.filter(function(choice) {
                                return choice.disabled !== true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "searchableChoices", {
                        /**
     * Get choices that can be searched (excluding placeholders)
     */ get: function() {
                            return this.selectableChoices.filter(function(choice) {
                                return choice.placeholder !== true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "placeholderChoice", {
                        /**
     * Get placeholder choice from store
     */ get: function() {
                            return __spreadArray([], this.choices, true).reverse().find(function(choice) {
                                return choice.placeholder === true;
                            });
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "groups", {
                        /**
     * Get groups from store
     */ get: function() {
                            return this.state.groups;
                        },
                        enumerable: false,
                        configurable: true
                    });
                    Object.defineProperty(Store.prototype, "activeGroups", {
                        /**
     * Get active groups from store
     */ get: function() {
                            var _a = this, groups = _a.groups, choices = _a.choices;
                            return groups.filter(function(group) {
                                var isActive = group.active === true && group.disabled === false;
                                var hasActiveOptions = choices.some(function(choice) {
                                    return choice.active === true && choice.disabled === false;
                                });
                                return isActive && hasActiveOptions;
                            }, []);
                        },
                        enumerable: false,
                        configurable: true
                    });
                    /**
   * Get loading state from store
   */ Store.prototype.isLoading = function() {
                        return this.state.loading;
                    };
                    /**
   * Get single choice by it's ID
   */ Store.prototype.getChoiceById = function(id) {
                        return this.activeChoices.find(function(choice) {
                            return choice.id === parseInt(id, 10);
                        });
                    };
                    /**
   * Get group by group id
   */ Store.prototype.getGroupById = function(id) {
                        return this.groups.find(function(group) {
                            return group.id === id;
                        });
                    };
                    return Store;
                }();
                exports["default"] = Store;
            /***/ },
            /***/ 686: /***/ function(__unused_webpack_module, exports) {
                /**
 * Helpers to create HTML elements used by Choices
 * Can be overridden by providing `callbackOnCreateTemplates` option
 */ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
                var templates = {
                    containerOuter: function(_a, dir, isSelectElement, isSelectOneElement, searchEnabled, passedElementType, labelId) {
                        var containerOuter = _a.classNames.containerOuter;
                        var div = Object.assign(document.createElement("div"), {
                            className: containerOuter
                        });
                        div.dataset.type = passedElementType;
                        if (dir) div.dir = dir;
                        if (isSelectOneElement) div.tabIndex = 0;
                        if (isSelectElement) {
                            div.setAttribute("role", searchEnabled ? "combobox" : "listbox");
                            if (searchEnabled) div.setAttribute("aria-autocomplete", "list");
                        }
                        div.setAttribute("aria-haspopup", "true");
                        div.setAttribute("aria-expanded", "false");
                        if (labelId) div.setAttribute("aria-labelledby", labelId);
                        return div;
                    },
                    containerInner: function(_a) {
                        var containerInner = _a.classNames.containerInner;
                        return Object.assign(document.createElement("div"), {
                            className: containerInner
                        });
                    },
                    itemList: function(_a, isSelectOneElement) {
                        var _b = _a.classNames, list = _b.list, listSingle = _b.listSingle, listItems = _b.listItems;
                        return Object.assign(document.createElement("div"), {
                            className: "".concat(list, " ").concat(isSelectOneElement ? listSingle : listItems)
                        });
                    },
                    placeholder: function(_a, value) {
                        var _b;
                        var allowHTML = _a.allowHTML, placeholder = _a.classNames.placeholder;
                        return Object.assign(document.createElement("div"), (_b = {
                            className: placeholder
                        }, _b[allowHTML ? "innerHTML" : "innerText"] = value, _b));
                    },
                    item: function(_a, _b, removeItemButton) {
                        var _c, _d;
                        var allowHTML = _a.allowHTML, _e = _a.classNames, item = _e.item, button = _e.button, highlightedState = _e.highlightedState, itemSelectable = _e.itemSelectable, placeholder = _e.placeholder;
                        var id = _b.id, value = _b.value, label = _b.label, customProperties = _b.customProperties, active = _b.active, disabled = _b.disabled, highlighted = _b.highlighted, isPlaceholder = _b.placeholder;
                        var div = Object.assign(document.createElement("div"), (_c = {
                            className: item
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c));
                        Object.assign(div.dataset, {
                            item: "",
                            id: id,
                            value: value,
                            customProperties: customProperties
                        });
                        if (active) div.setAttribute("aria-selected", "true");
                        if (disabled) div.setAttribute("aria-disabled", "true");
                        if (isPlaceholder) div.classList.add(placeholder);
                        div.classList.add(highlighted ? highlightedState : itemSelectable);
                        if (removeItemButton) {
                            if (disabled) div.classList.remove(itemSelectable);
                            div.dataset.deletable = "";
                            /** @todo This MUST be localizable, not hardcoded! */ var REMOVE_ITEM_TEXT = "Remove item";
                            var removeButton = Object.assign(document.createElement("button"), (_d = {
                                type: "button",
                                className: button
                            }, _d[allowHTML ? "innerHTML" : "innerText"] = REMOVE_ITEM_TEXT, _d));
                            removeButton.setAttribute("aria-label", "".concat(REMOVE_ITEM_TEXT, ": '").concat(value, "'"));
                            removeButton.dataset.button = "";
                            div.appendChild(removeButton);
                        }
                        return div;
                    },
                    choiceList: function(_a, isSelectOneElement) {
                        var list = _a.classNames.list;
                        var div = Object.assign(document.createElement("div"), {
                            className: list
                        });
                        if (!isSelectOneElement) div.setAttribute("aria-multiselectable", "true");
                        div.setAttribute("role", "listbox");
                        return div;
                    },
                    choiceGroup: function(_a, _b) {
                        var _c;
                        var allowHTML = _a.allowHTML, _d = _a.classNames, group = _d.group, groupHeading = _d.groupHeading, itemDisabled = _d.itemDisabled;
                        var id = _b.id, value = _b.value, disabled = _b.disabled;
                        var div = Object.assign(document.createElement("div"), {
                            className: "".concat(group, " ").concat(disabled ? itemDisabled : "")
                        });
                        div.setAttribute("role", "group");
                        Object.assign(div.dataset, {
                            group: "",
                            id: id,
                            value: value
                        });
                        if (disabled) div.setAttribute("aria-disabled", "true");
                        div.appendChild(Object.assign(document.createElement("div"), (_c = {
                            className: groupHeading
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = value, _c)));
                        return div;
                    },
                    choice: function(_a, _b, selectText) {
                        var _c;
                        var allowHTML = _a.allowHTML, _d = _a.classNames, item = _d.item, itemChoice = _d.itemChoice, itemSelectable = _d.itemSelectable, selectedState = _d.selectedState, itemDisabled = _d.itemDisabled, placeholder = _d.placeholder;
                        var id = _b.id, value = _b.value, label = _b.label, groupId = _b.groupId, elementId = _b.elementId, isDisabled = _b.disabled, isSelected = _b.selected, isPlaceholder = _b.placeholder;
                        var div = Object.assign(document.createElement("div"), (_c = {
                            id: elementId
                        }, _c[allowHTML ? "innerHTML" : "innerText"] = label, _c.className = "".concat(item, " ").concat(itemChoice), _c));
                        if (isSelected) div.classList.add(selectedState);
                        if (isPlaceholder) div.classList.add(placeholder);
                        div.setAttribute("role", groupId && groupId > 0 ? "treeitem" : "option");
                        Object.assign(div.dataset, {
                            choice: "",
                            id: id,
                            value: value,
                            selectText: selectText
                        });
                        if (isDisabled) {
                            div.classList.add(itemDisabled);
                            div.dataset.choiceDisabled = "";
                            div.setAttribute("aria-disabled", "true");
                        } else {
                            div.classList.add(itemSelectable);
                            div.dataset.choiceSelectable = "";
                        }
                        return div;
                    },
                    input: function(_a, placeholderValue) {
                        var _b = _a.classNames, input = _b.input, inputCloned = _b.inputCloned;
                        var inp = Object.assign(document.createElement("input"), {
                            type: "search",
                            name: "search_terms",
                            className: "".concat(input, " ").concat(inputCloned),
                            autocomplete: "off",
                            autocapitalize: "off",
                            spellcheck: false
                        });
                        inp.setAttribute("role", "textbox");
                        inp.setAttribute("aria-autocomplete", "list");
                        inp.setAttribute("aria-label", placeholderValue);
                        return inp;
                    },
                    dropdown: function(_a) {
                        var _b = _a.classNames, list = _b.list, listDropdown = _b.listDropdown;
                        var div = document.createElement("div");
                        div.classList.add(list, listDropdown);
                        div.setAttribute("aria-expanded", "false");
                        return div;
                    },
                    notice: function(_a, innerText, type) {
                        var _b;
                        var allowHTML = _a.allowHTML, _c = _a.classNames, item = _c.item, itemChoice = _c.itemChoice, noResults = _c.noResults, noChoices = _c.noChoices;
                        if (type === void 0) type = "";
                        var classes = [
                            item,
                            itemChoice
                        ];
                        if (type === "no-choices") classes.push(noChoices);
                        else if (type === "no-results") classes.push(noResults);
                        return Object.assign(document.createElement("div"), (_b = {}, _b[allowHTML ? "innerHTML" : "innerText"] = innerText, _b.className = classes.join(" "), _b));
                    },
                    option: function(_a) {
                        var label = _a.label, value = _a.value, customProperties = _a.customProperties, active = _a.active, disabled = _a.disabled;
                        var opt = new Option(label, value, false, active);
                        if (customProperties) opt.dataset.customProperties = "".concat(customProperties);
                        opt.disabled = !!disabled;
                        return opt;
                    }
                };
                exports["default"] = templates;
            /***/ },
            /***/ 996: /***/ function(module1) {
                var isMergeableObject = function isMergeableObject(value) {
                    return isNonNullObject(value) && !isSpecial(value);
                };
                function isNonNullObject(value) {
                    return !!value && typeof value === "object";
                }
                function isSpecial(value) {
                    var stringValue = Object.prototype.toString.call(value);
                    return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
                }
                // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
                var canUseSymbol = typeof Symbol === "function" && Symbol.for;
                var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
                function isReactElement(value) {
                    return value.$$typeof === REACT_ELEMENT_TYPE;
                }
                function emptyTarget(val) {
                    return Array.isArray(val) ? [] : {};
                }
                function cloneUnlessOtherwiseSpecified(value, options) {
                    return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
                }
                function defaultArrayMerge(target, source, options) {
                    return target.concat(source).map(function(element) {
                        return cloneUnlessOtherwiseSpecified(element, options);
                    });
                }
                function getMergeFunction(key, options) {
                    if (!options.customMerge) return deepmerge;
                    var customMerge = options.customMerge(key);
                    return typeof customMerge === "function" ? customMerge : deepmerge;
                }
                function getEnumerableOwnPropertySymbols(target) {
                    return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
                        return target.propertyIsEnumerable(symbol);
                    }) : [];
                }
                function getKeys(target) {
                    return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
                }
                function propertyIsOnObject(object, property) {
                    try {
                        return property in object;
                    } catch (_) {
                        return false;
                    }
                }
                // Protects from prototype poisoning and unexpected merging up the prototype chain.
                function propertyIsUnsafe(target, key) {
                    return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
                     && !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
                     && Object.propertyIsEnumerable.call(target, key) // and also unsafe if they're nonenumerable.
                    );
                }
                function mergeObject(target, source, options) {
                    var destination = {};
                    if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
                        destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
                    });
                    getKeys(source).forEach(function(key) {
                        if (propertyIsUnsafe(target, key)) return;
                        if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
                        else destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
                    });
                    return destination;
                }
                function deepmerge(target, source, options) {
                    options = options || {};
                    options.arrayMerge = options.arrayMerge || defaultArrayMerge;
                    options.isMergeableObject = options.isMergeableObject || isMergeableObject;
                    // cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
                    // implementations can use it. The caller may not replace it.
                    options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;
                    var sourceIsArray = Array.isArray(source);
                    var targetIsArray = Array.isArray(target);
                    var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
                    if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
                    else if (sourceIsArray) return options.arrayMerge(target, source, options);
                    else return mergeObject(target, source, options);
                }
                deepmerge.all = function deepmergeAll(array, options) {
                    if (!Array.isArray(array)) throw new Error("first argument should be an array");
                    return array.reduce(function(prev, next) {
                        return deepmerge(prev, next, options);
                    }, {});
                };
                var deepmerge_1 = deepmerge;
                module1.exports = deepmerge_1;
            /***/ },
            /***/ 221: /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                __webpack_require__.r(__webpack_exports__);
                /* harmony export */ __webpack_require__.d(__webpack_exports__, {
                    /* harmony export */ "default": function() {
                        return /* binding */ Fuse;
                    }
                });
                /**
 * Fuse.js v6.6.2 - Lightweight fuzzy-search (http://fusejs.io)
 *
 * Copyright (c) 2022 Kiro Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 */ function isArray(value) {
                    return !Array.isArray ? getTag(value) === "[object Array]" : Array.isArray(value);
                }
                // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/baseToString.js
                const INFINITY = 1 / 0;
                function baseToString(value) {
                    // Exit early for strings to avoid a performance hit in some environments.
                    if (typeof value == "string") return value;
                    let result = value + "";
                    return result == "0" && 1 / value == -INFINITY ? "-0" : result;
                }
                function toString(value) {
                    return value == null ? "" : baseToString(value);
                }
                function isString(value) {
                    return typeof value === "string";
                }
                function isNumber(value) {
                    return typeof value === "number";
                }
                // Adapted from: https://github.com/lodash/lodash/blob/master/isBoolean.js
                function isBoolean(value) {
                    return value === true || value === false || isObjectLike(value) && getTag(value) == "[object Boolean]";
                }
                function isObject(value) {
                    return typeof value === "object";
                }
                // Checks if `value` is object-like.
                function isObjectLike(value) {
                    return isObject(value) && value !== null;
                }
                function isDefined(value) {
                    return value !== undefined && value !== null;
                }
                function isBlank(value) {
                    return !value.trim().length;
                }
                // Gets the `toStringTag` of `value`.
                // Adapted from: https://github.com/lodash/lodash/blob/master/.internal/getTag.js
                function getTag(value) {
                    return value == null ? value === undefined ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(value);
                }
                const EXTENDED_SEARCH_UNAVAILABLE = "Extended search is not available";
                const INCORRECT_INDEX_TYPE = "Incorrect 'index' type";
                const LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY = (key)=>`Invalid value for key ${key}`;
                const PATTERN_LENGTH_TOO_LARGE = (max)=>`Pattern length exceeds max of ${max}.`;
                const MISSING_KEY_PROPERTY = (name)=>`Missing ${name} property in key`;
                const INVALID_KEY_WEIGHT_VALUE = (key)=>`Property 'weight' in key '${key}' must be a positive integer`;
                const hasOwn = Object.prototype.hasOwnProperty;
                class KeyStore {
                    constructor(keys){
                        this._keys = [];
                        this._keyMap = {};
                        let totalWeight = 0;
                        keys.forEach((key)=>{
                            let obj = createKey(key);
                            totalWeight += obj.weight;
                            this._keys.push(obj);
                            this._keyMap[obj.id] = obj;
                            totalWeight += obj.weight;
                        });
                        // Normalize weights so that their sum is equal to 1
                        this._keys.forEach((key)=>{
                            key.weight /= totalWeight;
                        });
                    }
                    get(keyId) {
                        return this._keyMap[keyId];
                    }
                    keys() {
                        return this._keys;
                    }
                    toJSON() {
                        return JSON.stringify(this._keys);
                    }
                }
                function createKey(key) {
                    let path = null;
                    let id = null;
                    let src = null;
                    let weight = 1;
                    let getFn = null;
                    if (isString(key) || isArray(key)) {
                        src = key;
                        path = createKeyPath(key);
                        id = createKeyId(key);
                    } else {
                        if (!hasOwn.call(key, "name")) throw new Error(MISSING_KEY_PROPERTY("name"));
                        const name = key.name;
                        src = name;
                        if (hasOwn.call(key, "weight")) {
                            weight = key.weight;
                            if (weight <= 0) throw new Error(INVALID_KEY_WEIGHT_VALUE(name));
                        }
                        path = createKeyPath(name);
                        id = createKeyId(name);
                        getFn = key.getFn;
                    }
                    return {
                        path,
                        id,
                        weight,
                        src,
                        getFn
                    };
                }
                function createKeyPath(key) {
                    return isArray(key) ? key : key.split(".");
                }
                function createKeyId(key) {
                    return isArray(key) ? key.join(".") : key;
                }
                function get(obj, path) {
                    let list = [];
                    let arr = false;
                    const deepGet = (obj, path, index)=>{
                        if (!isDefined(obj)) return;
                        if (!path[index]) // If there's no path left, we've arrived at the object we care about.
                        list.push(obj);
                        else {
                            let key = path[index];
                            const value = obj[key];
                            if (!isDefined(value)) return;
                            // If we're at the last value in the path, and if it's a string/number/bool,
                            // add it to the list
                            if (index === path.length - 1 && (isString(value) || isNumber(value) || isBoolean(value))) list.push(toString(value));
                            else if (isArray(value)) {
                                arr = true;
                                // Search each item in the array.
                                for(let i = 0, len = value.length; i < len; i += 1)deepGet(value[i], path, index + 1);
                            } else if (path.length) // An object. Recurse further.
                            deepGet(value, path, index + 1);
                        }
                    };
                    // Backwards compatibility (since path used to be a string)
                    deepGet(obj, isString(path) ? path.split(".") : path, 0);
                    return arr ? list : list[0];
                }
                const MatchOptions = {
                    // Whether the matches should be included in the result set. When `true`, each record in the result
                    // set will include the indices of the matched characters.
                    // These can consequently be used for highlighting purposes.
                    includeMatches: false,
                    // When `true`, the matching function will continue to the end of a search pattern even if
                    // a perfect match has already been located in the string.
                    findAllMatches: false,
                    // Minimum number of characters that must be matched before a result is considered a match
                    minMatchCharLength: 1
                };
                const BasicOptions = {
                    // When `true`, the algorithm continues searching to the end of the input even if a perfect
                    // match is found before the end of the same input.
                    isCaseSensitive: false,
                    // When true, the matching function will continue to the end of a search pattern even if
                    includeScore: false,
                    // List of properties that will be searched. This also supports nested properties.
                    keys: [],
                    // Whether to sort the result list, by score
                    shouldSort: true,
                    // Default sort function: sort by ascending score, ascending index
                    sortFn: (a, b)=>a.score === b.score ? a.idx < b.idx ? -1 : 1 : a.score < b.score ? -1 : 1
                };
                const FuzzyOptions = {
                    // Approximately where in the text is the pattern expected to be found?
                    location: 0,
                    // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
                    // (of both letters and location), a threshold of '1.0' would match anything.
                    threshold: 0.6,
                    // Determines how close the match must be to the fuzzy location (specified above).
                    // An exact letter match which is 'distance' characters away from the fuzzy location
                    // would score as a complete mismatch. A distance of '0' requires the match be at
                    // the exact location specified, a threshold of '1000' would require a perfect match
                    // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
                    distance: 100
                };
                const AdvancedOptions = {
                    // When `true`, it enables the use of unix-like search commands
                    useExtendedSearch: false,
                    // The get function to use when fetching an object's properties.
                    // The default will search nested paths *ie foo.bar.baz*
                    getFn: get,
                    // When `true`, search will ignore `location` and `distance`, so it won't matter
                    // where in the string the pattern appears.
                    // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
                    ignoreLocation: false,
                    // When `true`, the calculation for the relevance score (used for sorting) will
                    // ignore the field-length norm.
                    // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
                    ignoreFieldNorm: false,
                    // The weight to determine how much field length norm effects scoring.
                    fieldNormWeight: 1
                };
                var Config = {
                    ...BasicOptions,
                    ...MatchOptions,
                    ...FuzzyOptions,
                    ...AdvancedOptions
                };
                const SPACE = /[^ ]+/g;
                // Field-length norm: the shorter the field, the higher the weight.
                // Set to 3 decimals to reduce index size.
                function norm(weight = 1, mantissa = 3) {
                    const cache = new Map();
                    const m = Math.pow(10, mantissa);
                    return {
                        get (value) {
                            const numTokens = value.match(SPACE).length;
                            if (cache.has(numTokens)) return cache.get(numTokens);
                            // Default function is 1/sqrt(x), weight makes that variable
                            const norm = 1 / Math.pow(numTokens, 0.5 * weight);
                            // In place of `toFixed(mantissa)`, for faster computation
                            const n = parseFloat(Math.round(norm * m) / m);
                            cache.set(numTokens, n);
                            return n;
                        },
                        clear () {
                            cache.clear();
                        }
                    };
                }
                class FuseIndex {
                    constructor({ getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}){
                        this.norm = norm(fieldNormWeight, 3);
                        this.getFn = getFn;
                        this.isCreated = false;
                        this.setIndexRecords();
                    }
                    setSources(docs = []) {
                        this.docs = docs;
                    }
                    setIndexRecords(records = []) {
                        this.records = records;
                    }
                    setKeys(keys = []) {
                        this.keys = keys;
                        this._keysMap = {};
                        keys.forEach((key, idx)=>{
                            this._keysMap[key.id] = idx;
                        });
                    }
                    create() {
                        if (this.isCreated || !this.docs.length) return;
                        this.isCreated = true;
                        // List is Array<String>
                        if (isString(this.docs[0])) this.docs.forEach((doc, docIndex)=>{
                            this._addString(doc, docIndex);
                        });
                        else // List is Array<Object>
                        this.docs.forEach((doc, docIndex)=>{
                            this._addObject(doc, docIndex);
                        });
                        this.norm.clear();
                    }
                    // Adds a doc to the end of the index
                    add(doc) {
                        const idx = this.size();
                        if (isString(doc)) this._addString(doc, idx);
                        else this._addObject(doc, idx);
                    }
                    // Removes the doc at the specified index of the index
                    removeAt(idx) {
                        this.records.splice(idx, 1);
                        // Change ref index of every subsquent doc
                        for(let i = idx, len = this.size(); i < len; i += 1)this.records[i].i -= 1;
                    }
                    getValueForItemAtKeyId(item, keyId) {
                        return item[this._keysMap[keyId]];
                    }
                    size() {
                        return this.records.length;
                    }
                    _addString(doc, docIndex) {
                        if (!isDefined(doc) || isBlank(doc)) return;
                        let record = {
                            v: doc,
                            i: docIndex,
                            n: this.norm.get(doc)
                        };
                        this.records.push(record);
                    }
                    _addObject(doc, docIndex) {
                        let record = {
                            i: docIndex,
                            $: {}
                        };
                        // Iterate over every key (i.e, path), and fetch the value at that key
                        this.keys.forEach((key, keyIndex)=>{
                            let value = key.getFn ? key.getFn(doc) : this.getFn(doc, key.path);
                            if (!isDefined(value)) return;
                            if (isArray(value)) {
                                let subRecords = [];
                                const stack = [
                                    {
                                        nestedArrIndex: -1,
                                        value
                                    }
                                ];
                                while(stack.length){
                                    const { nestedArrIndex , value  } = stack.pop();
                                    if (!isDefined(value)) continue;
                                    if (isString(value) && !isBlank(value)) {
                                        let subRecord = {
                                            v: value,
                                            i: nestedArrIndex,
                                            n: this.norm.get(value)
                                        };
                                        subRecords.push(subRecord);
                                    } else if (isArray(value)) value.forEach((item, k)=>{
                                        stack.push({
                                            nestedArrIndex: k,
                                            value: item
                                        });
                                    });
                                }
                                record.$[keyIndex] = subRecords;
                            } else if (isString(value) && !isBlank(value)) {
                                let subRecord = {
                                    v: value,
                                    n: this.norm.get(value)
                                };
                                record.$[keyIndex] = subRecord;
                            }
                        });
                        this.records.push(record);
                    }
                    toJSON() {
                        return {
                            keys: this.keys,
                            records: this.records
                        };
                    }
                }
                function createIndex(keys, docs, { getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}) {
                    const myIndex = new FuseIndex({
                        getFn,
                        fieldNormWeight
                    });
                    myIndex.setKeys(keys.map(createKey));
                    myIndex.setSources(docs);
                    myIndex.create();
                    return myIndex;
                }
                function parseIndex(data, { getFn =Config.getFn , fieldNormWeight =Config.fieldNormWeight  } = {}) {
                    const { keys , records  } = data;
                    const myIndex = new FuseIndex({
                        getFn,
                        fieldNormWeight
                    });
                    myIndex.setKeys(keys);
                    myIndex.setIndexRecords(records);
                    return myIndex;
                }
                function computeScore$1(pattern, { errors =0 , currentLocation =0 , expectedLocation =0 , distance =Config.distance , ignoreLocation =Config.ignoreLocation  } = {}) {
                    const accuracy = errors / pattern.length;
                    if (ignoreLocation) return accuracy;
                    const proximity = Math.abs(expectedLocation - currentLocation);
                    if (!distance) // Dodge divide by zero error.
                    return proximity ? 1.0 : accuracy;
                    return accuracy + proximity / distance;
                }
                function convertMaskToIndices(matchmask = [], minMatchCharLength = Config.minMatchCharLength) {
                    let indices = [];
                    let start = -1;
                    let end = -1;
                    let i = 0;
                    for(let len = matchmask.length; i < len; i += 1){
                        let match = matchmask[i];
                        if (match && start === -1) start = i;
                        else if (!match && start !== -1) {
                            end = i - 1;
                            if (end - start + 1 >= minMatchCharLength) indices.push([
                                start,
                                end
                            ]);
                            start = -1;
                        }
                    }
                    // (i-1 - start) + 1 => i - start
                    if (matchmask[i - 1] && i - start >= minMatchCharLength) indices.push([
                        start,
                        i - 1
                    ]);
                    return indices;
                }
                // Machine word size
                const MAX_BITS = 32;
                function search(text, pattern, patternAlphabet, { location =Config.location , distance =Config.distance , threshold =Config.threshold , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , includeMatches =Config.includeMatches , ignoreLocation =Config.ignoreLocation  } = {}) {
                    if (pattern.length > MAX_BITS) throw new Error(PATTERN_LENGTH_TOO_LARGE(MAX_BITS));
                    const patternLen = pattern.length;
                    // Set starting location at beginning text and initialize the alphabet.
                    const textLen = text.length;
                    // Handle the case when location > text.length
                    const expectedLocation = Math.max(0, Math.min(location, textLen));
                    // Highest score beyond which we give up.
                    let currentThreshold = threshold;
                    // Is there a nearby exact match? (speedup)
                    let bestLocation = expectedLocation;
                    // Performance: only computer matches when the minMatchCharLength > 1
                    // OR if `includeMatches` is true.
                    const computeMatches = minMatchCharLength > 1 || includeMatches;
                    // A mask of the matches, used for building the indices
                    const matchMask = computeMatches ? Array(textLen) : [];
                    let index;
                    // Get all exact matches, here for speed up
                    while((index = text.indexOf(pattern, bestLocation)) > -1){
                        let score = computeScore$1(pattern, {
                            currentLocation: index,
                            expectedLocation,
                            distance,
                            ignoreLocation
                        });
                        currentThreshold = Math.min(score, currentThreshold);
                        bestLocation = index + patternLen;
                        if (computeMatches) {
                            let i = 0;
                            while(i < patternLen){
                                matchMask[index + i] = 1;
                                i += 1;
                            }
                        }
                    }
                    // Reset the best location
                    bestLocation = -1;
                    let lastBitArr = [];
                    let finalScore = 1;
                    let binMax = patternLen + textLen;
                    const mask = 1 << patternLen - 1;
                    for(let i = 0; i < patternLen; i += 1){
                        // Scan for the best match; each iteration allows for one more error.
                        // Run a binary search to determine how far from the match location we can stray
                        // at this error level.
                        let binMin = 0;
                        let binMid = binMax;
                        while(binMin < binMid){
                            const score = computeScore$1(pattern, {
                                errors: i,
                                currentLocation: expectedLocation + binMid,
                                expectedLocation,
                                distance,
                                ignoreLocation
                            });
                            if (score <= currentThreshold) binMin = binMid;
                            else binMax = binMid;
                            binMid = Math.floor((binMax - binMin) / 2 + binMin);
                        }
                        // Use the result from this iteration as the maximum for the next.
                        binMax = binMid;
                        let start = Math.max(1, expectedLocation - binMid + 1);
                        let finish = findAllMatches ? textLen : Math.min(expectedLocation + binMid, textLen) + patternLen;
                        // Initialize the bit array
                        let bitArr = Array(finish + 2);
                        bitArr[finish + 1] = (1 << i) - 1;
                        for(let j = finish; j >= start; j -= 1){
                            let currentLocation = j - 1;
                            let charMatch = patternAlphabet[text.charAt(currentLocation)];
                            if (computeMatches) // Speed up: quick bool to int conversion (i.e, `charMatch ? 1 : 0`)
                            matchMask[currentLocation] = +!!charMatch;
                            // First pass: exact match
                            bitArr[j] = (bitArr[j + 1] << 1 | 1) & charMatch;
                            // Subsequent passes: fuzzy match
                            if (i) bitArr[j] |= (lastBitArr[j + 1] | lastBitArr[j]) << 1 | 1 | lastBitArr[j + 1];
                            if (bitArr[j] & mask) {
                                finalScore = computeScore$1(pattern, {
                                    errors: i,
                                    currentLocation,
                                    expectedLocation,
                                    distance,
                                    ignoreLocation
                                });
                                // This match will almost certainly be better than any existing match.
                                // But check anyway.
                                if (finalScore <= currentThreshold) {
                                    // Indeed it is
                                    currentThreshold = finalScore;
                                    bestLocation = currentLocation;
                                    // Already passed `loc`, downhill from here on in.
                                    if (bestLocation <= expectedLocation) break;
                                    // When passing `bestLocation`, don't exceed our current distance from `expectedLocation`.
                                    start = Math.max(1, 2 * expectedLocation - bestLocation);
                                }
                            }
                        }
                        // No hope for a (better) match at greater error levels.
                        const score = computeScore$1(pattern, {
                            errors: i + 1,
                            currentLocation: expectedLocation,
                            expectedLocation,
                            distance,
                            ignoreLocation
                        });
                        if (score > currentThreshold) break;
                        lastBitArr = bitArr;
                    }
                    const result = {
                        isMatch: bestLocation >= 0,
                        // Count exact matches (those with a score of 0) to be "almost" exact
                        score: Math.max(0.001, finalScore)
                    };
                    if (computeMatches) {
                        const indices = convertMaskToIndices(matchMask, minMatchCharLength);
                        if (!indices.length) result.isMatch = false;
                        else if (includeMatches) result.indices = indices;
                    }
                    return result;
                }
                function createPatternAlphabet(pattern) {
                    let mask = {};
                    for(let i = 0, len = pattern.length; i < len; i += 1){
                        const char = pattern.charAt(i);
                        mask[char] = (mask[char] || 0) | 1 << len - i - 1;
                    }
                    return mask;
                }
                class BitapSearch {
                    constructor(pattern, { location =Config.location , threshold =Config.threshold , distance =Config.distance , includeMatches =Config.includeMatches , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , isCaseSensitive =Config.isCaseSensitive , ignoreLocation =Config.ignoreLocation  } = {}){
                        this.options = {
                            location,
                            threshold,
                            distance,
                            includeMatches,
                            findAllMatches,
                            minMatchCharLength,
                            isCaseSensitive,
                            ignoreLocation
                        };
                        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                        this.chunks = [];
                        if (!this.pattern.length) return;
                        const addChunk = (pattern, startIndex)=>{
                            this.chunks.push({
                                pattern,
                                alphabet: createPatternAlphabet(pattern),
                                startIndex
                            });
                        };
                        const len = this.pattern.length;
                        if (len > MAX_BITS) {
                            let i = 0;
                            const remainder = len % MAX_BITS;
                            const end = len - remainder;
                            while(i < end){
                                addChunk(this.pattern.substr(i, MAX_BITS), i);
                                i += MAX_BITS;
                            }
                            if (remainder) {
                                const startIndex = len - MAX_BITS;
                                addChunk(this.pattern.substr(startIndex), startIndex);
                            }
                        } else addChunk(this.pattern, 0);
                    }
                    searchIn(text) {
                        const { isCaseSensitive , includeMatches  } = this.options;
                        if (!isCaseSensitive) text = text.toLowerCase();
                        // Exact match
                        if (this.pattern === text) {
                            let result = {
                                isMatch: true,
                                score: 0
                            };
                            if (includeMatches) result.indices = [
                                [
                                    0,
                                    text.length - 1
                                ]
                            ];
                            return result;
                        }
                        // Otherwise, use Bitap algorithm
                        const { location , distance , threshold , findAllMatches , minMatchCharLength , ignoreLocation  } = this.options;
                        let allIndices = [];
                        let totalScore = 0;
                        let hasMatches = false;
                        this.chunks.forEach(({ pattern , alphabet , startIndex  })=>{
                            const { isMatch , score , indices  } = search(text, pattern, alphabet, {
                                location: location + startIndex,
                                distance,
                                threshold,
                                findAllMatches,
                                minMatchCharLength,
                                includeMatches,
                                ignoreLocation
                            });
                            if (isMatch) hasMatches = true;
                            totalScore += score;
                            if (isMatch && indices) allIndices = [
                                ...allIndices,
                                ...indices
                            ];
                        });
                        let result = {
                            isMatch: hasMatches,
                            score: hasMatches ? totalScore / this.chunks.length : 1
                        };
                        if (hasMatches && includeMatches) result.indices = allIndices;
                        return result;
                    }
                }
                class BaseMatch {
                    constructor(pattern){
                        this.pattern = pattern;
                    }
                    static isMultiMatch(pattern) {
                        return getMatch(pattern, this.multiRegex);
                    }
                    static isSingleMatch(pattern) {
                        return getMatch(pattern, this.singleRegex);
                    }
                    search() {}
                }
                function getMatch(pattern, exp) {
                    const matches = pattern.match(exp);
                    return matches ? matches[1] : null;
                }
                // Token: 'file
                class ExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "exact";
                    }
                    static get multiRegex() {
                        return /^="(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^=(.*)$/;
                    }
                    search(text) {
                        const isMatch = text === this.pattern;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                this.pattern.length - 1
                            ]
                        };
                    }
                }
                // Token: !fire
                class InverseExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "inverse-exact";
                    }
                    static get multiRegex() {
                        return /^!"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^!(.*)$/;
                    }
                    search(text) {
                        const index = text.indexOf(this.pattern);
                        const isMatch = index === -1;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                }
                // Token: ^file
                class PrefixExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "prefix-exact";
                    }
                    static get multiRegex() {
                        return /^\^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^\^(.*)$/;
                    }
                    search(text) {
                        const isMatch = text.startsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                this.pattern.length - 1
                            ]
                        };
                    }
                }
                // Token: !^fire
                class InversePrefixExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "inverse-prefix-exact";
                    }
                    static get multiRegex() {
                        return /^!\^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^!\^(.*)$/;
                    }
                    search(text) {
                        const isMatch = !text.startsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                }
                // Token: .file$
                class SuffixExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "suffix-exact";
                    }
                    static get multiRegex() {
                        return /^"(.*)"\$$/;
                    }
                    static get singleRegex() {
                        return /^(.*)\$$/;
                    }
                    search(text) {
                        const isMatch = text.endsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                text.length - this.pattern.length,
                                text.length - 1
                            ]
                        };
                    }
                }
                // Token: !.file$
                class InverseSuffixExactMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "inverse-suffix-exact";
                    }
                    static get multiRegex() {
                        return /^!"(.*)"\$$/;
                    }
                    static get singleRegex() {
                        return /^!(.*)\$$/;
                    }
                    search(text) {
                        const isMatch = !text.endsWith(this.pattern);
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices: [
                                0,
                                text.length - 1
                            ]
                        };
                    }
                }
                class FuzzyMatch extends BaseMatch {
                    constructor(pattern, { location =Config.location , threshold =Config.threshold , distance =Config.distance , includeMatches =Config.includeMatches , findAllMatches =Config.findAllMatches , minMatchCharLength =Config.minMatchCharLength , isCaseSensitive =Config.isCaseSensitive , ignoreLocation =Config.ignoreLocation  } = {}){
                        super(pattern);
                        this._bitapSearch = new BitapSearch(pattern, {
                            location,
                            threshold,
                            distance,
                            includeMatches,
                            findAllMatches,
                            minMatchCharLength,
                            isCaseSensitive,
                            ignoreLocation
                        });
                    }
                    static get type() {
                        return "fuzzy";
                    }
                    static get multiRegex() {
                        return /^"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^(.*)$/;
                    }
                    search(text) {
                        return this._bitapSearch.searchIn(text);
                    }
                }
                // Token: 'file
                class IncludeMatch extends BaseMatch {
                    constructor(pattern){
                        super(pattern);
                    }
                    static get type() {
                        return "include";
                    }
                    static get multiRegex() {
                        return /^'"(.*)"$/;
                    }
                    static get singleRegex() {
                        return /^'(.*)$/;
                    }
                    search(text) {
                        let location = 0;
                        let index;
                        const indices = [];
                        const patternLen = this.pattern.length;
                        // Get all exact matches
                        while((index = text.indexOf(this.pattern, location)) > -1){
                            location = index + patternLen;
                            indices.push([
                                index,
                                location - 1
                            ]);
                        }
                        const isMatch = !!indices.length;
                        return {
                            isMatch,
                            score: isMatch ? 0 : 1,
                            indices
                        };
                    }
                }
                // ❗Order is important. DO NOT CHANGE.
                const searchers = [
                    ExactMatch,
                    IncludeMatch,
                    PrefixExactMatch,
                    InversePrefixExactMatch,
                    InverseSuffixExactMatch,
                    SuffixExactMatch,
                    InverseExactMatch,
                    FuzzyMatch
                ];
                const searchersLen = searchers.length;
                // Regex to split by spaces, but keep anything in quotes together
                const SPACE_RE = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/;
                const OR_TOKEN = "|";
                // Return a 2D array representation of the query, for simpler parsing.
                // Example:
                // "^core go$ | rb$ | py$ xy$" => [["^core", "go$"], ["rb$"], ["py$", "xy$"]]
                function parseQuery(pattern, options = {}) {
                    return pattern.split(OR_TOKEN).map((item)=>{
                        let query = item.trim().split(SPACE_RE).filter((item)=>item && !!item.trim());
                        let results = [];
                        for(let i = 0, len = query.length; i < len; i += 1){
                            const queryItem = query[i];
                            // 1. Handle multiple query match (i.e, once that are quoted, like `"hello world"`)
                            let found = false;
                            let idx = -1;
                            while(!found && ++idx < searchersLen){
                                const searcher = searchers[idx];
                                let token = searcher.isMultiMatch(queryItem);
                                if (token) {
                                    results.push(new searcher(token, options));
                                    found = true;
                                }
                            }
                            if (found) continue;
                            // 2. Handle single query matches (i.e, once that are *not* quoted)
                            idx = -1;
                            while(++idx < searchersLen){
                                const searcher = searchers[idx];
                                let token = searcher.isSingleMatch(queryItem);
                                if (token) {
                                    results.push(new searcher(token, options));
                                    break;
                                }
                            }
                        }
                        return results;
                    });
                }
                // These extended matchers can return an array of matches, as opposed
                // to a singl match
                const MultiMatchSet = new Set([
                    FuzzyMatch.type,
                    IncludeMatch.type
                ]);
                /**
 * Command-like searching
 * ======================
 *
 * Given multiple search terms delimited by spaces.e.g. `^jscript .python$ ruby !java`,
 * search in a given text.
 *
 * Search syntax:
 *
 * | Token       | Match type                 | Description                            |
 * | ----------- | -------------------------- | -------------------------------------- |
 * | `jscript`   | fuzzy-match                | Items that fuzzy match `jscript`       |
 * | `=scheme`   | exact-match                | Items that are `scheme`                |
 * | `'python`   | include-match              | Items that include `python`            |
 * | `!ruby`     | inverse-exact-match        | Items that do not include `ruby`       |
 * | `^java`     | prefix-exact-match         | Items that start with `java`           |
 * | `!^earlang` | inverse-prefix-exact-match | Items that do not start with `earlang` |
 * | `.js$`      | suffix-exact-match         | Items that end with `.js`              |
 * | `!.go$`     | inverse-suffix-exact-match | Items that do not end with `.go`       |
 *
 * A single pipe character acts as an OR operator. For example, the following
 * query matches entries that start with `core` and end with either`go`, `rb`,
 * or`py`.
 *
 * ```
 * ^core go$ | rb$ | py$
 * ```
 */ class ExtendedSearch {
                    constructor(pattern, { isCaseSensitive =Config.isCaseSensitive , includeMatches =Config.includeMatches , minMatchCharLength =Config.minMatchCharLength , ignoreLocation =Config.ignoreLocation , findAllMatches =Config.findAllMatches , location =Config.location , threshold =Config.threshold , distance =Config.distance  } = {}){
                        this.query = null;
                        this.options = {
                            isCaseSensitive,
                            includeMatches,
                            minMatchCharLength,
                            findAllMatches,
                            ignoreLocation,
                            location,
                            threshold,
                            distance
                        };
                        this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase();
                        this.query = parseQuery(this.pattern, this.options);
                    }
                    static condition(_, options) {
                        return options.useExtendedSearch;
                    }
                    searchIn(text) {
                        const query = this.query;
                        if (!query) return {
                            isMatch: false,
                            score: 1
                        };
                        const { includeMatches , isCaseSensitive  } = this.options;
                        text = isCaseSensitive ? text : text.toLowerCase();
                        let numMatches = 0;
                        let allIndices = [];
                        let totalScore = 0;
                        // ORs
                        for(let i = 0, qLen = query.length; i < qLen; i += 1){
                            const searchers = query[i];
                            // Reset indices
                            allIndices.length = 0;
                            numMatches = 0;
                            // ANDs
                            for(let j = 0, pLen = searchers.length; j < pLen; j += 1){
                                const searcher = searchers[j];
                                const { isMatch , indices , score  } = searcher.search(text);
                                if (isMatch) {
                                    numMatches += 1;
                                    totalScore += score;
                                    if (includeMatches) {
                                        const type = searcher.constructor.type;
                                        if (MultiMatchSet.has(type)) allIndices = [
                                            ...allIndices,
                                            ...indices
                                        ];
                                        else allIndices.push(indices);
                                    }
                                } else {
                                    totalScore = 0;
                                    numMatches = 0;
                                    allIndices.length = 0;
                                    break;
                                }
                            }
                            // OR condition, so if TRUE, return
                            if (numMatches) {
                                let result = {
                                    isMatch: true,
                                    score: totalScore / numMatches
                                };
                                if (includeMatches) result.indices = allIndices;
                                return result;
                            }
                        }
                        // Nothing was matched
                        return {
                            isMatch: false,
                            score: 1
                        };
                    }
                }
                const registeredSearchers = [];
                function register(...args) {
                    registeredSearchers.push(...args);
                }
                function createSearcher(pattern, options) {
                    for(let i = 0, len = registeredSearchers.length; i < len; i += 1){
                        let searcherClass = registeredSearchers[i];
                        if (searcherClass.condition(pattern, options)) return new searcherClass(pattern, options);
                    }
                    return new BitapSearch(pattern, options);
                }
                const LogicalOperator = {
                    AND: "$and",
                    OR: "$or"
                };
                const KeyType = {
                    PATH: "$path",
                    PATTERN: "$val"
                };
                const isExpression = (query)=>!!(query[LogicalOperator.AND] || query[LogicalOperator.OR]);
                const isPath = (query)=>!!query[KeyType.PATH];
                const isLeaf = (query)=>!isArray(query) && isObject(query) && !isExpression(query);
                const convertToExplicit = (query)=>({
                        [LogicalOperator.AND]: Object.keys(query).map((key)=>({
                                [key]: query[key]
                            }))
                    });
                // When `auto` is `true`, the parse function will infer and initialize and add
                // the appropriate `Searcher` instance
                function parse(query, options, { auto =true  } = {}) {
                    const next = (query)=>{
                        let keys = Object.keys(query);
                        const isQueryPath = isPath(query);
                        if (!isQueryPath && keys.length > 1 && !isExpression(query)) return next(convertToExplicit(query));
                        if (isLeaf(query)) {
                            const key = isQueryPath ? query[KeyType.PATH] : keys[0];
                            const pattern = isQueryPath ? query[KeyType.PATTERN] : query[key];
                            if (!isString(pattern)) throw new Error(LOGICAL_SEARCH_INVALID_QUERY_FOR_KEY(key));
                            const obj = {
                                keyId: createKeyId(key),
                                pattern
                            };
                            if (auto) obj.searcher = createSearcher(pattern, options);
                            return obj;
                        }
                        let node = {
                            children: [],
                            operator: keys[0]
                        };
                        keys.forEach((key)=>{
                            const value = query[key];
                            if (isArray(value)) value.forEach((item)=>{
                                node.children.push(next(item));
                            });
                        });
                        return node;
                    };
                    if (!isExpression(query)) query = convertToExplicit(query);
                    return next(query);
                }
                // Practical scoring function
                function computeScore(results, { ignoreFieldNorm =Config.ignoreFieldNorm  }) {
                    results.forEach((result)=>{
                        let totalScore = 1;
                        result.matches.forEach(({ key , norm , score  })=>{
                            const weight = key ? key.weight : null;
                            totalScore *= Math.pow(score === 0 && weight ? Number.EPSILON : score, (weight || 1) * (ignoreFieldNorm ? 1 : norm));
                        });
                        result.score = totalScore;
                    });
                }
                function transformMatches(result, data) {
                    const matches = result.matches;
                    data.matches = [];
                    if (!isDefined(matches)) return;
                    matches.forEach((match)=>{
                        if (!isDefined(match.indices) || !match.indices.length) return;
                        const { indices , value  } = match;
                        let obj = {
                            indices,
                            value
                        };
                        if (match.key) obj.key = match.key.src;
                        if (match.idx > -1) obj.refIndex = match.idx;
                        data.matches.push(obj);
                    });
                }
                function transformScore(result, data) {
                    data.score = result.score;
                }
                function format(results, docs, { includeMatches =Config.includeMatches , includeScore =Config.includeScore  } = {}) {
                    const transformers = [];
                    if (includeMatches) transformers.push(transformMatches);
                    if (includeScore) transformers.push(transformScore);
                    return results.map((result)=>{
                        const { idx  } = result;
                        const data = {
                            item: docs[idx],
                            refIndex: idx
                        };
                        if (transformers.length) transformers.forEach((transformer)=>{
                            transformer(result, data);
                        });
                        return data;
                    });
                }
                class Fuse {
                    constructor(docs, options = {}, index){
                        this.options = {
                            ...Config,
                            ...options
                        };
                        this.options.useExtendedSearch;
                        this._keyStore = new KeyStore(this.options.keys);
                        this.setCollection(docs, index);
                    }
                    setCollection(docs, index) {
                        this._docs = docs;
                        if (index && !(index instanceof FuseIndex)) throw new Error(INCORRECT_INDEX_TYPE);
                        this._myIndex = index || createIndex(this.options.keys, this._docs, {
                            getFn: this.options.getFn,
                            fieldNormWeight: this.options.fieldNormWeight
                        });
                    }
                    add(doc) {
                        if (!isDefined(doc)) return;
                        this._docs.push(doc);
                        this._myIndex.add(doc);
                    }
                    remove(predicate = ()=>false) {
                        const results = [];
                        for(let i = 0, len = this._docs.length; i < len; i += 1){
                            const doc = this._docs[i];
                            if (predicate(doc, i)) {
                                this.removeAt(i);
                                i -= 1;
                                len -= 1;
                                results.push(doc);
                            }
                        }
                        return results;
                    }
                    removeAt(idx) {
                        this._docs.splice(idx, 1);
                        this._myIndex.removeAt(idx);
                    }
                    getIndex() {
                        return this._myIndex;
                    }
                    search(query, { limit =-1  } = {}) {
                        const { includeMatches , includeScore , shouldSort , sortFn , ignoreFieldNorm  } = this.options;
                        let results = isString(query) ? isString(this._docs[0]) ? this._searchStringList(query) : this._searchObjectList(query) : this._searchLogical(query);
                        computeScore(results, {
                            ignoreFieldNorm
                        });
                        if (shouldSort) results.sort(sortFn);
                        if (isNumber(limit) && limit > -1) results = results.slice(0, limit);
                        return format(results, this._docs, {
                            includeMatches,
                            includeScore
                        });
                    }
                    _searchStringList(query) {
                        const searcher = createSearcher(query, this.options);
                        const { records  } = this._myIndex;
                        const results = [];
                        // Iterate over every string in the index
                        records.forEach(({ v: text , i: idx , n: norm  })=>{
                            if (!isDefined(text)) return;
                            const { isMatch , score , indices  } = searcher.searchIn(text);
                            if (isMatch) results.push({
                                item: text,
                                idx,
                                matches: [
                                    {
                                        score,
                                        value: text,
                                        norm,
                                        indices
                                    }
                                ]
                            });
                        });
                        return results;
                    }
                    _searchLogical(query) {
                        const expression = parse(query, this.options);
                        const evaluate = (node, item, idx)=>{
                            if (!node.children) {
                                const { keyId , searcher  } = node;
                                const matches = this._findMatches({
                                    key: this._keyStore.get(keyId),
                                    value: this._myIndex.getValueForItemAtKeyId(item, keyId),
                                    searcher
                                });
                                if (matches && matches.length) return [
                                    {
                                        idx,
                                        item,
                                        matches
                                    }
                                ];
                                return [];
                            }
                            const res = [];
                            for(let i = 0, len = node.children.length; i < len; i += 1){
                                const child = node.children[i];
                                const result = evaluate(child, item, idx);
                                if (result.length) res.push(...result);
                                else if (node.operator === LogicalOperator.AND) return [];
                            }
                            return res;
                        };
                        const records = this._myIndex.records;
                        const resultMap = {};
                        const results = [];
                        records.forEach(({ $: item , i: idx  })=>{
                            if (isDefined(item)) {
                                let expResults = evaluate(expression, item, idx);
                                if (expResults.length) {
                                    // Dedupe when adding
                                    if (!resultMap[idx]) {
                                        resultMap[idx] = {
                                            idx,
                                            item,
                                            matches: []
                                        };
                                        results.push(resultMap[idx]);
                                    }
                                    expResults.forEach(({ matches  })=>{
                                        resultMap[idx].matches.push(...matches);
                                    });
                                }
                            }
                        });
                        return results;
                    }
                    _searchObjectList(query) {
                        const searcher = createSearcher(query, this.options);
                        const { keys , records  } = this._myIndex;
                        const results = [];
                        // List is Array<Object>
                        records.forEach(({ $: item , i: idx  })=>{
                            if (!isDefined(item)) return;
                            let matches = [];
                            // Iterate over every key (i.e, path), and fetch the value at that key
                            keys.forEach((key, keyIndex)=>{
                                matches.push(...this._findMatches({
                                    key,
                                    value: item[keyIndex],
                                    searcher
                                }));
                            });
                            if (matches.length) results.push({
                                idx,
                                item,
                                matches
                            });
                        });
                        return results;
                    }
                    _findMatches({ key , value , searcher  }) {
                        if (!isDefined(value)) return [];
                        let matches = [];
                        if (isArray(value)) value.forEach(({ v: text , i: idx , n: norm  })=>{
                            if (!isDefined(text)) return;
                            const { isMatch , score , indices  } = searcher.searchIn(text);
                            if (isMatch) matches.push({
                                score,
                                key,
                                value: text,
                                idx,
                                norm,
                                indices
                            });
                        });
                        else {
                            const { v: text , n: norm  } = value;
                            const { isMatch , score , indices  } = searcher.searchIn(text);
                            if (isMatch) matches.push({
                                score,
                                key,
                                value: text,
                                norm,
                                indices
                            });
                        }
                        return matches;
                    }
                }
                Fuse.version = "6.6.2";
                Fuse.createIndex = createIndex;
                Fuse.parseIndex = parseIndex;
                Fuse.config = Config;
                Fuse.parseQuery = parse;
                register(ExtendedSearch);
            /***/ },
            /***/ 791: /***/ function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
                // ESM COMPAT FLAG
                __webpack_require__.r(__webpack_exports__);
                // EXPORTS
                __webpack_require__.d(__webpack_exports__, {
                    "__DO_NOT_USE__ActionTypes": function() {
                        return /* binding */ ActionTypes;
                    },
                    "applyMiddleware": function() {
                        return /* binding */ applyMiddleware;
                    },
                    "bindActionCreators": function() {
                        return /* binding */ bindActionCreators;
                    },
                    "combineReducers": function() {
                        return /* binding */ combineReducers;
                    },
                    "compose": function() {
                        return /* binding */ compose;
                    },
                    "createStore": function() {
                        return /* binding */ createStore;
                    },
                    "legacy_createStore": function() {
                        return /* binding */ legacy_createStore;
                    }
                });
                function _typeof(obj) {
                    "@babel/helpers - typeof";
                    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
                        return typeof obj;
                    } : function(obj) {
                        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
                    }, _typeof(obj);
                }
                function _toPrimitive(input, hint) {
                    if (_typeof(input) !== "object" || input === null) return input;
                    var prim = input[Symbol.toPrimitive];
                    if (prim !== undefined) {
                        var res = prim.call(input, hint || "default");
                        if (_typeof(res) !== "object") return res;
                        throw new TypeError("@@toPrimitive must return a primitive value.");
                    }
                    return (hint === "string" ? String : Number)(input);
                }
                function _toPropertyKey(arg) {
                    var key = _toPrimitive(arg, "string");
                    return _typeof(key) === "symbol" ? key : String(key);
                }
                function _defineProperty(obj, key, value) {
                    key = _toPropertyKey(key);
                    if (key in obj) Object.defineProperty(obj, key, {
                        value: value,
                        enumerable: true,
                        configurable: true,
                        writable: true
                    });
                    else obj[key] = value;
                    return obj;
                }
                function ownKeys(object, enumerableOnly) {
                    var keys = Object.keys(object);
                    if (Object.getOwnPropertySymbols) {
                        var symbols = Object.getOwnPropertySymbols(object);
                        enumerableOnly && (symbols = symbols.filter(function(sym) {
                            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                        })), keys.push.apply(keys, symbols);
                    }
                    return keys;
                }
                function _objectSpread2(target) {
                    for(var i = 1; i < arguments.length; i++){
                        var source = null != arguments[i] ? arguments[i] : {};
                        i % 2 ? ownKeys(Object(source), !0).forEach(function(key) {
                            _defineProperty(target, key, source[key]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                    return target;
                }
                /**
 * Adapted from React: https://github.com/facebook/react/blob/master/packages/shared/formatProdErrorMessage.js
 *
 * Do not require this module directly! Use normal throw error calls. These messages will be replaced with error codes
 * during build.
 * @param {number} code
 */ function formatProdErrorMessage(code) {
                    return "Minified Redux error #" + code + "; visit https://redux.js.org/Errors?code=" + code + " for the full message or " + "use the non-minified dev environment for full errors. ";
                }
                // Inlined version of the `symbol-observable` polyfill
                var $$observable = function() {
                    return typeof Symbol === "function" && Symbol.observable || "@@observable";
                }();
                /**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */ var randomString = function randomString() {
                    return Math.random().toString(36).substring(7).split("").join(".");
                };
                var ActionTypes = {
                    INIT: "@@redux/INIT" + randomString(),
                    REPLACE: "@@redux/REPLACE" + randomString(),
                    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
                    }
                };
                /**
 * @param {any} obj The object to inspect.
 * @returns {boolean} True if the argument appears to be a plain object.
 */ function isPlainObject(obj) {
                    if (typeof obj !== "object" || obj === null) return false;
                    var proto = obj;
                    while(Object.getPrototypeOf(proto) !== null)proto = Object.getPrototypeOf(proto);
                    return Object.getPrototypeOf(obj) === proto;
                }
                // Inlined / shortened version of `kindOf` from https://github.com/jonschlinkert/kind-of
                function miniKindOf(val) {
                    if (val === void 0) return "undefined";
                    if (val === null) return "null";
                    var type = typeof val;
                    switch(type){
                        case "boolean":
                        case "string":
                        case "number":
                        case "symbol":
                        case "function":
                            return type;
                    }
                    if (Array.isArray(val)) return "array";
                    if (isDate(val)) return "date";
                    if (isError(val)) return "error";
                    var constructorName = ctorName(val);
                    switch(constructorName){
                        case "Symbol":
                        case "Promise":
                        case "WeakMap":
                        case "WeakSet":
                        case "Map":
                        case "Set":
                            return constructorName;
                    } // other
                    return type.slice(8, -1).toLowerCase().replace(/\s/g, "");
                }
                function ctorName(val) {
                    return typeof val.constructor === "function" ? val.constructor.name : null;
                }
                function isError(val) {
                    return val instanceof Error || typeof val.message === "string" && val.constructor && typeof val.constructor.stackTraceLimit === "number";
                }
                function isDate(val) {
                    if (val instanceof Date) return true;
                    return typeof val.toDateString === "function" && typeof val.getDate === "function" && typeof val.setDate === "function";
                }
                function kindOf(val) {
                    var typeOfVal = typeof val;
                    return typeOfVal;
                }
                /**
 * @deprecated
 *
 * **We recommend using the `configureStore` method
 * of the `@reduxjs/toolkit` package**, which replaces `createStore`.
 *
 * Redux Toolkit is our recommended approach for writing Redux logic today,
 * including store setup, reducers, data fetching, and more.
 *
 * **For more details, please read this Redux docs page:**
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * `configureStore` from Redux Toolkit is an improved version of `createStore` that
 * simplifies setup and helps avoid common bugs.
 *
 * You should not be using the `redux` core package by itself today, except for learning purposes.
 * The `createStore` method from the core `redux` package will not be removed, but we encourage
 * all users to migrate to using Redux Toolkit for all Redux code.
 *
 * If you want to use `createStore` without this visual deprecation warning, use
 * the `legacy_createStore` import instead:
 *
 * `import { legacy_createStore as createStore} from 'redux'`
 *
 */ function createStore(reducer, preloadedState, enhancer) {
                    var _ref2;
                    if (typeof preloadedState === "function" && typeof enhancer === "function" || typeof enhancer === "function" && typeof arguments[3] === "function") throw new Error(formatProdErrorMessage(0));
                    if (typeof preloadedState === "function" && typeof enhancer === "undefined") {
                        enhancer = preloadedState;
                        preloadedState = undefined;
                    }
                    if (typeof enhancer !== "undefined") {
                        if (typeof enhancer !== "function") throw new Error(formatProdErrorMessage(1));
                        return enhancer(createStore)(reducer, preloadedState);
                    }
                    if (typeof reducer !== "function") throw new Error(formatProdErrorMessage(2));
                    var currentReducer = reducer;
                    var currentState = preloadedState;
                    var currentListeners = [];
                    var nextListeners = currentListeners;
                    var isDispatching = false;
                    /**
   * This makes a shallow copy of currentListeners so we can use
   * nextListeners as a temporary list while dispatching.
   *
   * This prevents any bugs around consumers calling
   * subscribe/unsubscribe in the middle of a dispatch.
   */ function ensureCanMutateNextListeners() {
                        if (nextListeners === currentListeners) nextListeners = currentListeners.slice();
                    }
                    /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */ function getState() {
                        if (isDispatching) throw new Error(formatProdErrorMessage(3));
                        return currentState;
                    }
                    /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */ function subscribe(listener) {
                        if (typeof listener !== "function") throw new Error(formatProdErrorMessage(4));
                        if (isDispatching) throw new Error(formatProdErrorMessage(5));
                        var isSubscribed = true;
                        ensureCanMutateNextListeners();
                        nextListeners.push(listener);
                        return function unsubscribe() {
                            if (!isSubscribed) return;
                            if (isDispatching) throw new Error(formatProdErrorMessage(6));
                            isSubscribed = false;
                            ensureCanMutateNextListeners();
                            var index = nextListeners.indexOf(listener);
                            nextListeners.splice(index, 1);
                            currentListeners = null;
                        };
                    }
                    /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */ function dispatch(action) {
                        if (!isPlainObject(action)) throw new Error(formatProdErrorMessage(7));
                        if (typeof action.type === "undefined") throw new Error(formatProdErrorMessage(8));
                        if (isDispatching) throw new Error(formatProdErrorMessage(9));
                        try {
                            isDispatching = true;
                            currentState = currentReducer(currentState, action);
                        } finally{
                            isDispatching = false;
                        }
                        var listeners = currentListeners = nextListeners;
                        for(var i = 0; i < listeners.length; i++){
                            var listener = listeners[i];
                            listener();
                        }
                        return action;
                    }
                    /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */ function replaceReducer(nextReducer) {
                        if (typeof nextReducer !== "function") throw new Error(formatProdErrorMessage(10));
                        currentReducer = nextReducer; // This action has a similiar effect to ActionTypes.INIT.
                        // Any reducers that existed in both the new and old rootReducer
                        // will receive the previous state. This effectively populates
                        // the new state tree with any relevant data from the old one.
                        dispatch({
                            type: ActionTypes.REPLACE
                        });
                    }
                    /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/tc39/proposal-observable
   */ function observable() {
                        var _ref;
                        var outerSubscribe = subscribe;
                        return _ref = {
                            /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */ subscribe: function subscribe(observer) {
                                if (typeof observer !== "object" || observer === null) throw new Error(formatProdErrorMessage(11));
                                function observeState() {
                                    if (observer.next) observer.next(getState());
                                }
                                observeState();
                                var unsubscribe = outerSubscribe(observeState);
                                return {
                                    unsubscribe: unsubscribe
                                };
                            }
                        }, _ref[$$observable] = function() {
                            return this;
                        }, _ref;
                    } // When a store is created, an "INIT" action is dispatched so that every
                    // reducer returns their initial state. This effectively populates
                    // the initial state tree.
                    dispatch({
                        type: ActionTypes.INIT
                    });
                    return _ref2 = {
                        dispatch: dispatch,
                        subscribe: subscribe,
                        getState: getState,
                        replaceReducer: replaceReducer
                    }, _ref2[$$observable] = observable, _ref2;
                }
                /**
 * Creates a Redux store that holds the state tree.
 *
 * **We recommend using `configureStore` from the
 * `@reduxjs/toolkit` package**, which replaces `createStore`:
 * **https://redux.js.org/introduction/why-rtk-is-redux-today**
 *
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} [enhancer] The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */ var legacy_createStore = createStore;
                /**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */ function warning(message) {
                    /* eslint-disable no-console */ if (typeof console !== "undefined" && typeof console.error === "function") console.error(message);
                    /* eslint-enable no-console */ try {
                        // This error was thrown as a convenience so that if you enable
                        // "break on all exceptions" in your console,
                        // it would pause the execution at this line.
                        throw new Error(message);
                    } catch (e) {} // eslint-disable-line no-empty
                }
                function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
                    var reducerKeys = Object.keys(reducers);
                    var argumentName = action && action.type === ActionTypes.INIT ? "preloadedState argument passed to createStore" : "previous state received by the reducer";
                    if (reducerKeys.length === 0) return "Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.";
                    if (!isPlainObject(inputState)) return "The " + argumentName + ' has unexpected type of "' + kindOf(inputState) + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
                    var unexpectedKeys = Object.keys(inputState).filter(function(key) {
                        return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
                    });
                    unexpectedKeys.forEach(function(key) {
                        unexpectedKeyCache[key] = true;
                    });
                    if (action && action.type === ActionTypes.REPLACE) return;
                    if (unexpectedKeys.length > 0) return "Unexpected " + (unexpectedKeys.length > 1 ? "keys" : "key") + " " + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
                }
                function assertReducerShape(reducers) {
                    Object.keys(reducers).forEach(function(key) {
                        var reducer = reducers[key];
                        var initialState = reducer(undefined, {
                            type: ActionTypes.INIT
                        });
                        if (typeof initialState === "undefined") throw new Error(formatProdErrorMessage(12));
                        if (typeof reducer(undefined, {
                            type: ActionTypes.PROBE_UNKNOWN_ACTION()
                        }) === "undefined") throw new Error(formatProdErrorMessage(13));
                    });
                }
                /**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */ function combineReducers(reducers) {
                    var reducerKeys = Object.keys(reducers);
                    var finalReducers = {};
                    for(var i = 0; i < reducerKeys.length; i++){
                        var key = reducerKeys[i];
                        if (typeof reducers[key] === "function") finalReducers[key] = reducers[key];
                    }
                    var finalReducerKeys = Object.keys(finalReducers); // This is used to make sure we don't warn about the same
                    // keys multiple times.
                    var unexpectedKeyCache;
                    var shapeAssertionError;
                    try {
                        assertReducerShape(finalReducers);
                    } catch (e) {
                        shapeAssertionError = e;
                    }
                    return function combination(state, action) {
                        if (state === void 0) state = {};
                        if (shapeAssertionError) throw shapeAssertionError;
                        var warningMessage;
                        var hasChanged = false;
                        var nextState = {};
                        for(var _i = 0; _i < finalReducerKeys.length; _i++){
                            var _key = finalReducerKeys[_i];
                            var reducer = finalReducers[_key];
                            var previousStateForKey = state[_key];
                            var nextStateForKey = reducer(previousStateForKey, action);
                            if (typeof nextStateForKey === "undefined") {
                                var actionType = action && action.type;
                                throw new Error(formatProdErrorMessage(14));
                            }
                            nextState[_key] = nextStateForKey;
                            hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
                        }
                        hasChanged = hasChanged || finalReducerKeys.length !== Object.keys(state).length;
                        return hasChanged ? nextState : state;
                    };
                }
                function bindActionCreator(actionCreator, dispatch) {
                    return function() {
                        return dispatch(actionCreator.apply(this, arguments));
                    };
                }
                /**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass an action creator as the first argument,
 * and get a dispatch wrapped function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */ function bindActionCreators(actionCreators, dispatch) {
                    if (typeof actionCreators === "function") return bindActionCreator(actionCreators, dispatch);
                    if (typeof actionCreators !== "object" || actionCreators === null) throw new Error(formatProdErrorMessage(16));
                    var boundActionCreators = {};
                    for(var key in actionCreators){
                        var actionCreator = actionCreators[key];
                        if (typeof actionCreator === "function") boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
                    }
                    return boundActionCreators;
                }
                /**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */ function compose() {
                    for(var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++)funcs[_key] = arguments[_key];
                    if (funcs.length === 0) return function(arg) {
                        return arg;
                    };
                    if (funcs.length === 1) return funcs[0];
                    return funcs.reduce(function(a, b) {
                        return function() {
                            return a(b.apply(void 0, arguments));
                        };
                    });
                }
                /**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */ function applyMiddleware() {
                    for(var _len = arguments.length, middlewares = new Array(_len), _key = 0; _key < _len; _key++)middlewares[_key] = arguments[_key];
                    return function(createStore) {
                        return function() {
                            var store = createStore.apply(void 0, arguments);
                            var _dispatch = function dispatch() {
                                throw new Error(formatProdErrorMessage(15));
                            };
                            var middlewareAPI = {
                                getState: store.getState,
                                dispatch: function dispatch() {
                                    return _dispatch.apply(void 0, arguments);
                                }
                            };
                            var chain = middlewares.map(function(middleware) {
                                return middleware(middlewareAPI);
                            });
                            _dispatch = compose.apply(void 0, chain)(store.dispatch);
                            return _objectSpread2(_objectSpread2({}, store), {}, {
                                dispatch: _dispatch
                            });
                        };
                    };
                }
                /*
 * This is a dummy function to check if the function name has been altered by minification.
 * If the function has been minified and NODE_ENV !== 'production', warn the user.
 */ function isCrushed() {}
            /***/ }
        };
        /************************************************************************/ /******/ // The module cache
        /******/ var __webpack_module_cache__ = {};
        /******/ /******/ // The require function
        /******/ function __webpack_require__(moduleId) {
            /******/ // Check if module is in cache
            /******/ var cachedModule = __webpack_module_cache__[moduleId];
            /******/ if (cachedModule !== undefined) /******/ return cachedModule.exports;
            /******/ // Create a new module (and put it into the cache)
            /******/ var module1 = __webpack_module_cache__[moduleId] = {
                /******/ // no module.id needed
                /******/ // no module.loaded needed
                /******/ exports: {}
            };
            /******/ /******/ // Execute the module function
            /******/ __webpack_modules__[moduleId].call(module1.exports, module1, module1.exports, __webpack_require__);
            /******/ /******/ // Return the exports of the module
            /******/ return module1.exports;
        /******/ }
        /******/ /************************************************************************/ /******/ /* webpack/runtime/compat get default export */ /******/ !function() {
            /******/ // getDefaultExport function for compatibility with non-harmony modules
            /******/ __webpack_require__.n = function(module1) {
                /******/ var getter = module1 && module1.__esModule ? /******/ function() {
                    return module1["default"];
                } : /******/ function() {
                    return module1;
                };
                /******/ __webpack_require__.d(getter, {
                    a: getter
                });
                /******/ return getter;
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/define property getters */ /******/ !function() {
            /******/ // define getter functions for harmony exports
            /******/ __webpack_require__.d = function(exports, definition) {
                /******/ for(var key in definition)/******/ if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) /******/ Object.defineProperty(exports, key, {
                    enumerable: true,
                    get: definition[key]
                });
            /******/ };
        /******/ }();
        /******/ /******/ /* webpack/runtime/hasOwnProperty shorthand */ /******/ !function() {
            /******/ __webpack_require__.o = function(obj, prop) {
                return Object.prototype.hasOwnProperty.call(obj, prop);
            };
        /******/ }();
        /******/ /******/ /* webpack/runtime/make namespace object */ /******/ !function() {
            /******/ // define __esModule on exports
            /******/ __webpack_require__.r = function(exports) {
                /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) /******/ Object.defineProperty(exports, Symbol.toStringTag, {
                    value: "Module"
                });
                /******/ Object.defineProperty(exports, "__esModule", {
                    value: true
                });
            /******/ };
        /******/ }();
        /******/ /************************************************************************/ var __webpack_exports__ = {};
        // This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
        !function() {
            /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(373);
            /* harmony import */ var _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_scripts_choices__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(187);
            /* harmony import */ var _scripts_interfaces__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_scripts_interfaces__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _scripts_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(883);
            /* harmony import */ var _scripts_defaults__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(789);
            /* harmony import */ var _scripts_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(686);
            /* harmony default export */ __webpack_exports__["default"] = _scripts_choices__WEBPACK_IMPORTED_MODULE_0___default();
        }();
        __webpack_exports__ = __webpack_exports__["default"];
        /******/ return __webpack_exports__;
    /******/ }();
});

},{}],"fWCLx":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formatToCommonDate", ()=>formatToCommonDate);
function formatToCommonDate(dateString) {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // Формат: гггг-мм-дд чч:мм:сс
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["cu6sN","bAabt"], "bAabt", "parcelRequire7bbc")

//# sourceMappingURL=index.a56319bd.js.map