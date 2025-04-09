"use client";

import React from 'react';
import { useEffect, useState } from 'react';
import { IIslandListProps } from './IslandList.d';

export default function IslandList({ listNamesData, apiUrl }: IIslandListProps) {
  interface Post {
    data: {
      country: string;
      iso3: string;
      cities: string[];
    }[];
  }

  const [data, setData] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(apiUrl.countryApi)
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
  }, [apiUrl.countryApi]);

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
                <h3>{'Country: ' + item.country} 🏝️</h3>

                <li key={index} className='border-b border-slate-300 py-3 mb-3'>
                  <p>{'Iso3: ' + item.iso3}</p>
                  <p>{'Cities: ' + item.cities.join(', ')}</p>
                </li>
              </>
            );
          })}
      </ul>
    </>
  );
}
