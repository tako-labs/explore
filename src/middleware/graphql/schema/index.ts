import {gql} from 'apollo-server-micro';

const typeDefs = gql`
  input QueryInput {
    address: String
    blockChain: String
    size: Int
    continuation: String
    cursor: String
    sort: String
    activityType: [String]
    start_date: String
  }

  type Collection_Data {
    nfts: [NFTMetadataType]
    totalSupply: Int
    orders: [NFTOrderDataType]
    continuation: String
  }

  type COLLECTION_OBJ {
    total: Int
    continuation: String
    collections: [COLLECTION]
  }

  type COLLECTION {
    id: String!
    parent: String
    blockchain: String!
    type: String!
    name: String!
    symbol: String
    owner: String
    features: [String]
    minters: [String]
    meta: COLLECTION_META
  }

  type COLLECTION_META {
    name: String!
    description: String
    content: [META_CONTENT]
    externalLink: String
    sellerFeeBasisPoints: Int
    feeRecipient: String
  }

  type META_CONTENT {
    width: Int
    height: Int
    url: String
    representation: String
    mimeType: String
    size: Int
  }

  type NFTMetadataType {
    id: String
    tokenId: String
    collection: String
    url: String
    name: String
    description: String
    price: String
    blockchain: String
    creators: [Creators]
    lazySupply: String
    supply: String
    mintedAt: String
    sellers: Int
    bestSellOrder: Sell_Order
  }

  type NFTOrderDataType {
    id: String
    platform: String
    status: String
    makeStock: String
    createdAt: String
    makePrice: String
    makePriceUsd: String
    maker: String
    make: _DataType
    supply: String
  }

  type _DataType {
    type: DataType
    value: String
  }
  type DataType {
    type: String
    contract: String
    tokenId: String
    value: String
  }

  type Creators {
    address: String
    value: Int
  }

  type Sell_Order {
    id: String
    platform: String
    fill: String
    status: String
  }

  type ACTIVITY {
    continuation: String
    cursor: String
    activities: [ACTIVITY_ITEM]
  }

  type ACTIVITY_ITEM {
    type: String
    from: String
    owner: String
    contract: String
    tokenId: String
    itemId: String
    value: String
    purchase: Boolean
    transactionHash: String
    id: String
    date: String
    reverted: Boolean
    left: LEFT_RIGHT
    right: LEFT_RIGHT
    source: String
    nft: _activityNFT
    payment: _activityPayment
    buyer: String
    seller: String
    buyerOrderHash: String
    sellerOrderHash: String
    price: String
    priceUsd: String
    amountUsd: String
    hash: String
    make: _DataType
    take: _DataType
    auction: _activityAuction
    bid: _activityBid
  }
  type _activityNFT {
    type: _DataType
    value: String
  }
  type _activityPayment {
    type: _DataType
    value: String
  }
  type _activityAuction {
    id: String
    contract: String
    type: String
    seller: String
    sell: _DataType
    buy: _DataType
    endTime: String
    minimalStep: String
    minimalPrice: String
    createdAt: String
    lastUpdatedAt: String
    buyPrice: String
    buyPriceUsd: String
    pending: [String]
    status: String
    ongoing: Boolean
    hash: String
    auctionId: String
    data: _auctionData
  }
  type _auctionData {
    dataType: String
    originFees: [Creators]
    payouts: [Creators]
    startTime: String
    duration: String
    buyOutPrice: String
  }

  type LEFT_RIGHT {
    maker: String
    hash: String
  }

  type _activityBid {
    type: String
    data: _auctionData
    buyer: String
    amount: String
    date: String
    status: String
  }

  type Query {
    Owned_Collections(input: QueryInput): COLLECTION_OBJ
    Collection_Info(input: QueryInput): COLLECTION
    Collection_NFTS(input: QueryInput): Collection_Data
    Query_Activity(input: QueryInput): ACTIVITY
  }
`;

export default typeDefs;
