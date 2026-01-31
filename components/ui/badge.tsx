import * as React from "react";

export default function Badge({className, children}: React.ComponentProps<'span'>) {
  return (
    <span className={`bg-blue-100 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full ${className}`}>
      {children}
    </span>
  );
}
