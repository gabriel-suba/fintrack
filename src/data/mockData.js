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

export const txs = [
	{
		delete: false,
		id: 0,
		documentNumber: `TX000001`,
		type: "income",
		date: new Date(),
		memo: `Income for December`,
		from: "",
		account: "BDO",
		amount: 13_000,
	},
	{
		delete: false,
		id: 1,
		documentNumber: `TX000002`,
		type: "expense",
		date: new Date(),
		memo: `Gifts`,
		from: "",
		account: "Seabank",
		amount: 5_000,
	},
	{
		delete: false,
		id: 2,
		documentNumber: `TX000003`,
		type: "transfer",
		date: new Date(),
		memo: `Withdraw cash for allowance`,
		from: "BDO",
		account: "Cash",
		amount: 2_500,
	},
];