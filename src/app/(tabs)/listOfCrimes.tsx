import React from "react";
import { View } from "react-native";

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
          <TableRow>
            <TableData>Rajesh Kumar</TableData>
            <TableData>10</TableData>
            <TableData>$130</TableData>
          </TableRow>
          <TableRow>
            <TableData>Priya Sharma</TableData>
            <TableData>12</TableData>
            <TableData>$210</TableData>
          </TableRow>
          <TableRow>
            <TableData>Ravi Patel</TableData>
            <TableData>6</TableData>
            <TableData>$55</TableData>
          </TableRow>
          <TableRow>
            <TableData>Ananya Gupta</TableData>
            <TableData>18</TableData>
            <TableData>$340</TableData>
          </TableRow>
          <TableRow>
            <TableData>Arjun Singh</TableData>
            <TableData>2</TableData>
            <TableData>$35</TableData>
          </TableRow>
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableHead>Total</TableHead>
            <TableHead>48</TableHead>
            <TableHead>$770</TableHead>
          </TableRow>
        </TableFooter>
      </Table>
    </View>
  );
}
