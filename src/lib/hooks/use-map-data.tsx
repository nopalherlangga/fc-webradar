"use client";

import useSWR from "swr";

import { type MapData } from "@/types/mapData";

export const useMapData = (mapName: string) => {
  const { data, error, isLoading } = useSWR<MapData, Error>(
    () =>
      mapName !== "" && mapName !== "<empty>" && `/maps/${mapName}/data.json`,
    {
      revalidateOnFocus: false,
    }
  );

  if (error) {
    console.error(`Error while fetching map data: (${mapName})`, error);
  }

  return {
    mapData: data ?? null,
    isLoading,
    isError: error ?? null,
  };
};
