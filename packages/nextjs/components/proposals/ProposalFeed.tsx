import { ProposalItem } from "./ProposalItem";
import { gql, useQuery } from "@apollo/client";

export const ProposalFeed = () => {
  const PROPOSALS_GRAPHQL = `
  {
    offerPosteds(first: 5) {
      id
      dealId
      dealType
      expiryBlock
      opportunityName
      seller
      sellerDeposit
    }
  }
    `;

  const PROPOSALS_GQL = gql(PROPOSALS_GRAPHQL);
  const proposalsData = useQuery(PROPOSALS_GQL, { pollInterval: 1000 });

  console.log("greetingsData: ", proposalsData);
  return (
    <div className="pt-2 grid grid-cols-3 gap-4">
      {proposalsData.data?.offerPosteds.map((proposal: any) => {
        return (
          <ProposalItem
            key={proposal.id}
            loading={proposalsData.loading}
            dealType={proposal.dealType}
            expiryBlock={proposal.expiryBlock}
            opportunityName={proposal.opportunityName}
            seller={proposal.seller}
            sellerDeposit={proposal.sellerDeposit}
          />
        );
      })}
    </div>
  );
};
