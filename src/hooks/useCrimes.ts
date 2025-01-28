interface Crime {
  name: string;
  summary: number;
  amount: number;
  location: string;
}

export default async function useFetchCrimes(
  endpoint: string
): Promise<Crime[]> {
  const response = await fetch(`https://polisen.se/api/events?${endpoint}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
}

// export default function UseCrimes() {
//   const {
//     data: crimes,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: ["crimes", "Stockholm"],
//     queryFn: () => useFetchCrimes(),
//   });

//   return { crimes, isLoading, error };
// }
