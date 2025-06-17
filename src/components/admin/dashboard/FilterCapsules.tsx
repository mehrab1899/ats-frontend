'use client';

import Capsule from "@/components/Capsule";

interface FilterPillsProps {
    filters: string[];
    selected: string;
    onChange: (val: string) => void;
}

export default function FilterPills({ filters, selected, onChange }: FilterPillsProps) {
    return (
        <div className="flex space-x-3">
            {filters.map((filter) => (
                <Capsule
                    key={filter}
                    label={filter}
                    active={selected === filter}
                    onClick={() => onChange(filter)}
                />
            ))}
        </div>
    );
}
