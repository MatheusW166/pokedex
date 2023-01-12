export function playAnimation(ref: React.RefObject<HTMLElement>, idx = 0) {
  const animation = ref.current?.getAnimations()[idx];
  if (animation?.playState !== "finished") return;
  animation?.play();
}
