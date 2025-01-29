type Crime = {
  id: string;
  name: string;
  summary: string;
  amount: number;
  location: {
    gps: string;
  };
};

export default async function useFetchCrimes(
  endpoint: string
): Promise<Crime[]> {
  const response = await fetch(`https://polisen.se/api/events?${endpoint}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}
