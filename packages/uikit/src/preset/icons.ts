import {
  FIconChevronLeft,
  FIconChevronRight,
  FIconChevronDown,
  FIconClose,
  FIconConvertDirection,
  FIconConnect3PFill,
  FIconUpRight3PFill,
  FIconInformation3PFill,
  FIconWarningFill,
  FIconArrowRight4P,
  FIconClear3PFill
} from "@foxone/icons";

export default {
  iconfont: "mdiSvg" as const,
  values: {
    back: { component: FIconChevronLeft },
    next: { component: FIconChevronRight },
    arrowRight: { component: FIconArrowRight4P },
    close: { component: FIconClose },
    clear: { component: FIconClear3PFill },
    expand: { component: FIconChevronDown },
    swap: { component: FIconConvertDirection },
    connect: { component: FIconConnect3PFill },
    fill: { component: FIconUpRight3PFill },
    help: { component: FIconInformation3PFill },
    warning: { component: FIconWarningFill }
  }
};
