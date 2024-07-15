import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent, waitFor } from '@testing-library/react';
import EditableTable from './EditableTable';
import axios from 'axios';
import '@testing-library/jest-dom/extend-expect';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('EditableTable', () => {
  beforeEach(() => {
    mockedAxios.get.mockResolvedValue({
      data: [
        { userId: 1, id: 1, title: 'Title 1', body: 'Body 1' },
        { userId: 2, id: 2, title: 'Title 2', body: 'Body 2' },
      ],
    });
  });

  it('renders correctly', async () => {
    const { getByText } = render(<EditableTable />);
    await waitFor(() => getByText('User ID'));
    expect(getByText('User ID')).toBeInTheDocument();
    expect(getByText('ID')).toBeInTheDocument();
    expect(getByText('Title')).toBeInTheDocument();
    expect(getByText('Body')).toBeInTheDocument();
  });

  it('displays data correctly', async () => {
    const { getByText } = render(<EditableTable />);
    await waitFor(() => getByText('Title 1'));
    expect(getByText('Title 1')).toBeInTheDocument();
    expect(getByText('Title 2')).toBeInTheDocument();
  });

  it('allows editing of cells', async () => {
    const { getByText, getByRole } = render(<EditableTable />);
    await waitFor(() => getByText('Title 1'));
    
    const titleCell = getByText('Title 1');
    fireEvent.doubleClick(titleCell);

    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'New Title' } });
    fireEvent.blur(input);

    await waitFor(() => getByText('New Title'));
    expect(getByText('New Title')).toBeInTheDocument();
  });
});
