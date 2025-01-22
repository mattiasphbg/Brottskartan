import { useQuery } from "@tanstack/react-query";

interface Crime {
  name: string;
  summary: number;
  amount: number;
  location: string;
}

const fetchCrimes = async (endpoint = "crimes"): Promise<Crime[]> => {
  const API_URL = process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000";
  const response = await fetch(`${API_URL}/api/${endpoint}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export default function ListOfCrimes() {
  const {
    data: crimes,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["crimes", "all"],
    queryFn: () => fetchCrimes("crimes"),
  });
}
