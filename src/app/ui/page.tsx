"use client";

import { useState, useRef } from 'react';
import Link from 'next/link';
import React from 'react';

interface TableData {
  headers: string[];
  rows: string[][];
}

export default function UiPage(): React.ReactNode {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loadedTables, setLoadedTables] = useState<TableData[]>([]);
  const [selectedTableIndex, setSelectedTableIndex] = useState<number>(0);

  useEffect(() => {
    // Dynamically import Bootstrap JS

  }, []);

  const parseHtmlTables = (htmlString: string): TableData[] => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/html');
    const tables = Array.from(doc.querySelectorAll('table'));

    return tables.map(table => {
      const headers: string[] = [];
      const rows: string[][] = [];

      // Parse headers
      const headerCells = Array.from(table.querySelectorAll('thead th'));
      if (headerCells.length > 0) {
        headerCells.forEach(th => headers.push(th.textContent || ''));
      } else {
        // If no thead, try to get headers from the first tr
        const firstRowCells = Array.from(table.querySelectorAll('tr:first-child th, tr:first-child td'));
        firstRowCells.forEach(cell => headers.push(cell.textContent || ''));
      }


      // Parse rows
      Array.from(table.querySelectorAll('tbody tr, tr:not(:first-child)')).forEach(tr => {
        const row: string[] = [];
        Array.from(tr.querySelectorAll('td')).forEach(td => row.push(td.textContent || ''));
        if (row.length > 0) { // Only add rows that actually have cells
          rows.push(row);
        }
      });

      return { headers, rows };
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const htmlContent = e.target?.result as string;
      const parsed = parseHtmlTables(htmlContent);
      setLoadedTables(parsed);
      setSelectedTableIndex(0); // Select the first table by default
    };
    reader.readAsText(file);
  };

  const handleTableSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTableIndex(Number(event.target.value));
  };

  const handleCellChange = (
    rowIndex: number,
    colIndex: number,
    event: React.FocusEvent<HTMLTableCellElement>
  ) => {
    const newLoadedTables = [...loadedTables];
    if (newLoadedTables[selectedTableIndex]) {
      newLoadedTables[selectedTableIndex].rows[rowIndex][colIndex] = event.target.textContent || '';
      setLoadedTables(newLoadedTables);
    }
  };

  const addTableRow = () => {
    const newLoadedTables = [...loadedTables];
    if (newLoadedTables[selectedTableIndex]) {
      const currentTable = newLoadedTables[selectedTableIndex];
      const numColumns = currentTable.headers.length > 0 ? currentTable.headers.length : (currentTable.rows[0]?.length || 2);
      const newRow = Array(numColumns).fill('');
      currentTable.rows.push(newRow);
      setLoadedTables(newLoadedTables);
    }
  };

  const saveTable = () => {
    alert("Saving functionality is complex. This would typically involve sending the data to a server.");
    // In a real application, you would send loadedTables[selectedTableIndex] to a backend
  };

  const currentTable = loadedTables[selectedTableIndex];

  return (
    <div>
      <h3>Select HTML File to Load Table:</h3>
      <input type="file" id="fileInput" accept=".html" onChange={handleFileChange} ref={fileInputRef} />

      {loadedTables.length > 0 && (
        <>
          <label htmlFor="tableSelect" className="mt-3">Select a table:</label>
          <select id="tableSelect" onChange={handleTableSelectChange} value={selectedTableIndex} ref={tableSelectRef}>
            {loadedTables.map((_, index) => (
              <option key={index} value={index}>
                Table {index + 1}
              </option>
            ))}
          </select>

          <div id="tableContainer" className="mt-3">
            {currentTable && (
              <table className="">
                <thead>
                  <tr>
                    {currentTable.headers.map((header, index) => (
                      <th key={index}>{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {currentTable.rows.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                      {row.map((cell, colIndex) => (
                        <td
                          key={colIndex}
                          contentEditable="true"
                          onBlur={(e) => handleCellChange(rowIndex, colIndex, e)}
                          dangerouslySetInnerHTML={{ __html: cell }} // Use dangerouslySetInnerHTML for initial content
                        >
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          <button id="addRowBtn" onClick={addTableRow}>Add Row</button>
          <button id="saveButton" onClick={saveTable}>Save Changes</button>
        </>
      )}
    </div>
  );
}