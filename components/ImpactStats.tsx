import { IMPACT_STATS } from "@/lib/data";
import { Icon } from "@/components/Icons";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

export function ImpactStats() {
  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        {IMPACT_STATS.map((stat, index) => (
          <Reveal key={stat.key} delay={index * 60}>
            <div className="flex flex-col items-center rounded-2xl bg-white p-5 text-center shadow-soft ring-1 ring-black/5">
              <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-brand-tint text-brand">
                <Icon name={stat.icon} className="h-6 w-6" />
              </span>
              <span className="text-2xl font-bold text-brand-darker">
                <Counter value={stat.value} />
              </span>
              <span className="mt-1 text-xs text-slate-600">{stat.label}</span>
            </div>
          </Reveal>
        ))}
      </div>
      <p className="mt-4 text-center text-xs text-slate-400">
        * Cifras de referencia sujetas a validación y aprobación de la empresa.
      </p>
    </div>
  );
}
