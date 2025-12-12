import React from "react";

const Finance=()=> {
  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">💰 Finance</h2>
      <form className="space-y-4">
        <label className="block">
          Expense Title:
          <input type="text" className="w-full p-2 rounded border" />
        </label>
        <label className="block">
          Amount:
          <input type="number" className="w-full p-2 rounded border" />
        </label>
        <label className="block">
          Category:
          <select className="w-full p-2 rounded border">
            <option>Sponsorship</option>
            <option>Logistics</option>
            <option>Marketing</option>
          </select>
        </label>
        <button className="bg-green-600 text-white px-4 py-2 rounded">Add Transaction</button>
      </form>
    </div>
  );
}

export default Finance;