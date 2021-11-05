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
  FIconHelp3PFill
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
    question: { component: FIconHelp3PFill }
  }
};
