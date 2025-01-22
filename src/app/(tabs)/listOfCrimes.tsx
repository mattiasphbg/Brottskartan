import React from "react";
import { View, Text } from "react-native";

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

export default function ListOfCrimes() {
  const dummyData = [
    {
      name: "Theft",
      summary: 12,
      amount: 1500,
      location: "Downtown",
    },
    {
      name: "Vandalism",
      summary: 8,
      amount: 800,
      location: "Park Area",
    },
    {
      name: "Burglary",
      summary: 5,
      amount: 3000,
      location: "Residential Area",
    },
  ];

  const dummyTotals = {
    summary: 25,
    amount: 5300,
  };

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
          {dummyData.map((crime, index) => (
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
            <TableHead>{dummyTotals.summary}</TableHead>
            <TableHead>${dummyTotals.amount}</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </View>
  );
}
