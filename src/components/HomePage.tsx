import { Button } from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import '@mantine/core/styles.css';
import '@mantine/dates/styles.css'; //if using mantine date picker features
import 'mantine-react-table/styles.css'; //make sure MRT styles were imported in your app root (once)
import { useMemo } from 'react';
import {
  MantineReactTable,
  useMantineReactTable,
  type MRT_ColumnDef,
} from 'mantine-react-table';

import { AdsData, Ad } from '../adsData';

export const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const formatDate = (date: Date) => {
    return date.toLocaleDateString();
  };

  const columns = useMemo<MRT_ColumnDef<Ad>[]>(
    () => [
      {
        accessorKey: 'marketer',
        header: 'marketer'
      },
      {
        accessorKey: 'content',
        header: 'content'
      },
      {
        accessorKey: 'date',
        header: 'date',
        Cell: ({ cell }) => formatDate(cell.getValue<Date>())
      },
      {
        accessorKey: 'impressions',
        header: 'impressions'
      },
      {
        accessorKey: 'lastUpdated',
        header: 'lastUpdated',
        Cell: ({ cell }) => formatDate(cell.getValue<Date>())
      },
    ],
    []
  );

  const table = useMantineReactTable({
    columns,
    data: AdsData
  });

  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <Button onClick={() => navigate('/registration')}>Go to Registration</Button>
      <h2>Table Data</h2>
      <MantineReactTable table={table} />
    </div>
  );
}; 