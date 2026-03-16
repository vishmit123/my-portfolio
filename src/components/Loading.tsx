import { useEffect, useState, useMemo } from "react";
import "./styles/Loading.css";
import { useLoading } from "../context/LoadingProvider";

const Loading = ({ percent }: { percent: number }) => {
  const { setIsLoading } = useLoading();
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [clicked, setClicked] = useState(false);

  // Generate random particle data once
  const particles = useMemo(
    () =>
      Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: `${Math.random() * 100}%`,
        size: `${2 + Math.random() * 3}px`,
        duration: `${4 + Math.random() * 6}s`,
        delay: `${Math.random() * 5}s`,
        opacity: 0.2 + Math.random() * 0.5,
      })),
    []
  );

  if (percent >= 100 && !loaded) {
    setTimeout(() => {
      setLoaded(true);
    }, 600);
  }

  useEffect(() => {
    if (!loaded) return;

    // Small pause before starting exit transition
    const timer = setTimeout(() => {
      setExiting(true);
      setClicked(true);

      // Run initialFX immediately to set up landing page animations
      // while loading screen is fading out
      import("./utils/initialFX").then((module) => {
        if (module.initialFX) {
          module.initialFX();
        }
        // Remove loading screen after exit animation completes
        setTimeout(() => {
          setIsLoading(false);
        }, 900);
      });
    }, 800);

    return () => clearTimeout(timer);
  }, [loaded]);

  return (
    <>
      <div className="loading-header">
        <a href="/#" className="loader-title" data-cursor="disable">
          VA
        </a>
        <div className={`loaderGame ${clicked && "loader-out"}`}>
          <div className="loaderGame-container">
            <div className="loaderGame-in">
              {[...Array(27)].map((_, index) => (
                <div className="loaderGame-line" key={index}></div>
              ))}
            </div>
            <div className="loaderGame-ball"></div>
          </div>
        </div>
      </div>

      <div className={`loading-screen ${exiting ? "loading-exit" : ""}`}>
        {/* Floating particles */}
        <div className="loading-particles">
          {particles.map((p) => (
            <div
              className="loading-particle"
              key={p.id}
              style={{
                left: p.left,
                width: p.size,
                height: p.size,
                animationDuration: p.duration,
                animationDelay: p.delay,
                opacity: p.opacity,
              }}
            />
          ))}
        </div>

        {/* Glowing initials */}
        <div className="loading-initials">VA</div>

        {/* Staggered tagline */}
        <div className="loading-tagline">
          <span>Software</span>
          <span>·</span>
          <span>Developer</span>
        </div>

        {/* Progress bar */}
        <div className="loading-progress-track">
          <div
            className="loading-progress-fill"
            style={{ width: `${Math.min(percent, 100)}%` }}
          />
        </div>
        <div className="loading-percent">{Math.min(percent, 100)}%</div>
      </div>
    </>
  );
};

export default Loading;

export const setProgress = (setLoading: (value: number) => void) => {
  let percent: number = 0;

  let interval = setInterval(() => {
    if (percent <= 50) {
      let rand = Math.round(Math.random() * 5);
      percent = percent + rand;
      setLoading(percent);
    } else {
      clearInterval(interval);
      interval = setInterval(() => {
        percent = percent + Math.round(Math.random());
        setLoading(percent);
        if (percent > 91) {
          clearInterval(interval);
        }
      }, 2000);
    }
  }, 100);

  function clear() {
    clearInterval(interval);
    setLoading(100);
  }

  function loaded() {
    return new Promise<number>((resolve) => {
      clearInterval(interval);
      interval = setInterval(() => {
        if (percent < 100) {
          percent++;
          setLoading(percent);
        } else {
          resolve(percent);
          clearInterval(interval);
        }
      }, 2);
    });
  }
  return { loaded, percent, clear };
};
