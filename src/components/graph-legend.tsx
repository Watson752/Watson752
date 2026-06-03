import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const legendItems = [
  { label: "Large node", desc: "Main software field / domain", dot: "h-4 w-4" },
  { label: "Medium node", desc: "Skill, tool, or concept", dot: "h-3 w-3" },
  { label: "Card node", desc: "Project or documentation proof", dot: "h-3 w-5 rounded-sm" },
  { label: "Green glow", desc: "Live / project-backed evidence", color: "bg-emerald-400 shadow-[0_0_12px_rgba(52,211,153,0.6)]" },
  { label: "Blue glow", desc: "Strong knowledge area", color: "bg-cyan-400 shadow-[0_0_12px_rgba(34,211,238,0.5)]" },
  { label: "Purple glow", desc: "Documentation exists", color: "bg-violet-400 shadow-[0_0_12px_rgba(167,139,250,0.5)]" },
  { label: "Yellow glow", desc: "Learning / interest", color: "bg-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.5)]" },
  { label: "Grey", desc: "Related but not central", color: "bg-slate-500" },
  { label: "Thick edge", desc: "Strong relationship", edge: "thick" },
  { label: "Thin edge", desc: "Weak / related relationship", edge: "thin" },
];

export function GraphLegend() {
  return (
    <Card className="border-slate-700/50 bg-slate-900/50">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">Legend</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
        {legendItems.map((item) => (
          <div key={item.label} className="flex items-start gap-2 text-xs">
            {item.color ? (
              <span
                className={`mt-0.5 h-3 w-3 shrink-0 rounded-full ${item.color}`}
                aria-hidden
              />
            ) : item.edge ? (
              <span
                className={`mt-1.5 w-6 shrink-0 border-slate-400 ${
                  item.edge === "thick" ? "border-t-2" : "border-t border-dashed"
                }`}
                aria-hidden
              />
            ) : (
              <span
                className={`mt-0.5 shrink-0 rounded-full bg-slate-600 ${item.dot}`}
                aria-hidden
              />
            )}
            <div>
              <span className="font-medium text-slate-200">{item.label}</span>
              <span className="text-slate-500"> — {item.desc}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
