import React, { useState } from 'react';
import { Layout, Input, Select, Button, message, Table } from 'antd';
import Sidebar from '../../components/layout/sidebar/Sidebar';
import Nav from '../../components/layout/navbar/Navbar';
import { mockData } from '../../components/constants/mockData';
const { Content } = Layout;
const { Option } = Select;

const SupplierSearch = () => {
  const [companyName, setCompanyName] = useState('');
  const [supplierID, setSupplierID] = useState('');
  const [supplierType, setSupplierType] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [error, setError] = useState(false);
  const [filteredData, setFilteredData] = useState([]); 

  
  const supplierTypeOptions = ['Type 1', 'Type 2'];
  const countryCodeOptions = ['US', 'UK', 'IN'];

  
  const handleApplyFilter = () => {
    if (!companyName && !supplierID && !supplierType && !countryCode) {
      setError(true);
      message.error('Please enter at least one filter criteria');
      return;
    }

    setError(false);
    message.success('Filter applied successfully');

    const result = mockData.filter((item) => {
      return (
        (!companyName || item.companyName.toLowerCase().includes(companyName.toLowerCase())) &&
        (!supplierID || item.supplierID === supplierID) &&
        (!supplierType || item.supplierType === supplierType) &&
        (!countryCode || item.countryCode === countryCode)
      );
    });
console.log(result);
    setFilteredData(result); 
    console.log(filteredData);
  };

  const columns = [
    {
      title: 'Supplier Name',
      dataIndex: 'supplierName',
      key: 'supplierName',
    },
    {
      title: 'Supplier ID',
      dataIndex: 'supplierID',
      key: 'supplierID',
    },
    {
      title: 'Total Carbon Emission',
      dataIndex: 'totalCarbonEmission',
      key: 'totalCarbonEmission',
    },
    {
      title: 'Emission Avoided',
      dataIndex: 'emissionAvoided',
      key: 'emissionAvoided',
    },
    {
      title: 'Recycle Packaging (%)',
      dataIndex: 'recyclePackaging',
      key: 'recyclePackaging',
    },
    {
      title: 'Active Goals Count',
      dataIndex: 'activeGoalsCount',
      key: 'activeGoalsCount',
    },
  ];

  return (
    <Layout>
      <Nav />
      <Layout>
        <Sidebar />
        <Content className="bg-white p-6 h-full">
          <div className="bg-blue-100 rounded-lg border border-blue-800 shadow-md max-w-full mx-12 my-6 p-6 relative min-h-[450px]">
            <div className="border border-dashed border-gray-400 rounded-lg p-10 bg-white mx-3 my-12 min-h-[225px]">
              <div className="flex gap-5 mb-5">
                <div className="flex flex-col w-52">
                  <label className="text-blue-800 mb-2">Company Name</label>
                  <Input
                    className="border-gray-300 rounded"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-52">
                  <label className="text-blue-800 mb-2">Supplier ID</label>
                  <Input
                    className="border-gray-300 rounded"
                    value={supplierID}
                    onChange={(e) => setSupplierID(e.target.value)}
                  />
                </div>
                <div className="flex flex-col w-52">
                  <label className="text-blue-800 mb-2">Supplier Type</label>
                  <Select
                    className="border-gray-300 rounded"
                    value={supplierType}
                    onChange={(value) => setSupplierType(value)}
                  >
                    {supplierTypeOptions.map((type) => (
                      <Option key={type} value={type}>
                        {type}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className="flex gap-5 mb-5">
                <div className="flex flex-col w-52">
                  <label className="text-blue-800 mb-2">Country Code</label>
                  <Select
                    className="border-gray-300 rounded"
                    value={countryCode}
                    onChange={(value) => setCountryCode(value)}
                  >
                    {countryCodeOptions.map((code) => (
                      <Option key={code} value={code}>
                        {code}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <Button
                type="primary"
                className="bg-white border border-blue-800 text-black w-36 h-10 rounded-full absolute bottom-5 right-5"
                onClick={handleApplyFilter}
              >
                Apply Filter
              </Button>
            </div>
          </div>
          {/* Display the table if filtered data exists */}
          {filteredData.length > 0 && (
            <Table 
              dataSource={filteredData}
              columns={columns}
              pagination={false}
              className="mt-5"
            />
          )}
        </Content>
      </Layout>
    </Layout>
  );
};

export default SupplierSearch;


