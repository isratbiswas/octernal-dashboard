import { motion } from "framer-motion";
import type { TeamMember } from "../../../types";
import { Badge } from "../../ui/badge";

const avatarColors = [
  "from-pink-400 to-red-500",
  "from-green-400 to-teal-500",
  "from-purple-400 to-indigo-500",
  "from-amber-400 to-orange-500",
];

type Status = "Completed" | "In Progress" | "Pending";

const statusStyleMap: Record<Status, string> = {
  Completed:
    "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-100",
  "In Progress":
    "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-100",
  Pending: "bg-rose-50 text-rose-700 border-rose-200 hover:bg-rose-100",
};

export function UserCollaboration({ members }: { members: TeamMember[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100"
    >
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display font-semibold text-gray-900 text-base">
          Team Collaboration
        </h2>
        <button className="flex items-center gap-1 text-xs text-gray-700 border border-gray-200 bg-white hover:bg-gray-50 px-3 py-1.5 rounded-full transition-colors font-medium">
          <span className="text-brand-600 font-bold">+</span>
          Add Member
        </button>
      </div>

      <div className="space-y-4">
        {members.map((member, i) => (
          <motion.div
            key={member.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.07 }}
            className="flex items-center gap-3 group"
          >
            <div
              className={`w-10 h-10 rounded-full bg-gradient-to-br ${
                avatarColors[i % avatarColors.length]
              } flex items-center justify-center text-white text-xs font-bold flex-shrink-0 shadow-sm transition-transform group-hover:scale-105`}
            >
              {member.avatar}
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-900 leading-tight">
                {member.name}
              </p>
              <p className="text-xs text-gray-500 truncate mt-0.5">
                Working on{" "}
                <span className="font-medium text-gray-700">{member.task}</span>
              </p>
            </div>

            <Badge
              variant="outline"
              className={`font-medium transition-colors ${statusStyleMap[member.status as Status]}`}
            >
              {member.status}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
