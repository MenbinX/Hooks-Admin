import { Button, Alert } from 'antd';

const Guide = () => {
	return (
		<div className="card content-box">
			<Alert
				message="引导页对于一些第一次进入项目的人很有用，你可以简单介绍下项目的功能。本 Demo 是基于 driver.js."
				style={{ width: '100%' }}
				type="warning"
			/>
			<div style={{ margin: '15px auto' }}>
				<Button type="primary" id="antd-button">
					打开引导页 🤹‍♂️
				</Button>
			</div>
		</div>
	);
};

export default Guide;
