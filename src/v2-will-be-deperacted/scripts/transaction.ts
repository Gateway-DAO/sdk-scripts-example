import { gatewayInstance } from "../GatewayInstance";

export async function getTransaction() {
  const { transaction } = await gatewayInstance.transaction.getTransaction(
    "<-- transaction id -->"
  );

  console.log(transaction);
}

export async function getTransactions() {
  const { transactions } = await gatewayInstance.transaction.getTransactions();
  console.log(transactions);
}

export async function getTransactionCount() {
  const { transactionsCount } =
    await gatewayInstance.transaction.getTransactionCount();

  console.log(transactionsCount);
}
