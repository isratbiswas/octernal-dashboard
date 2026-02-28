import { Video } from "lucide-react";
import { motion } from "framer-motion";

interface ReminderProps {
  title: string;
  time: string;
}

export function Reminder({ title, time }: ReminderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="h-full"
    >
      <div className="flex h-full min-h-55 flex-col justify-between gap-5 sm:min-h-60 sm:gap-6">
        <div>
          <h2 className="mb-4 text-base font-display font-semibold text-gray-900 sm:mb-5">
            Reminders
          </h2>

          <div>
            <p className="mb-4 text-xl lg:text-xl xl:text-2xl leading-tight font-display font-semibold text-green-900 sm:mb-5">
              {title}
            </p>
            <p className="text-sm text-gray-500">Time: {time}</p>
          </div>
        </div>

        <div>
          <div className="relative group w-full">
            <div className="absolute -inset-0.5 rounded-full bg-green-500 opacity-30 blur-md group-hover:opacity-60 group-hover:inset-[-2px] transition-all duration-500 animate-pulse" />
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              className="relative flex w-full items-center justify-center gap-2 rounded-full bg-green-800 px-6 py-3 text-sm font-semibold text-white shadow-xl transition-colors hover:bg-green-700"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
              >
                <Video size={18} fill="currentColor" className="shrink-0" />
              </motion.div>

              <span className="tracking-wide">Start Meeting</span>

              <div className="absolute inset-0 overflow-hidden rounded-full">
                <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
