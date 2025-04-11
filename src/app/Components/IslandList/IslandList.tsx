"use client";

import React, { useEffect, useState } from 'react';
import { BlockElement } from '../UI/BlockLevel/BlockElement';
import { Typography } from '../UI/Typography/Typography';
import { IIslandListProps, IPostProps } from './IslandList.d';

const networkErrorMessage = 'Network response was not ok';
const loadingMessage = <>Loading data&hellip;</>;
const fetchErrorMessage = <>Error fetching data:</>;
const listItemsClasses = 'bg-white shadow-md rounded-lg hover:shadow-lg transition-shadow duration-300';
const listAnchorClasses = 'text-blue-600 hover:text-blue-800 font-semibold w-full h-full block p-4'

export default function IslandList({ listNamesData, apiUrl, componentHeader }: IIslandListProps) {
  const [data, setData] = useState<IPostProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(networkErrorMessage);
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

  if (loading) return <Typography variant='p'>{loadingMessage}</Typography>;
  if (error) return <Typography variant='p'>{fetchErrorMessage} {error.message}</Typography>;

  const listItemData = data?.data.filter(item => listNamesData.includes(item.country)).map((item, index) => {
    return (
      <li key={index} className={listItemsClasses}>
        <a href={`/${item.iso3}`} className={listAnchorClasses}>{`${item.country} | ${item.iso3}`} 🏝️</a>
      </li>
    );
  });

  return (
    <>
      <Typography variant='h3' className='mb-4'>{componentHeader}</Typography>
      <BlockElement variant="ul" className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4'>{listItemData}</BlockElement>
    </>
  );
}
