/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";
import { Plus, CircleDot, Layout, Gauge, Layers } from "lucide-react";
import type { Project } from "../../../types";

const iconStyles: Record<string, { bg: string; color: string; icon: any }> = {
  api: { bg: "bg-blue-50", color: "text-blue-600", icon: CircleDot },
  onboarding: { bg: "bg-teal-50", color: "text-teal-600", icon: CircleDot },
  dashboard: { bg: "bg-indigo-50", color: "text-indigo-600", icon: Layout },
  optimize: { bg: "bg-amber-50", color: "text-amber-500", icon: Gauge },
  testing: { bg: "bg-purple-50", color: "text-purple-600", icon: Layers },
};

export function ProductsList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.35 }}
      className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-bold text-gray-900 text-xl tracking-tight">
          Project
        </h2>
        <button className="flex items-center gap-1 text-sm text-emerald-900 border border-emerald-200 bg-white hover:bg-emerald-50 px-4 py-1.5 rounded-full transition-all font-medium">
          <Plus size={16} className="text-emerald-600" />
          New
        </button>
      </div>

      <div className="space-y-5">
        {projects.map((project, i) => {
          const styleKey = project.id.toLowerCase().includes("api")
            ? "api"
            : project.id.toLowerCase().includes("onboard")
              ? "onboarding"
              : project.id.toLowerCase().includes("dash")
                ? "dashboard"
                : project.id.toLowerCase().includes("opti")
                  ? "optimize"
                  : "testing";

          const config = iconStyles[styleKey];
          const IconComponent = config.icon;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.06 }}
              className="flex items-center gap-4 group cursor-pointer"
            >
              <div
                className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 ${config.bg}`}
              >
                <IconComponent
                  size={22}
                  className={config.color}
                  strokeWidth={2.5}
                />
              </div>

              <div className="flex-1 min-w-0">
                <p className="text-[15px] font-semibold text-gray-800 group-hover:text-black transition-colors truncate">
                  {project.name}
                </p>
                <p className="text-xs text-gray-400 font-medium mt-0.5">
                  Due date: {project.dueDate}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
