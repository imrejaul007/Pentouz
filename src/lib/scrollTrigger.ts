import { ScrollTrigger } from "gsap/ScrollTrigger";

type MaybeElement = Element | null | undefined;

function toElements(target: unknown): Element[] {
  if (!target) return [];
  if (target instanceof Element) return [target];
  if (Array.isArray(target)) {
    return target.filter((item): item is Element => item instanceof Element);
  }
  if (typeof target === "object" && "length" in (target as Record<string, unknown>)) {
    return Array.from(target as ArrayLike<unknown>).filter(
      (item): item is Element => item instanceof Element
    );
  }
  return [];
}

export function killScrollTriggersByRoots(roots: MaybeElement[]) {
  const activeRoots = roots.filter((root): root is Element => root instanceof Element);
  if (!activeRoots.length) return;

  ScrollTrigger.getAll().forEach((trigger) => {
    const triggerElements = toElements(trigger.vars.trigger);
    const shouldKill = triggerElements.some((el) =>
      activeRoots.some((root) => root === el || root.contains(el))
    );

    if (shouldKill) {
      trigger.kill();
    }
  });
}
