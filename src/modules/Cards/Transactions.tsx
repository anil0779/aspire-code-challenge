import React from "react";

interface TransactionProps {
  name: string;
  date: string;
  type: string;
  amount: string;
  icon: string;
  bgColor?: string;
}

const Transaction: React.FC<TransactionProps> = ({
  name,
  date,
  type,
  amount,
  icon,
  bgColor,
}) => {
  // TODO: move to styled components
  return (
    <div
      style={{
        display: "flex",
        marginBottom: "10px",
        alignItems: "flex-start",
      }}
    >
      <div style={{ marginRight: "10px" }}>
        {/* You can replace this div with an icon based on the transaction type */}
        <div
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            backgroundColor: bgColor,
          }}
        >
          <img
            style={{
              width: "16px",
              height: "16px",
              position: "relative",
              top: "16px",
              left: "16px",
            }}
            src={icon}
            alt="icon"
          />
        </div>
      </div>
      <div style={{ flexGrow: 1 }}>
        <strong style={{ fontWeight: "bold" }}>{name}</strong>
        <br />
        <div style={{ color: "#AAAAAA", position: "relative", top: "4px" }}>
          {date}
        </div>
        <br />
        <div
          className="flex"
          style={{
            gap: "8px",
            alignItems: "baseline",
          }}
        >
          <div
            style={{
              height: "24px",
              width: "24px",
              borderRadius: "50%",
              background: "#325BAF",
            }}
          >
            <img
              style={{ position: "relative", left: "7px" }}
              src={
                "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=d4e76f57-9f96-41dd-9f29-60cb5bdef718&api_key=CometServer1&access_token=1710175834_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_034b26ae5c1ec5929fa0f790937bafb737687e0b"
              }
              alt="transaction-type"
            />
          </div>
          <div
            style={{ color: "#325BAF", fontWeight: "bold", fontSize: "14px" }}
          >
            {type === "CREDIT"
              ? "Refund on debit card"
              : "Charged to debit card"}
          </div>
        </div>
      </div>
      <div
        style={{
          fontWeight: 700,
          color: type === "CREDIT" ? "#01D167" : "black",
        }}
      >
        {type === "CREDIT" ? "+" : "-"} {amount}
      </div>
    </div>
  );
};

interface TransactionsListProps {
  transactions: TransactionProps[];
}

const TransactionsList: React.FC<TransactionsListProps> = ({
  transactions,
}) => {
  return (
    <div>
      {transactions.map((transaction, index) => (
        <>
          <Transaction key={index} {...transaction} />
          {index !== transactions.length - 1 && (
            <hr
              style={{ borderTop: "1px solid #F5F5F5", marginBottom: "24px" }}
            />
          )}
        </>
      ))}
    </div>
  );
};

export default TransactionsList;
