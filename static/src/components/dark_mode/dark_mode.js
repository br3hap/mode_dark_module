/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component, useState } from "@odoo/owl";
import { cookie } from "@web/core/browser/cookie";

const SCHEMES = {
    LIGHT: 'light',
    DARK: 'dark',
};

function applyInitialTheme() {
    const storedTheme = cookie.get('color_scheme') || SCHEMES.LIGHT;
    const apply = () => {
        if (storedTheme === SCHEMES.DARK) {
            document.body.classList.add('night_mode');
        } else {
            document.body.classList.remove('night_mode');
        }
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', apply);
    } else {
        apply();
    }
}
applyInitialTheme();

class DarkMode extends Component {
    setup() {
        this.state = useState({
            color_scheme: cookie.get('color_scheme') || SCHEMES.LIGHT,
        });
    }

    mounted() {
        this._applyTheme();
    }

    _applyTheme() {
        document.body.classList.toggle('night_mode', this.state.color_scheme === SCHEMES.DARK);
    }

    toggleTheme() {
        this.state.color_scheme =
            this.state.color_scheme === SCHEMES.LIGHT ? SCHEMES.DARK : SCHEMES.LIGHT;
        cookie.set('color_scheme', this.state.color_scheme);
        this._applyTheme();
    }
}

DarkMode.template = "mode_dark_module.SystrayItemTemplate";

export const SystrayItemTemplate = {
    Component: DarkMode,
    isDisplayed: () => true,
};

registry.category("systray").add("DarkModeItem", SystrayItemTemplate, { sequence: 1 });
