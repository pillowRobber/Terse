import { presetUno, presetAttributify, presetIcons, Rule } from "unocss";
import Unocss from "unocss/vite";
import buttonList from "./config/safeList/button";
import buttonRules from "./config/rules/button";

const safelist = [...buttonList];

const rules = [...buttonRules] as Rule[];

export default () =>
  Unocss({
    safelist,
    rules,
    presets: [presetUno(), presetAttributify(), presetIcons()],
  });
