import React from "react";

type PageContainerProps = {
  className?: string;
  borderLeft?: boolean;
  children: React.ReactNode;
}

export function PageContainer({ className, borderLeft, children }: PageContainerProps) {
  const showBorderLeft = borderLeft || false;

  return (
    <section className={`calc-min-h-screen md:calc-min-h-screen-md flex items-center ${className}`}>
      {showBorderLeft && (
        <span className="hidden lg:block absolute border-l border-gray-200 left-1/4 top-0 bottom-0"></span>
      )}

      { children }
    </section>
  );
}
