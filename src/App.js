import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom'
import React, { useState } from 'react';	
import { Layout, Menu } from 'antd';
import './App.css';
import Home from './pages/Home'
import Product from './pages/Product'
import Tableware from './pages/Tableware'
import Cookware from './pages/Cookware'
import HomeAccessories from './pages/HomeAccessories'
import Lighting from './pages/Lighting'
import Textile from './pages/Textile'
import Furniture from './pages/Furniture'
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

const { Sider } = Layout;

function App() {
  return (
		<BrowserRouter>
		<MyContent />
		</BrowserRouter>
  );
}

function MyContent(){
	const [is_collapsed, setCollapsed] = useState(false);
	const navigate = useNavigate();
	return(
	<Layout className='site-layout'>
		<Sider trigger={null} collapsible collapsed={is_collapsed}>
			<Menu
			theme='dark' 
			mode='inline' 
			onClick={({key}) => {
				navigate(key);
			}
			}
			items={[
				{key: '/tableware', label: 'Tableware',}, 
				{key: '/cookware', label: 'Cookware',}, 
				{key: '/home-accessories', label: 'HomeAccessories',},
				{key: '/lighting', label: 'Lighting',},
				{key: '/textile', label: 'Textile',},
				{key: '/furniture', label: 'Furniture',},
				]} 
	  />
			{React.createElement(is_collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
			{
				className: 'trigger', 
				onClick: () => setCollapsed(!is_collapsed),
			}
			)}
		</Sider>
		  <Routes>
			<Route exact path="/" element={<Home />} />
			<Route path="/tableware" element={<Tableware />} />
			<Route path="/cookware" element={<Cookware />} />
			<Route path="/product/:productId" element={<Product />} />
			<Route path="/home-accessories" element={<HomeAccessories />} />
			<Route path="/lighting" element={<Lighting />} />
			<Route path="/textile" element={<Textile />} />
			<Route path="/furniture" element={<Furniture />} />
		  </Routes>
	</Layout>
	);
}

export default App;
