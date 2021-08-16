export default {
  name: "Codepen",

  data: () => ({ pen: undefined }),

  methods: {
    async importTemplate() {
      try {
        const file = (this as any).file;
        const template = await import(
          /* webpackChunkName: "examples-source" */
          /* webpackMode: "lazy-once" */
          `!!raw-loader!../examples/${file}.vue`
        );

        this.boot(template.default);
      } catch (err) {
        console.log(err);
      }
    },
    boot(res) {
      const template = this.parseTemplate("template", res);
      const style = this.parseTemplate("style", res);
      const script = this.parseTemplate("script", res);
      const codepenResources = this.parseTemplate("codepen-resources", res);
      const codepenAdditional = this.parseTemplate("codepen-additional", res);

      (this as any).pen = {
        template,
        style,
        script,
        codepenResources,
        codepenAdditional
      };
    },
    parseTemplate(target, template) {
      const string = `(<${target}(.*)?>[\\w\\W]*<\\/${target}>)`;
      const regex = new RegExp(string, "g");
      const parsed = regex.exec(template) || [];

      return parsed[1] || "";
    },
    sendToCodepen() {
      if (!(this as any).$refs.codepen) return;

      (this as any).$refs.codepen.submit();
    }
  }
};
