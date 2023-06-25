# Repute
Repute [RAY-PU-TE] is a platform for selling  off-chain assets for on-chain payments.


# User Stories

Alice has/had $1,000 on FTX, and Alice negotiates a deal with Bob,
where Bob pays 10 cents on a dollar for the potential claim.

Trading the bankruptcy claims and reassigning the creditor (person who
can receive the claim) from Alice to Bob via traditional means is challening,
for two reasons: 1. affected users are all around the world and in different
juristiction, which has different rules on trading bankruptcy claims and 
2. a lot of affected users are individuals with small ticket size, and it 
can only scale with a trustless and permissionless platform, instead of
the costly and time-consuming traditional means of reassigning the creditor to 
the claims buyer.

The challenge then becomes, since the claims cannot be transferred easily,
it relies on Alice delivering the claims to Bob, when the claims become claimable.

However, when the claim becomes claimable, both Alice and Bob would know how 
much is to be received from the $1,000 claim. Thus if the claim is < $100, Bob
will have an incentive to walk from the deal. When the claim is > $100, Alice
will have an incentive to walk from the deal.

We want to build a trustless platform where neither Alice and Bob can 
walk from the deal, once a deal is made.

The existing solution is to have a reputable third party to custody the payments ($100)
from Bob, such that Bob does not walk away from the deal. The exitsting solution
also asks Alice to deposit a collateral with the third party, such that Alice does not walk
away from the deal. If one party renegates the deal, the counterpary
receives the payments/collateral deposited by the renegating party.

However, this setup means both Alice and Bob need to trust the third party. Since
bankruptcy case can go-on for multiple years, it requires a lot of trust on the third party.
Thus we are building a decentralized platform that can facilitate this type of OTC deal.

As Alice and Bob are trading an off-chain asset (the claims) with an on-chain asset (Bob's payment),
we require attestor to oversee that Alice has actually delivered the claims to Bob, before
the smart contract can release the funds.

The OTC deal does not only include the trading of bankruptcy claims. It could also expand to
trading airdrop farming addresses, where the airdrop token is not yet claimable. The platform can
also faciliate secondary trading of SAFT/SAFE agreements, or unvested tokens from VCs.

# Contract versions
Lock: example came from hardhat
OTCV0: not finished, scrapped
OTCV1: basic function like post/take offers, settle/refund offers
OTCV2: add worldcoin integration

Note tests are only avaliable for OTCV1
OTCV2 needs to be deployed to Mumbai and test manually due to worldcoin being deployed there

contract is deployed and verified on Polygon Mumbai
https://mumbai.polygonscan.com/address/0x7564bcd038784424ba1900cb99aad5dcd85ab019

Graph QL is deployed on testnet
deployment ID QmToq4UhjQxfaQqqHnMtGM18Wk9CJzUq21p8kVgeaofqor

Deck is avaliable at:
https://docs.google.com/presentation/d/1vo2BbLMrKxo1-Ys-fwdY4SfKSFJUYsQa-f3WDvVMJUY/edit#slide=id.g254f7c9d698_3_6