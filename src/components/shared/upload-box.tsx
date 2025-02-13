import React from "react";
import { motion } from "framer-motion";

interface UploadBoxProps {
  title: string;
  subtitle?: string;
  description: string;
  accept: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function UploadBox({
  title,
  subtitle,
  description,
  accept,
  onChange,
}: UploadBoxProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-6 p-6">
      <div className="flex flex-col items-center gap-3 text-center">
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          {title}
        </h2>
        {subtitle && (
          <p className="inline-block rounded-xl bg-white/5 px-4 py-1.5 text-sm text-white/70 ring-1 ring-white/10">
            {subtitle}
          </p>
        )}
      </div>

      <motion.div
        whileHover={{ scale: 1.02 }}
        className="group flex w-full max-w-lg flex-col items-center justify-center gap-4 rounded-xl bg-white/5 p-8 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/[0.07] hover:ring-white/20"
      >
        <div className="rounded-full bg-white/5 p-4 ring-1 ring-white/10 group-hover:bg-white/10">
          <svg
            className="h-8 w-8 text-white/70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
            />
          </svg>
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <p className="text-sm font-medium text-white/70">Drag and Drop</p>
          <p className="text-sm text-white/50">or</p>
        </div>

        <label className="group/button relative cursor-pointer overflow-hidden rounded-xl bg-white/5 px-6 py-2.5 ring-1 ring-white/10 transition-all duration-300 hover:bg-white/10 hover:ring-white/20">
          <motion.span
            className="inline-block text-sm font-medium text-white"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {description}
          </motion.span>
          <input
            type="file"
            onChange={onChange}
            accept={accept}
            className="hidden"
          />
        </label>
      </motion.div>
    </div>
  );
}
