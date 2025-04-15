import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import JobItem from './JobItem';

// Mock the CSS module
jest.mock('./JobItem.module.scss', () => ({
  jobItem: 'mock-jobItem',
  jobItem__header: 'mock-jobItem__header',
  'jobItem__header--title': 'mock-jobItem__header--title',
  'jobItem__header--company': 'mock-jobItem__header--company',
  jobItem__description: 'mock-jobItem__description',
  'jobItem__description--list': 'mock-jobItem__description--list',
  'jobItem__description--list-item': 'mock-jobItem__description--list-item',
  'jobItem__description--list-item-label': 'mock-jobItem__description--list-item-label',
  'jobItem__description--list-item-value': 'mock-jobItem__description--list-item-value',
  'jobItem__description--list-item-skills': 'mock-jobItem__description--list-item-skills',
  'jobItem__description--list-item-skill': 'mock-jobItem__description--list-item-skill',
  'jobItem__description--apply-button': 'mock-jobItem__description--apply-button'
}));

describe('JobItem Component', () => {
  const mockProps = {
    id: '123',
    title: 'Software Engineer',
    company: 'Tech Company',
    role: 'Frontend Developer',
    experience: 3,
    skills: ['JavaScript', 'React', 'CSS'],
    onViewDetails: jest.fn()
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders job item with correct information', () => {
    render(<JobItem {...mockProps} />);
    
    // Check if title and company are rendered
    expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    expect(screen.getByText('Tech Company')).toBeInTheDocument();
    
    // Check if role and experience are rendered
    expect(screen.getByText('Role:')).toBeInTheDocument();
    expect(screen.getByText('Frontend Developer')).toBeInTheDocument();
    expect(screen.getByText('Experience:')).toBeInTheDocument();
    expect(screen.getByText('3+ Years')).toBeInTheDocument();
    
    // Check if skills are rendered
    expect(screen.getByText('Skills:')).toBeInTheDocument();
    expect(screen.getByText('JavaScript')).toBeInTheDocument();
    expect(screen.getByText('React')).toBeInTheDocument();
    expect(screen.getByText('CSS')).toBeInTheDocument();
    
    // Check if the button is rendered
    expect(screen.getByText('View details')).toBeInTheDocument();
  });

  test('calls onViewDetails with correct id when button is clicked', () => {
    render(<JobItem {...mockProps} />);
    
    // Find the button and click it
    const viewDetailsButton = screen.getByText('View details');
    fireEvent.click(viewDetailsButton);
    
    // Check if onViewDetails was called with the correct id
    expect(mockProps.onViewDetails).toHaveBeenCalledTimes(1);
    expect(mockProps.onViewDetails).toHaveBeenCalledWith('123');
  });
});