const getRandomDate = (start, end) => {
	const startDate = new Date(start).getTime(); // Convert start date to timestamp
	const endDate = new Date(end).getTime(); // Convert end date to timestamp
	const randomTimestamp = Math.random() * (endDate - startDate) + startDate; // Random timestamp
	return new Date(randomTimestamp).toLocaleDateString("en-us"); // Format as a readable date
};

export const types = [
	{ value: "transfer", label: "Transfer" },
	{ value: "income", label: "Income" },
	{ value: "expense", label: "Expense" },
];

export const accounts = [
	{ value: "cash", label: "Cash" },
	{ value: "bdo", label: "BDO" },
	{ value: "seabank", label: "Seabank" },
	{ value: "maya", label: "Maya" },
];

export const transactions = Array.from({ length: 10 }, (_, index) => ({
	delete: false,
	id: index,
	documentNumber: `TX${String(index + 1).padStart(7, "0")}`,
	type: "transfer",
	date: getRandomDate("2024-01-01", "2024-12-31"),
	memo: `Memo for transaction ${index + 1}`,
	from: "BDO",
	account: "Seabank",
	amount: `${12_000 + index * 10000}`,
}));