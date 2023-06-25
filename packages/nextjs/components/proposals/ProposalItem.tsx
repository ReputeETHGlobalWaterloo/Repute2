interface ProposalItemProps {
  loading: boolean;
  dealType: string;
  expiryBlock: number;
  opportunityName: string;
  seller: string;
  sellerDeposit: number;
}

export const ProposalItem = ({
  loading,
  dealType,
  expiryBlock,
  opportunityName,
  seller,
  sellerDeposit,
}: ProposalItemProps) => {
  if (loading) {
    return <></>;
  } else {
    return (
      <div className="card w-84 glass">
        <figure>
          <img src="/images/ftx.jpeg" alt={opportunityName} />
        </figure>
        <div className="card-body">
          <div className="pb-4 flex flex-col gap-0">
            <div className="flex flex-row items-center gap-3">
              <h2 className="card-title">{dealType}</h2>
              <h2>{sellerDeposit / 1000000000000000} ETH</h2>
            </div>
          </div>
          <p className="card-text">{opportunityName}</p>
          <p>Expiry Block: {expiryBlock}</p>
          <p className="text-xs -mt-5">Seller&aops;s Address: {seller}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Chat Now!</button>
          </div>
        </div>
      </div>
    );
  }
};
