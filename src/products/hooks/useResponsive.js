// src/hooks/useResponsive.js
import { useState, useEffect } from "react";

// resize 이벤트를 감지하여 실시간으로 기기 타입을 업데이트하는 커스텀 훅
export default function useResponsive() {
  // 초기 상태: 현재 화면 크기에 따른 기기 타입
  const [device, setDevice] = useState(getDeviceType(window.innerWidth));

  // 화면 너비를 기준으로 기기 타입 판별함
  function getDeviceType(width) {
    if (width < 640) return "mobile";
    if (width < 1024) return "tablet";
    return "pc";
  }

  // resize 시 기기 타입 갱신
  useEffect(() => {
    const handleResize = () => {
      setDevice(getDeviceType(window.innerWidth));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // 현재 기기 타입 반환
  return device;
}
