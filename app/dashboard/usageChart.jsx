"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import {
//   LineChart,
//   BarChart,
//   PieChart,
//   DonutChart,
// } from "@/components/ui/chart";
// import { Grid, GridItem } from "@/components/ui/grid";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { MapPin, TrendingUp, Activity, Leaf, Database } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  BarChart,
  LineChart,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  Sector,
  Bar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

// Mock data
const herbRegistrationData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Ashwagandha",
      data: [42, 53, 47, 62, 89, 97, 105, 120, 118, 125, 142, 156],
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
    },
    {
      label: "Tulsi",
      data: [65, 59, 80, 81, 56, 95, 110, 115, 120, 129, 137, 142],
      borderColor: "#047857",
      backgroundColor: "rgba(4, 120, 87, 0.1)",
    },
    {
      label: "Brahmi",
      data: [28, 32, 39, 45, 55, 66, 77, 85, 96, 100, 111, 124],
      borderColor: "#34D399",
      backgroundColor: "rgba(52, 211, 153, 0.1)",
    },
  ],
};

const blockchainTransactionsData = {
  labels: ["Ethereum", "Polygon", "Solana", "Avalanche", "Binance"],
  datasets: [
    {
      label: "Transactions",
      data: [2345, 3456, 1234, 2345, 1567],
      backgroundColor: [
        "rgba(16, 185, 129, 0.8)",
        "rgba(4, 120, 87, 0.8)",
        "rgba(52, 211, 153, 0.8)",
        "rgba(6, 95, 70, 0.8)",
        "rgba(20, 184, 166, 0.8)",
      ],
    },
  ],
};

const verificationStatusData = {
  labels: ["Verified", "Pending", "Rejected", "Under Review"],
  datasets: [
    {
      label: "Status",
      data: [65, 15, 5, 15],
      backgroundColor: [
        "#10B981", // Green for verified
        "#FCD34D", // Yellow for pending
        "#EF4444", // Red for rejected
        "#60A5FA", // Blue for under review
      ],
    },
  ],
};

const userTypeData = {
  labels: [
    "Farmers",
    "Distributors",
    "Researchers",
    "Administrators",
    "Consumers",
  ],
  datasets: [
    {
      label: "User Types",
      data: [45, 25, 15, 5, 10],
      backgroundColor: [
        "rgba(16, 185, 129, 0.8)",
        "rgba(4, 120, 87, 0.8)",
        "rgba(52, 211, 153, 0.8)",
        "rgba(6, 95, 70, 0.8)",
        "rgba(20, 184, 166, 0.8)",
      ],
    },
  ],
};

const revenueData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Revenue",
      data: [
        28000, 32000, 35000, 38000, 42000, 45000, 52000, 58000, 62000, 68000,
        72000, 78000,
      ],
      borderColor: "#10B981",
      backgroundColor: "rgba(16, 185, 129, 0.1)",
      fill: true,
    },
    {
      label: "Expenses",
      data: [
        22000, 24000, 26000, 27000, 30000, 31000, 35000, 36000, 38000, 40000,
        42000, 45000,
      ],
      borderColor: "#047857",
      backgroundColor: "rgba(4, 120, 87, 0.1)",
      fill: true,
    },
  ],
};

const topHerbsData = [
  { name: "Ashwagandha", count: 1256, growth: 12.5 },
  { name: "Tulsi", count: 978, growth: 8.2 },
  { name: "Brahmi", count: 842, growth: 15.7 },
  { name: "Shatavari", count: 765, growth: 7.3 },
  { name: "Turmeric", count: 723, growth: 10.9 },
];

const regionData = [
  { name: "Uttarakhand", count: 2567, growth: 18.2 },
  { name: "Kerala", count: 2109, growth: 12.4 },
  { name: "Himachal Pradesh", count: 1875, growth: 15.7 },
  { name: "Tamil Nadu", count: 1652, growth: 9.3 },
  { name: "Karnataka", count: 1437, growth: 11.8 },
];

export default function UsageChart() {
  return (
    <div className="p-6 min-h-screen">
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="border border-none bg-black/60 mb-6">
          <TabsTrigger
            value="overview"
            className="data-[state=active]:bg-emerald-800 py-2 text-gray-200 data-[state=active]:border-emerald-500"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="herbs"
            className="data-[state=active]:bg-emerald-800 py-2 text-gray-200 data-[state=active]:border-emerald-500"
          >
            Herbs Analytics
          </TabsTrigger>
          <TabsTrigger
            value="blockchain"
            className="data-[state=active]:bg-emerald-800 py-2 text-gray-200 data-[state=active]:border-emerald-500"
          >
            Blockchain
          </TabsTrigger>
          <TabsTrigger
            value="users"
            className="data-[state=active]:bg-emerald-800 py-2 text-gray-200 data-[state=active]:border-emerald-500"
          >
            Users
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <Card className="bg-black/60 border-none transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Total Herbs Tagged
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">5,687</div>
                <p className="text-xs text-gray-200">+18.2% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Active Validators
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">248</div>
                <p className="text-xs text-gray-200">+5.7% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Blockchain Transactions
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">12,456</div>
                <p className="text-xs text-gray-200">+22.3% from last month</p>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-gray-200">
                  Verification Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-white mb-1">98.2%</div>
                <p className="text-xs text-gray-200">+2.1% from last month</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-black/60 border-none lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Herb Registration Trends
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Monthly registrations by herb type
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={herbRegistrationData.labels.map((label, index) => ({
                      name: label,
                      Ashwagandha: herbRegistrationData.datasets[0].data[index],
                      Tulsi: herbRegistrationData.datasets[1].data[index],
                      Brahmi: herbRegistrationData.datasets[2].data[index],
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Ashwagandha"
                      stroke={herbRegistrationData.datasets[0].borderColor}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Tulsi"
                      stroke={herbRegistrationData.datasets[1].borderColor}
                    />
                    <Line
                      type="monotone"
                      dataKey="Brahmi"
                      stroke={herbRegistrationData.datasets[2].borderColor}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Verification Status
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Current verification metrics
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={verificationStatusData.datasets[0].data.map(
                        (value, index) => ({
                          name: verificationStatusData.labels[index],
                          value,
                        })
                      )}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {verificationStatusData.datasets[0].data.map(
                        (entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={
                              verificationStatusData.datasets[0]
                                .backgroundColor[index]
                            }
                          />
                        )
                      )}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Top Herbs by Registration
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Most registered herbs in the system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {topHerbsData.map((herb, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-green-500 mr-3"></div>
                        <span className="text-gray-200">{herb.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white font-medium mr-4">
                          {herb.count}
                        </span>
                        <Badge className="bg-green-900/50 text-gray-200">
                          +{herb.growth}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">Top Regions</CardTitle>
                <CardDescription className="text-gray-200">
                  Regions with highest herb registration
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {regionData.map((region, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 text-gray-200 mr-2" />
                        <span className="text-gray-200">{region.name}</span>
                      </div>
                      <div className="flex items-center">
                        <span className="text-white font-medium mr-4">
                          {region.count}
                        </span>
                        <Badge className="bg-green-900/50 text-gray-200">
                          +{region.growth}%
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="herbs" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <Card className="bg-black/60 border-none lg:col-span-2">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Monthly Herb Registration
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Registration trends over the past year
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={herbRegistrationData.labels.map((label, index) => ({
                      name: label,
                      Ashwagandha: herbRegistrationData.datasets[0].data[index],
                      Tulsi: herbRegistrationData.datasets[1].data[index],
                      Brahmi: herbRegistrationData.datasets[2].data[index],
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Ashwagandha"
                      stroke={herbRegistrationData.datasets[0].borderColor}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Tulsi"
                      stroke={herbRegistrationData.datasets[1].borderColor}
                    />
                    <Line
                      type="monotone"
                      dataKey="Brahmi"
                      stroke={herbRegistrationData.datasets[2].borderColor}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Herb Distribution
                </CardTitle>
                <CardDescription className="text-gray-200">
                  By type and variety
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userTypeData.datasets[0].data.map(
                        (value, index) => ({
                          name: userTypeData.labels[index],
                          value,
                        })
                      )}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {userTypeData.datasets[0].data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={userTypeData.datasets[0].backgroundColor[index]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="blockchain" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Blockchain Networks
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Transaction distribution by network
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={blockchainTransactionsData.labels.map(
                      (label, index) => ({
                        name: label,
                        Transactions:
                          blockchainTransactionsData.datasets[0].data[index],
                      })
                    )}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="Transactions" fill="#10B981">
                      {blockchainTransactionsData.labels.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={
                            blockchainTransactionsData.datasets[0]
                              .backgroundColor[index]
                          }
                        />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">
                  Revenue & Expenses
                </CardTitle>
                <CardDescription className="text-gray-200">
                  Financial performance over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={revenueData.labels.map((label, index) => ({
                      name: label,
                      Revenue: revenueData.datasets[0].data[index],
                      Expenses: revenueData.datasets[1].data[index],
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Revenue"
                      stroke={revenueData.datasets[0].borderColor}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Expenses"
                      stroke={revenueData.datasets[1].borderColor}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="users" className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">User Types</CardTitle>
                <CardDescription className="text-gray-200">
                  Distribution of user roles
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={userTypeData.datasets[0].data.map(
                        (value, index) => ({
                          name: userTypeData.labels[index],
                          value,
                        })
                      )}
                      cx="50%"
                      cy="50%"
                      labelLine={true}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) =>
                        `${name}: ${(percent * 100).toFixed(0)}%`
                      }
                    >
                      {userTypeData.datasets[0].data.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={userTypeData.datasets[0].backgroundColor[index]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="bg-black/60 border-none">
              <CardHeader>
                <CardTitle className="text-gray-200">Active Users</CardTitle>
                <CardDescription className="text-gray-200">
                  Monthly active users
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart
                    data={herbRegistrationData.labels.map((label, index) => ({
                      name: label,
                      Ashwagandha: herbRegistrationData.datasets[0].data[index],
                      Tulsi: herbRegistrationData.datasets[1].data[index],
                      Brahmi: herbRegistrationData.datasets[2].data[index],
                    }))}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="Ashwagandha"
                      stroke={herbRegistrationData.datasets[0].borderColor}
                      activeDot={{ r: 8 }}
                    />
                    <Line
                      type="monotone"
                      dataKey="Tulsi"
                      stroke={herbRegistrationData.datasets[1].borderColor}
                    />
                    <Line
                      type="monotone"
                      dataKey="Brahmi"
                      stroke={herbRegistrationData.datasets[2].borderColor}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
