// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter for routing
// import userEvent from '@testing-library/user-event';
// import SupplierSearch from '../SupplierSearch'; // Adjust the import path as necessary

// // Helper function to render the component with Router
// const renderComponent = () => {
//   return render(
//     <BrowserRouter>
//       <SupplierSearch />
//     </BrowserRouter>
//   );
// };

// describe('SupplierSearch Component', () => {
//   it('should render the Nav component', () => {
//     renderComponent();
//     expect(screen.getByText(/SUSTAINABILITY PROGRAM/i)).toBeInTheDocument();
//   });

//   it('should render the Sidebar component with correct links', () => {
//     renderComponent();
//     expect(screen.getByText(/Dashboard/i)).toBeInTheDocument();
//     expect(screen.getByText(/Supplier Search/i)).toBeInTheDocument();
//   });

//   it('should render input fields for Company Name and Supplier ID', () => {
//     renderComponent();
//     expect(screen.getByPlaceholderText('Company Name')).toBeInTheDocument();
//     expect(screen.getByPlaceholderText('Supplier ID')).toBeInTheDocument();
//   });

//   it('should render dropdowns for Supplier Type and Country Code', () => {
//     renderComponent();
//     expect(screen.getByPlaceholderText('Supplier Type')).toBeInTheDocument(); // Placeholder text in Select
//     expect(screen.getByPlaceholderText('Country code')).toBeInTheDocument(); // Placeholder text in Select
//   });

//   it('should render the Apply Filter button with correct style', () => {
//     renderComponent();
//     const applyButton = screen.getByRole('button', { name: /Apply Filter/i });
//     expect(applyButton).toBeInTheDocument();
//     expect(applyButton).toHaveStyle({
//       backgroundColor: '#004481',
//       borderColor: '#004481',
//       width: '150px',
//       height: '40px',
//       position: 'absolute',
//       bottom: '20px',
//       right: '20px',
//     });
//   });

//   it('should allow user to type in the input fields and select options', async () => {
//     renderComponent();
//     const companyNameInput = screen.getByPlaceholderText('Company Name');
//     const supplierIdInput = screen.getByPlaceholderText('Supplier ID');

//     // Typing in text inputs
//     await userEvent.type(companyNameInput, 'Acme Corporation');
//     await userEvent.type(supplierIdInput, '12345');

//     // Interacting with Supplier Type dropdown
//     const supplierTypeDropdown = screen.getByPlaceholderText('Supplier Type');
//     await userEvent.click(supplierTypeDropdown);
//     const type1Option = await screen.findByText('Type 1');
//     await userEvent.click(type1Option);

//     // Interacting with Country Code dropdown
//     const countryCodeDropdown = screen.getByPlaceholderText('Country code');
//     await userEvent.click(countryCodeDropdown);
//     const usOption = await screen.findByText('US');
//     await userEvent.click(usOption);

//     // Assert input values
//     expect(companyNameInput).toHaveValue('Acme Corporation');
//     expect(supplierIdInput).toHaveValue('12345');
//     expect(screen.getByText('Type 1')).toBeInTheDocument(); // Check if Type 1 is displayed
//     expect(screen.getByText('US')).toBeInTheDocument(); // Check if US is displayed
//   });

//   it('should render the outer box with correct styling', () => {
//     renderComponent();
//     const outerBox = screen.getByTestId('outer-box'); // Assuming you set a test ID
//     expect(outerBox).toHaveStyle({
//       backgroundColor: '#FFFFFF',
//       border: '1px solid #004481',
//       borderRadius: '10px',
//       padding: '30px',
//       maxWidth: '80%',
//       margin: '40px auto',
//     });
//   });

//   it('should render the inner box with dashed border', () => {
//     renderComponent();
//     const innerBox = screen.getByTestId('inner-box'); // Assuming you set a test ID
//     expect(innerBox).toHaveStyle({
//       border: '1px dashed #c4c4c4',
//       borderRadius: '10px',
//       padding: '20px',
//       backgroundColor: '#f8f9fa',
//     });
//   });
// });
