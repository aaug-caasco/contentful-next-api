"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { IIslandListProps, IPostProps } from './IslandList.d';

export default function IslandList({ listNamesData, apiUrl }: IIslandListProps) {
  const [data, setData] = useState<IPostProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, [apiUrl]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error fetching data: {error.message}</p>;

  return (
    <>
      <ul>
        {data?.data
          .filter(item => listNamesData.includes(item.country))
          .map((item, index) => {

            return (
              <>

                <li key={index} className='border-b border-slate-300 py-3 mb-3 last:border-none'>
                  {`${item.country} | ${item.iso3}`} 🏝️
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
