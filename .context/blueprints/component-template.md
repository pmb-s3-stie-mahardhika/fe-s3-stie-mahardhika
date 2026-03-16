import { cn } from "@/utils/cn"; // Assuming cn utility exists
import { ReactNode } from "react";

interface TemplateProps {
  children: ReactNode;
  className?: string;
}

/**
 * @description Brief description of the component
 */
export const ComponentTemplate = ({ children, className }: TemplateProps) => {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {children}
    </div>
  );
};