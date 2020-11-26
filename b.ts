import { acc } from "./a";

function after(target, key, desc) {
  const { value } = desc;
  desc.value = function(...args) {
    let res = value.apply(this, args);
    console.log("加滤镜");
    return res;
  };
  return desc;
}

class name {
  @after
  name() {
    console.log("111");
    acc();
  }
}

const c = new name();

// c.name();

export default name;
