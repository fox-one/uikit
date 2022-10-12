import { FIconChevronLeft } from "@foxone/icons/FIconChevronLeft";
import { FIconChevronRight } from "@foxone/icons/FIconChevronRight";
import { FIconClose } from "@foxone/icons/FIconClose";
import { FIconConnect3PFill } from "@foxone/icons/FIconConnect3PFill";
import { FIconInformation3PFill } from "@foxone/icons/FIconInformation3PFill";
import { FIconWarningFill } from "@foxone/icons/FIconWarningFill";
import { FIconArrowRight4P } from "@foxone/icons/FIconArrowRight4P";
import { FIconClear3PFill } from "@foxone/icons/FIconClear3PFill";
import { FIconArrowDown } from "@foxone/icons/FIconArrowDown";
import { FIconSearch } from "@foxone/icons/FIconSearch";
import { FIconHelp3PFill } from "@foxone/icons/FIconHelp3PFill";
import { FIconInfo4P } from "@foxone/icons/FIconInfo4P";
import { FIconLink4P } from "@foxone/icons/FIconLink4P";
import { FIconCheck4P } from "@foxone/icons/FIconCheck4P";
import { FIconImport4PBold } from "@foxone/icons/FIconImport4PBold";
import { FIconAlert4P } from "@foxone/icons/FIconAlert4P";
import { FIconLink4PBold } from "@foxone/icons/FIconLink4PBold";
import { FIconHorn4P } from "@foxone/icons/FIconHorn4P";
import { FIconChevronDown4P } from "@foxone/icons/FIconChevronDown4P";
import { FIconUpRight3PFill } from "@foxone/icons/FIconUpRight3PFill";

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
