"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  LineChart,
  BarChart,
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
  AreaChart,
  Area,
} from "recharts";
import {
  MapPin,
  Leaf,
  TrendingUp,
  ShoppingBag,
  Truck,
  Factory,
  TestTube,
  Calendar,
  CheckCircle2,
  Flag,
  Clock,
  Globe,
  ThermometerSun,
  Droplets,
  Users,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Footer from "@/app/components/footer";
import { Arima } from "next/font/google";

import map1 from "../../assets/map1.png";
import Image from "next/image";
import Navbar from "@/app/components/navbar";

const arimaFont = Arima({
  subsets: ["latin"],
});

export default function ParticularDetail() {
  const params = useParams();
  const id = params?.id;
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProductData({
        id: id,
        name: "Ashwagandha Root Extract",
        scientificName: "Withania somnifera",
        description:
          "A powerful adaptogenic herb used in traditional Ayurvedic medicine to reduce stress, increase energy, and improve concentration.",
        status: "Delivered to market",
        plantationDate: "2024-03-15",
        harvestDate: "2024-09-02",
        certificationDate: "2024-09-10",
        processingDate: "2024-09-15",
        distributionDate: "2024-10-01",
        cultivationLocation: {
          name: "Uttarakhand Himalayan Valley",
          coordinates: { lat: 30.0668, lng: 79.0193 },
          altitude: "1850m above sea level",
          climate: "Temperate",
          rainfall: "120cm annual",
          soil: "Loamy, rich in organic matter",
          farmer: "Rajan Bisht",
        },
        environmentData: {
          temperature: [
            { month: "Mar", value: 23 },
            { month: "Apr", value: 25 },
            { month: "May", value: 28 },
            { month: "Jun", value: 32 },
            { month: "Jul", value: 30 },
            { month: "Aug", value: 29 },
            { month: "Sep", value: 27 },
          ],
          humidity: [
            { month: "Mar", value: 65 },
            { month: "Apr", value: 68 },
            { month: "May", value: 72 },
            { month: "Jun", value: 85 },
            { month: "Jul", value: 88 },
            { month: "Aug", value: 84 },
            { month: "Sep", value: 75 },
          ],
          rainfall: [
            { month: "Mar", value: 5 },
            { month: "Apr", value: 8 },
            { month: "May", value: 12 },
            { month: "Jun", value: 28 },
            { month: "Jul", value: 35 },
            { month: "Aug", value: 30 },
            { month: "Sep", value: 15 },
          ],
        },
        qualityTests: [
          {
            name: "Alkaloid Content",
            result: "Pass",
            value: "4.8%",
            benchmark: "4.5-5.5%",
          },
          {
            name: "Heavy Metals",
            result: "Pass",
            value: "Below detection limit",
            benchmark: "<0.5 ppm",
          },
          {
            name: "Pesticide Residue",
            result: "Pass",
            value: "None detected",
            benchmark: "None",
          },
          {
            name: "Microbial Analysis",
            result: "Pass",
            value: "Within limits",
            benchmark: "<1000 CFU/g",
          },
          {
            name: "Withanolide Content",
            result: "Pass",
            value: "5.2%",
            benchmark: "5.0-6.0%",
          },
        ],
        processingSteps: [
          {
            name: "Cleaning and Sorting",
            date: "2024-09-12",
            location: "Rishikesh Processing Center",
          },
          {
            name: "Drying",
            date: "2024-09-14",
            location: "Rishikesh Processing Center",
          },
          {
            name: "Extraction",
            date: "2024-09-16",
            location: "Dehradun Extraction Facility",
          },
          {
            name: "Filtration",
            date: "2024-09-18",
            location: "Dehradun Extraction Facility",
          },
          {
            name: "Concentration",
            date: "2024-09-20",
            location: "Dehradun Extraction Facility",
          },
          {
            name: "Quality Testing",
            date: "2024-09-22",
            location: "Central Testing Lab, Delhi",
          },
          {
            name: "Packaging",
            date: "2024-09-25",
            location: "Delhi Packaging Unit",
          },
        ],
        distribution: {
          manufacturingLocation: "Delhi Ayurvedic Processing Plant",
          packagingDate: "2024-09-25",
          batchSize: "500 kg",
          destinations: [
            {
              name: "New Delhi Wellness Center",
              quantity: "150 kg",
              date: "2024-10-02",
            },
            {
              name: "Mumbai Ayurveda Store",
              quantity: "120 kg",
              date: "2024-10-05",
            },
            {
              name: "Bangalore Herbal Market",
              quantity: "100 kg",
              date: "2024-10-08",
            },
            {
              name: "Chennai Traditional Medicine Shop",
              quantity: "80 kg",
              date: "2024-10-10",
            },
            {
              name: "Hyderabad Ayurvedic Clinic",
              quantity: "50 kg",
              date: "2024-10-12",
            },
          ],
          transportMethod: "Temperature-controlled vehicles",
          carbonFootprint: "Reduced by 35% through optimized routing",
        },
        certification: {
          organicCertified: true,
          gmpCompliant: true,
          fssaiRegistered: true,
          ayushApproved: true,
          sustainablySourced: true,
          certificates: [
            {
              name: "Organic Certification",
              issuedBy: "India Organic",
              date: "2024-09-05",
            },
            {
              name: "GMP Compliance",
              issuedBy: "Quality Council of India",
              date: "2024-09-08",
            },
            {
              name: "FSSAI Registration",
              issuedBy: "Food Safety Standards Authority of India",
              date: "2024-09-07",
            },
            {
              name: "AYUSH Premium Mark",
              issuedBy: "Ministry of AYUSH",
              date: "2024-09-12",
            },
            {
              name: "Sustainable Sourcing",
              issuedBy: "Green Practices Council",
              date: "2024-09-06",
            },
          ],
        },
        blockchainEntries: [
          {
            timestamp: "2024-03-15 08:45",
            action: "Plantation Recorded",
            actor: "Farmer: Rajan Bisht",
            hash: "0x7ae...",
          },
          {
            timestamp: "2024-09-02 14:30",
            action: "Harvest Completed",
            actor: "Farmer: Rajan Bisht",
            hash: "0x8bf...",
          },
          {
            timestamp: "2024-09-10 11:20",
            action: "Batch Certified",
            actor: "Inspector: Anita Sharma",
            hash: "0x9cf...",
          },
          {
            timestamp: "2024-09-15 09:15",
            action: "Processing Started",
            actor: "Processor: Himalaya Herbals",
            hash: "0xadf...",
          },
          {
            timestamp: "2024-09-25 16:40",
            action: "Packaging Completed",
            actor: "Facility: Delhi Unit",
            hash: "0xbef...",
          },
          {
            timestamp: "2024-10-01 10:25",
            action: "Distribution Initiated",
            actor: "Logistics: EcoTrans",
            hash: "0xcff...",
          },
          {
            timestamp: "2024-10-12 15:10",
            action: "Final Delivery",
            actor: "Retailer: Hyderabad Ayurvedic Clinic",
            hash: "0xdef...",
          },
        ],
      });
      setLoading(false);
    }, 2000);
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500 mb-4"></div>
          <p className="text-gray-300 text-lg">
            Loading product lifecycle data...
          </p>
        </div>
      </div>
    );
  }

  const distributionData = productData.distribution.destinations.map(
    (dest) => ({
      name: dest.name,
      value: parseInt(dest.quantity),
    })
  );

  const COLORS = ["#10B981", "#047857", "#34D399", "#6EE7B7", "#A7F3D0"];

  const qualityTestData = productData.qualityTests.map((test) => ({
    name: test.name,
    actual: parseFloat(test.value.replace(/[^\d.-]/g, "")),
    benchmark: parseFloat(test.benchmark.replace(/[^\d.-]/g, "")),
  }));

  return (
    <div className="bg-black">
      <Navbar />
      <div className="min-h-screen bg-black py-24 px-48">
        <header className="mb-8">
          <div className="flex items-center mb-4">
            {/* <Leaf className="h-8 w-8 text-green-500 mr-3" />
            <h1 className="text-3xl font-bold text-green-500">
              Ayurvedic Product Lifecycle
            </h1> */}

            <div className="flex justify-center items-center w-full gap-8 mb-24 relative">
              <div className="h-0.5 w-1/6 bg-gradient-to-r from-transparent to-green-400 opacity-70"></div>
              <h1
                className={`${arimaFont.className} text-6xl md:text-7xl font-bold text-transparent bg-clip-text relative text-center`}
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #4ade80, #10b981, #047857)",
                  textShadow: "0 0 30px rgba(16, 185, 129, 0.3)",
                }}
              >
                Product Lifecycle
              </h1>
              <div className="h-0.5 w-1/6 bg-gradient-to-l from-transparent to-green-400 opacity-70"></div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <h2 className="text-2xl font-semibold text-gray-300">
              {productData.name}
            </h2>
            <Badge className="bg-green-700 text-white font-medium">
              ID: {productData.id}
            </Badge>
            <Badge className="bg-green-900/70 text-green-300">
              {productData.status}
            </Badge>
          </div>

          <p className="text-green-300/80 italic mb-1">
            Scientific Name: {productData.scientificName}
          </p>
          <p className="text-gray-300 max-w-3xl">{productData.description}</p>
        </header>

        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="border border-green-900 mb-6">
            <TabsTrigger
              value="overview"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              value="cultivation"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Cultivation
            </TabsTrigger>
            <TabsTrigger
              value="processing"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Processing & Quality
            </TabsTrigger>
            <TabsTrigger
              value="distribution"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Distribution
            </TabsTrigger>
            <TabsTrigger
              value="certification"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Certification
            </TabsTrigger>
            <TabsTrigger
              value="blockchain"
              className="data-[state=active]:bg-green-900 data-[state=active]:text-white"
            >
              Blockchain Ledger
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500">
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Product Lifecycle Timeline
                  </div>
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Major milestones from plantation to market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2">
                  <div className="relative col-span-1">
                    <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-green-900/50"></div>

                    <div className="space-y-8 relative">
                      <TimelineEvent
                        icon={<Leaf className="h-5 w-5" />}
                        date={productData.plantationDate}
                        title="Plantation"
                        description={`Planted in ${productData.cultivationLocation.name}`}
                      />

                      <TimelineEvent
                        icon={<TrendingUp className="h-5 w-5" />}
                        date={productData.harvestDate}
                        title="Harvest"
                        description="Harvested at optimal maturity"
                      />

                      <TimelineEvent
                        icon={<CheckCircle2 className="h-5 w-5" />}
                        date={productData.certificationDate}
                        title="Certification"
                        description="Quality certification and testing"
                      />

                      <TimelineEvent
                        icon={<Factory className="h-5 w-5" />}
                        date={productData.processingDate}
                        title="Processing"
                        description="Extraction and formulation"
                      />

                      <TimelineEvent
                        icon={<Truck className="h-5 w-5" />}
                        date={productData.distributionDate}
                        title="Distribution"
                        description="Shipped to vendors and retailers"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-center">
                    <Image
                      src={map1}
                      alt="Map of product journey"
                      className="rounded-lg shadow-lg max-w-full h-auto"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="bg-neutral-800/60 border-none transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-400 flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Origin
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-white mb-1">
                    {productData.cultivationLocation.name}
                  </div>
                  <p className="text-xs text-green-300">
                    {productData.cultivationLocation.altitude}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800/60 border-none transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-400 flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    Growth Period
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-white mb-1">
                    171 Days
                  </div>
                  <p className="text-xs text-green-300">
                    From plantation to harvest
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800/60 border-none transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-400 flex items-center">
                    <TestTube className="h-4 w-4 mr-2" />
                    Quality Score
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-white mb-1">98.5%</div>
                  <p className="text-xs text-green-300">
                    Premium grade certified
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-neutral-800/60 border-none transition-colors">
                <CardHeader className="pb-2">
                  <CardTitle className="text-sm font-medium text-green-400 flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    Carbon Footprint
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-lg font-bold text-white mb-1">-35%</div>
                  <p className="text-xs text-green-300">
                    Below industry average
                  </p>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  Blockchain Verification
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Immutable record of product journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row items-center justify-between p-4 border border-green-900/50 rounded-lg bg-green-950/30">
                  <div className="flex items-center mb-4 sm:mb-0">
                    <div className="bg-green-900/50 p-3 rounded-lg mr-4">
                      <CheckCircle2 className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium">
                        Authenticity Verified
                      </h3>
                      <p className="text-green-300/80 text-sm">
                        Product history is verified on blockchain
                      </p>
                    </div>
                  </div>
                  <div>
                    <Badge className="bg-green-900/80 text-green-300 px-3 py-1 text-xs">
                      <span className="font-mono">
                        {
                          productData.blockchainEntries[
                            productData.blockchainEntries.length - 1
                          ].hash
                        }
                      </span>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cultivation" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Cultivation Details
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Where and how this herb was grown
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="aspect-video bg-green-950/30 rounded-lg flex items-center justify-center mb-4 border border-green-900/50">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-green-500 mx-auto mb-2" />
                        <h3 className="text-white font-medium">
                          {productData.cultivationLocation.name}
                        </h3>
                        <p className="text-green-300/80">
                          {productData.cultivationLocation.coordinates.lat},{" "}
                          {productData.cultivationLocation.coordinates.lng}
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-950/30 p-3 rounded-lg border border-green-900/50">
                        <p className="text-green-400 text-sm mb-1">Altitude</p>
                        <p className="text-gray-300">
                          {productData.cultivationLocation.altitude}
                        </p>
                      </div>
                      <div className="bg-green-950/30 p-3 rounded-lg border border-green-900/50">
                        <p className="text-green-400 text-sm mb-1">Climate</p>
                        <p className="text-gray-300">
                          {productData.cultivationLocation.climate}
                        </p>
                      </div>
                      <div className="bg-green-950/30 p-3 rounded-lg border border-green-900/50">
                        <p className="text-green-400 text-sm mb-1">Rainfall</p>
                        <p className="text-gray-300">
                          {productData.cultivationLocation.rainfall}
                        </p>
                      </div>
                      <div className="bg-green-950/30 p-3 rounded-lg border border-green-900/50">
                        <p className="text-green-400 text-sm mb-1">Soil Type</p>
                        <p className="text-gray-300">
                          {productData.cultivationLocation.soil}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="bg-green-950/30 p-4 rounded-lg border border-green-900/50 mb-4">
                      <div className="flex items-center mb-3">
                        <Users className="h-5 w-5 text-green-500 mr-2" />
                        <h3 className="text-white font-medium">
                          Cultivated By
                        </h3>
                      </div>
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 rounded-full bg-green-800 flex items-center justify-center text-white font-bold mr-3">
                          {productData.cultivationLocation.farmer
                            .split(" ")
                            .map((name) => name[0])
                            .join("")}
                        </div>
                        <div>
                          <p className="text-gray-300 font-medium">
                            {productData.cultivationLocation.farmer}
                          </p>
                          <p className="text-green-300/80 text-sm">
                            Local farmer, 15+ years experience
                          </p>
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-300 text-sm border-t border-green-900/50 pt-3">
                          Using traditional farming methods combined with
                          sustainable practices to ensure highest quality herbs
                          while preserving the ecosystem.
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 border border-green-900/50 rounded-lg bg-green-950/30">
                      <div className="flex items-center">
                        <Leaf className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-300">Plantation Date</span>
                      </div>
                      <span className="text-white font-medium">
                        {formatDate(productData.plantationDate)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 mt-2 border border-green-900/50 rounded-lg bg-green-950/30">
                      <div className="flex items-center">
                        <TrendingUp className="h-5 w-5 text-green-500 mr-2" />
                        <span className="text-gray-300">Harvest Date</span>
                      </div>
                      <span className="text-white font-medium">
                        {formatDate(productData.harvestDate)}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <ThermometerSun className="h-5 w-5 mr-2" />
                  Environmental Conditions
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Growth conditions during cultivation period
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                    <div className="flex items-center mb-3">
                      <ThermometerSun className="h-4 w-4 text-green-500 mr-2" />
                      <h3 className="text-white font-medium">
                        Temperature (°C)
                      </h3>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={productData.environmentData.temperature}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A2F" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#064E3B",
                            borderColor: "#059669",
                            color: "#D1FAE5",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#10B981"
                          fill="#065F46"
                          fillOpacity={0.8}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                    <div className="flex items-center mb-3">
                      <Droplets className="h-4 w-4 text-green-500 mr-2" />
                      <h3 className="text-white font-medium">Humidity (%)</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={productData.environmentData.humidity}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A2F" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#064E3B",
                            borderColor: "#059669",
                            color: "#D1FAE5",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#0EA5E9"
                          fill="#0C4A6E"
                          fillOpacity={0.8}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>

                  <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                    <div className="flex items-center mb-3">
                      <Droplets className="h-4 w-4 text-green-500 mr-2" />
                      <h3 className="text-white font-medium">Rainfall (cm)</h3>
                    </div>
                    <ResponsiveContainer width="100%" height={200}>
                      <AreaChart data={productData.environmentData.rainfall}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#1E3A2F" />
                        <XAxis dataKey="month" stroke="#9CA3AF" />
                        <YAxis stroke="#9CA3AF" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#064E3B",
                            borderColor: "#059669",
                            color: "#D1FAE5",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="value"
                          stroke="#6366F1"
                          fill="#4338CA"
                          fillOpacity={0.8}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="processing" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <Factory className="h-5 w-5 mr-2" />
                  Processing Journey
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  From raw herb to final product
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-7 gap-4">
                  {productData.processingSteps.map((step, index) => (
                    <div
                      key={index}
                      className="relative border border-green-900/50 rounded-lg p-4 bg-green-950/20 flex flex-col"
                    >
                      <div className="flex-1">
                        <span className="bg-green-900/80 text-green-300 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center mb-3">
                          {index + 1}
                        </span>
                        <h3 className="text-white font-medium mb-1">
                          {step.name}
                        </h3>
                        <p className="text-green-300/80 text-sm mb-3">
                          {formatDate(step.date)}
                        </p>
                        <p className="text-gray-300 text-xs">{step.location}</p>
                      </div>

                      {index < productData.processingSteps.length - 1 && (
                        <div className="hidden lg:block absolute -right-8 top-1/2 transform -translate-y-1/2 text-green-500">
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <TestTube className="h-5 w-5 mr-2" />
                  Quality Testing Results
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Comprehensive quality analysis
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mb-6">
                  {productData.qualityTests.map((test, index) => (
                    <div
                      key={index}
                      className="border border-green-900/50 rounded-lg p-4 bg-green-950/20"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-white font-medium text-sm">
                          {test.name}
                        </h3>
                        <Badge
                          className={`${
                            test.result === "Pass"
                              ? "bg-green-900/80 text-green-300"
                              : "bg-red-900/80 text-red-300"
                          }`}
                        >
                          {test.result}
                        </Badge>
                      </div>
                      <div className="mb-2">
                        <p className="text-gray-300 text-xs">
                          Value:{" "}
                          <span className="text-white">{test.value}</span>
                        </p>
                        <p className="text-gray-300 text-xs">
                          Benchmark:{" "}
                          <span className="text-green-300">
                            {test.benchmark}
                          </span>
                        </p>
                      </div>

                      <div className="h-2 bg-green-950 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-green-500 rounded-full"
                          style={{ width: "100%" }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <h3 className="text-white font-medium">
                      Quality Assurance Summary
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    This batch of Ashwagandha Root Extract has passed all
                    quality tests with excellent results. The withanolide
                    content of 5.2% exceeds the minimum requirement, indicating
                    high potency. No contaminants, heavy metals, or pesticide
                    residues were detected, confirming the product's purity and
                    safety for consumption.
                  </p>
                  <div className="flex items-center">
                    <AlertCircle className="h-4 w-4 text-green-500 mr-2" />
                    <p className="text-green-300/80 text-sm italic">
                      Testing conducted at Central Testing Lab, Delhi on
                      September 22, 2024
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="distribution" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <Truck className="h-5 w-5 mr-2" />
                  Distribution Overview
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  From processing facility to market
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20 mb-4">
                      <div className="flex items-center mb-3">
                        <Factory className="h-4 w-4 text-green-500 mr-2" />
                        <h3 className="text-white font-medium">
                          Manufacturing Facility
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-1">
                        {productData.distribution.manufacturingLocation}
                      </p>
                      <p className="text-green-300/80 text-sm">
                        Packaging Date:{" "}
                        {formatDate(productData.distribution.packagingDate)}
                      </p>
                      <p className="text-green-300/80 text-sm">
                        Batch Size: {productData.distribution.batchSize}
                      </p>
                    </div>

                    <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                      <div className="flex items-center mb-3">
                        <Truck className="h-4 w-4 text-green-500 mr-2" />
                        <h3 className="text-white font-medium">
                          Transport Details
                        </h3>
                      </div>
                      <p className="text-gray-300 mb-3">
                        {productData.distribution.transportMethod}
                      </p>
                      <div className="flex items-center">
                        <Globe className="h-4 w-4 text-green-500 mr-2" />
                        <p className="text-green-300/80 text-sm">
                          Carbon Footprint:{" "}
                          {productData.distribution.carbonFootprint}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-green-900/50 rounded-lg p-4 bg-green-950/20">
                    <div className="flex items-center mb-4">
                      <ShoppingBag className="h-4 w-4 text-green-500 mr-2" />
                      <h3 className="text-white font-medium">
                        Distribution by Destination
                      </h3>
                    </div>

                    <ResponsiveContainer width="100%" height={250}>
                      <PieChart>
                        <Pie
                          data={distributionData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          nameKey="name"
                          label={({ name, percent }) =>
                            `${name.split(" ")[0]}: ${(percent * 100).toFixed(
                              0
                            )}%`
                          }
                        >
                          {distributionData.map((entry, index) => (
                            <Cell
                              key={`cell-${index}`}
                              fill={COLORS[index % COLORS.length]}
                            />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value} kg`} />
                        <Legend />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Destination Details
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Where the product was distributed
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="border-b border-green-900/50">
                        <th className="py-2 px-4 text-left text-green-400 font-medium">
                          Destination
                        </th>
                        <th className="py-2 px-4 text-left text-green-400 font-medium">
                          Quantity
                        </th>
                        <th className="py-2 px-4 text-left text-green-400 font-medium">
                          Delivery Date
                        </th>
                        <th className="py-2 px-4 text-left text-green-400 font-medium">
                          Status
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {productData.distribution.destinations.map(
                        (dest, index) => (
                          <tr
                            key={index}
                            className="border-b border-green-900/30"
                          >
                            <td className="py-3 px-4 text-gray-300">
                              {dest.name}
                            </td>
                            <td className="py-3 px-4 text-gray-300">
                              {dest.quantity}
                            </td>
                            <td className="py-3 px-4 text-gray-300">
                              {formatDate(dest.date)}
                            </td>
                            <td className="py-3 px-4">
                              <Badge className="bg-green-900/50 text-green-300">
                                Delivered
                              </Badge>
                            </td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="certification" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  <CheckCircle2 className="h-5 w-5 mr-2" />
                  Product Certifications
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Quality and compliance certifications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  <div
                    className={`border ${
                      productData.certification.organicCertified
                        ? "border-green-500"
                        : "border-gray-700"
                    } rounded-lg p-4 bg-green-950/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">
                        Organic Certified
                      </h3>
                      <div
                        className={`h-4 w-4 rounded-full ${
                          productData.certification.organicCertified
                            ? "bg-green-500"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Grown without synthetic pesticides or fertilizers
                    </p>
                  </div>

                  <div
                    className={`border ${
                      productData.certification.gmpCompliant
                        ? "border-green-500"
                        : "border-gray-700"
                    } rounded-lg p-4 bg-green-950/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">GMP Compliant</h3>
                      <div
                        className={`h-4 w-4 rounded-full ${
                          productData.certification.gmpCompliant
                            ? "bg-green-500"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Follows Good Manufacturing Practices
                    </p>
                  </div>

                  <div
                    className={`border ${
                      productData.certification.fssaiRegistered
                        ? "border-green-500"
                        : "border-gray-700"
                    } rounded-lg p-4 bg-green-950/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">
                        FSSAI Registered
                      </h3>
                      <div
                        className={`h-4 w-4 rounded-full ${
                          productData.certification.fssaiRegistered
                            ? "bg-green-500"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Complies with food safety standards
                    </p>
                  </div>

                  <div
                    className={`border ${
                      productData.certification.ayushApproved
                        ? "border-green-500"
                        : "border-gray-700"
                    } rounded-lg p-4 bg-green-950/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">AYUSH Approved</h3>
                      <div
                        className={`h-4 w-4 rounded-full ${
                          productData.certification.ayushApproved
                            ? "bg-green-500"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Approved by Ministry of AYUSH
                    </p>
                  </div>

                  <div
                    className={`border ${
                      productData.certification.sustainablySourced
                        ? "border-green-500"
                        : "border-gray-700"
                    } rounded-lg p-4 bg-green-950/20`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-white font-medium">
                        Sustainably Sourced
                      </h3>
                      <div
                        className={`h-4 w-4 rounded-full ${
                          productData.certification.sustainablySourced
                            ? "bg-green-500"
                            : "bg-gray-700"
                        }`}
                      ></div>
                    </div>
                    <p className="text-gray-300 text-sm">
                      Environmentally responsible practices
                    </p>
                  </div>
                </div>

                <div className="border border-green-900/50 rounded-lg bg-green-950/20">
                  <div className="p-4 border-b border-green-900/50">
                    <h3 className="text-white font-medium mb-1">
                      Certificate Details
                    </h3>
                    <p className="text-green-300/80 text-sm">
                      Issued documents verifying product quality and compliance
                    </p>
                  </div>
                  <div className="divide-y divide-green-900/30">
                    {productData.certification.certificates.map(
                      (cert, index) => (
                        <div
                          key={index}
                          className="p-4 flex items-center justify-between"
                        >
                          <div>
                            <h4 className="text-gray-300 font-medium">
                              {cert.name}
                            </h4>
                            <p className="text-green-300/80 text-sm">
                              Issued by: {cert.issuedBy}
                            </p>
                          </div>
                          <div className="flex items-center">
                            <span className="text-gray-300 mr-3">
                              {formatDate(cert.date)}
                            </span>
                            <Badge className="bg-green-900/50 text-green-300">
                              Verified
                            </Badge>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="blockchain" className="space-y-6">
            <Card className="bg-neutral-800/60 border-none">
              <CardHeader>
                <CardTitle className="text-green-500 flex items-center">
                  Blockchain Ledger
                </CardTitle>
                <CardDescription className="text-green-300/70">
                  Immutable record of product journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border border-green-900/50 rounded-lg bg-green-950/20 overflow-hidden">
                  <div className="p-4 border-b border-green-900/50 bg-black">
                    <div className="flex items-center">
                      <h3 className="text-white font-medium">
                        Transaction History
                      </h3>
                    </div>
                  </div>

                  <div className="overflow-auto max-h-96">
                    {productData.blockchainEntries.map((entry, index) => (
                      <div
                        key={index}
                        className={`p-4 border-b border-green-900/30 ${
                          index === productData.blockchainEntries.length - 1
                            ? "border-b-0"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                          <div className="flex items-center mb-2 md:mb-0">
                            <div className="h-8 w-8 rounded-full bg-green-900/80 flex items-center justify-center mr-3">
                              <span className="text-green-300 text-xs font-medium">
                                {index + 1}
                              </span>
                            </div>
                            <div>
                              <h4 className="text-white font-medium">
                                {entry.action}
                              </h4>
                              <p className="text-green-300/80 text-xs">
                                {entry.timestamp}
                              </p>
                            </div>
                          </div>
                          <Badge className="bg-green-900/50 text-green-300 self-start md:self-auto">
                            <span className="font-mono">{entry.hash}</span>
                          </Badge>
                        </div>
                        <div className="ml-11 text-gray-300">
                          <p>{entry.actor}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 p-4 border border-green-900/50 rounded-lg bg-green-950/20">
                  <div className="flex items-center mb-3">
                    <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
                    <h3 className="text-white font-medium">
                      Blockchain Verification
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-4">
                    This product's entire journey from plantation to market has
                    been recorded on a decentralized blockchain ledger, ensuring
                    complete transparency and traceability. Each transaction is
                    cryptographically secured and cannot be altered, providing
                    an immutable record of the product's authenticity.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <p className="text-green-300/80 text-sm">
                        Ethereum Blockchain
                      </p>
                    </div>
                    <Badge className="bg-green-900/80 text-green-300">
                      <div className="flex items-center">
                        <div className="h-2 w-2 rounded-full bg-green-400 mr-1.5"></div>
                        <span>Verified</span>
                      </div>
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
      <Footer />
    </div>
  );
}

function TimelineEvent({ icon, date, title, description }) {
  return (
    <div className="flex items-start ml-0.5">
      <div className="flex-shrink-0 -ml-0.5 mr-3 mt-1">
        <div className="h-12 w-12 rounded-full bg-green-900/50 border-2 border-green-500 flex items-center justify-center text-green-400">
          {icon}
        </div>
      </div>
      <div>
        <span className="block text-green-300 text-sm mb-1">
          {formatDate(date)}
        </span>
        <h3 className="text-white font-medium mb-1">{title}</h3>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
}

function formatDate(dateString) {
  const options = { year: "numeric", month: "short", day: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
