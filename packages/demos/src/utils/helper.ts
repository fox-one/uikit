export function getMixinContext() {
  let ctx: any = {};
  const win: any = window;
  if (win.webkit?.messageHandlers?.MixinContext) {
    ctx = JSON.parse(prompt("MixinContext.getContext()") as any);
    ctx.platform = ctx.platform || "iOS";
  } else if (typeof win.MixinContext?.getContext === "function") {
    ctx = JSON.parse(win.MixinContext.getContext());
    ctx.platform = ctx.platform || "Android";
  }
  return ctx;
}

export function isMixin() {
  return Boolean(getMixinContext().platform);
}

export function isDesktop() {
  return !navigator.userAgent.match(
    /(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i,
  );
}
