export interface CryptoItem {
  id: string;
  rank: number;
  name: string;
  symbol: string;
  price_usd: string;
}

export async function getCryptoTickers(): Promise<CryptoItem[]> {
  const API_URL = "https://api.coinlore.net/api/tickers/";

  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data.data as CryptoItem[];
  } catch (err) {
    console.error("Gagal mengambil data API:", err);
    return [];
  }
}
