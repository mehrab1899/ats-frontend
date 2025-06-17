'use client';

import Tab from '@/components/Tab';

interface TabSwitcherProps {
    options: string[];
    selected: string;
    onSelect: (value: string) => void;
}

export default function TabSwitcher({ options, selected, onSelect }: TabSwitcherProps) {
    return (
        <div className="flex space-x-2">
            {options.map((tab) => (
                <Tab
                    key={tab}
                    label={tab}
                    active={selected === tab}
                    onClick={() => onSelect(tab)}
                />
            ))}
        </div>
    );
}