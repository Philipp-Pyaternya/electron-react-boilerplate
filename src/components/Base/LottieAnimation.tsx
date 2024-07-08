import { useRef, useEffect } from 'react';
import lottie from 'lottie-web';

interface ILottieAnimationProps {
  className: string;
  classNameCanvas: string;
  animationData: any;
}

function LottieAnimation(props: ILottieAnimationProps) {
  const { className, classNameCanvas, animationData } = props;
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      lottie.loadAnimation({
        name: 'logo',
        container: containerRef.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData,
      });
    }
  }, []);

  return (
    <div className={className}>
      <div ref={containerRef} className={classNameCanvas} />
    </div>
  );
}

export default LottieAnimation;
