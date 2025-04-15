import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobList from './JobList';

// Mock the JobItem component
jest.mock('../JobItem/JobItem.js', () => {
    return function MockJobItem({ title, company, role, skills, onViewDetails }) {
      return (
        <div data-testid="job-item" onClick={onViewDetails}>
          <div data-testid="job-title">{title}</div>
          <div data-testid="job-company">{company}</div>
          <div data-testid="job-role">{role}</div>
          <div data-testid="job-skills">{skills.join(', ')}</div>
        </div>
      );
    };
  });
  
  const mockJobs = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'TechCorp',
      role: 'Developer',
      experience: '2-3 years',
      skills: ['JavaScript', 'React', 'CSS']
    },
    {
      id: 2,
      title: 'Backend Engineer',
      company: 'DataSystems',
      role: 'Engineer',
      experience: '3-5 years',
      skills: ['Node.js', 'Python', 'GraphQL']
    },
    {
      id: 3,
      title: 'Mobile Developer',
      company: 'AppMakers',
      role: 'Developer',
      experience: '1-2 years',
      skills: ['React', 'Kotlin', 'Swift']
    }
  ];
  
  describe('JobList Component', () => {
    const mockViewDetails = jest.fn();
  
    beforeEach(() => {
      mockViewDetails.mockClear();
    });
  
    test('renders without jobs', () => {
      render(<JobList jobs={[]} onViewDetails={mockViewDetails} />);
      expect(screen.getByText('No jobs available')).toBeInTheDocument();
    });
  
    test('renders with jobs', () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // Check if all job items are rendered
      const jobItems = screen.getAllByTestId('job-item');
      expect(jobItems).toHaveLength(3);
      
      // Check if specific job content is rendered
      expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
      expect(screen.getByText('TechCorp')).toBeInTheDocument();
      expect(screen.getByText('Backend Engineer')).toBeInTheDocument();
    });
  
    test('filters jobs by language selection', async () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // Get all job items before filtering
      let jobItems = screen.getAllByTestId('job-item');
      expect(jobItems).toHaveLength(3);
      
      // Select a language filter
      const languageSelect = screen.getByLabelText('Language');
      fireEvent.change(languageSelect, { target: { value: 'React' } });
      
      // Wait for the filtering to take effect
      await waitFor(() => {
        jobItems = screen.getAllByTestId('job-item');
        expect(jobItems).toHaveLength(2);
      });
      
      // Check if only React jobs are shown
      expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
      expect(screen.getByText('Mobile Developer')).toBeInTheDocument();
      expect(screen.queryByText('Backend Engineer')).not.toBeInTheDocument();
    });
  
    test('filters jobs by search term', async () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // Get all job items before filtering
      let jobItems = screen.getAllByTestId('job-item');
      expect(jobItems).toHaveLength(3);
      
      // Enter a search term
      const searchInput = screen.getByLabelText('Search');
      fireEvent.input(searchInput, { target: { value: 'engineer' } });
      
      // Wait for the filtering to take effect
      await waitFor(() => {
        jobItems = screen.getAllByTestId('job-item');
        expect(jobItems).toHaveLength(1);
      });
      
      // Check if only the Engineer job is shown
      expect(screen.getByText('Backend Engineer')).toBeInTheDocument();
      expect(screen.queryByText('Frontend Developer')).not.toBeInTheDocument();
      expect(screen.queryByText('Mobile Developer')).not.toBeInTheDocument();
    });
  
    test('calls onViewDetails when job item is clicked', () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // Click on a job item
      const jobItems = screen.getAllByTestId('job-item');
      fireEvent.click(jobItems[0]);
      
      // Check if onViewDetails was called with the correct job ID
      expect(mockViewDetails).toHaveBeenCalledTimes(1);
      expect(mockViewDetails).toHaveBeenCalledWith(1);
    });
  
    test('combines language and search filters', async () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // Select a language filter
      const languageSelect = screen.getByLabelText('Language');
      fireEvent.change(languageSelect, { target: { value: 'React' } });
      
      // Enter a search term
      const searchInput = screen.getByLabelText('Search');
      fireEvent.input(searchInput, { target: { value: 'mobile' } });
      
      // Wait for the filtering to take effect
      await waitFor(() => {
        const jobItems = screen.getAllByTestId('job-item');
        expect(jobItems).toHaveLength(1);
      });
      
      // Check if only the Mobile Developer job is shown
      expect(screen.getByText('Mobile Developer')).toBeInTheDocument();
      expect(screen.queryByText('Frontend Developer')).not.toBeInTheDocument();
      expect(screen.queryByText('Backend Engineer')).not.toBeInTheDocument();
    });
  
    test('resets filters when selecting "All" language', async () => {
      render(<JobList jobs={mockJobs} onViewDetails={mockViewDetails} />);
      
      // First apply a filter
      const languageSelect = screen.getByLabelText('Language');
      fireEvent.change(languageSelect, { target: { value: 'React' } });
      
      // Wait for the filtering to take effect
      await waitFor(() => {
        const jobItems = screen.getAllByTestId('job-item');
        expect(jobItems).toHaveLength(2);
      });
      
      // Reset the filter to "All"
      fireEvent.change(languageSelect, { target: { value: 'all' } });
      
      // Check if all jobs are shown again
      await waitFor(() => {
        const jobItems = screen.getAllByTestId('job-item');
        expect(jobItems).toHaveLength(3);
      });
    });
  });