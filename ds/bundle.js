/* @ds-bundle: {"format":4,"namespace":"DieselMasterDesignSystem_ef1472","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"DetailList","sourcePath":"components/cards/DetailList.jsx"},{"name":"InfoCard","sourcePath":"components/cards/InfoCard.jsx"},{"name":"ReviewCard","sourcePath":"components/cards/ReviewCard.jsx"},{"name":"ServiceRow","sourcePath":"components/cards/ServiceRow.jsx"},{"name":"Eyebrow","sourcePath":"components/content/Eyebrow.jsx"},{"name":"StarRating","sourcePath":"components/content/StarRating.jsx"},{"name":"Tag","sourcePath":"components/content/Tag.jsx"},{"name":"Icon","sourcePath":"components/icons/Icon.jsx"},{"name":"Photo","sourcePath":"components/media/Photo.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"76ca6c64d628","components/actions/IconButton.jsx":"c09f7e6a9de9","components/cards/DetailList.jsx":"f3f6c72f98aa","components/cards/InfoCard.jsx":"3eb61f9f1d53","components/cards/ReviewCard.jsx":"f1653e074cc9","components/cards/ServiceRow.jsx":"76decf1b06c0","components/content/Eyebrow.jsx":"8b601e328768","components/content/StarRating.jsx":"f4b8f5690061","components/content/Tag.jsx":"bbae9eb7a49f","components/icons/Icon.jsx":"ccdfb16414a4","components/media/Photo.jsx":"4c06b464fb63","ui_kits/website/About.jsx":"6619a13ba8e3","ui_kits/website/Footer.jsx":"b7f7466da468","ui_kits/website/Header.jsx":"dddcc6c1134d","ui_kits/website/Hero.jsx":"5573cc480d44","ui_kits/website/Reviews.jsx":"eccf641cb954","ui_kits/website/Services.jsx":"b3c0acbaedab","ui_kits/website/VisitShop.jsx":"739a1a0b7627"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.DieselMasterDesignSystem_ef1472 = window.DieselMasterDesignSystem_ef1472 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/cards/InfoCard.jsx
try { (() => {
function InfoCard({
  title,
  description,
  children,
  footer,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark',
    glass = tone === 'glass';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-md)',
      padding: 28,
      display: 'flex',
      flexDirection: 'column',
      gap: 20,
      background: dark ? 'var(--ink-3)' : glass ? 'var(--glass-dark)' : 'var(--surface-card)',
      color: dark || glass ? 'var(--text-inverse)' : 'var(--text-strong)',
      border: '1px solid ' + (dark || glass ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      backdropFilter: glass ? 'blur(var(--blur-glass))' : undefined,
      WebkitBackdropFilter: glass ? 'blur(var(--blur-glass))' : undefined,
      boxShadow: tone === 'light' ? 'var(--shadow-float)' : 'none',
      ...style
    }
  }, (title || description) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: 'var(--fs-h4)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.2
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 'var(--fs-small)',
      lineHeight: 1.5,
      color: dark || glass ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, description)), children, footer && /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 4
    }
  }, footer));
}
Object.assign(__ds_scope, { InfoCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InfoCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  index,
  tone = 'default',
  dot = true,
  style
}) {
  const c = tone === 'inverse' ? 'var(--text-inverse-muted)' : tone === 'accent' ? 'var(--accent)' : 'var(--text-muted)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-eyebrow)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: c,
      lineHeight: 1,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      background: 'var(--accent)',
      borderRadius: 1,
      flex: 'none'
    }
  }), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "(", String(index).padStart(2, '0'), ")"), /*#__PURE__*/React.createElement("span", null, children));
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/content/StarRating.jsx
try { (() => {
function StarRating({
  value = 5,
  max = 5,
  size = 16,
  color = 'var(--accent)',
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "img",
    "aria-label": value + ' out of ' + max + ' stars',
    style: {
      display: 'inline-flex',
      gap: 2,
      fontSize: size,
      lineHeight: 1,
      letterSpacing: 0,
      ...style
    }
  }, Array.from({
    length: max
  }).map((_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    "aria-hidden": "true",
    style: {
      color: i < value ? color : 'var(--paper-3)'
    }
  }, "\u2605")));
}
Object.assign(__ds_scope, { StarRating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/StarRating.jsx", error: String((e && e.message) || e) }); }

// components/cards/ReviewCard.jsx
try { (() => {
function ReviewCard({
  quote,
  name,
  vehicle,
  rating = 5,
  tone = 'light',
  style
}) {
  const dark = tone === 'dark';
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      gap: 32,
      padding: 28,
      minHeight: 280,
      borderRadius: 'var(--radius-md)',
      background: dark ? 'var(--ink-3)' : 'var(--surface-card)',
      border: '1px solid ' + (dark ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      color: dark ? 'var(--text-inverse)' : 'var(--text-strong)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.StarRating, {
    value: rating
  }), /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-lead)',
      lineHeight: 1.4,
      letterSpacing: 'var(--tracking-body)',
      textWrap: 'pretty'
    }
  }, quote)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      color: dark ? 'var(--text-inverse)' : 'var(--text-strong)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      color: dark ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, vehicle)));
}
Object.assign(__ds_scope, { ReviewCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ReviewCard.jsx", error: String((e && e.message) || e) }); }

// components/content/Tag.jsx
try { (() => {
function Tag({
  children,
  tone = 'default',
  style
}) {
  const t = {
    default: ['transparent', 'var(--ink-1)', 'var(--ink-1)'],
    muted: ['var(--paper-2)', 'var(--ink-4)', 'var(--paper-2)'],
    inverse: ['transparent', 'var(--paper-1)', 'rgba(245,244,240,.45)'],
    glass: ['rgba(255,255,255,.14)', '#fff', 'rgba(255,255,255,.3)'],
    accent: ['var(--red-1)', '#fff', 'var(--red-1)']
  }[tone] || [];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 26,
      padding: '0 12px',
      boxSizing: 'border-box',
      borderRadius: 'var(--radius-pill)',
      background: t[0],
      color: t[1],
      border: '1px solid ' + t[2],
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      whiteSpace: 'nowrap',
      backdropFilter: tone === 'glass' ? 'blur(var(--blur-glass))' : undefined,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Tag.jsx", error: String((e && e.message) || e) }); }

// components/icons/Icon.jsx
try { (() => {
const LUCIDE = 'https://unpkg.com/lucide-static@0.469.0/icons/';
function Icon({
  name = 'arrow-up-right',
  size = 20,
  color = 'currentColor',
  style,
  title
}) {
  const url = 'url(' + LUCIDE + name + '.svg)';
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMaskImage: url,
      maskImage: url,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/icons/Icon.jsx", error: String((e && e.message) || e) }); }

// components/actions/Button.jsx
try { (() => {
const {
  useState
} = React;
const V = {
  dark: {
    bg: 'var(--ink-1)',
    fg: 'var(--paper-1)',
    bd: 'var(--ink-1)',
    dot: 'var(--paper-0)',
    dotFg: 'var(--ink-1)',
    hbg: 'var(--ink-3)'
  },
  light: {
    bg: 'var(--paper-0)',
    fg: 'var(--ink-1)',
    bd: 'var(--paper-0)',
    dot: 'var(--ink-1)',
    dotFg: 'var(--paper-0)',
    hbg: 'var(--paper-2)'
  },
  accent: {
    bg: 'var(--red-1)',
    fg: '#fff',
    bd: 'var(--red-1)',
    dot: '#fff',
    dotFg: 'var(--red-1)',
    hbg: 'var(--red-2)'
  },
  outline: {
    bg: 'transparent',
    fg: 'var(--ink-1)',
    bd: 'var(--ink-1)',
    dot: 'var(--ink-1)',
    dotFg: 'var(--paper-0)',
    hbg: 'rgba(17,17,17,.05)'
  },
  'outline-inverse': {
    bg: 'transparent',
    fg: 'var(--paper-1)',
    bd: 'rgba(245,244,240,.5)',
    dot: 'var(--paper-1)',
    dotFg: 'var(--ink-1)',
    hbg: 'rgba(245,244,240,.08)'
  }
};
function Button({
  children,
  variant = 'dark',
  size = 'md',
  arrow = true,
  icon = 'arrow-up-right',
  href,
  onClick,
  target,
  rel,
  disabled,
  style,
  type = 'button'
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const v = V[variant] || V.dark;
  const sm = size === 'sm';
  const dot = sm ? 28 : 36;
  const Tag = href ? 'a' : 'button';
  const on = h && !disabled;
  const slide = icon === 'arrow-up-right';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    target: href ? target : undefined,
    rel: href && target === '_blank' ? rel || 'noopener noreferrer' : rel,
    type: href ? undefined : type,
    onClick: disabled ? undefined : onClick,
    "aria-disabled": disabled || undefined,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sm ? 10 : 14,
      boxSizing: 'border-box',
      height: sm ? 38 : 48,
      padding: arrow ? sm ? '0 5px 0 16px' : '0 6px 0 22px' : sm ? '0 16px' : '0 24px',
      borderRadius: 'var(--radius-pill)',
      border: '1px solid ' + v.bd,
      background: h && !disabled ? v.hbg : v.bg,
      color: v.fg,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      fontSize: sm ? 12 : 13,
      letterSpacing: 'var(--tracking-button)',
      textTransform: 'uppercase',
      textDecoration: 'none',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      whiteSpace: 'nowrap',
      transform: p && !disabled ? 'scale(.98)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", null, children), arrow && /*#__PURE__*/React.createElement("span", {
    style: {
      width: dot,
      height: dot,
      borderRadius: '50%',
      background: v.dot,
      color: v.dotFg,
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      position: 'relative',
      overflow: 'hidden'
    }
  }, slide ? [
  // Arrow leaves toward its own direction and a fresh one slides in behind it
  /*#__PURE__*/React.createElement("span", {
    key: "out",
    style: { display: 'grid', transform: on ? 'translate(160%,-160%)' : 'none', transition: 'transform .45s cubic-bezier(.16,1,.3,1)' }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, { name: icon, size: sm ? 14 : 16 })),
  /*#__PURE__*/React.createElement("span", {
    key: "in",
    "aria-hidden": true,
    style: { position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', transform: on ? 'none' : 'translate(-160%,160%)', transition: 'transform .45s cubic-bezier(.16,1,.3,1)' }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, { name: icon, size: sm ? 14 : 16 }))
  ] : /*#__PURE__*/React.createElement("span", {
    style: { display: 'grid', transform: on ? 'rotate(-12deg)' : 'none', transition: 'transform var(--dur-base) var(--ease-out)' }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, { name: icon, size: sm ? 14 : 16 }))));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
const {
  useState
} = React;
const V = {
  dark: ['var(--ink-1)', 'var(--paper-0)', 'var(--ink-1)'],
  light: ['var(--paper-0)', 'var(--ink-1)', 'var(--paper-0)'],
  accent: ['var(--red-1)', '#fff', 'var(--red-1)'],
  outline: ['transparent', 'var(--ink-1)', 'var(--paper-3)'],
  glass: ['rgba(255,255,255,.14)', '#fff', 'rgba(255,255,255,.28)']
};
function IconButton({
  icon = 'arrow-up-right',
  variant = 'dark',
  size = 40,
  label,
  onClick,
  href,
  active,
  disabled,
  style
}) {
  const [h, setH] = useState(false);
  const [bg, fg, bd] = V[variant] || V.dark;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    type: href ? undefined : 'button',
    "aria-label": label,
    title: label,
    disabled: href ? undefined : disabled || undefined,
    "aria-disabled": disabled || undefined,
    onClick: disabled ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      boxSizing: 'border-box',
      display: 'inline-grid',
      placeItems: 'center',
      flex: 'none',
      background: active ? 'var(--red-1)' : bg,
      color: active ? '#fff' : fg,
      border: '1px solid ' + (active ? 'var(--red-1)' : bd),
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .4 : 1,
      padding: 0,
      backdropFilter: variant === 'glass' ? 'blur(var(--blur-glass))' : undefined,
      transition: 'transform var(--dur-base) var(--ease-out), background var(--dur-fast)',
      transform: h && !disabled ? 'rotate(45deg)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: Math.round(size * 0.42)
  }));
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/cards/DetailList.jsx
try { (() => {
function DetailList({
  items = [],
  tone = 'default',
  divided = true,
  style
}) {
  const inv = tone === 'inverse';
  return /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0,
      display: 'flex',
      flexDirection: 'column',
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'grid',
      gridTemplateColumns: it.icon ? '20px minmax(0,1fr)' : 'minmax(0,1fr)',
      columnGap: 12,
      rowGap: 4,
      padding: '12px 0',
      borderTop: divided && i > 0 ? '1px solid ' + (inv ? 'var(--border-inverse)' : 'var(--border-hairline)') : 'none'
    }
  }, it.icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 18,
    color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
    style: {
      marginTop: 1,
      gridRow: 'span 2'
    }
  }), it.label && /*#__PURE__*/React.createElement("dt", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)'
    }
  }, it.label), /*#__PURE__*/React.createElement("dd", {
    style: {
      margin: 0,
      fontSize: 'var(--fs-body)',
      lineHeight: 1.45,
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)',
      whiteSpace: 'pre-line'
    }
  }, it.href ? /*#__PURE__*/React.createElement("a", {
    href: it.href,
    style: {
      color: 'inherit',
      textDecoration: 'none'
    }
  }, it.value) : it.value))));
}
Object.assign(__ds_scope, { DetailList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/DetailList.jsx", error: String((e && e.message) || e) }); }

// components/cards/ServiceRow.jsx
try { (() => {
const {
  useState
} = React;
function ServiceRow({
  index,
  title,
  description,
  open,
  defaultOpen = false,
  onToggle,
  tone = 'default',
  style
}) {
  const [o, setO] = useState(defaultOpen);
  const [h, setH] = useState(false);
  const isOpen = open != null ? open : o;
  const inv = tone === 'inverse';
  const panelId = 'service-panel-' + index;
  const toggle = () => {
    if (open == null) setO(!o);
    onToggle && onToggle(!isOpen);
  };
  const indexCol = 'clamp(36px,5vw,56px)';
  const dotBg = isOpen ? 'var(--red-1)' : inv ? h ? 'var(--paper-2)' : 'var(--paper-0)' : h ? 'var(--ink-3)' : 'var(--ink-1)';
  const dotFg = isOpen ? '#fff' : inv ? 'var(--ink-1)' : 'var(--paper-0)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid ' + (inv ? 'var(--border-inverse)' : 'var(--border-hairline)'),
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: toggle,
    "aria-expanded": isOpen,
    "aria-controls": panelId,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'grid',
      gridTemplateColumns: indexCol + ' minmax(0,1fr) auto',
      alignItems: 'center',
      gap: 16,
      width: '100%',
      padding: '22px 0',
      margin: 0,
      border: 0,
      background: 'none',
      color: 'inherit',
      font: 'inherit',
      textAlign: 'left',
      cursor: 'pointer',
      borderRadius: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-small)',
      fontVariantNumeric: 'tabular-nums',
      color: isOpen ? 'var(--red-1)' : inv ? 'var(--text-inverse-muted)' : 'var(--text-subtle)',
      transition: 'color var(--dur-fast)'
    }
  }, String(index).padStart(2, '0')), /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 500,
      fontSize: 'clamp(22px,2.4vw,32px)',
      letterSpacing: 'var(--tracking-heading)',
      lineHeight: 1.1,
      textTransform: 'uppercase',
      color: inv ? 'var(--text-inverse)' : 'var(--text-strong)',
      transform: h && !isOpen ? 'translateX(4px)' : 'none',
      transition: 'transform var(--dur-base) var(--ease-out)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 36,
      height: 36,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      background: dotBg,
      color: dotFg,
      transform: isOpen ? 'rotate(180deg)' : 'none',
      transition: 'background var(--dur-fast), transform var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: isOpen ? 'minus' : 'plus',
    size: 16
  }))), /*#__PURE__*/React.createElement("div", {
    id: panelId,
    role: "region",
    "aria-hidden": !isOpen,
    style: {
      display: 'grid',
      gridTemplateRows: isOpen ? '1fr' : '0fr',
      visibility: isOpen ? 'visible' : 'hidden',
      transition: 'grid-template-rows var(--dur-slow) var(--ease-out), visibility var(--dur-slow)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      padding: '0 clamp(0px,5vw,64px) 26px calc(' + indexCol + ' + 16px)',
      maxWidth: 620,
      fontSize: 'var(--fs-body)',
      lineHeight: 'var(--lh-body)',
      color: inv ? 'var(--text-inverse-muted)' : 'var(--text-muted)',
      textWrap: 'pretty'
    }
  }, description))));
}
Object.assign(__ds_scope, { ServiceRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ServiceRow.jsx", error: String((e && e.message) || e) }); }

// components/media/Photo.jsx
try { (() => {
function Photo({
  src,
  alt = '',
  label = 'Shop photo',
  ratio = '4 / 3',
  radius = 'var(--radius-md)',
  scrim = false,
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: radius,
      aspectRatio: ratio,
      background: 'var(--ink-3)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      filter: 'saturate(.9) contrast(1.04)'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'grid',
      placeItems: 'center',
      background: 'repeating-linear-gradient(135deg, var(--ink-3) 0 14px, var(--ink-2) 14px 28px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--fs-micro)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--grey-2)'
    }
  }, label)), scrim && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--scrim-hero)'
    }
  }), children && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0
    }
  }, children));
}
Object.assign(__ds_scope, { Photo });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/media/Photo.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/About.jsx
try { (() => {
function About({
  onNav
}) {
  const {
    Eyebrow,
    Button,
    Photo
  } = window.DieselMasterDesignSystem_ef1472;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    className: "dm-section",
    "data-screen-label": "About"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-split"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "WHY DIESEL MASTER INC?"), /*#__PURE__*/React.createElement("div", {
    className: "dm-stack"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dm-h2"
  }, "Expert Care For Every Vehicle"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead"
  }, "Diesel Master Inc. is a one-man operation led by John Polak, who brings over 50 years of hands-on experience in auto repair. I'm dedicated to providing top-quality service and certified inspections with professionalism you can trust\u2014keeping your car, van, or even 16-wheeler running at its best."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "dark",
    onClick: () => onNav('services')
  }, "VIEW SERIVICES")))), /*#__PURE__*/React.createElement("div", {
    className: "dm-about-media"
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    label: "Portrait \xB7 John Polak at work"
  }), /*#__PURE__*/React.createElement(Photo, {
    ratio: "16 / 10",
    label: "Photo \xB7 service bay"
  })));
}
window.About = About;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Footer({
  onNav
}) {
  const links = [['About', 'about'], ['Services', 'services'], ['Directions', 'visit'], ['Reviews', 'reviews']];
  return /*#__PURE__*/React.createElement("footer", {
    className: "dm-footer",
    "data-screen-label": "Footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-footer-top"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      onNav('top');
    },
    className: "dm-wordmark dm-wordmark-lg"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-mark"
  }), "Diesel Master Inc."), /*#__PURE__*/React.createElement("nav", {
    className: "dm-footer-nav"
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      onNav(id);
    }
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "dm-footer-bottom"
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2025 Diesel Master Inc."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Privacy Policy"), /*#__PURE__*/React.createElement("a", {
    href: "#"
  }, "Terms of Service"))));
}
window.Footer = Footer;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Header.jsx
try { (() => {
function Header({
  onNav
}) {
  const {
    Icon,
    IconButton
  } = window.DieselMasterDesignSystem_ef1472;
  const [open, setOpen] = React.useState(false);
  const links = [['About', 'about'], ['Services', 'services'], ['Directions', 'visit'], ['Reviews', 'reviews']];
  const go = id => {
    setOpen(false);
    onNav(id);
  };
  return /*#__PURE__*/React.createElement("header", {
    className: "dm-header"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    onClick: e => {
      e.preventDefault();
      go('top');
    },
    className: "dm-wordmark"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-mark"
  }), "Diesel Master Inc."), /*#__PURE__*/React.createElement("nav", {
    className: "dm-nav"
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, l))), /*#__PURE__*/React.createElement("a", {
    className: "dm-phone",
    href: "tel:6315550142"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 15
  }), "631-555-0142"), /*#__PURE__*/React.createElement("div", {
    className: "dm-burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "glass",
    icon: open ? 'x' : 'menu',
    label: "Menu",
    onClick: () => setOpen(!open),
    style: {
      transform: 'none'
    }
  })), open && /*#__PURE__*/React.createElement("div", {
    className: "dm-drawer"
  }, links.map(([l, id]) => /*#__PURE__*/React.createElement("a", {
    key: id,
    href: '#' + id,
    onClick: e => {
      e.preventDefault();
      go(id);
    }
  }, l)), /*#__PURE__*/React.createElement("a", {
    href: "tel:6315550142",
    className: "dm-drawer-phone"
  }, "631-555-0142")));
}
window.Header = Header;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onNav
}) {
  const {
    Button,
    InfoCard,
    DetailList
  } = window.DieselMasterDesignSystem_ef1472;
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "dm-hero-wrap",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-photo"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dm-ph-label"
  }, "Photo \xB7 shop exterior / truck in the bay")), /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-scrim"
  }), /*#__PURE__*/React.createElement(Header, {
    onNav: onNav
  }), /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-body"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-hero-copy"
  }, /*#__PURE__*/React.createElement("h1", {
    className: "dm-display"
  }, "Reliable Truck & Auto Repair"), /*#__PURE__*/React.createElement("p", {
    className: "dm-hero-lead"
  }, "Diesel Master Inc., provides expert auto repair services and certified inspections to keep your vehicle in peak condition and road-ready."), /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => onNav('services')
  }, "Shop Services")), /*#__PURE__*/React.createElement(InfoCard, {
    tone: "glass",
    title: "Location & Hours",
    description: "Visit the shop for professional auto repairs and inspections.",
    style: {
      width: 340,
      maxWidth: '100%'
    },
    footer: /*#__PURE__*/React.createElement("a", {
      className: "dm-textlink-inv",
      href: "#visit",
      onClick: e => {
        e.preventDefault();
        onNav('visit');
      }
    }, "Get Directions ", /*#__PURE__*/React.createElement("span", null, "\u2197"))
  }, /*#__PURE__*/React.createElement(DetailList, {
    tone: "inverse",
    items: [{
      icon: 'map-pin',
      value: '789 Ocean Ave\nLong Island, NY 11520'
    }, {
      icon: 'clock',
      value: 'Monday - Friday: 08:00 AM – 06:00 PM\nSaturday - Sunday: 08:00 AM – 03:00 PM'
    }]
  })))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reviews.jsx
try { (() => {
const DM_REVIEWS = [['Fast, friendly, and honest! John got my car back on the road in no time. Highly recommend!', 'KALIF JONES', 'OWNER, 2004 BUICK LESABRE'], ["Brought my F-250 in for a check engine light two other shops couldn't figure out. John found the problem in under an hour and charged me a fair price.", 'MARCUS DELANEY', 'OWNER, 2017 FORD F-250'], ['Got my NY inspection done while I waited. In and out, no upselling, just straight answers. This is my shop from now on.', 'DANA RUIZ', 'OWNER, 2019 HONDA ACCORD'], ['John has kept my work van on the road for years. Brakes, oil, diagnostics, he does it all and he does it right.', 'TONY CARUSO', 'OWNER, 2014 CHEVROLET EXPRESS']];
function Reviews() {
  const {
    Eyebrow,
    ReviewCard,
    IconButton
  } = window.DieselMasterDesignSystem_ef1472;
  const track = React.useRef(null);
  const [pos, setPos] = React.useState(0);
  const step = dir => {
    const el = track.current;
    if (!el) return;
    const w = el.firstChild.getBoundingClientRect().width + 16;
    el.scrollBy({
      left: dir * w,
      behavior: 'smooth'
    });
  };
  const onScroll = () => {
    const el = track.current;
    setPos(el.scrollLeft / Math.max(1, el.scrollWidth - el.clientWidth));
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "reviews",
    className: "dm-section",
    "data-screen-label": "Reviews"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-reviews-head"
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Reviews"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    variant: "outline",
    icon: "chevron-left",
    label: "Previous review",
    onClick: () => step(-1),
    style: {
      transform: 'none'
    }
  }), /*#__PURE__*/React.createElement(IconButton, {
    variant: "dark",
    icon: "chevron-right",
    label: "Next review",
    onClick: () => step(1),
    style: {
      transform: 'none'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dm-reviews-track",
    ref: track,
    onScroll: onScroll
  }, DM_REVIEWS.map(([q, n, v]) => /*#__PURE__*/React.createElement(ReviewCard, {
    key: n,
    quote: q,
    name: n,
    vehicle: v
  }))), /*#__PURE__*/React.createElement("div", {
    className: "dm-progress"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 25 + pos * 75 + '%'
    }
  })));
}
window.Reviews = Reviews;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reviews.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
const DM_SERVICES = [['NY INSPECTIONS', 'Stay road-legal and safe with certified New York State inspections performed quickly and professionally.'], ['OIL CHANGE', "Keep your engine running smoothly with quick and clean oil changes that protect and extend your vehicle's life."], ['BRAKE REPAIRS', 'Ensure maximum stopping power with expert brake inspections, repairs, and replacements for a safer ride.'], ['ADVANCED DIAGNOSTICS', 'Identify issues fast with state-of-the-art diagnostic tools that pinpoint problems before they become costly repairs.']];
function Services({
  onNav
}) {
  const {
    Eyebrow,
    Button,
    ServiceRow,
    Photo
  } = window.DieselMasterDesignSystem_ef1472;
  const [open, setOpen] = React.useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    className: "dm-section dm-ink",
    "data-screen-label": "Services"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-split"
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    tone: "inverse"
  }, "SERVICES"), /*#__PURE__*/React.createElement("div", {
    className: "dm-stack"
  }, /*#__PURE__*/React.createElement("h2", {
    className: "dm-h2"
  }, "Reliable Repairs for Every Ride"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead dm-inv-muted"
  }, "Let's break down what you can expect when you bring your vehicle to Diesel Master Inc."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "light",
    onClick: () => onNav('visit')
  }, "VISIT THE SHOP")))), /*#__PURE__*/React.createElement("div", {
    className: "dm-services-grid"
  }, /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    label: 'Photo · ' + DM_SERVICES[Math.max(open, 0)][0].toLowerCase(),
    style: {
      position: 'sticky',
      top: 24
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-inverse)'
    }
  }, DM_SERVICES.map(([t, d], i) => /*#__PURE__*/React.createElement(ServiceRow, {
    key: t,
    tone: "inverse",
    index: i + 1,
    title: t,
    description: d,
    open: open === i,
    onToggle: o => setOpen(o ? i : -1)
  })))));
}
window.Services = Services;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/VisitShop.jsx
try { (() => {
function VisitShop() {
  const {
    Eyebrow,
    DetailList,
    Button,
    Photo
  } = window.DieselMasterDesignSystem_ef1472;
  return /*#__PURE__*/React.createElement("section", {
    id: "visit",
    className: "dm-section",
    "data-screen-label": "Visit the Shop"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-visit"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dm-stack",
    style: {
      gap: 28
    }
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "VISIT THE SHOP"), /*#__PURE__*/React.createElement("h2", {
    className: "dm-h2"
  }, "Stop By For An Inspection"), /*#__PURE__*/React.createElement("p", {
    className: "dm-lead"
  }, "Located in the heart of Neo-Detroit's industrial sector. We are ready to handle everything from routine maintenance to complex diagnostics."), /*#__PURE__*/React.createElement(DetailList, {
    items: [{
      label: 'CONTACT',
      value: '631-555-0142',
      href: 'tel:6315550142'
    }, {
      label: 'LOCATION',
      value: '789 Ocean Ave, Long Island, NY 11520'
    }, {
      label: 'OPENING HOURS',
      value: 'Monday - Friday: 8:00 am - 6:00 pm\nSaturday - Sunday: 8:00 am - 3:00 pm'
    }]
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    href: "https://maps.google.com/?q=789+Ocean+Ave+Long+Island+NY+11520"
  }, "GET DIRECTIONS"))), /*#__PURE__*/React.createElement(Photo, {
    ratio: "4 / 5",
    radius: "var(--radius-lg)",
    label: "Map \xB7 789 Ocean Ave",
    style: {
      height: '100%',
      aspectRatio: 'auto',
      minHeight: 420
    }
  })));
}
window.VisitShop = VisitShop;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/VisitShop.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.DetailList = __ds_scope.DetailList;

__ds_ns.InfoCard = __ds_scope.InfoCard;

__ds_ns.ReviewCard = __ds_scope.ReviewCard;

__ds_ns.ServiceRow = __ds_scope.ServiceRow;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.StarRating = __ds_scope.StarRating;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Photo = __ds_scope.Photo;

})();
