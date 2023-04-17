import Button from "../Button.vue";

import { shallowMount } from "@vue/test-utils";
import { describe, expect, test } from "vitest";

describe("Button", () => {
  test("renders a button", () => {
    const wrapper = shallowMount(Button);
    expect(wrapper.html()).toContain("button");
  });

  test("renders a button with text", () => {
    const wrapper = shallowMount(Button, {
      slots: {
        default: "Primary",
      },
    });
    expect(wrapper.text()).toBe("Primary");
  });

  test("renders a button with type", () => {
    const wrapper = shallowMount(Button, {
      props: {
        type: "primary",
      },
    });
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toContain(
      "primary"
    );
  });

  test("renders a button with plain", () => {
    const wrapper = shallowMount(Button, {
      props: {
        plain: true,
      },
    });
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toContain(
      "dfault-plain"
    );
  });

  test("renders a button with round", () => {
    const wrapper = shallowMount(Button, {
      props: {
        round: true,
      },
    });
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toContain(
      "rounded-[20px]"
    );
  });

  test("renders a button with hover", () => {
    const wrapper = shallowMount(Button);
    wrapper.trigger("mouseover");
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toContain(
      "hover:dfault-hover"
    );
  });

  test("renders a button with disabled", () => {
    const wrapper = shallowMount(Button, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.classes().map((v) => v.replace("\n", ""))).toContain(
      "cursor-not-allowed"
    );
  });

  test("renders a button with icon", () => {
    const wrapper = shallowMount(Button, {
      props: {
        icon: "search",
      },
    });
    const icon = wrapper.find("i");
    expect(icon.classes().map((v) => v.replace("\n", ""))).toContain(
      "i-ic-baseline-search"
    );
  });
});
