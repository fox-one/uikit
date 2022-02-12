export function propsChecker(vm) {
  let error: String = "";

  const props = ["client-id", "scope"];

  for (const prop of props) {
    if (!vm.$attrs[prop] || !vm.$attrs[prop].trim()) {
      error = `Parameter ${prop} cannot be empty.`;
      break;
    }
  }

  if (error) {
    vm.$emit("error", { error });

    return true;
  }

  return false;
}
