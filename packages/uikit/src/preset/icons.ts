import {
  FIconChevronLeft,
  FIconChevronRight,
  FIconChevronDown4P,
  FIconClose,
  FIconConnect3PFill,
  FIconUpRight3PFill,
  FIconInformation3PFill,
  FIconWarningFill,
  FIconArrowRight4P,
  FIconClear3PFill,
  FIconArrowDown,
  FIconSearch,
  FIconHelp3PFill,
  FIconCheck4P,
  FIconInfo4P,
  FIconLink4P,
  FIconImport4PBold,
  FIconAlert4P,
  FIconLink4PBold,
  FIconHorn4P
} from "@foxone/icons";

export default {
  iconfont: "mdiSvg" as const,
  values: {
    back: { component: FIconChevronLeft },
    next: { component: FIconChevronRight },
    arrowRight: { component: FIconArrowRight4P },
    close: { component: FIconClose },
    clear: { component: FIconClear3PFill },
    expand: { component: FIconChevronDown4P },
    swap: { component: FIconArrowDown },
    connect: { component: FIconConnect3PFill },
    fill: { component: FIconUpRight3PFill },
    help: { component: FIconInformation3PFill },
    warning: { component: FIconWarningFill },
    search: { component: FIconSearch },
    question: { component: FIconHelp3PFill },
    check: { component: FIconCheck4P },
    info: { component: FIconInfo4P },
    link: { component: FIconLink4P },
    install: { component: FIconImport4PBold },
    alert: { component: FIconAlert4P },
    linkBold: { component: FIconLink4PBold },
    FIconHorn4P: { component: FIconHorn4P }
  }
};
