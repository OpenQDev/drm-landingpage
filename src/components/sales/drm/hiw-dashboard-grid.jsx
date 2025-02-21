import React from "react";
import Image from "next/image";
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
import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";

// Sample chart data
const chartData = [
  { dependency: "react", users: 275, visitors: 980, fill: "#FAF4FF" },
  { dependency: "supabase", users: 200, visitors: 980, fill: "#F0EBFE" },
  { dependency: "tailwind", users: 187, visitors: 875, fill: "#D2E7FF" },
  { dependency: "graphql", users: 173, visitors: 760, fill: "#E5D4FF" },
  { dependency: "trpc", users: 155, visitors: 650, fill: "#C7B7FF" },
  { dependency: "prisma", users: 142, visitors: 540, fill: "#B4C8FF" },
  { dependency: "eslint", users: 130, visitors: 425, fill: "#A6D1FF" },
];

const chartDataTwo = [
  { dependency: "activity", users: 275, visitors: 90, fill: "#FAF4FF" },
  { dependency: "full", users: 200, visitors: 980, fill: "#F0EBFE" },
];

const chartConfig = {
  users: { label: "Usage points " },
  react: { label: "React", color: "hsl(var(--chart-1))" },
  supabase: { label: "Supabase", color: "hsl(var(--chart-2))" },
  tailwind: { label: "Tailwind", color: "hsl(var(--chart-3))" },
  graphql: { label: "GraphQL", color: "hsl(var(--chart-4))" },
  trpc: { label: "tRPC", color: "hsl(var(--chart-5))" },
  prisma: { label: "Prisma", color: "hsl(var(--chart-6))" },
  eslint: { label: "Eslint", color: "hsl(var(--chart-7))" },
};

function DependenciesChart() {
  return (
    <div className="pb-10 pt-2  ">
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
            margin={{ left: 0 }}
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
            <Bar
              dataKey="users"
              layout="vertical"
              radius={5}
              fill={(entry) =>
                chartConfig[entry.dependency]?.color || "#000000"
              }
            />
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

function RadialVisitorsChart() {
  return (
    <div className="pr-5">
      <CardHeader className="items-center pb-0">
        <CardTitle>Average Activity</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <RadialBarChart
            data={chartDataTwo}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType="circle"
              radialLines={false}
              stroke="none"
              className="first:fill-muted last:fill-background"
              polarRadius={[86, 74]}
            />
            <RadialBar dataKey="visitors" background cornerRadius={10} />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor="middle"
                        dominantBaseline="middle"
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className="fill-foreground text-4xl font-bold"
                        >
                          {chartDataTwo[0].visitors.toLocaleString()}%
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
          Trending up by 6.8% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total GitHub activity in the last 6 months
        </div>
      </CardFooter>
    </div>
  );
}

const DashboardGrid = () => {
  return (
    <div className="bg-white -mx-4">
      <div className="grid grid-cols-3 gap-4 p-5">
        <div className="flex flex-col border-r -my-5">
          <div className="mt-5">
            <Image
              src="/landingpage/drm/devrel/icons/andrew.jpg"
              alt="Profile Image"
              width={45}
              height={45}
              className="rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold text-left mt-2 mb-5">
              Andrew O'Brien
            </h3>
            <h3 className="text-lg text-left -mt-5 text-sm mb-3">
              Software Engineer Wolfram
            </h3>
            <div className="border-b -ml-5">
              <div className="flex flex-row justify-between pr-5 pl-5 items-center">
                <div className="flex flex-row space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mb-2"
                    fill="currentColor"
                  >
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mb-2"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="mb-2"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
                <div className="mb-3">
                  <div className="border border-gray-100 rounded-md p-1 px-2 text-sm shadow-sm hover:shadow-md transition-shadow">
                    Add note
                  </div>
                </div>
              </div>
            </div>
            <div>
              <RadialVisitorsChart />
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="border rounded-md p-4 border-gray-100">
            <div className="-mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Developer Mentions</CardTitle>
                <CardDescription>
                  Recently analyzed in the following lists
                </CardDescription>
              </CardHeader>
              <div className="flex flex-col gap-0.5 relative">
                {[
                  "Hackathon Denver",
                  "Community overview",
                  "Meetup Berlin",
                  "Outbound",
                ].map((item, index, array) => (
                  <div
                    key={item}
                    className="flex items-center justify-between py-1 px-1.5 border rounded-lg shadow-sm hover:shadow-md transition-all"
                    style={{
                      width: `calc(100% - ${index * 12}px)`,
                      zIndex: 4 - index,
                    }}
                  >
                    <div className="flex items-center gap-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-2.5 h-2.5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                        />
                      </svg>
                      <span className="text-[0.65rem] font-medium truncate">
                        {item}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-[0.65rem] h-[0.65rem] text-gray-500 flex-shrink-0"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m19.5 8.25-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border rounded-md p-4 border-gray-100">
          <DependenciesChart />
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
