export const TAB_LIST = [
  { id: "MY_DEBIT_CARDS", label: "My debit cards" },
  { id: "ALL_COMPANY_CARDS", label: "All company cards" },
];

export const INITIAL_CARDS = [
  {
    id: 1,
    name: "Mark Henry",
    bank: "Aspire",
    bankLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=8584ee76-6533-4a12-836f-44e095a92acf&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    type: "VISA",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "11/32",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 1234",
    unMaskedCvv: "345",
    unMaskedNumber: "1234 5432 4566 1234",
  },
  {
    id: 2,
    name: "Anil Kumar",
    bank: "HDFC",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    type: "VISA",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "02/35",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 2342",
    unMaskedCvv: "666",
    unMaskedNumber: "2321 5432 4444 3234",
  },
  {
    id: 3,
    name: "Karan Arjun",
    bank: "HDFC",
    bankLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=8584ee76-6533-4a12-836f-44e095a92acf&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    type: "VISA",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "06/40",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 1234",
    unMaskedCvv: "333",
    unMaskedNumber: "0002 2233 3212 4211",
  },
];

export const MOCK_CARD_CREATION_DATA = [
  {
    bank: "HDFC",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    type: "MasterCard",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "06/32",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 3333",
    unMaskedCvv: "666",
    unMaskedNumber: "2321 2222 1111 3333",
  },
  {
    bank: "ICICI",
    bankLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=8584ee76-6533-4a12-836f-44e095a92acf&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    type: "VISA",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "07/32",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 1111",
    unMaskedCvv: "222",
    unMaskedNumber: "2222 3333 4444 1111",
  },
  {
    bank: "Yes bank",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    type: "Master",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "08/32",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 6666",
    unMaskedCvv: "333",
    unMaskedNumber: "2321 5544 3234 6666",
  },
  {
    bank: "PNB",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    type: "VISA",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    thru: "09/32",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 1009",
    unMaskedCvv: "234",
    unMaskedNumber: "0002 2233 3212 1009",
  },
  {
    bank: "HDFC",
    bankLogo:
      "https://upload.wikimedia.org/wikipedia/commons/2/28/HDFC_Bank_Logo.svg",
    type: "VISA",
    thru: "10/32",
    typeLogo:
      "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=99a641f4-0323-46a8-918e-3e232548ba51&api_key=CometServer1&access_token=1710003816_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_931775a6de535e2753811aad793ece803f7d5c81",
    maskedCvv: "***",
    maskedNumber: "**** **** **** 1234",
    unMaskedCvv: "333",
    unMaskedNumber: "0002 2233 3212 4211",
  },
];

export const SAMPLE_TRANSACTION = [
  {
    name: "Anil Kumar",
    date: "20 May 2022",
    type: "DEBIT",
    amount: "S$ 13,000",
    icon: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=54386ecf-df26-4b6a-afb8-7a5bb2d493e0&api_key=CometServer1&access_token=1710100609_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_5e853745f32e361e89b1b74db37e7fdba22a2e55",
    bgColor: "#009DFF1A",
  },
  {
    name: "Poly Molly ",
    date: "12 Jun 2023",
    type: "CREDIT",
    amount: "S$ 13,000",
    icon: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=54386ecf-df26-4b6a-afb8-7a5bb2d493e0&api_key=CometServer1&access_token=1710100609_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_5e853745f32e361e89b1b74db37e7fdba22a2e55",
    bgColor: "#F251951A",
  },
  {
    name: "Hola Sandy",
    date: "20 May 2023",
    type: "DEBIT",
    amount: "S$ 13,000",
    icon: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=2504873f-7146-4cf2-924c-ded2d6669cb5&api_key=CometServer1&access_token=1710100609_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_5e853745f32e361e89b1b74db37e7fdba22a2e55",
    bgColor: "#009DFF1A",
  },
  {
    name: "Karan Singh",
    date: "20 May 2023",
    type: "CREDIT",
    amount: "S$ 13,000",
    icon: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=54386ecf-df26-4b6a-afb8-7a5bb2d493e0&api_key=CometServer1&access_token=1710100609_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_5e853745f32e361e89b1b74db37e7fdba22a2e55",
    bgColor: "#EDFFF5",
  },
  {
    name: "Monu Singa",
    date: "20 May 2022",
    type: "DEBIT",
    amount: "S$ 13,000",
    icon: "https://cdn-sharing.adobecc.com/content/storage/id/urn:aaid:sc:US:80c753f2-db2f-4dfc-b6c2-ce39a4c787f0;revision=0?component_id=2504873f-7146-4cf2-924c-ded2d6669cb5&api_key=CometServer1&access_token=1710100609_urn%3Aaaid%3Asc%3AUS%3A80c753f2-db2f-4dfc-b6c2-ce39a4c787f0%3Bpublic_5e853745f32e361e89b1b74db37e7fdba22a2e55",
    bgColor: "#009DFF1A",
  },
];
