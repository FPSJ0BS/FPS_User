import { useState, useEffect, memo } from "react";

const Countdown = ({
  initialSeconds,
  setInitialSeconds,
  onPress,
}: {
  initialSeconds: number;
  setInitialSeconds: any;
  onPress: () => void;
}) => {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
        setInitialSeconds(seconds - 1);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const remainingSeconds = time % 60;
    const formattedMinutes = String(minutes).padStart(2, "0");
    const formattedSeconds = String(remainingSeconds).padStart(2, "0");
    return `${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div className="d-flex flex-row justify-content-center mt-5 gap-1">
      <span
        className={`text-white countdown  ${seconds !== 0 ? "" : "sendOtp"}`}
        onClick={
          seconds == 0
            ? async () => {
                await onPress();
                setSeconds(30);
              }
            : () => {}
        }
      >{`${seconds !== 0 ? "Resend Otp in" : "Resend Otp"}`}</span>
      <span className={`countdown`}>{` ${
        seconds !== 0 ? `${formatTime(seconds)} ` : ""
      }`}</span>
    </div>
  );
};
export default memo(Countdown);
