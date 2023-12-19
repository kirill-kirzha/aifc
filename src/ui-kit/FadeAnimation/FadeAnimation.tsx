import { Key, PropsWithChildren } from "react";
import { Transition } from "@headlessui/react";

interface IProps {
  show?: boolean;
  animationKey?: Key;
  className?: string;
  fullWidth?: boolean;
}

export const FadeAnimation = ({
  children,
  animationKey,
  className,
  show,
  fullWidth,
}: PropsWithChildren<IProps>) => {
  return (
    <Transition
      style={fullWidth ? { width: "100%", height: "100%" } : null}
      className={className}
      key={animationKey}
      as={"div"}
      enter={"transition-opacity-out"}
      enterFrom={"opacity-0"}
      enterTo={"opacity-100 overlap"}
      leave={"transition-opacity-in"}
      leaveFrom={"opacity-100"}
      leaveTo={"opacity-0"}
      appear
      show={show}
    >
      {children}
    </Transition>
  );
};
