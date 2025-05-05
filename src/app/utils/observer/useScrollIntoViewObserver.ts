import { VisibleElType } from "@/app/_components/Banner";
import { Dispatch, SetStateAction, useEffect } from "react";

function useMultipleElementsScrollObserver(
  setVisibleEl: Dispatch<SetStateAction<VisibleElType>>
) {
  const elementIds: VisibleElType[] = [
    "ana-sayfa",
    "kurumsal",
    "hizmetlerimiz",
    "referanslar",
    "iletişim",
  ];

  useEffect(() => {
    // Get all the elements by their ids
    const elements = elementIds
      .map((id) => document.getElementById(id))
      .filter((el) => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const elementId = entry.target.id as VisibleElType;
          if (entry.isIntersecting) {
            setVisibleEl(elementId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.356,
      }
    );

    // Observe each element
    elements.forEach((element) => observer.observe(element));

    // Cleanup observer when component unmounts or IDs change
    return () => {
      elements.forEach((element) => observer.unobserve(element));
    };
  }, [elementIds, setVisibleEl]);
}

export default useMultipleElementsScrollObserver;
