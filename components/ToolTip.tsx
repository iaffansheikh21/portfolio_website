// import React, { ReactNode } from "react";

// interface TooltipProps {
//   text: string;
//   children: ReactNode;
// }

// export default function Tooltip({ text, children }: TooltipProps) {
//   return (
//     <div className="relative group">
//       {children}
//       <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 z-10">
//         {text}
//       </div>
//     </div>
//   );
// }

import React, { ReactNode } from "react";

interface TooltipProps {
  text: string;
  children: ReactNode;
}

export default function Tooltip({ text, children }: TooltipProps) {
  return (
    <div className="relative group">
      {children}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 hidden group-hover:flex bg-black text-white text-sm rounded px-2 py-1 whitespace-nowrap z-10">
        {text}
      </div>
    </div>
  );
}
