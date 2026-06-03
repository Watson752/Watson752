import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors",
  {
    variants: {
      variant: {
        default: "border-slate-600 bg-slate-800/80 text-slate-100",
        live: "border-emerald-500/50 bg-emerald-950/60 text-emerald-300",
        built: "border-emerald-600/40 bg-emerald-950/40 text-emerald-200",
        documented: "border-violet-500/50 bg-violet-950/60 text-violet-200",
        learning: "border-amber-500/50 bg-amber-950/50 text-amber-200",
        interest: "border-slate-500/50 bg-slate-900/60 text-slate-300",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export function evidenceToBadgeVariant(
  level: string,
): VariantProps<typeof badgeVariants>["variant"] {
  switch (level) {
    case "project-live":
      return "live";
    case "project-built":
      return "built";
    case "documented":
      return "documented";
    case "learning":
      return "learning";
    case "interest":
      return "interest";
    default:
      return "default";
  }
}
