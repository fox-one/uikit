import { Component, Vue, Prop } from "vue-property-decorator";
import { CreateElement } from "vue";
import { VNode } from "vue/types/umd";
import { VOverlay, VProgressCircular, VBtn } from "vuetify/lib";

@Component
class FLoading extends Vue {
  @Prop({ type: Boolean, default: false }) fullscreen!: boolean;

  @Prop({ type: Boolean, default: false }) loading!: boolean;

  @Prop({ type: Boolean, default: false }) error!: boolean;

  @Prop({ type: String, default: "primary" }) color!: string;

  @Prop({ type: Number, default: 0 }) opacity!: number;

  render(h: CreateElement): VNode | null {
    const circular = [
      h(VProgressCircular, { props: { width: 3, indeterminate: true } }),
    ];

    return h(
      VOverlay,
      {
        props: {
          color: this.color,
          opacity: this.opacity,
          value: this.error || this.loading,
        },
      },
      [circular],
    );
  }
}
