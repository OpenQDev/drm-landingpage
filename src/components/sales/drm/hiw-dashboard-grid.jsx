import React from "react";
import Image from "next/legacy/image";
import { TrendingUp } from "lucide-react";
import {
  ResponsiveContainer,
  Bar,
  BarChart,
  XAxis,
  YAxis,
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartContainer } from "@/components/ui/chart";
import SideInfo from "./product-showcase/side-info";

// Sample chart data
const chartData = [
  { dependency: "react", users: 275, visitors: 980, fill: "#FAF4FF" },
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
  react: { label: "React", color: "hsl(var(--chart-2) / 0.3)" },
  tailwind: { label: "Vuejs", color: "hsl(var(--chart-3) / 0.3)" },
  graphql: { label: "Docker", color: "hsl(var(--chart-4) / 0.3)" },
  trpc: { label: "tRPC", color: "hsl(var(--chart-7) / 0.3)" },
  prisma: { label: "Prisma", color: "hsl(var(--chart-6) / 0.3)" },
  eslint: { label: "Eslint", color: "hsl(var(--chart-7) / 0.3)" },
};

function DependenciesChart() {
  // Calculate total height based on number of items (20px per item)
  const chartHeight = chartData.length * 20; // 20px per bar including spacing

  return (
    <div className="pt-2 -mb-5">
      <CardHeader>
        <CardTitle className="text-lg -mt-8">Dependency Usage</CardTitle>
        <CardDescription>Most used dependencies in projects</CardDescription>
      </CardHeader>
      <CardContent className="relative">
        <ResponsiveContainer width="100%" height={chartHeight}>
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ left: 0, top: 0, bottom: 0, right: 0 }}
            style={{ fontSize: "8px" }}
            barSize={10}
            compact={true}
          >
            <XAxis type="number" hide />
            <YAxis
              dataKey="dependency"
              type="category"
              tickLine={false}
              axisLine={false}
              minTickGap={-10}
              interval={0}
              tick={(props) => {
                const { x, y, payload } = props;
                return (
                  <g>
                    <text
                      x={x - 10}
                      y={y}
                      dy={3}
                      textAnchor="end"
                      fill="black"
                      fontSize={11}
                      fontWeight={500}
                    >
                      {chartConfig[payload.value]?.label || payload.value}
                    </text>
                  </g>
                );
              }}
            />
            <Bar
              dataKey="users"
              layout="vertical"
              radius={3}
              fill={(entry) =>
                chartConfig[entry.dependency]?.color || "#000000"
              }
            />
          </BarChart>
        </ResponsiveContainer>
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
          <ResponsiveContainer width="100%" height="100%">
            <RadialBarChart
              data={chartDataTwo}
              startAngle={0}
              endAngle={250}
              innerRadius="70%"
              outerRadius="100%"
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
                    } else {
                      return null;
                    }
                  }}
                />
              </PolarRadiusAxis>
            </RadialBarChart>
          </ResponsiveContainer>
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-5">
        <div className="flex flex-col md:border-r -my-5">
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
            <div className="border-b lg:-ml-5">
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
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.237 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
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
          <div className="pt-2">
            <div className="text-lg text-left pb-2 font-semibold flex items-center gap-2">
              <div className="w-[1rem] text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
                  />
                </svg>
              </div>
              Activity
              <div className="w-[0.7rem] text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="border rounded-md border-gray-100 pr-5">
              <SideInfo
                mainText="Installed dependencies at Q1 Hackathon - Listed as participant"
                subTextIcon="pd"
              />
              <SideInfo
                mainText="Used OpenQ template with 80% active usage in first quarter"
                subTextIcon="up"
              />
              <SideInfo
                mainText="Subscribed to paid tier and shared review on X"
                subTextIcon="ca"
              />
              <SideInfo
                mainText="Tested competitor tool and discussed issues in GitHub"
                subTextIcon="crit"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col md:col-span-2 lg:col-span-1">
          <div className="border rounded-md p-4 border-gray-100">
            <DependenciesChart />
          </div>
          <div className="pt-2">
            <div className="text-lg text-left pb-2 font-semibold flex items-center gap-2">
              <div className="w-5 text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                  />
                </svg>
              </div>
              Summary
              <div className="w-[0.7rem] text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                  />
                </svg>
              </div>
            </div>
            <div className="border rounded-md border-gray-100">
              <p className="text-xs p-3 leading-relaxed text-left">
                In the past month, Andrew has made significant contributions to
                infrastructure automation with 47 commits. He's been active in
                implementing Terraform modules and optimizing CI/CD pipelines{" "}
                <span className="text-blue-500 cursor-pointer">more</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardGrid;
