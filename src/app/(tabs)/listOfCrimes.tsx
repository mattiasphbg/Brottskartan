import React from "react";
import { View, Text } from "react-native";
import { useQuery } from "@tanstack/react-query";

import {
  Table,
  TableHeader,
  TableFooter,
  TableBody,
  TableHead,
  TableData,
  TableRow,
  TableCaption,
} from "src/src/components/ui/table";

// Type for our crime data
interface Crime {
  name: string;
  summary: number;
  amount: number;
  location: string;
}

// Function to fetch crimes data
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

  if (isLoading)
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  if (error)
    return (
      <View>
        <Text>Error: {error.message}</Text>
      </View>
    );

  // Calculate totals
  const totals = crimes?.reduce(
    (acc, crime) => ({
      summary: acc.summary + crime.summary,
      amount: acc.amount + crime.amount,
    }),
    { summary: 0, amount: 0 }
  );

  return (
    <View>
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead>Namn</TableHead>
            <TableHead>Summering</TableHead>
            <TableHead>Datum</TableHead>
            <TableHead>Plats</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {crimes?.map((crime, index) => (
            <TableRow key={index}>
              <TableData>{crime.name}</TableData>
              <TableData>{crime.summary}</TableData>
              <TableData>${crime.amount}</TableData>
              <TableData>{crime.location}</TableData>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead>Total</TableHead>
            <TableHead>{totals?.summary}</TableHead>
            <TableHead>${totals?.amount}</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </View>
  );
}
