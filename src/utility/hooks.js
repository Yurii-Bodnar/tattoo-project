import { useMediaQuery } from "react-responsive";

export const useIsMobile = () => useMediaQuery({ maxWidth: 767 });
export const useIsTablet = () => useMediaQuery({ maxWidth: 1279 });
export const useIsDesktop = () => useMediaQuery({ minWidth: 1280 });
export const useIsDesktopOrTablet = () => useMediaQuery({ minWidth: 768 });
