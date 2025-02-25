"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  ResponsiveContainer,
} from "recharts";
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

const DeveloperReportingSection = () => {
  const chartData = [
    { month: "January", desktop: 500, mobile: 80 },
    { month: "February", desktop: 705, mobile: 200 },
    { month: "March", desktop: 337, mobile: 120 },
    { month: "April", desktop: 473, mobile: 190 },
    { month: "May", desktop: 409, mobile: 130 },
    { month: "June", desktop: 514, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Devs",
      color: "#F1E4FF",
    },
    mobile: {
      label: "Commits",
      color: "#D7DAFE",
    },
  };

  return (
    <div className="border-x grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
      <div className="col-span-1 px-6 md:px-10 pt-6 md:pt-10 pb-20 md:pb-96 border-t md:border-t-0 md:border-r min-h-[300px] md:min-h-[600px] relative">
        {/* <div className="text-gray-800 w-6 h-6 ml-auto transition-all hover:scale-110 hover:text-black">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.25 3.75h6m0 0v6m0-6-8.5 8.5"
            ></path>
          </svg>
        </div> */}
        <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10">
          <div className="font-custom font-[575] text-xl md:text-2xl text-bold text-gray-900">
            Developer reporting
          </div>
          <div className="mt-3 md:mt-4 text-sm md:text-base text-gray-500">
            Generate comprehensive reports and insights about your developer
            community. Track engagement metrics, identify trends, and measure
            the success of your developer relations initiatives.
          </div>
        </div>
      </div>
      <div className="col-span-1 md:col-span-2 min-h-[400px] md:min-h-[600px] pl-5 lg:pl-0">
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-full h-full grid grid-cols-1 md:grid-cols-4">
            <div className="col-span-1 md:col-span-3 p-4 md:p-6 flex items-center justify-center relative">
              <div className="w-full">
                <CardHeader>
                  <CardTitle>Developer Activity</CardTitle>
                  <CardDescription>
                    Platform usage trends over the last 6 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ChartContainer config={chartConfig}>
                    <ResponsiveContainer>
                      <AreaChart
                        data={chartData}
                        margin={{
                          left: 12,
                          right: 12,
                        }}
                      >
                        <CartesianGrid vertical={false} />
                        <XAxis
                          dataKey="month"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          tickFormatter={(value) => value.slice(0, 3)}
                        />
                        <YAxis
                          yAxisId="left"
                          orientation="left"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          domain={[0, 400]}
                          ticks={[0, 200, 400, 600, 800]}
                        />
                        <YAxis
                          yAxisId="right"
                          orientation="right"
                          tickLine={false}
                          axisLine={false}
                          tickMargin={8}
                          domain={[0, 400]}
                          ticks={[0, 200, 400, 600, 800]}
                        />
                        <ChartTooltip
                          cursor={false}
                          content={<ChartTooltipContent indicator="dot" />}
                        />
                        <Area
                          name="Devs"
                          dataKey="mobile"
                          yAxisId="left"
                          type="natural"
                          fill="#D7DAFE"
                          fillOpacity={0.4}
                          stroke="#D7DAFE"
                          stackId="a"
                          animationDuration={2000}
                          animationBegin={0}
                          animationEasing="ease-out"
                        />
                        <Area
                          name="Commits"
                          dataKey="desktop"
                          yAxisId="right"
                          type="natural"
                          fill="#F1E4FF"
                          fillOpacity={0.4}
                          stroke="#F1E4FF"
                          stackId="a"
                          animationDuration={2000}
                          animationBegin={0}
                          animationEasing="ease-out"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </ChartContainer>
                  <div className="flex justify-between mt-4 px-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#D7DAFE" }}
                      ></div>
                      Devs
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: "#F1E4FF" }}
                      ></div>
                      Commits
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                      <div className="flex items-center gap-2 font-medium leading-none">
                        Trending up by 8.2% this month{" "}
                        <TrendingUp className="h-4 w-4" />
                      </div>
                      <div className="flex items-center gap-2 leading-none text-muted-foreground">
                        January - June 2024
                      </div>
                    </div>
                  </div>
                </CardFooter>
              </div>
            </div>
            <div className="col-span-1 border-b md:border-b-0 md:border-l flex flex-col h-full pt-28 md:pt-0">
              <div className="h-1/2 md:border-b flex items-center justify-center p-4 md:p-0">
                <div className="flex flex-col gap-3 w-full px-2">
                  {[
                    {
                      name: "Champions",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 0 1-.982-3.172M9.497 14.25a7.454 7.454 0 0 0 .981-3.172M5.25 4.236c-.982.143-1.954.317-2.916.52A6.003 6.003 0 0 0 7.73 9.728M5.25 4.236V4.5c0 2.108.966 3.99 2.48 5.228M5.25 4.236V2.721C7.456 2.41 9.71 2.25 12 2.25c2.291 0 4.545.16 6.75.47v1.516M7.73 9.728a6.726 6.726 0 0 0 2.748 1.35m8.272-6.842V4.5c0 2.108-.966 3.99-2.48 5.228m2.48-5.492a46.32 46.32 0 0 1 2.916.52 6.003 6.003 0 0 1-5.395 4.972m0 0a6.726 6.726 0 0 1-2.749 1.35m0 0a6.772 6.772 0 0 1-3.044 0"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "Demographics",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m20.893 13.393-1.135-1.135a2.252 2.252 0 0 1-.421-.585l-1.08-2.16a.414.414 0 0 0-.663-.107.827.827 0 0 1-.812.21l-1.273-.363a.89.89 0 0 0-.738 1.595l.587.39c.59.395.674 1.23.172 1.732l-.2.2c-.212.212-.33.498-.33.796v.41c0 .409-.11.809-.32 1.158l-1.315 2.191a2.11 2.11 0 0 1-1.81 1.025 1.055 1.055 0 0 1-1.055-1.055v-1.172c0-.92-.56-1.747-1.414-2.089l-.655-.261a2.25 2.25 0 0 1-1.383-2.46l.007-.042a2.25 2.25 0 0 1 .29-.787l.09-.15a2.25 2.25 0 0 1 2.37-1.048l1.178.236a1.125 1.125 0 0 0 1.302-.795l.208-.73a1.125 1.125 0 0 0-.578-1.315l-.665-.332-.091.091a2.25 2.25 0 0 1-1.591.659h-.18c-.249 0-.487.1-.662.274a.931.931 0 0 1-1.458-1.137l1.411-2.353a2.25 2.25 0 0 0 .286-.76m11.928 9.869A9 9 0 0 0 8.965 3.525m11.928 9.868A9 9 0 1 1 8.965 3.525"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "Developer Activity",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "ROI Calculations",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
                          />
                        </svg>
                      ),
                    },
                    {
                      name: "Developer Persona",
                      icon: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-[18px] h-[18px]"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
                          />
                        </svg>
                      ),
                    },
                  ].map((item) => (
                    <div
                      key={item.name}
                      className={`pl-4 md:pl-4 pr-4 py-2 text-sm rounded-lg transition-all flex items-center gap-3 ${
                        item.name === "Developer Activity"
                          ? "bg-white shadow-md text-gray-900"
                          : "text-gray-500 hover:text-gray-700"
                      }`}
                    >
                      <div className="px-2 md:px-0 lg:text-xs w-full">
                        <div className="flex flex-row items-center space-x-3 whitespace-nowrap">
                          <div> {item.icon}</div>
                          <div> {item.name}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="h-1/2 hidden md:block"
                style={{
                  background: `
                    repeating-linear-gradient(
                      30deg,
                      rgba(0, 0, 0, 0.1) 0,
                      rgba(0, 0, 0, 0.1) 1px,
                      transparent 1px,
                      transparent 5px
                    )
                  `,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeveloperReportingSection;
