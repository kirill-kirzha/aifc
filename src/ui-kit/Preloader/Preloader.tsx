import { PreloaderWrapper } from "./Preloader.styles";

interface IProps {
  className?: string;
}

export const Preloader = ({ className }: IProps) => {
  return (
    <PreloaderWrapper className={className}>
      <div></div>
      <div></div>
    </PreloaderWrapper>
  );
};
