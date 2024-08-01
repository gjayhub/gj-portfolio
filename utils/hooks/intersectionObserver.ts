import { useEffect } from "react";
import useActive from "@/utils/store/UseActive";

const useScrollSpy = (sections: string[]) => {
  const { setActiveTab } = useActive();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries: IntersectionObserverEntry[]) => {
        entries.forEach((entry: IntersectionObserverEntry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      }
    );

    sections.forEach((section: string) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section: string) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections, setActiveTab]);
};

export default useScrollSpy;
