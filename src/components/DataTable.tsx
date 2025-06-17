'use client';

import React from 'react';

type Column<T> = {
    key: keyof T;
    label: string;
    render?: (value: any, row: T) => React.ReactNode;
};

type DataTableProps<T> = {
    columns: Column<T>[];
    data: T[];
    className?: string;
};

export default function DataTable<T>({ columns, data, className = '' }: DataTableProps<T>) {
    return (
        <div className={`w-full overflow-x-auto rounded-lg border border-gray-200 ${className}`}>
            <table className="min-w-full text-sm text-left text-gray-700">
                <thead className="bg-gray-100 text-xs font-semibold uppercase text-gray-600">
                    <tr>
                        {columns.map((col) => (
                            <th key={String(col.key)} className="px-4 py-3 whitespace-nowrap">
                                {col.label}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} className="px-4 py-6 text-center text-gray-400">
                                No data available.
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="border-t">
                                {columns.map((col) => (
                                    <td key={String(col.key)} className="px-4 py-3 whitespace-nowrap">
                                        {col.render ? col.render(row[col.key], row) : String(row[col.key] ?? '')}
                                    </td>
                                ))}
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
}
