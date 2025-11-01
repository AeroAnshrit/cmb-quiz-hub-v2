import React from 'react';
import { Info } from "lucide-react";

export default function GeneralInfoPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] bg-surface text-center px-6 py-12 rounded-xl border border-border">
      <Info className="w-12 h-12 text-accent mb-4" />
      <h1 className="text-2xl font-bold text-text-primary mb-3">
        Page Under Development
      </h1>
      <p className="text-text-secondary max-w-xl">
        This section is currently being developed. Soon, it will include detailed study
        materials, solved previous-year questions, and interactive practice tools for
        all Mechanical Engineering subjects like Thermodynamics, Fluid Mechanics,
        Heat Transfer, and Theory of Machines.
      </p>
      <p className="mt-4 text-sm text-text-secondary/50">
        © 2025 CMB Quiz Hub. All rights reserved.
      </p>
    </div>
  );
}
