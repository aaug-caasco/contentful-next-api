"use client";

import React, { Fragment } from 'react';
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
            console.log(listNamesData);
            return (
              <>
              <li key={index}>
                <p>{item.country}</p>
                <p>{item.iso3}</p>
                <p>{item.cities.join(', ')}</p>
              </li>
              <hr />
              </>
            );
          })}
      </ul>
    </>
  );
}
