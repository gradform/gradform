import React from "react";
import { cn } from "../../lib/utils";

export const BackgroundGradientAnimation = ({
  gradientBackgroundStart = "rgb(108, 0, 162)",
  gradientBackgroundEnd = "rgb(0, 17, 82)",
  firstColor = "18, 113, 255",
  secondColor = "221, 74, 255",
  thirdColor = "100, 220, 255",
  fourthColor = "200, 50, 50",
  fifthColor = "180, 180, 50",
  pointerColor = "140, 100, 255",
  size = "80%",
  blendingValue = "hard-light",
  children,
  className,
  interactive = true,
  containerClassName,
}) => {
  const interactiveRef = React.useRef(null);
  const [curX, setCurX] = React.useState(0);
  const [curY, setCurY] = React.useState(0);
  const [tgX, setTgX] = React.useState(0);
  const [tgY, setTgY] = React.useState(0);

  React.useEffect(() => {
    document.body.style.setProperty("--gradient-background-start", gradientBackgroundStart);
    document.body.style.setProperty("--gradient-background-end", gradientBackgroundEnd);
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  React.useEffect(() => {
    const move = () => {
      if (interactiveRef.current) {
        setCurX((prevCurX) => prevCurX + (tgX - prevCurX) / 20);
        setCurY((prevCurY) => prevCurY + (tgY - prevCurY) / 20);
        interactiveRef.current.style.transform = `translate(${Math.round(
          curX
        )}px, ${Math.round(curY)}px)`;
      }
      requestAnimationFrame(move);
    };

    if (interactive) {
      move();
    }
  }, [curX, curY, tgX, tgY, interactive]);

  const handleMouseMove = React.useCallback(
    (event) => {
      if (interactive) {
        setTgX(event.clientX);
        setTgY(event.clientY);
      }
    },
    [interactive]
  );

  React.useEffect(() => {
    if (interactive) {
      window.addEventListener("mousemove", handleMouseMove);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [interactive, handleMouseMove]);

  return (
    <div
      className={cn(
        "h-full w-full relative overflow-hidden top-0 left-0 bg-[var(--gradient-background-start)]",
        containerClassName
      )}
    >
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="10"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>
      <div className={cn("absolute flex inset-0 z-0", className)}>
        <div
          className={cn(
            "gradient-box-1 rounded-full absolute z-0 blur-xl",
            interactive && "mix-blend-hard-light"
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(--first-color), 0.8) 0%, rgba(var(--first-color), 0) 50%)`,
          }}
        ></div>
        <div
          className={cn(
            "gradient-box-2 rounded-full absolute z-0 blur-xl",
            interactive && "mix-blend-hard-light"
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(--second-color), 0.8) 0%, rgba(var(--second-color), 0) 50%)`,
          }}
        ></div>
        <div
          className={cn(
            "gradient-box-3 rounded-full absolute z-0 blur-xl",
            interactive && "mix-blend-hard-light"
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(--third-color), 0.8) 0%, rgba(var(--third-color), 0) 50%)`,
          }}
        ></div>
        <div
          className={cn(
            "gradient-box-4 rounded-full absolute z-0 blur-xl",
            interactive && "mix-blend-hard-light"
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(--fourth-color), 0.8) 0%, rgba(var(--fourth-color), 0) 50%)`,
          }}
        ></div>
        <div
          className={cn(
            "gradient-box-5 rounded-full absolute z-0 blur-xl",
            interactive && "mix-blend-hard-light"
          )}
          style={{
            background: `radial-gradient(circle at center, rgba(var(--fifth-color), 0.8) 0%, rgba(var(--fifth-color), 0) 50%)`,
          }}
        ></div>

        {interactive && (
          <div
            ref={interactiveRef}
            className="interactive-gradient rounded-full absolute z-0 blur-xl opacity-50"
            style={{
              background: `radial-gradient(circle at center, rgba(var(--pointer-color), 0.8) 0%, rgba(var(--pointer-color), 0) 50%)`,
            }}
          ></div>
        )}
      </div>
      {children}
    </div>
  );
};
