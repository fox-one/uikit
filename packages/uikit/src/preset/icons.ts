import {
  FIconChevronLeft,
  FIconChevronRight,
  FIconChevronDown,
  FIconClose,
  FIconConvertDirection,
  FIconConnectFill,
  FIconUpRightFill,
  FIconInformationFill,
  FIconArrowRight,
  FIconWarningFill
} from "@foxone/icons";

export default {
  iconfont: "mdiSvg" as const,
  values: {
    back: { component: FIconChevronLeft },
    next: { component: FIconChevronRight },
    arrowRight: { component: FIconArrowRight },
    close: { component: FIconClose },
    clear: { component: FIconClose },
    expand: { component: FIconChevronDown },
    swap: { component: FIconConvertDirection },
    connect: { component: FIconConnectFill },
    fill: { component: FIconUpRightFill },
    help: { component: FIconInformationFill },
    warning: { component: FIconWarningFill }
  }
};
