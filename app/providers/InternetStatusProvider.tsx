"use client";
import { Wifi, WifiOff } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";
import { toast, Toaster } from "sonner";

const OFFLINE_TOAST_ID = "offline-toast";
const ONLINE_TOAST_ID = "online-toast";

const InternetStatusProvider = ({ children }: { children: ReactNode }) => {
  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [backOnline, setBackOnline] = useState(false);
  const hasMounted = useRef(false);
  const wasOfflineRef = useRef(false);

  useEffect(() => {
    hasMounted.current = true;

    const handleOnline = () => {
      if (wasOfflineRef.current) {
        setBackOnline(true);
      }
      wasOfflineRef.current = false;
      setIsOnline(true);
      toast.dismiss(OFFLINE_TOAST_ID);
    };

    const handleOffline = () => {
      wasOfflineRef.current = true;
      setBackOnline(false);
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  useEffect(() => {
    if (!hasMounted.current) return;

    if (!isOnline) {
      toast.dismiss(ONLINE_TOAST_ID);
      toast.error("You are currently offline", {
        id: OFFLINE_TOAST_ID,
        description: "Any changes you make offline will not be saved.",
        icon: <WifiOff />,
        duration: Infinity,
        position: "top-center",
      });
    } else if (backOnline) {
      toast.dismiss(OFFLINE_TOAST_ID);
      toast.success("Back Online", {
        id: ONLINE_TOAST_ID,
        icon: <Wifi />,
        position: "top-center",
        onAutoClose: () => setBackOnline(false),
      });
    } else {
      toast.dismiss(OFFLINE_TOAST_ID);
    }
  }, [isOnline, backOnline]);

  return (
    <>
      {children}
      <Toaster />
    </>
  );
};

export default InternetStatusProvider;
