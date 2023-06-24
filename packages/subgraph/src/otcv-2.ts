import {
  AttestorSwapped as AttestorSwappedEvent,
  ExpiryExtended as ExpiryExtendedEvent,
  IDUnverified as IDUnverifiedEvent,
  IDVerified as IDVerifiedEvent,
  OfferPosted as OfferPostedEvent,
  OfferTaken as OfferTakenEvent,
  Refunded as RefundedEvent,
  TradeSettled as TradeSettledEvent
} from "../generated/OTCV2/OTCV2"
import {
  AttestorSwapped,
  ExpiryExtended,
  IDUnverified,
  IDVerified,
  OfferPosted,
  OfferTaken,
  Refunded,
  TradeSettled,
  SellerDepositTally,
  BuyerDepositTally
} from "../generated/schema"

export function handleAttestorSwapped(event: AttestorSwappedEvent): void {
  let entity = new AttestorSwapped(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.newAttestor = event.params.newAttestor

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExpiryExtended(event: ExpiryExtendedEvent): void {
  let entity = new ExpiryExtended(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.newExpiry = event.params.newExpiry

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIDUnverified(event: IDUnverifiedEvent): void {
  let entity = new IDUnverified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleIDVerified(event: IDVerifiedEvent): void {
  let entity = new IDVerified(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.user = event.params.user

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferPosted(event: OfferPostedEvent): void {
  let entity = new OfferPosted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.dealType = event.params.dealType
  entity.opportunityName = event.params.opportunityName
  entity.seller = event.params.seller
  entity.sellerDeposit = event.params.sellerDeposit
  entity.expiryBlock = event.params.expiryBlock

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOfferTaken(event: OfferTakenEvent): void {
  let entity = new OfferTaken(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.buyer = event.params.buyer
  entity.buyerDeposit = event.params.buyerDeposit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRefunded(event: RefundedEvent): void {
  let entity = new Refunded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.sellerDeposit = event.params.sellerDeposit
  entity.buyerDeposit = event.params.buyerDeposit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTradeSettled(event: TradeSettledEvent): void {
  let entity = new TradeSettled(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.dealId = event.params.dealId
  entity.seller = event.params.seller
  entity.buyer = event.params.buyer
  entity.sellerDeposit = event.params.sellerDeposit
  entity.buyerDeposit = event.params.buyerDeposit

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()

}