import "./FButton.scss";
import { Vue } from "vue-property-decorator";
import { VNode, CreateElement } from "vue";
declare class FButton extends Vue {
    customContent: boolean;
    block: boolean;
    label: string;
    type: string;
    color: string;
    padding: number;
    render(h: CreateElement): VNode | null;
}
export default FButton;
export { FButton };
