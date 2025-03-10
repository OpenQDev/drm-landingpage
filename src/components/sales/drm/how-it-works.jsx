"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import SolutionSpacer from "./solution/solution-spacer";
import SolutionSpacerBottom from "./solution/solution-spacer-bottom";

// Radar chart dependencies
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

import DashboardGrid from "./hiw-dashboard-grid";

// Sample chart data
const chartData = [
  { dependency: "react", users: 275, fill: "#FAF4FF" },
  { dependency: "supabase", users: 200, fill: "#F0EBFE" },
  { dependency: "tailwind", users: 187, fill: "#D2E7FF" },
  { dependency: "graphql", users: 173, fill: "#E5D4FF" }, // Light purple
  { dependency: "trpc", users: 155, fill: "#C7B7FF" }, // Medium purple
  { dependency: "prisma", users: 142, fill: "#B4C8FF" }, // Light blue
  { dependency: "eslint", users: 130, fill: "#A6D1FF" }, // Lighter blue
];

const chartConfig = {
  users: {
    label: "Usage points ",
  },
  react: {
    label: "React",
    color: "hsl(var(--chart-1))",
  },
  supabase: {
    label: "Supabase",
    color: "hsl(var(--chart-2))",
  },
  tailwind: {
    label: "Tailwind",
    color: "hsl(var(--chart-3))",
  },
  graphql: {
    label: "GraphQL",
    color: "hsl(var(--chart-4))",
  },
  trpc: {
    label: "tRPC",
    color: "hsl(var(--chart-5))",
  },
  prisma: {
    label: "Prisma",
    color: "hsl(var(--chart-6))",
  },
  eslint: {
    label: "Eslint",
    color: "hsl(var(--chart-7))",
  },
};

// A small subcomponent to render the radar chart
function DependenciesChart() {
  return (
    <div className="pb-10">
      <CardHeader>
        <CardTitle className="text-lg -mt-8">Dependency Usage</CardTitle>
        <CardDescription>Most used dependencies in projects</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            layout="vertical"
            margin={{
              left: 0,
            }}
            height={300}
            width={400}
            style={{ fontSize: "8px" }}
          >
            <YAxis
              dataKey="dependency"
              type="category"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => chartConfig[value]?.label}
            />
            <XAxis dataKey="users" type="number" hide />
            {/*  <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            /> */}
            <Bar dataKey="users" layout="vertical" radius={5} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 text-xs font-medium leading-none">
          Trending up by 7.9% this month for relevant dependencies{" "}
          <TrendingUp className="h-4 w-4 pb-1" />
        </div>
        <div className="leading-none text-muted-foreground">
          Based on repository analysis from the last 6 months
        </div>
      </CardFooter>
    </div>
  );
}

const HowItWorks = () => {
  return (
    <div className="flex flex-col justify-center text-left md:text-center top-content-padding -mt-10 px-content-padding">
      <div className="top-content-padding">
        <div className="text-3xl font-medium w-2/3 mx-auto text-center">
          Comprehensive developer fingerprinting.{" "}
          <span className="text-gray-400">
            We identify repositories using your dependency across a developer's
            contributions, creating a complete usage profile.
          </span>
        </div>

        <div className="flex justify-center mt-8">
          <Link target="_blank" href="https://drm.openq.dev">
            <button className="bg-black text-white py-2 px-4 rounded flex items-center justify-center responsive-button">
              Start for free
              <span className="ml-2">→</span>
            </button>
          </Link>
        </div>
      </div>

      {/* User Dashboard - horizontally aligned boxes */}
      <div className="mt-8">
        {/* span-1 */}
        <div className="relative">
          <div className="absolute inset-x-0 top-[-40px] bottom-[0px] border-x"></div>
          <div>
            <div className="relative border-y border-dashed [border-width:0.5px] border-gray-200 md:-mx-16"></div>
            <div className="pt-16"></div>
            <div className="relative border-y border-dashed [border-width:0.5px] border-gray-200 md:-mx-16"></div>
          </div>
        </div>
        <div className="border-x grid grid-cols-11 gap-4">
          <div className="col-span-2 relative">
            <div className="absolute inset-y-0 right-0 border-r h-full"></div>
            <div className="absolute -top-5 -bottom-5 right-0 border-r border-dashed"></div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                color: "rgba(128, 128, 128, 0.2)",
                zIndex: 0,
              }}
            />
          </div>
          <div className="col-span-7">
            <DashboardGrid />
          </div>
          <div className="col-span-2 relative">
            <div className="absolute inset-y-0 left-0 border-l h-full"></div>
            <div className="absolute -top-5 -bottom-5 left-0 border-l border-dashed"></div>
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(currentColor 1px, transparent 1px)",
                backgroundSize: "20px 20px",
                color: "rgba(128, 128, 128, 0.2)",
                zIndex: 0,
              }}
            />
          </div>
        </div>
        <div className="relative">
          <div className="absolute inset-x-0 top-[0px] bottom-[-40px] border-x"></div>
          <div>
            <div className="relative border-y border-dashed [border-width:0.5px] border-gray-200 md:-mx-16"></div>
            <div className="pt-16"></div>
            <div className="relative border-y border-dashed [border-width:0.5px] border-gray-200 md:-mx-16"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
