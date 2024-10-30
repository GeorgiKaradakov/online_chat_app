import { useEffect, useState } from "react";

export const useController = () => {
  const [loadingText, setLoadingText] = useState("..Loading");

  const useChangeText = () => {
    useEffect(() => {
      const loadingTimeout = setTimeout(() => {
        setLoadingText((prevText) =>
          prevText.startsWith("...") ? "..Loading" : "...Loading",
        );
      }, 500);

      return () => clearTimeout(loadingTimeout);
    }, [loadingText]);
  };

  return { loadingText, useChangeText };
};
