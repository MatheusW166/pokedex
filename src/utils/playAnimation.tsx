export function playAnimation(ref: React.RefObject<HTMLElement>, idx = 0) {
  ref.current?.getAnimations()[idx].play();
}
