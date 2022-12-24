import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { AssertionData } from '../../../components/Assertion/AssertionData';

describe('AssertionInfo component test', () => {
  const findAssertion = {
    id: 'clau64wf002610157si73b29x',
    nameRecipient: 'Bastián',
    lastNameRecipient: 'Osorio',
    emailRecipient: 'bastian.osorio@trebol-it.com',
    issuedOn: '2022-11-23',
  };

  const data = {
    findAssertion,
  };

  it('renders AssertionData component', () => {
    render(<AssertionData data={data.findAssertion} />);
  });

  it('data tests', () => {
    render(<AssertionData data={data.findAssertion} />);
    const header = screen.getByText(`ID: ${data.findAssertion.id}`);
    expect(header).toBeInTheDocument();
  });
});
