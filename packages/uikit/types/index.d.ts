declare namespace Uikit {
  export interface MixinAsset {
    id: string;
    symbol: string;
    name?: string;
    logo: string;
    chainLogo?: string;
    label?: string;
    select_symbol?: string;
  }

  export interface ActionButton {
    size: string;
    color: string;
    text: string;
    icon: string;
  }
}
